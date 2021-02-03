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
  LovelaceCardEditor,
  getLovelace,
  computeEntity,
  stateIcon,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
import { throttle } from './helpers';

import './editor';

import type { BigSliderCardConfig, MousePos } from './types';
import { CARD_VERSION } from './const';
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
  description: 'A template custom card for you to create something awesome',
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

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('big-slider-card-editor');
  }

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
    this._updateSlider();
    Gestures.addListener(this, 'down', this._handleDown.bind(this));
    Gestures.addListener(this, 'up', this._handleUp.bind(this));
    Gestures.addListener(this, 'tap', this._handleTap.bind(this));
    Gestures.addListener(this, 'track', this._handleTrack.bind(this));
    this.addEventListener('contextmenu', this._handleContextMenu.bind(this));
  }

  disconnectedCallback(): void {
    Gestures.removeListener(this, 'down', this._handleDown.bind(this));
    Gestures.removeListener(this, 'up', this._handleUp.bind(this));
    Gestures.removeListener(this, 'tap', this._handleTap.bind(this));
    Gestures.removeListener(this, 'track', this._handleTrack.bind(this));
    this.removeEventListener('contextmenu', this._handleContextMenu.bind(this));
    super.disconnectedCallback();
  }

  _handleContextMenu(ev: Event): boolean {
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

  _handleDown(): void {
    this._press();
    this.isHold = false;
    this.holdTimer = window.setTimeout(this._setHold.bind(this), this.config?.hold_time || 600);
  }

  _setHold(): void {
    this.isHold = true;
    console.log('held!');
    handleClick(this, this.hass, this.config, true, false);
  }

  _handleUp(): void {
    this._unpress();
  }

  _handleTap(): void {
    clearTimeout(this.holdTimer);
    if (this.config?.tap_action) {
      if (this.isHold) {
        // handleClick(this, this.hass, this.config, true, false);
      } else {
        handleClick(this, this.hass, this.config, false, false);
      }
    }
  }

  _handleTrack(e): void {
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
  }

  _track(): void {
    this._updateValue();
    this._setValueThrottled();
  }

  _endTrack(): void {
    this._updateValue();
    this._unpress();
    this._setValue();

    if(this.updateTimeout) clearTimeout(this.updateTimeout)
    this.updateTimeout = window.setTimeout(this._startUpdates.bind(this), 2000)
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
    if (this.currentValue < 0){
      this.currentValue = 0;
      this._startTrack();
    }
    if (this.currentValue > 100){
      this.currentValue = 100;
      this._startTrack();
    }
  }

  _updateSlider(): void {
    this.style.setProperty('--bsc-percent', this.currentValue + '%');
  }

  _updateColors(): void {
    let color = 'var(--bsc-color)';
    let brightness = '0%';

    const state = this.stateObj;
    if (state) {
      if (state.state == 'on') {
        const stateColor = state.attributes?.rgb_color;
        const stateBrightness = state.attributes?.brightness;
        if (stateColor) {
          color = `rgb(${stateColor.join(',')})`;
        }
        if (stateBrightness) {
          brightness = `${Math.ceil(100 * stateBrightness / 255)}%`
        }
      }
      if (state.state == 'off') {
        color = 'var(--bsc-off-color)';
      }
    }

    this.style.setProperty('--bsc-icon-color', color);
    this.style.setProperty('--bsc-brightness', brightness);
  }

  _getValue(): void {
    if (!this._shouldUpdate) return;
    if (!this.stateObj) return;

    const attr = this.config?.attribute || 'brightness';
    //let on = true;
    let _value;

    if (this.stateObj.state == 'off') {
      _value = 0
    } else {
      switch (attr) {
        case 'brightness':
          _value = Math.ceil(100 * this.stateObj.attributes.brightness/255)
          break;
        case 'red':
        case 'green':
        case 'blue':
          const rgb = this.stateObj.attributes.rgb_color || [0,0,0];
          if (attr === 'red') _value = rgb[0];
          if (attr === 'green') _value = rgb[1];
          if (attr === 'blue') _value = rgb[2];
          _value = Math.ceil(100 * _value / 255);
          break;
        case 'hue':
        case 'saturation':
          const hs = this.stateObj.attributes.hs_color || [0,0];
          if (attr === 'hue') _value = hs[0];
          if (attr === 'saturation') _value = hs[1];
          break;
      }
    }

    console.log('get ' + _value);
    this.currentValue = _value;
    this._updateSlider();
  }

  _setValue(): void {

    let value = this.currentValue;
    console.log('set ' + value);
    let attr = this.config?.attribute || 'brightness';
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
        _value = this.stateObj.attributes.rgb_color || [0,0,0];
        if (attr === 'red') _value[0] = value;
        if (attr === 'green') _value[1] = value;
        if (attr === 'blue') _value[2] = value;
        value = _value;
        attr = 'rgb_color';
        break;
      case 'hue':
      case 'saturation':
        _value = this.stateObj.attributes.hs_color || [0,0];
        if (attr === 'hue') _value[0] = value;
        if (attr === 'saturation') _value[1] = value;
        value = _value;
        attr = 'hs_color';
        break;
    }

    if (on) {
      this.hass.callService("light", "turn_on", {
        // eslint-disable-next-line @typescript-eslint/camelcase
        entity_id: this.stateObj.entity_id,
        [attr]: value,
      });
    } else {
      this.hass.callService("light", "turn_off", {
        // eslint-disable-next-line @typescript-eslint/camelcase
        entity_id: this.stateObj.entity_id,
      });
    }
  }

  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: BigSliderCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Big Slider',
      ...config,
    };
  }

  _stopUpdates(): void {
    this._shouldUpdate = false;
    this.shadowRoot?.getElementById('slider')?.classList?.remove('animate')
    console.log(`Should Update: ${this._shouldUpdate}`)
  }

  _startUpdates(): void {
    this._shouldUpdate = true;
    this.shadowRoot?.getElementById('slider')?.classList?.add('animate')
    console.log(`Should Update: ${this._shouldUpdate}`)
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
    if (this.config?.entity && this.config?.entity in this.hass.states) {
      this.stateObj = this.hass.states[this.config.entity];
    } else {
      this.stateObj = null;
      return this._showError(localize('common.show_error'));
    }

    const name = this.stateObj.attributes && this.stateObj.attributes.friendly_name
          ? this.stateObj.attributes.friendly_name
      : computeEntity(this.stateObj.entity_id);

    const icon = stateIcon(this.stateObj);

    console.log(`Render!`)

    return html`
      <ha-card
        id="container"
        tabindex="0"
        >
        <div id="slider" class="animate"></div>
        <ha-icon .icon="${icon}" id="icon"></ha-icon>
        <div id="content">
          <p>${name}</p>
        </div>
      </ha-card>
    `;
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
      origConfig: this.config,
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
        --bsc-slider-background: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-color: --paper-item-icon-color;
        --bsc-off-color: --paper-item-icon-color;
        --bsc-icon-color: var(--bsc-color);

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
        border-radius: var(--ha-card-border-radius);
        overflow: hidden;
        background: var(--card-background-color);
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background: var(--bsc-slider-background);
        opacity: 0.3;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.animate {
        transition: right .3s ease;
      }

      #icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color);
        filter: brightness(calc(50% + var(--bsc-brightness) / 2));
        transition: color 0.3s ease-out;
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }
}
