import '../src/main';
import type { BigSliderCard } from '../src/big-slider-card';
import type { HomeAssistant } from '../src/ha-types';

const icons: Record<string, string> = {
  light: 'M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z',
  fan: 'M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z',
  media_player: 'M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z',
  input_number: 'M2,11H9.17C9.58,9.83 10.69,9 12,9C13.31,9 14.42,9.83 14.83,11H22V13H14.83C14.42,14.17 13.31,15 12,15C10.69,15 9.58,14.17 9.17,13H2V11Z',
  cover: 'M3,2H21A1,1 0 0,1 22,3V5A1,1 0 0,1 21,6H20V13A1,1 0 0,1 19,14H13V16.17C14.17,16.58 15,17.69 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.69 9.83,16.58 11,16.17V14H5A1,1 0 0,1 4,13V6H3A1,1 0 0,1 2,5V3A1,1 0 0,1 3,2M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z',
  climate: 'M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z',
};

class PreviewCard extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host {
          background: var(--ha-card-background, var(--card-background-color, white));
          box-shadow: var(--ha-card-box-shadow, none);
          box-sizing: border-box;
          border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg));
          border-width: var(--ha-card-border-width, 1px);
          border-style: solid;
          border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
          color: var(--primary-text-color);
          display: block;
          position: relative;
        }
      </style>
      <slot></slot>
    `;
  }
}

class PreviewStateIcon extends HTMLElement {
  private _state?: { entity_id?: string };
  private _icon?: string;

  set state(value: { entity_id?: string } | undefined) {
    this._state = value;
    this.renderIcon();
  }

  set stateObj(value: { entity_id?: string } | undefined) {
    this._state = value;
    this.renderIcon();
  }

  set icon(value: string | undefined) {
    this._icon = value;
    this.renderIcon();
  }

  connectedCallback() {
    this.renderIcon();
  }

  private renderIcon() {
    if (!this.isConnected) return;
    const explicitDomain = this._icon?.replace('mdi:', '');
    const domain = this._state?.entity_id?.split('.')[0] ?? explicitDomain ?? 'light';
    const path = icons[domain] ?? icons.light;
    const root = this.shadowRoot ?? this.attachShadow({ mode: 'open' });
    root.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" style="display:block;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);fill:currentColor"><path d="${path}"></path></svg>`;
  }
}

if (!customElements.get('ha-card')) customElements.define('ha-card', PreviewCard);
if (!customElements.get('ha-state-icon')) customElements.define('ha-state-icon', PreviewStateIcon);

const params = new URLSearchParams(location.search);
const dark = params.get('theme') !== 'light';
const defaultAppearance = params.get('variant') === 'default';
document.documentElement.dataset.theme = dark ? 'dark' : 'light';

type Entity = {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
  context: { id: string; parent_id: null; user_id: null };
};

const entity = (entity_id: string, state: string, attributes: Record<string, unknown>): Entity => ({
  entity_id,
  state,
  attributes,
  last_changed: '',
  last_updated: '',
  context: { id: '', parent_id: null, user_id: null },
});

const entities = [
  entity('light.floor_lamp', 'on', { friendly_name: 'Floor lamp', brightness: 168, rgb_color: [255, 164, 92] }),
  entity('fan.air_purifier', 'on', { friendly_name: 'Air purifier', percentage: 42 }),
  entity('media_player.speaker', 'playing', { friendly_name: 'Speaker', volume_level: 0.68 }),
  entity('input_number.target_level', '35', { friendly_name: 'Target level', min: 0, max: 100, step: 1, unit_of_measurement: '%' }),
  entity('cover.blinds', 'open', { friendly_name: 'Blinds', current_position: 64 }),
  entity('climate.thermostat', 'heat', { friendly_name: 'Climate', temperature: 21.5, min_temp: 16, max_temp: 30, unit_of_measurement: '°C' }),
];

const states = Object.fromEntries(entities.map((item) => [item.entity_id, item]));
const hass = {
  states,
  callService: async () => ({}),
  formatEntityState: (item: Entity) => item.state,
} as unknown as HomeAssistant;

const configure = (id: string, config: Record<string, unknown>): BigSliderCard => {
  const card = document.getElementById(id) as BigSliderCard;
  card.setConfig(defaultAppearance
    ? config
    : {
        show_percentage: true,
        show_icon_halo: true,
        constant_icon_color: true,
        slider_opacity: 0.42,
        ...config,
      });
  card.hass = hass;
  return card;
};

