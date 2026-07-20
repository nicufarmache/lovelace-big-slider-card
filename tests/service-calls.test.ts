import { describe, expect, it } from 'vitest';
import { createCard, createEntity, setCurrentValue } from './fixtures';

describe('Home Assistant values and service calls', () => {
  it.each([
    ['brightness', { brightness: 128 }, 100 * 128 / 255],
    ['red', { rgb_color: [51, 102, 153] }, 20],
    ['green', { rgb_color: [51, 102, 153] }, 40],
    ['blue', { rgb_color: [51, 102, 153] }, 60],
    ['hue', { hs_color: [210.5, 70.25] }, 210.5],
    ['saturation', { hs_color: [210.5, 70.25] }, 70.25],
    ['color_temp_kelvin', { color_temp_kelvin: 3123.5 }, 3123.5],
  ])('reads light %s precisely', (attribute, attributes, expected) => {
    const entity = createEntity('light.test', 'on', attributes);
    const { card } = createCard(entity, { attribute });
    expect(card._getLightValue(entity, attribute)).toBeCloseTo(expected);
  });

  it.each([
    ['number.test', '12.5', { min: 0, max: 20 }, 'value', 12.5],
    ['input_number.test', '3.25', { min: 0, max: 10 }, 'value', 3.25],
    ['fan.test', 'on', { percentage: 42.5 }, 'percentage', 42.5],
    ['cover.test', 'open', { current_position: 61.5 }, 'position', 61.5],
    ['cover.test', 'open', { current_tilt_position: 31.5 }, 'tilt_position', 31.5],
    ['valve.test', 'open', { current_position: 55.5 }, 'position', 55.5],
    ['media_player.test', 'playing', { volume_level: 0.425 }, 'volume', 42.5],
    ['climate.test', 'heat', { temperature: 21.5 }, 'temperature', 21.5],
    ['climate.test', 'heat', { humidity: 48.5 }, 'humidity', 48.5],
    ['humidifier.test', 'on', { humidity: 52.5 }, 'humidity', 52.5],
    ['water_heater.test', 'on', { temperature: 54.5 }, 'temperature', 54.5],
  ])('reads %s attribute %s', (entityId, state, attributes, attribute, expected) => {
    const entity = createEntity(entityId, state, attributes);
    const { card } = createCard(entity, { attribute });
    expect(card._getEntityValue(entity, attribute)).toBe(expected);
  });

  it('turns a light off at zero brightness and sends converted brightness with transition', () => {
    const entity = createEntity('light.test', 'on', { brightness: 128 });
    const { card, callService } = createCard(entity, { transition: 0.5 });
    setCurrentValue(card, 50);
    card._setValue();
    expect(callService).toHaveBeenLastCalledWith('light', 'turn_on', {
      entity_id: 'light.test', brightness: 128, transition: 0.5,
    });

    setCurrentValue(card, 0);
    card._setValue();
    expect(callService).toHaveBeenLastCalledWith('light', 'turn_off', {
      entity_id: 'light.test',
    });
  });

  it.each([
    ['red', 25, [64, 20, 30]],
    ['green', 25, [10, 64, 30]],
    ['blue', 25, [10, 20, 64]],
  ])('sets and clones the %s RGB channel', (attribute, value, expected) => {
    const original = [10, 20, 30];
    const entity = createEntity('light.test', 'on', { rgb_color: original });
    const { card, callService } = createCard(entity, { attribute });
    setCurrentValue(card, value);
    card._setValue();
    expect(callService).toHaveBeenCalledWith('light', 'turn_on', {
      entity_id: 'light.test', rgb_color: expected,
    });
    expect(original).toEqual([10, 20, 30]);
  });

  it.each([
    ['hue', 180.5, [180.5, 25]],
    ['saturation', 75.5, [90, 75.5]],
  ])('sets and clones light %s', (attribute, value, expected) => {
    const original = [90, 25];
    const entity = createEntity('light.test', 'on', { hs_color: original });
    const { card, callService } = createCard(entity, { attribute });
    setCurrentValue(card, value);
    card._setValue();
    expect(callService).toHaveBeenCalledWith('light', 'turn_on', {
      entity_id: 'light.test', hs_color: expected,
    });
    expect(original).toEqual([90, 25]);
  });

  it('rounds Kelvin when sending it', () => {
    const entity = createEntity('light.test', 'on', { color_temp_kelvin: 3000 });
    const { card, callService } = createCard(entity, { attribute: 'color_temp_kelvin' });
    setCurrentValue(card, 3123.7);
    card._setValue();
    expect(callService).toHaveBeenCalledWith('light', 'turn_on', {
      entity_id: 'light.test', color_temp_kelvin: 3124,
    });
  });

  it.each([
    ['number.test', 'value', 4.26, { step: 0.1 }, 'number', 'set_value', { value: 4.3 }],
    ['input_number.test', 'value', 4.26, { step: 0.25 }, 'input_number', 'set_value', { value: 4.25 }],
    ['fan.test', 'percentage', 42.6, {}, 'fan', 'set_percentage', { percentage: 43 }],
    ['cover.test', 'position', 42.6, {}, 'cover', 'set_cover_position', { position: 43 }],
    ['cover.test', 'tilt_position', 42.6, {}, 'cover', 'set_cover_tilt_position', { tilt_position: 43 }],
    ['valve.test', 'position', 42.6, {}, 'valve', 'set_valve_position', { position: 43 }],
    ['media_player.test', 'volume', 42.55, {}, 'media_player', 'volume_set', { volume_level: 0.4255 }],
    ['climate.test', 'temperature', 21.24, { target_temp_step: 0.5 }, 'climate', 'set_temperature', { temperature: 21 }],
    ['climate.test', 'temperature', 21.26, { target_temp_step: 0.5 }, 'climate', 'set_temperature', { temperature: 21.5 }],
    ['climate.test', 'humidity', 42.6, { target_temp_step: 0.5 }, 'climate', 'set_humidity', { humidity: 43 }],
    ['humidifier.test', 'humidity', 42.6, {}, 'humidifier', 'set_humidity', { humidity: 43 }],
    ['water_heater.test', 'temperature', 52.26, { target_temp_step: 0.5 }, 'water_heater', 'set_temperature', { temperature: 52.5 }],
  ])('sends %s through the correct service', (
    entityId, attribute, value, attributes, domain, service, expected,
  ) => {
    const entity = createEntity(entityId, 'on', attributes);
    const { card, callService } = createCard(entity, { attribute });
    setCurrentValue(card, value);
    card._setValue();
    expect(callService).toHaveBeenCalledWith(domain, service, {
      entity_id: entityId,
      ...expected,
    });
  });

  it('turns a fan off at zero and clamps media volume', () => {
    const fan = createEntity('fan.test');
    const fanFixture = createCard(fan);
    setCurrentValue(fanFixture.card, 0);
    fanFixture.card._setValue();
    expect(fanFixture.callService).toHaveBeenCalledWith('fan', 'turn_off', {
      entity_id: 'fan.test',
    });

    const media = createEntity('media_player.test', 'playing');
    const mediaFixture = createCard(media);
    setCurrentValue(mediaFixture.card, 150);
    mediaFixture.card._setValue();
    expect(mediaFixture.callService).toHaveBeenCalledWith('media_player', 'volume_set', {
      entity_id: 'media_player.test', volume_level: 1,
    });
  });
});
