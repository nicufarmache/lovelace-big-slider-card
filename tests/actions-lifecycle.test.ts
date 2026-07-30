import { afterEach, describe, expect, it, vi } from 'vitest';
import type { SlideGestureEvent } from '@nicufarmache/slide-gesture';
import type { BigSliderCard } from '../src/big-slider-card';
import { createCard, createEntity, getCurrentValue, mount } from './fixtures';

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

  const stubContainerRect = (card: BigSliderCard, rect: Partial<DOMRect>): void => {
    const container = card.shadowRoot!.getElementById('container')!;
    container.getBoundingClientRect = () => ({
      left: 0, top: 0, right: 200, bottom: 50, width: 200, height: 50, x: 0, y: 0,
      toJSON: () => ({}), ...rect,
    }) as DOMRect;
  };

  const tap = (card: BigSliderCard, clientX: number, clientY: number): void => {
    const extra = { relativeX: 0, relativeY: 0 } as SlideGestureEvent;
    card._handlePointer(new PointerEvent('pointerdown', { clientX, clientY }), extra);
    card._handlePointer(new PointerEvent('pointerup', { clientX, clientY }), extra);
  };

  it('sets the value from the tap position when tap_to_set is enabled', async () => {
    const entity = createEntity('light.test', 'on', { brightness: 255 });
    const { card, callService } = createCard(entity, { tap_to_set: true });
    await mount(card);
    stubContainerRect(card, {});

    tap(card, 150, 25);

    expect(getCurrentValue(card)).toBeCloseTo(75);
    expect(callService).toHaveBeenCalledWith('light', 'turn_on', expect.objectContaining({
      entity_id: 'light.test', brightness: Math.round(75 / 100 * 255),
    }));
  });

  it('measures the tap position from the bottom when vertical', async () => {
    const entity = createEntity('light.test', 'on', { brightness: 255 });
    const { card } = createCard(entity, { tap_to_set: true, vertical: true });
    await mount(card);
    stubContainerRect(card, {});

    tap(card, 30, 40);

    // 10px above the bottom of a 50px tall slider
    expect(getCurrentValue(card)).toBeCloseTo(20);
  });

  it('maps the tap position into the entity range', async () => {
    const entity = createEntity('number.test', '5', { min: 10, max: 20, step: 1 });
    const { card } = createCard(entity, { tap_to_set: true });
    await mount(card);
    stubContainerRect(card, {});

    tap(card, 50, 25);

    expect(getCurrentValue(card)).toBeCloseTo(12.5);
  });

  it('clamps taps outside the slider bounds', async () => {
    const entity = createEntity('light.test', 'on', { brightness: 255 });
    const { card } = createCard(entity, { tap_to_set: true });
    await mount(card);
    stubContainerRect(card, {});

    tap(card, -40, 25);
    expect(getCurrentValue(card)).toBeCloseTo(0);

    tap(card, 320, 25);
    expect(getCurrentValue(card)).toBeCloseTo(100);
  });

  it('keeps dispatching the tap action when tap_to_set is disabled', async () => {
    const entity = createEntity('light.test', 'on', { brightness: 255 });
    const { card, callService } = createCard(entity);
    await mount(card);
    stubContainerRect(card, {});
    const actions: string[] = [];
    card.addEventListener('hass-action', event => {
      actions.push((event as CustomEvent).detail.action);
    });

    tap(card, 150, 25);

    expect(actions).toEqual(['tap']);
    expect(callService).not.toHaveBeenCalled();
  });

  it('blocks the context menu', () => {
    const card = createCard(createEntity('light.test')).card;
    const event = new Event('contextmenu', { cancelable: true });
    const stopPropagation = vi.spyOn(event, 'stopPropagation');
    expect(card._handleContextMenu(event)).toBe(false);
    expect(event.defaultPrevented).toBe(true);
    expect(stopPropagation).toHaveBeenCalled();
  });
});