const cards = {
  lamp: configure('lamp', {
    entity: 'light.floor_lamp',
    color: '#ff9f5a',
    ...(!defaultAppearance && { colorize: true, icon_color: '#ff9f5a' }),
  }),
  fan: configure('fan', {
    entity: 'fan.air_purifier',
    color: '#51c6d4',
    ...(!defaultAppearance && { icon_color: '#51c6d4' }),
  }),
  speaker: configure('speaker', {
    entity: 'media_player.speaker',
    color: '#9d8cff',
    ...(!defaultAppearance && { icon_color: '#9d8cff' }),
  }),
  target: configure('target', {
    entity: 'input_number.target_level',
    color: '#4caf50',
    ...(!defaultAppearance && { icon_color: '#4caf50' }),
  }),
  blinds: configure('blinds', {
    entity: 'cover.blinds',
    color: '#62a7ff',
    vertical: true,
    ...(!defaultAppearance && { icon_color: '#62a7ff' }),
  }),
  climate: configure('climate', {
    entity: 'climate.thermostat',
    color: '#ff8b63',
    vertical: true,
    ...(!defaultAppearance && { icon_color: '#ff8b63' }),
  }),
};

const setCardValue = (card: BigSliderCard, percentage: number, label: string, pressed = false) => {
  card.style.setProperty('--bsc-percent', `${percentage}%`);
  card.toggleAttribute('half-pressed', pressed);
  const value = card.shadowRoot?.getElementById('percentage');
  if (value) value.textContent = label;
};

const ease = (value: number) => 0.5 - Math.cos(Math.PI * value) / 2;
const between = (value: number, start: number, end: number) => Math.max(0, Math.min(1, (value - start) / (end - start)));

window.setPreviewFrame = (progress: number) => {
  const lampMove = ease(between(progress, 0.06, 0.26)) - ease(between(progress, 0.72, 0.9));
  const blindsMove = ease(between(progress, 0.34, 0.56)) - ease(between(progress, 0.62, 0.84));
  const lampValue = Math.round(66 + 22 * lampMove);
  const blindsValue = Math.round(64 - 31 * blindsMove);

  setCardValue(cards.lamp, lampValue, `${lampValue}%`, (progress > 0.06 && progress < 0.26) || (progress > 0.72 && progress < 0.9));
  setCardValue(cards.fan, 42, '42%');
  setCardValue(cards.speaker, 68, '68%');
  setCardValue(cards.target, 35, '35%');
  setCardValue(cards.blinds, blindsValue, `${blindsValue}%`, (progress > 0.34 && progress < 0.56) || (progress > 0.62 && progress < 0.84));
  setCardValue(cards.climate, 39, '21.5°C');
};

const requestedFrame = Number(params.get('frame') ?? 0);
requestAnimationFrame(() => requestAnimationFrame(() => window.setPreviewFrame(requestedFrame)));

declare global {
  interface Window {
    setPreviewFrame: (progress: number) => void;
  }
}

const style = document.createElement('style');
style.textContent = `
  * { box-sizing: border-box; }
  html, body { margin: 0; min-height: 100%; }
  html {
    font-size: 14px;
    --ha-border-radius-lg: 12px;
    --ha-border-radius-pill: 9999px;
    --ha-font-family-body: Roboto, Noto, sans-serif;
    --ha-font-size-s: 12px;
    --ha-font-size-m: 14px;
    --ha-font-weight-normal: 400;
    --ha-font-weight-medium: 500;
    --ha-font-weight-bold: 700;
    --ha-line-height-condensed: 1.2;
    --ha-line-height-normal: 1.6;
    --amber-color: #ffc107;
    --grey-color: #9e9e9e;
    --state-active-color: var(--amber-color);
    --state-inactive-color: var(--grey-color);
    --state-light-active-color: var(--amber-color);
  }
  body {
    display: grid;
    place-items: start;
    overflow: hidden;
    font-family: var(--ha-font-family-body);
    font-weight: var(--ha-font-weight-normal);
    -webkit-font-smoothing: antialiased;
    background: var(--primary-background-color);
  }
  html[data-theme="dark"] {
    color-scheme: dark;
    --primary-background-color: #111111;
    --card-background-color: #1c1c1c;
    --primary-text-color: #e1e1e1;
    --secondary-text-color: #9b9b9b;
    --divider-color: rgba(225, 225, 225, 0.12);
  }
  html[data-theme="light"] {
    color-scheme: light;
    --primary-background-color: #fafafa;
    --card-background-color: #ffffff;
    --primary-text-color: #141414;
    --secondary-text-color: #5e5e5e;
    --divider-color: rgba(0, 0, 0, 0.12);
  }
  .preview {
    width: 940px;
    height: 312px;
    padding: 32px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 8px;
    background: var(--primary-background-color);
  }
  .horizontal-cards { display: grid; grid-template-rows: repeat(4, 56px); gap: 8px; }
  .vertical-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
  big-slider-card { min-width: 0; min-height: 0; }
`;
document.head.append(style);
