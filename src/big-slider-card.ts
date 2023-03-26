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

import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
import { throttle } from './helpers';
import type { BigSliderCardConfig, MousePos } from './types';
import {
  CARD_VERSION,
  DEFAULT_ATTRIBUTE,
  SETTLE_TIME,
  HOLD_TIME,
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
export class BigSliderCard extends GestureEventListeners(LitElement) {
  mouseStartPos: MousePos;
  mousePos: MousePos;
  containerWidth: number;
  oldValue: number;
  currentValue: number;
  holdTimer: number;
  isHold: boolean
  stateObj: any | null;
  _setValueThrottled: Function;
  _shouldUpdate: boolean;
  updateTimeout: number;

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
    this.isHold = false;
    this.holdTimer = 0;
    this._shouldUpdate = true;
    this.updateTimeout = 0;
    this._setValueThrottled = throttle(this._setValue.bind(this), 200);
  }

  connectedCallback(): void {
    super.connectedCallback();
    Gestures.addListener(this, 'down', this._handleDown);
    Gestures.addListener(this, 'up', this._handleUp);
    Gestures.addListener(this, 'tap', this._handleTap);
    Gestures.addListener(this, 'track', this._handleTrack);
    this.addEventListener('contextmenu', this._handleContextMenu);
  }

  disconnectedCallback(): void {
    Gestures.removeListener(this, 'down', this._handleDown);
    Gestures.removeListener(this, 'up', this._handleUp);
    Gestures.removeListener(this, 'tap', this._handleTap);
    Gestures.removeListener(this, 'track', this._handleTrack);
    this.removeEventListener('contextmenu', this._handleContextMenu);
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

  _handleDown = (): void => {
    this._press();
    this.isHold = false;
    this.holdTimer = window.setTimeout(this._setHold, this.config.hold_time);
  }

  _setHold = (): void => {
    this.isHold = true;
    handleClick(this, this.hass, this.config, true, false);
  }

  _handleUp = (): void => {
    this._unpress();
  }

  _handleTap = (): void => {
    clearTimeout(this.holdTimer);
    if (this.config?.tap_action) {
      if (!this.isHold) {
        handleClick(this, this.hass, this.config, false, false);
      }
    }
  }

  _handleTrack = (e): void => {
    this.mousePos = { x: e.detail.x, y: e.detail.y };
    clearTimeout(this.holdTimer);

    switch(e.detail.state) {
      case 'start':
        this._startTrack()
        break;
      case 'track':
        this._track()
        break;
      case 'end':
        this._endTrack()
        break;
    }
  }

  _startTrack(): void {
    this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y };
    this.oldValue = this.currentValue;
    this._press();
    this._stopUpdates()
    if(this.updateTimeout) clearTimeout(this.updateTimeout)
  }

  _track(): void {
    this._updateValue();
    //this._setValueThrottled();
  }

  _endTrack(): void {
    this._updateValue();
    this._unpress();
    this._setValue();

    if(this.updateTimeout) clearTimeout(this.updateTimeout)
    this.updateTimeout = window.setTimeout(this._startUpdates.bind(this), this.config.settle_time)
  }

  _press(): void {
    this.setAttribute('pressed', '');
  }

  _unpress(): void {
    this.removeAttribute('pressed');
  }

  _updateValue(): void {
    const width = this.containerWidth;
    const x = this.mousePos.x - this.mouseStartPos.x;

    const percentage = Math.round( 100 * x / width );

    this.currentValue = this.oldValue + percentage;
    this._checklimits();
    this._updateSlider();
  }

  _checklimits(): void {
    if (this.currentValue < this.config.min){
      this.currentValue = this.config.min;
      this._startTrack();
    }
    if (this.currentValue > this.config.max){
      this.currentValue = this.config.max;
      this._startTrack();
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

    const state = this.stateObj;
    if (state) {
      if (state.state == 'on') {
        const stateColor = state.attributes?.rgb_color || [255, 255, 255];
        const stateBrightness = state.attributes?.brightness || 255;
        console.log('DEBUG: state.attributes: ', state.attributes);
        isOn = true;
        if (stateColor) {
          color = `rgb(${stateColor.join(',')})`;
        }
        if (stateBrightness) {
          brightness = `${Math.ceil(100 * stateBrightness / 255)}%`
          brightnessUI = `${Math.ceil(100 * stateBrightness / 510 + 50)}%`
        }
      }
      if (state.state == 'off') {
        console.log('DEBUG: OFF state.attributes: ', state.attributes);
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
    if(this.config.icon_color && isOn) {
      this.style.setProperty('--bsc-icon-color', this.config.icon_color);
    }
    if(this.config.icon_color && !isOn) {
      this.style.removeProperty('--bsc-icon-color');
    }
    if(this.config.color) {
      this.style.setProperty('--bsc-slider-color', this.config.color);
    }
  }

  _getValue(): void {
    if (!this._shouldUpdate) return;
    if (!this.stateObj) return;

    const attr = this.config?.attribute || DEFAULT_ATTRIBUTE;
    //let on = true;
    let _value = 0;

    if (this.stateObj.state == 'off') {
      _value = 0
    } else {
      switch (attr) {
        case 'brightness':
          _value = Math.ceil(100 * (this.stateObj.attributes.brightness || 255)/255)
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
      hold_time: HOLD_TIME,
      settle_time: SETTLE_TIME,
      min: 0,
      max: 100,
      ...config,
    };
    /* eslint-enable @typescript-eslint/camelcase */
  }

  _stopUpdates(): void {
    this._shouldUpdate = false;
    this.shadowRoot?.getElementById('slider')?.classList?.remove('animate')
  }

  _startUpdates(): void {
    this._shouldUpdate = true;
    this.shadowRoot?.getElementById('slider')?.classList?.add('animate')
    this.requestUpdate();
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


        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([pressed]) {
        transform: scale(0.98);
      }

      #container {
        height: 60px;
        width: 100%;
        position: relative;
        overflow: hidden;
        background: var(--card-background-color);
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
