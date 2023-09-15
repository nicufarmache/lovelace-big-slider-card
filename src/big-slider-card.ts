/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  customElement,
  property,
  CSSResult,
  TemplateResult,
  css,
  PropertyValues,
  internalProperty,
} from 'lit-element';

import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  handleClick,
  getLovelace,
  computeEntity,
  stateIcon,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import { SlideGesture } from '@nicufarmache/slide-gesture';

import type { BigSliderCardConfig, MousePos } from './types';
import {
  CARD_VERSION,
  DEFAULT_ATTRIBUTE,
  SETTLE_TIME,
  HOLD_TIME,
  MIN_SLIDE_TIME,
  TAP_THRESHOLD,
} from './const';
import { localize } from './localize/localize';


/* eslint no-console: 0 */
console.info(
  `%c  BIG-SLIDER-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'big-slider-card',
  name: 'Big Slider Card',
  description: 'Big slider card for light entities.',
});

@customElement('big-slider-card')
export class BigSliderCard extends LitElement {
  mouseStartPos: MousePos;
  mousePos: MousePos;
  containerWidth: number;
  oldValue: number;
  currentValue: number;
  holdTimer: number;
  isHold: boolean
  stateObj: any | null;
  _shouldUpdate: boolean;
  updateTimeout: number;
  pressTimeout: number;
  trackingStartTime: number;
  slideGesture: any;
  isTap: boolean;

  public static getStubConfig(): object {
    return {};
  }

  // TODO Add any properities that should cause your element to re-render here
  // https://lit-element.polymer-project.org/guide/properties
  @property({ attribute: false }) public hass!: HomeAssistant;
  @internalProperty() private config!: BigSliderCardConfig;

  constructor() {
    super();
    this.mouseStartPos = { x:0, y:0 };
    this.mousePos = { x:0, y:0 };
    this.containerWidth = 0;
    this.oldValue = 0;
    this.currentValue = 30;
    this.stateObj = null;
    this.isTap = false;
    this.isHold = false;
    this.holdTimer = 0;
    this._shouldUpdate = true;
    this.updateTimeout = 0;
    this.pressTimeout = 0;
    this.trackingStartTime = 0;
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

  _log(text): void{
    console.log(
      `%c  BIG-SLIDER-CARD ${this._getName()} %c ${text} `,
      'color: orange; font-weight: bold; background: black',
      '',
    );
  }

  _handleContextMenu = (ev: Event): boolean => {
    const e = ev || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  }

  _handlePointer = (evt, extra): void => {
    this.mousePos = { x: evt.pageX, y: evt.pageY };

    if (evt.type === 'pointerdown') {
      this._press();
      this.isTap = true;
      this.isHold = false;
      this.holdTimer = window.setTimeout(this._setHold, this.config.hold_time);
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

      if((Date.now() - this.trackingStartTime) > this.config.min_slide_time) {
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

  _setHold = (): void => {
    this.isTap = false;
    this.isHold = true;
    handleClick(this, this.hass, this.config, true, false);
  }

  _handleTap = (): void => {
    clearTimeout(this.holdTimer);
    if (this.config?.tap_action) {
      if (!this.isHold) {
        handleClick(this, this.hass, this.config, false, false);
      }
    }
  }

  _resetTrack(): void {
    this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y };
    this.oldValue = this.currentValue;
  }

  _press(): void {
    if(this.pressTimeout) clearTimeout(this.pressTimeout);
    this.pressTimeout = window.setTimeout(() => this.setAttribute('pressed', ''), this.config.min_slide_time)
    this.setAttribute('half-pressed', '')
  }

  _unpress(): void {
    if(this.pressTimeout) clearTimeout(this.pressTimeout);
    this.removeAttribute('pressed');
    this.removeAttribute('half-pressed');
  }

  _checklimits(): void {
    if (this.currentValue < this.config.min){
      this.currentValue = this.config.min;
      this._resetTrack();
    }
    if (this.currentValue > this.config.max){
      this.currentValue = this.config.max;
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

    if (this.stateObj) {
      if (this.stateObj.state == 'on') {
        const stateColor = this.stateObj.attributes?.rgb_color || [255, 255, 255];
        const stateBrightness = this.stateObj.attributes?.brightness || 255;
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
    if(this.config.background_color) {
      this.style.setProperty('--bsc-background', this.config.background_color);
    }
    if(this.config.text_color) {
      this.style.setProperty('--bsc-primary-text-color', this.config.text_color);
    }
    if(this.config.icon_color && isOn) {
      this.style.setProperty('--bsc-icon-color', this.config.icon_color);
    }
    if(this.config.icon_color && !isOn) {
      this.style.removeProperty('--bsc-icon-color');
    }
    if(this.config.color) {
      this.style.setProperty('--bsc-slider-color', this.config.color);
    }
    if(this.config.border_color) {
      this.style.setProperty('--bsc-border-color', this.config.border_color);
    }
    if(this.config.border_radius) {
      this.style.setProperty('--bsc-border-radius', this.config.border_radius);
    }
    if(this.config.border_style) {
      this.style.setProperty('--bsc-border-style', this.config.border_style);
    }
    if(this.config.border_width) {
      this.style.setProperty('--bsc-border-width', this.config.border_width);
    }
  }

  _getValue(): void {
    if (!this._shouldUpdate) return;
    if (!this.stateObj) return;

    const attr = this.config?.attribute || DEFAULT_ATTRIBUTE;
    let _value = 0;

    if(this.stateObj.state == 'unavailable'){
      this.config.min = 0;
      this.config.max = 0;
      this.style.setProperty('--bsc-opacity', '0.5');
    } else {
      this.config.min = this.config.original_min;
      this.config.max = this.config.original_max;
      this.style.removeProperty('--bsc-opacity');
    }

    if (this.stateObj.state != 'on') {
      _value = this.config.min;
    } else {
      switch (attr) {
        case 'brightness':
          _value = Math.round(100 * (this.stateObj.attributes.brightness || 255)/255)
          break;
        case 'red':
        case 'green':
        case 'blue':
          const rgb = this.stateObj.attributes.rgb_color || [255, 255, 255];
          if (attr === 'red') _value = rgb[0];
          if (attr === 'green') _value = rgb[1];
          if (attr === 'blue') _value = rgb[2];
          _value = Math.ceil(100 * _value / 255);
          break;
        case 'hue':
        case 'saturation':
          const hs = this.stateObj.attributes.hs_color || [100, 100];
          if (attr === 'hue') _value = hs[0];
          if (attr === 'saturation') _value = hs[1];
          break;
      }
    }

    this.currentValue = _value;
    this._updateSlider();
  }

  _setValue(): void {

    let value = this.currentValue;
    let attr = this.config.attribute || DEFAULT_ATTRIBUTE;

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
        _value = this.stateObj.attributes.rgb_color || [255, 255, 255];
        if (attr === 'red') _value[0] = value;
        if (attr === 'green') _value[1] = value;
        if (attr === 'blue') _value[2] = value;
        value = _value;
        attr = 'rgb_color';
        break;
      case 'hue':
      case 'saturation':
        _value = this.stateObj.attributes.hs_color || [100, 100];
        if (attr === 'hue') _value[0] = value;
        if (attr === 'saturation') _value[1] = value;
        value = _value;
        attr = 'hs_color';
        break;
    }

    const params: Record<string,any> = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      entity_id: this.stateObj.entity_id,
    }

    if (on) {
      params[attr] = value;
      if (this.config.transition) {
        params.transition = this.config.transition;
      }
      this.hass.callService('light', 'turn_on', params);
    } else {
      this.hass.callService('light', 'turn_off', params);
    }
  }

  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: BigSliderCardConfig): void {
    /* eslint-disable @typescript-eslint/camelcase */
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (!config.entity) {
      throw new Error(localize('common.no_entity_set'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      attribute: DEFAULT_ATTRIBUTE,
      tap_action: {
        action: 'toggle',
        haptic: 'light',
      },
      min_slide_time: MIN_SLIDE_TIME,
      hold_time: HOLD_TIME,
      settle_time: SETTLE_TIME,
      min: 0,
      max: 100,
      ...config,
    };
    this.config.original_min = this.config.min;
    this.config.original_max = this.config.max;
    /* eslint-enable @typescript-eslint/camelcase */
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
    }, settle ? this.config.settle_time : 0);

  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected updated(): void {
    this.containerWidth = this.shadowRoot?.getElementById('container')?.clientWidth || 0;
    this._getValue();
    this._updateColors();
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {
    if (!(this.config)) {
      this.stateObj = null;
    }
    if (!(this.config.entity)) {
      this.stateObj = null;
    }
    if (!(this.config.entity && (this.config.entity in this.hass.states))) {
      this.stateObj = null;
      return this._showError(`${localize('common.no_entity')}: ${this.config.entity}`);
    }
      
    this.stateObj = this.config.entity && this.hass.states[this.config.entity];

    const name = this._getName();

    const icon = this.config.icon ?? stateIcon(this.stateObj);

    const colorize = (this.config.colorize && true) ?? false;

    const showPercentage = (this.config.show_percentage && true) ?? false;

    const boldText = (this.config.bold_text && true) ?? false;

    return html`
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate ${colorize ? 'colorize' : ''}"></div>
        <ha-icon .icon="${icon}" id="icon"></ha-icon>
        <div id="content">
          <p id="label" class="${boldText ? 'bold' : ''}">
            <span id="name">${this.config.name || name}</span>
            <span id="percentage" class="${showPercentage ? '' : 'hide'}"></span>
          </p>
        </div>
      </ha-card>
    `;
  }

  _getName(): string {
    if (this.stateObj?.attributes?.friendly_name) {
      return this.stateObj.attributes.friendly_name
    } else if (this.stateObj?.entity_id) {
      return computeEntity(this.stateObj.entity_id);
    } else {
      return '???';
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
      // origConfig: this.config,
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
        height: 60px;
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
