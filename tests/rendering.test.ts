import { describe, expect, it } from 'vitest';
import { createCard, createEntity, mount, setCurrentValue } from './fixtures';

describe('rendering and visual options', () => {
  it('draws the fill inside edge_margin while keeping the ends flush', async () => {
    const entity = createEntity('light.test', 'on', { brightness: 255 });
    const { card } = createCard(entity, { tap_to_set: true, edge_margin: 10 });
    await mount(card);

    const positionFor = (value: number): string => {
      setCurrentValue(card, value);
      card._updateSlider();
      return card.style.getPropertyValue('--bsc-percent');
    };

    // Empty stays empty and full stays full ...
    expect(positionFor(0)).toBe('0%');
    expect(positionFor(100)).toBe('100%');
    // ... everything between is inset to match where a tap for it lands
    expect(positionFor(1)).toBe('10.8%');
    expect(positionFor(50)).toBe('50%');
    expect(positionFor(99)).toBe('89.2%');
  });

  it('draws the fill straight through without edge_margin', async () => {
    const entity = createEntity('light.test', 'on', { brightness: 255 });
    const { card } = createCard(entity, { tap_to_set: true });
    await mount(card);

    setCurrentValue(card, 1);
    card._updateSlider();
    expect(card.style.getPropertyValue('--bsc-percent')).toBe('1%');
  });

  it('fills flush when the value only rounds to an extreme', async () => {
    // Plenty of lights top out at 254 of 255, i.e. 99.6% rather than 100%
    const entity = createEntity('light.test', 'on', { brightness: 254 });
    const { card } = createCard(entity, { edge_margin: 10 });
    await mount(card);

    const positionFor = (value: number): string => {
      setCurrentValue(card, value);
      card._updateSlider();
      return card.style.getPropertyValue('--bsc-percent');
    };

    expect(positionFor(100 * 254 / 255)).toBe('100%');
    expect(positionFor(0.4)).toBe('0%');
    // Still inset once it is clearly away from the end
    expect(positionFor(98)).toBe('88.4%');
  });

  it('renders content and every styling/boolean option', async () => {
    const entity = createEntity('light.test', 'on', {
      friendly_name: 'Kitchen', brightness: 128, rgb_color: [255, 0, 0],
    });
    const { card } = createCard(entity, {
      name: 'Custom name', icon: 'mdi:lamp', show_percentage: true,
      colorize: true, bold_text: true, vertical: true,
      show_icon_halo: true, constant_icon_color: true,
      use_alternative_slider_color: true, no_scale: true,
      no_transition_animation: true, height: 180, width: '90px',
      icon_size: 30, icon_box_size: 44, slider_opacity: 0.4,
      text_size: 16, color: '#123456', background_color: '#ffffff',
      text_color: '#111111', icon_color: '#222222', icon_off_color: '#333333',
      border_color: '#444444', border_radius: 8, border_style: 'dashed',
      border_width: 2,
    });
    await mount(card);

    const root = card.shadowRoot!;
    expect(root.querySelector('#name')?.textContent).toBe('Custom name');
    expect((root.querySelector('#percentage') as HTMLElement).innerText).toBe('50%');
    expect(root.querySelector('#percentage')?.classList.contains('hide')).toBe(false);
    expect(root.querySelector('#slider')?.classList.contains('colorize')).toBe(true);
    expect(root.querySelector('#label')?.classList.contains('bold')).toBe(true);
    expect(root.querySelector('#container')?.classList.contains('vertical')).toBe(true);
    expect(card.style.getPropertyValue('--bsc-height')).toBe('180px');
    expect(card.style.getPropertyValue('--bsc-width')).toBe('90px');
    expect(card.style.getPropertyValue('--bsc-icon-size')).toBe('30px');
    expect(card.style.getPropertyValue('--bsc-icon-box-size')).toBe('44px');
    expect(card.style.getPropertyValue('--bsc-slider-opacity')).toBe('0.4');
    expect(card.style.getPropertyValue('--bsc-text-size')).toBe('16px');
    expect(card.style.getPropertyValue('--bsc-slider-color')).toBe('#123456');
    expect(card.style.getPropertyValue('--bsc-background')).toBe('#ffffff');
    expect(card.style.getPropertyValue('--bsc-primary-text-color')).toBe('#111111');
    expect(card.style.getPropertyValue('--bsc-border-color')).toBe('#444444');
    expect(card.style.getPropertyValue('--bsc-border-radius')).toBe('8px');
    expect(card.style.getPropertyValue('--bsc-border-style')).toBe('dashed');
    expect(card.style.getPropertyValue('--bsc-border-width')).toBe('2px');
    expect(card.style.getPropertyValue('--bsc-default-slider-color')).toContain('paper-slider');
    expect(card.style.getPropertyValue('--bsc-icon-brightness')).toBe('100%');
    expect(card.style.getPropertyValue('--bsc-icon-background')).toContain('color-mix');
    expect(card.style.getPropertyValue('--bsc-icon-color')).toBe('#222222');
    expect(card.style.getPropertyValue('--bsc-pressed-transform')).toBe('none');
    expect(card.style.getPropertyValue('--bsc-slider-transition')).toBe('none');
  });

  it('uses defaults, entity name, hidden percentage and removable styles', async () => {
    const entity = createEntity('fan.office', 'on', { friendly_name: 'Office fan', percentage: 35 });
    const { card } = createCard(entity);
    await mount(card);
    expect(card.shadowRoot?.querySelector('#name')?.textContent).toBe('Office fan');
    expect(card.shadowRoot?.querySelector('#percentage')?.classList.contains('hide')).toBe(true);
    expect(card.shadowRoot?.querySelector('#container')?.classList.contains('vertical')).toBe(false);
    expect(card.dataset.domain).toBe('fan');
    expect(card.dataset.state).toBe('on');
  });

  it.each(['off', 'unavailable', 'unknown'])('renders the %s state', async state => {
    const entity = createEntity('light.test', state, { brightness: 128 });
    const { card } = createCard(entity, {
      show_percentage: true, show_icon_halo: true, icon_off_color: '#999999',
    });
    await mount(card);
    expect(card.shadowRoot?.querySelector('#icon')?.getAttribute('data-state')).toBe(state);
    expect(card.style.getPropertyValue('--bsc-icon-color')).toBe('#999999');
    if (state === 'unavailable' || state === 'unknown') {
      expect(card.style.getPropertyValue('--bsc-opacity')).toBe('0.5');
      expect(card._getRange()).toEqual({ min: 0, max: 0 });
    } else {
      expect((card.shadowRoot?.querySelector('#percentage') as HTMLElement).innerText).toBe('off');
    }
  });

  it('renders climate temperatures with one decimal and their unit', async () => {
    const entity = createEntity('climate.test', 'heat', {
      friendly_name: 'Heating', temperature: 21.6, min_temp: 7, max_temp: 35,
      unit_of_measurement: '°C',
    });
    const { card } = createCard(entity, { show_percentage: true });
    await mount(card);
    expect((card.shadowRoot?.querySelector('#percentage') as HTMLElement).innerText).toBe('21.6°C');

    const wholeDegreeEntity = createEntity('climate.whole_degree', 'heat', {
      temperature: 21, min_temp: 7, max_temp: 35, unit_of_measurement: '°C',
    });
    const { card: wholeDegreeCard } = createCard(wholeDegreeEntity, { show_percentage: true });
    await mount(wholeDegreeCard);
    expect((wholeDegreeCard.shadowRoot?.querySelector('#percentage') as HTMLElement).innerText).toBe('21.0°C');

    const { card: percentageRangeCard } = createCard(entity, {
      show_percentage: true, min: 0, max: 100,
    });
    await mount(percentageRangeCard);
    expect((percentageRangeCard.shadowRoot?.querySelector('#percentage') as HTMLElement).innerText).toBe('21.6°C');
  });

  it('renders an error card for a missing configured entity', async () => {
    const entity = createEntity('light.existing');
    const { card, hass } = createCard(entity);
    card.setConfig({ entity: 'light.missing' });
    card.hass = hass;
    await mount(card);
    expect(card.shadowRoot?.querySelector('hui-error-card')).not.toBeNull();
  });
});
