
import { SlideGesture } from '@nicufarmache/slide-gesture';
import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from './ha-types';
import type { BigSliderCardConfig, MousePos } from './types';
import { DEFAULT_CONFIG, TAP_THRESHOLD } from './const';
import { localize } from './localize/localize';
import { state } from 'lit/decorators.js';
import { ifDefined } from "lit/directives/if-defined.js";
import {
  LitElement,
  html,
  CSSResult,
  TemplateResult,
  css,
} from 'lit';

export class BigSliderCard extends LitElement {
  // @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: BigSliderCardConfig = DEFAULT_CONFIG;
  @state() private _entity?: string;
  @state() private _state?: HassEntity;
  @state() private _status?: string;
  @state() private _name: string = '';
  private _hass?: HomeAssistant;
  private mouseStartPos: MousePos = { x:0, y:0 };
  private mousePos: MousePos = { x:0, y:0 };
  private containerWidth: number = 0;
  private oldValue: number = 0;
  private currentValue: number = 0;
  private holdTimer: number = 0;
  private isHold: boolean = false;
  private _shouldUpdate: boolean = true;
  private updateTimeout: number = 0;
  private pressTimeout: number = 0;
  private trackingStartTime: number = 0;
  private slideGesture: any;
  private isTap: boolean = false;

  public static getStubConfig(
    _hass: HomeAssistant,
    entities: string[],
  ): Partial<BigSliderCardConfig> {
    const lights = entities.filter(entity => entity.split('.')[0]==='light').sort();
    const randomLight = lights[Math.floor(Math.random() * lights.length)];
    return { type: 'custom:big-slider-card', entity: randomLight };
  }

  // life cycle

  public setConfig(config: Partial<BigSliderCardConfig>): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (!config.entity) {
      throw new Error(localize('common.no_entity_set'));
    }

    if (!config.entity || config.entity.split(".")[0] !== "light") {
      throw new Error("Specify an entity from within the light domain");
    }

