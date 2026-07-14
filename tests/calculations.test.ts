import { describe, expect, it } from 'vitest';
import { BigSliderCard } from '../src/big-slider-card';
import { DEFAULT_CONFIG, SUPPORTED_DOMAINS } from '../src/const';
import { createCard, createEntity, getCurrentValue, setCurrentValue } from './fixtures';

describe('configuration and calculations', () => {
  it.each([
    ['light', 'brightness'],
    ['number', 'value'],
    ['input_number', 'value'],
    ['fan', 'percentage'],
    ['cover', 'position'],
    ['valve', 'position'],
    ['media_player', 'volume'],
    ['climate', 'temperature'],
    ['water_heater', 'temperature'],
    ['humidifier', 'humidity'],
  ])('uses the default attribute for %s', (domain, attribute) => {
    const card = new BigSliderCard();
    card.setConfig({ entity: `${domain}.test` });
    expect(card._getDefaultAttribute(domain)).toBe(attribute);
  });

  it('rejects unsupported domains', () => {
    const card = new BigSliderCard();
    expect(() => card.setConfig({ entity: 'sensor.test' })).toThrow();
  });

  it('exposes every supported domain and editor option', () => {
    expect(SUPPORTED_DOMAINS).toEqual([
      'light', 'number', 'input_number', 'fan', 'cover', 'climate',
      'humidifier', 'water_heater', 'valve', 'media_player',
    ]);

    const form = BigSliderCard.getConfigForm();
    const names: string[] = [];
    const visit = (items: unknown[]): void => {
      for (const item of items as Array<{ name?: string; schema?: unknown[] }>) {
        if (item.name) names.push(item.name);
        if (item.schema) visit(item.schema);
      }
    };
    visit(form.schema);
    expect(names).toEqual(expect.arrayContaining([
      'entity', 'name', 'icon', 'display', 'attribute', 'colorize',
      'show_percentage', 'show_icon_halo', 'use_alternative_slider_color',
      'vertical', 'styling', 'height', 'width', 'icon_size', 'icon_box_size',
      'slider_opacity', 'text_size', 'color', 'background_color', 'text_color',
      'icon_color', 'icon_off_color', 'constant_icon_color', 'bold_text',
      'no_scale', 'no_transition_animation', 'border_color', 'border_radius',
      'border_style', 'border_width', 'behavior', 'transition', 'min', 'max',
      'min_slide_time', 'hold_time', 'settle_time', 'immediate_update',
      'tap_action', 'hold_action',
    ]));
  });

  it('calculates horizontal and range drag values without rounding', () => {
    const defaultCard = new BigSliderCard();
    expect(defaultCard._getDragValueDelta(25, 100, { min: 0, max: 100 })).toBe(25);

    const entity = createEntity('number.test', '12.5', { min: 10, max: 20 });
    const { card } = createCard(entity);
    card._getValue();
    expect(card._getDragValueDelta(25, 100, { min: 10, max: 20 })).toBe(2.5);
    expect(card._getDragValueDelta(25, 0, { min: 10, max: 20 })).toBe(0);
  });

  it('clamps values and calculates range percentages', () => {
    const entity = createEntity('number.test', '15', { min: 10, max: 20 });
    const { card } = createCard(entity);
    card._getValue();
    expect(getCurrentValue(card)).toBe(15);
    expect(card._getSliderPercentage()).toBe(50);

    setCurrentValue(card, 30);
    card._checklimits();
    expect(getCurrentValue(card)).toBe(20);
    setCurrentValue(card, 5);
    card._checklimits();
    expect(getCurrentValue(card)).toBe(10);
  });

  it('formats display values and snaps service values to steps', () => {
    const card = new BigSliderCard();
    expect(card._formatValue(42.49)).toBe('42');
    expect(card._formatValue(42.5)).toBe('43');
    expect(card._formatValue(Number.NaN)).toBe('0');
    expect(card._snapValueToStep(21.37, 0.5)).toBe(21.5);
    expect(card._snapValueToStep(1.234, 0.01)).toBe(1.23);
    expect(card._snapValueToStep(1.234, undefined)).toBe(1.234);
    expect(card._getDecimalPlaces(0.125)).toBe(3);
  });

  it('parses dimensions and reports grid sizing for both orientations', () => {
    const card = new BigSliderCard();
    card.setConfig({ height: '120px' });
    expect(card._getNumericCssLength('12.5px')).toBe(12.5);
    expect(card._getNumericCssLength('2rem')).toBeUndefined();
    expect(card.getCardSize()).toBe(3);
    expect(card.getGridOptions()).toMatchObject({ columns: 6, rows: 1 });

    card.setConfig({ vertical: true, height: 180 });
    expect(card.getCardSize()).toBe(4);
    expect(card.getGridOptions()).toMatchObject({ columns: 2, rows: 4 });
  });

  it('uses entity and custom ranges, including Kelvin and humidity', () => {
    const number = createEntity('number.test', '3', { min: -5, max: 5 });
    const { card } = createCard(number);
    expect(card._getEntityRange(number)).toEqual({ min: -5, max: 5 });

    card.setConfig({ entity: number.entity_id, min: -2, max: 2 });
    card.hass = createCard(number).hass;
    card._getValue();
    expect(card._getRange()).toEqual({ min: -2, max: 2 });

    const climate = createEntity('climate.test', 'heat', { min_temp: 7, max_temp: 35 });
    const climateCard = createCard(climate).card;
    expect(climateCard._getEntityRange(climate)).toEqual({ min: 7, max: 35 });
    climateCard.setConfig({ entity: climate.entity_id, attribute: 'humidity' });
    expect(climateCard._getEntityRange(climate)).toEqual({ min: 0, max: 100 });

    const light = createEntity('light.test', 'on', { color_temp_kelvin: 3000 });
    const kelvinCard = createCard(light, { attribute: 'color_temp_kelvin' }).card;
    expect(kelvinCard._getRange()).toEqual({ min: 2200, max: 6500 });
    expect(DEFAULT_CONFIG.min).toBe(0);
  });
});
