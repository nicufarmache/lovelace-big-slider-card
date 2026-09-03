import { afterEach, describe, expect, it, vi } from 'vitest';
import { createCard, createEntity, getCurrentValue, mount, setCurrentValue } from './fixtures';

describe('actions and lifecycle', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('dispatches tap and hold actions with the card config', () => {
    const entity = createEntity('light.test');
    const { card } = createCard(entity);
    const actions: Array<{ action: string; config: unknown }> = [];
    card.addEventListener('hass-action', event => {
      actions.push((event as CustomEvent).detail);
    });

    card._handleTap();
    card._setHold();
    expect(actions.map(item => item.action)).toEqual(['tap', 'hold']);
    expect(actions[0].config).toMatchObject({ entity: 'light.test' });
  });

  it('sets and removes press attributes after the configured delay', () => {
    vi.useFakeTimers();
    const entity = createEntity('light.test');
    const { card } = createCard(entity, { min_slide_time: 100 });
    card._press();
    expect(card.hasAttribute('half-pressed')).toBe(true);
    expect(card.hasAttribute('pressed')).toBe(false);
    vi.advanceTimersByTime(100);
    expect(card.hasAttribute('pressed')).toBe(true);
    card._unpress();
    expect(card.hasAttribute('half-pressed')).toBe(false);
    expect(card.hasAttribute('pressed')).toBe(false);
  });

  it('schedules immediate updates only when enabled', () => {
    vi.useFakeTimers();
    const entity = createEntity('light.test');
    const enabled = createCard(entity, { immediate_update: true }).card;
    const setValue = vi.spyOn(enabled, '_setValue');
    Reflect.set(enabled, 'trackingStartTime', Date.now() - 1000);
    enabled._scheduleImmediateUpdate();
    enabled._scheduleImmediateUpdate();
    vi.advanceTimersByTime(300);
    expect(setValue).toHaveBeenCalledTimes(1);

    const disabled = createCard(entity, { immediate_update: false }).card;
    const disabledSetValue = vi.spyOn(disabled, '_setValue');
    disabled._scheduleImmediateUpdate();
    vi.advanceTimersByTime(300);
    expect(disabledSetValue).not.toHaveBeenCalled();
  });

  it('clears hold, press, update and immediate timers when disconnected', async () => {
    vi.useFakeTimers();
    const entity = createEntity('light.test');
    const { card } = createCard(entity, {
      immediate_update: true, hold_time: 600, min_slide_time: 100, settle_time: 500,
    });
    await mount(card);

    card._press();
    card._startUpdates(true);
    card._scheduleImmediateUpdate();
    Reflect.set(card, 'holdTimer', window.setTimeout(() => undefined, 600));
    expect(vi.getTimerCount()).toBeGreaterThanOrEqual(4);

    card.remove();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('blocks the context menu', () => {
    const card = createCard(createEntity('light.test')).card;
    const event = new Event('contextmenu', { cancelable: true });
    const stopPropagation = vi.spyOn(event, 'stopPropagation');
    expect(card._handleContextMenu(event)).toBe(false);
    expect(event.defaultPrevented).toBe(true);
    expect(stopPropagation).toHaveBeenCalled();
  });

  it('does not mutate value or trigger slide on sub-threshold tap micro-movement', () => {
    const entity = createEntity('light.test', 'on', { brightness: 128 });
    const { card } = createCard(entity);
    const setValueSpy = vi.spyOn(card, '_setValue');
    const handleTapSpy = vi.spyOn(card, '_handleTap');

    const downEvt = Object.assign(new Event('pointerdown'), { pageX: 50, pageY: 50 }) as PointerEvent;
    card._handlePointer(downEvt, { relativeX: 0, relativeY: 0 } as any);
    expect(Reflect.get(card, 'isTap')).toBe(true);
    expect(Reflect.get(card, 'hasValidSlide')).toBe(false);

    const initialValue = getCurrentValue(card);

    // Small wobble under TAP_THRESHOLD (5px)
    const moveEvt = Object.assign(new Event('pointermove'), { pageX: 52, pageY: 51 }) as PointerEvent;
    card._handlePointer(moveEvt, { relativeX: 2, relativeY: 1 } as any);
    expect(Reflect.get(card, 'isTap')).toBe(true);
    expect(Reflect.get(card, 'hasValidSlide')).toBe(false);
    expect(getCurrentValue(card)).toBe(initialValue);

    const upEvt = Object.assign(new Event('pointerup'), { pageX: 52, pageY: 51 }) as PointerEvent;
    card._handlePointer(upEvt, { relativeX: 2, relativeY: 1 } as any);
    expect(handleTapSpy).toHaveBeenCalledTimes(1);
    expect(setValueSpy).not.toHaveBeenCalled();
  });

  it('adjusts values and triggers actions with keyboard navigation', () => {
    const entity = createEntity('light.test', 'on', { brightness: 128 });
    const { card } = createCard(entity);
    const setValueSpy = vi.spyOn(card, '_setValue');
    const handleTapSpy = vi.spyOn(card, '_handleTap');
    const stopUpdatesSpy = vi.spyOn(card, '_stopUpdates');

    setCurrentValue(card, 50);

    // ArrowRight increments and stops updates for settling
    const rightEvt = new KeyboardEvent('keydown', { key: 'ArrowRight', cancelable: true });
    card._handleKeyDown(rightEvt);
    expect(getCurrentValue(card)).toBe(51);
    expect(setValueSpy).toHaveBeenCalledTimes(1);
    expect(stopUpdatesSpy).toHaveBeenCalledTimes(1);
    expect(Reflect.get(card, '_shouldUpdate')).toBe(false);
    expect(rightEvt.defaultPrevented).toBe(true);

    // ArrowLeft decrements
    const leftEvt = new KeyboardEvent('keydown', { key: 'ArrowLeft', cancelable: true });
    card._handleKeyDown(leftEvt);
    expect(getCurrentValue(card)).toBe(50);
    expect(setValueSpy).toHaveBeenCalledTimes(2);

    // Snaps floating point values cleanly to integer steps when step attribute is missing
    setCurrentValue(card, 50.196);
    const snapEvt = new KeyboardEvent('keydown', { key: 'ArrowRight', cancelable: true });
    card._handleKeyDown(snapEvt);
    expect(getCurrentValue(card)).toBe(51);

    // Home jumps to min
    const homeEvt = new KeyboardEvent('keydown', { key: 'Home', cancelable: true });
    card._handleKeyDown(homeEvt);
    expect(getCurrentValue(card)).toBe(0);

    // End jumps to max
    const endEvt = new KeyboardEvent('keydown', { key: 'End', cancelable: true });
    card._handleKeyDown(endEvt);
    expect(getCurrentValue(card)).toBe(100);

    // Enter triggers tap
    const enterEvt = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true });
    card._handleKeyDown(enterEvt);
    expect(handleTapSpy).toHaveBeenCalledTimes(1);
    expect(enterEvt.defaultPrevented).toBe(true);

    // Space triggers tap
    const spaceEvt = new KeyboardEvent('keydown', { key: ' ', cancelable: true });
    card._handleKeyDown(spaceEvt);
    expect(handleTapSpy).toHaveBeenCalledTimes(2);
    expect(spaceEvt.defaultPrevented).toBe(true);
  });

  it('allows keyboard tap immediately after a completed hold gesture', () => {
    const entity = createEntity('light.test');
    const { card } = createCard(entity);
    const handleTapSpy = vi.spyOn(card, '_handleTap');

    card._setHold();
    expect(Reflect.get(card, 'isHold')).toBe(true);

    const upEvt = Object.assign(new Event('pointerup'), { pageX: 0, pageY: 0 }) as PointerEvent;
    card._handlePointer(upEvt, { relativeX: 0, relativeY: 0 } as any);
    expect(Reflect.get(card, 'isHold')).toBe(false);

    const enterEvt = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true });
    card._handleKeyDown(enterEvt);
    expect(handleTapSpy).toHaveBeenCalledTimes(1);
  });

  it('resets timer IDs to 0 when cleared or executed', () => {
    vi.useFakeTimers();
    const entity = createEntity('light.test');
    const { card } = createCard(entity, { min_slide_time: 50 });

    card._press();
    expect(Reflect.get(card, 'pressTimeout')).not.toBe(0);
    vi.advanceTimersByTime(50);
    expect(Reflect.get(card, 'pressTimeout')).toBe(0);

    card._stopUpdates();
    expect(Reflect.get(card, 'updateTimeout')).toBe(0);
  });
});