    this._config = { ...DEFAULT_CONFIG, ...config };
    this._entity = this._config.entity;
    this._config.original_min = this._config.min;
    this._config.original_max = this._config.max;
  }

  set hass(hass: HomeAssistant) {
    if (!this._entity) return;
    this._hass = hass;
    this._state = hass.states[this._entity];
    this._status = this._state?.state;
    this._name = 
      this._config.name ??
      this._state?.attributes?.friendly_name ?? 
      this._entity.split('.')[1] ??
      '';
  }

  _log(text): void{
    console.log(
      `%c  BIG-SLIDER-CARD ${this._name} %c ${text} `,
      'color: orange; font-weight: bold; background: black',
      '',
    );
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('contextmenu', this._handleContextMenu);
    this.slideGesture = new SlideGesture(this, this._handlePointer.bind(this), { 
      touchActions: 'pan-y',
      stopScrollDirection: 'horizontal'
    });
  }

  disconnectedCallback(): void {
    this.removeEventListener('contextmenu', this._handleContextMenu);
    this.slideGesture.removeListeners();
    super.disconnectedCallback();
  }

  _handleContextMenu = (e: Event): boolean => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    return false;
  }

  _handlePointer = (evt, extra): void => {
    this.mousePos = { x: evt.pageX, y: evt.pageY };
    const minSlideTime = this._config.min_slide_time;

    if (evt.type === 'pointerdown') {
      this._press();
      this.isTap = true;
      this.isHold = false;
      this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time);
      this.trackingStartTime = Date.now();
      this._resetTrack();
    }

    if ([ 'pointerdown', 'pointermove', 'pointerup'].includes(evt.type)) {
      this._updateValue();
    }
  
    if (evt.type === 'pointermove') {
      if(this.isTap && (Math.abs(extra.relativeX) < TAP_THRESHOLD && Math.abs(extra.relativeY) < TAP_THRESHOLD)) 
        return;
      this.isTap = false; 
      clearTimeout(this.holdTimer);
      this._stopUpdates();
    }

    if (evt.type === 'pointercancel') {
      clearTimeout(this.holdTimer);
      this._unpress();
      this._startUpdates();
    }
  
    if (evt.type === 'pointerup') {
      clearTimeout(this.holdTimer);
      this._unpress();
      this._startUpdates();

      if (this.isTap) {
        this._handleTap();
        return;
      }

      if((Date.now() - this.trackingStartTime) > minSlideTime) {
        this._setValue();
        this._startUpdates(true);
      }
    }
  }

  _updateValue(): void {
    const width = this.containerWidth;
    const dx = this.mousePos.x - this.mouseStartPos.x;

    const percentage = Math.round( 100 * dx / width );

    this.currentValue = this.oldValue + percentage;
    this._checklimits();
    this._updateSlider();
  }

  private _handleAction(action: any): void {
    const event = new Event('hass-action', {
      bubbles: true,
      cancelable: false,
      composed: true,
    });
    (event as any).detail = {
      config: this._config!,
      action: action,
    };
    this.dispatchEvent(event);
  }

  _setHold = (): void => {
    this.isTap = false;
    this.isHold = true;
    this._handleAction('hold');
  }

  _handleTap = (): void => {
    clearTimeout(this.holdTimer);
    if (this._config?.tap_action) {
      if (!this.isHold) {
        this._handleAction('tap');
      }
    }
  }

  _resetTrack(): void {
    this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y };
    this.oldValue = this.currentValue;
  }

  _press(): void {
    if(this.pressTimeout) clearTimeout(this.pressTimeout);
    this.pressTimeout = window.setTimeout(() => this.setAttribute('pressed', ''), this._config.min_slide_time)
    this.setAttribute('half-pressed', '')
  }

  _unpress(): void {
    if(this.pressTimeout) clearTimeout(this.pressTimeout);
    this.removeAttribute('pressed');
    this.removeAttribute('half-pressed');
  }

  _checklimits(): void {
    const min = this._config.min ?? 0;
    const max = this._config.max ?? 100;
    if (this.currentValue < min){
      this.currentValue = min;
      this._resetTrack();
    }
    if (this.currentValue > max){
      this.currentValue = max;
      this._resetTrack();
    }
  }

  _updateSlider(): void {
    this.style.setProperty('--bsc-percent', this.currentValue + '%');
    const percentage = this?.shadowRoot?.getElementById('percentage');
    percentage && (percentage.innerText = Math.round(this.currentValue) + '%');
  }

  _updateColors(): void {
    let color = 'var(--bsc-color)';
    let brightness = '0%';
    let brightnessUI = '50%';
    let isOn = false;

    if (this._state) {
      if (this._status == 'on') {
        const stateColor = this._state.attributes?.rgb_color ?? [255, 255, 255];
        const stateBrightness = this._state.attributes?.brightness ?? 255;
        isOn = true;
        if (stateColor) {
          color = `rgb(${stateColor.join(',')})`;
        }
        if (stateBrightness) {
          brightness = `${Math.ceil(100 * stateBrightness / 255)}%`
          brightnessUI = `${Math.ceil(100 * stateBrightness / 510 + 50)}%`
        }
      } else {
        color = 'var(--bsc-off-color)';
      }
    }

    const percentage = this?.shadowRoot?.getElementById('percentage');
    if (!isOn) {
      percentage && (percentage.innerText = localize('common.off'));
    }
    this.style.setProperty('--bsc-entity-color', color);
    this.style.setProperty('--bsc-brightness', brightness);
    this.style.setProperty('--bsc-brightness-ui', brightnessUI);
    if(this._config.icon_color && isOn) {
      this.style.setProperty('--bsc-icon-color', this._config.icon_color);
    }
    if(this._config.icon_color && !isOn) {
      this.style.removeProperty('--bsc-icon-color');
    }
  }

  _getValue(): void {
    if (!this._shouldUpdate) return;
    if (!this._state) return;

    const attr = this._config?.attribute;
    let _value = 0;

    if(this._status == 'unavailable'){
      this._config.min = 0;
      this._config.max = 0;
      this.style.setProperty('--bsc-opacity', '0.5');
    } else {
      this._config.min = this._config.original_min;
      this._config.max = this._config.original_max;
      this.style.removeProperty('--bsc-opacity');
    }

    if (this._status != 'on') {
      _value = this._config.min ?? 0;
    } else {
      switch (attr) {
        case 'brightness':
          _value = Math.round(100 * (this._state.attributes.brightness ?? 255)/255)
          break;
        case 'red':
        case 'green':
        case 'blue':
          const rgb = this._state.attributes.rgb_color ?? [255, 255, 255];
          if (attr === 'red') _value = rgb[0];
          if (attr === 'green') _value = rgb[1];
          if (attr === 'blue') _value = rgb[2];
          _value = Math.ceil(100 * _value / 255);
          break;
        case 'hue':
        case 'saturation':
          const hs = this._state.attributes.hs_color ?? [100, 100];
          if (attr === 'hue') _value = hs[0];
          if (attr === 'saturation') _value = hs[1];
          break;
      }
    }

    this.currentValue = _value;
    this._updateSlider();
  }

  _setValue(): void {
    if (!this._state) return;

    let value = this.currentValue;
    let attr = this._config.attribute;

    let on = true;
    let _value;
    switch (attr) {
      case 'brightness':
        value = Math.ceil(value/100.0*255);
        if (!value) on = false;
        break;
      case 'red':
      case 'green':
      case 'blue':
        _value = this._state.attributes.rgb_color ?? [255, 255, 255];
        if (attr === 'red') _value[0] = value;
        if (attr === 'green') _value[1] = value;
        if (attr === 'blue') _value[2] = value;
        value = _value;
        attr = 'rgb_color';
        break;
      case 'hue':
      case 'saturation':
        _value = this._state.attributes.hs_color ?? [100, 100];
        if (attr === 'hue') _value[0] = value;
        if (attr === 'saturation') _value[1] = value;
        value = _value;
        attr = 'hs_color';
        break;
    }

    const params: Record<string,any> = {
      entity_id: this._state.entity_id,
    }

    if (on) {
      params[attr] = value;
      if (this._config.transition) {
        params.transition = this._config.transition;
      }
      this._hass!.callService('light', 'turn_on', params);
    } else {
      this._hass!.callService('light', 'turn_off', params);
    }
  }

  _stopUpdates(): void {
    if(this.updateTimeout) clearTimeout(this.updateTimeout);
    if(!this._shouldUpdate) return;
    this.shadowRoot?.getElementById('slider')?.classList?.remove('animate')
    this._shouldUpdate = false;
  }

  _startUpdates(settle = false): void {
    if(this.updateTimeout) clearTimeout(this.updateTimeout);
    this.updateTimeout = window.setTimeout(() => {
      this._shouldUpdate = true;
      this.shadowRoot?.getElementById('slider')?.classList?.add('animate')
      this.requestUpdate();
    }, settle ? this._config.settle_time : 0);

  }

  protected updated(): void {
    this.containerWidth = this.shadowRoot?.getElementById('container')?.clientWidth ?? 0;
    this._getValue();
    this._updateColors();
  }

  protected render(): TemplateResult | void {
    if (!(this._entity && (this._entity in (this._hass?.states ?? {})))) {
      return this._showError(`${localize('common.no_entity')}: ${this._entity}`);
    }

    const colorize = (this._config.colorize && true) ?? false;

    const showPercentage = (this._config.show_percentage && true) ?? false;

    const boldText = (this._config.bold_text && true) ?? false;

    this._setStyleProperty('--bsc-background', this._config.background_color);
    this._setStyleProperty('--bsc-primary-text-color', this._config.text_color);
    this._setStyleProperty('--bsc-slider-color', this._config.color);
    this._setStyleProperty('--bsc-border-color', this._config.border_color);
    this._setStyleProperty('--bsc-border-radius',  this._config.border_radius);
    this._setStyleProperty('--bsc-border-style', this._config.border_style);
    this._setStyleProperty('--bsc-border-width', this._config.border_width);
    this._setStyleProperty('--bsc-height', this._config.height, (height) => `${height}px`);

    return html`
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate ${colorize ? 'colorize' : ''}"></div>
        <ha-state-icon
        id="icon"
              .icon=${this._config.icon}
              .state=${this._state}
              .hass=${this._hass}
              .stateObj=${this._state}
              data-domain=${this._entity.split(".")[0]}
              data-state=${ifDefined(this._status)}
            ></ha-state-icon>
        <div id="content">
          <p id="label" class="${boldText ? 'bold' : ''}">
            <span id="name">${this._name}</span>
            <span id="percentage" class="${showPercentage ? '' : 'hide'}"></span>
          </p>
        </div>
      </ha-card>
    `;
  }

  _setStyleProperty(name: string, value: any, transform = (value: any): string => value): void {
    if (value !== undefined && value !== null && value !== '') {
      this.style.setProperty(name, transform(value));
    }
  }

  private _showWarning(warning: string): TemplateResult {
    return html`
      <hui-warning>${warning}</hui-warning>
    `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      // origConfig: this._config,
    });

    return html`
      ${errorCard}
    `;
  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResult {
    return css`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 60px);
        --bsc-opacity: 1;


        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        transform: scale(0.99);
      }

      :host([pressed]) {
        transform: scale(0.98);
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        opacity: var(--bsc-opacity);
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 4px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
      }

      .hide {
        display: none
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        opacity: 0.3;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        filter: brightness(var(--bsc-brightness-ui));
        transition: background-color 1s ease, filter 1s ease;
      }

      #slider.animate {
        transition: right 1s ease, background-color 1s ease, filter 1s ease;
      }

      #icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color, var(--bsc-entity-color));
        filter: brightness(var(--bsc-brightness-ui));
        transition: color 0.3s ease-out;
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 24px 0 72px;
        box-sizing: border-box;
      }

      #label {
        display: flex;
        flex-direction: column;
      }

      #label.bold {
        font-weight: bold;
      }

      #name {
        color: var(--bsc-primary-text-color)
      }

      #percentage {
        color: var(--bsc-secondary-text-color)
      }
    `;
  }
}
