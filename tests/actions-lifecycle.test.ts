import { afterEach, describe, expect, it, vi } from 'vitest';
import { createCard, createEntity, mount } from './fixtures';

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
});
