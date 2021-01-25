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
  hasAction,
  ActionHandlerEvent,
  handleAction,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';

import './editor';

import type { BigSliderCardConfig, MousePos } from './types';
import { actionHandler } from './action-handler-directive';
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
    this._updateSlider();
    Gestures.addListener(this, 'down', this._handleDown.bind(this));
    Gestures.addListener(this, 'up', this._handleUp.bind(this));
    Gestures.addListener(this, 'tap', this._handleTap.bind(this));
    Gestures.addListener(this, 'track', this._handleTrack.bind(this));
  }

  _handleDown() {
    this._press();
  }

  _handleUp() {
    this._unpress();
  }

  _handleTap() {
    console.log('tap');
    window.navigator.vibrate(40);
  }

  _handleTrack(e) {
    this.mousePos = { x: e.detail.x, y: e.detail.y };

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

  _startTrack() {
    this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y };
    this.oldValue = this.currentValue;
    this._press();
  }

  _track() {
    this._updateValue();
  }

  _endTrack() {
    this._updateValue();
    this._unpress();
  }

  _press() {
    this.setAttribute('pressed', '');
    window.navigator.vibrate(20);
  }

  _unpress() {
    this.removeAttribute('pressed');
    window.navigator.vibrate(20);
  }

  _updateValue() {
    const width = this.containerWidth;
    const x = this.mousePos.x - this.mouseStartPos.x;

    const percentage = Math.round( 100 * x / this.containerWidth );

    this.currentValue = this.oldValue + percentage;
    this._checklimits();
    this._updateSlider();
  }

  _checklimits() {
    if (this.currentValue < 0){
      this.currentValue = 0;
      this._startTrack();
    }
    if (this.currentValue > 100){
      this.currentValue = 100;
      this._startTrack();
    }
  }

  _updateSlider() {
    this.style.setProperty('--bsc-percent', ( 100 - this.currentValue ) + "%");
  }

  protected updated() {
    this.containerWidth = this.shadowRoot?.getElementById('container')?.clientWidth || 0;
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

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {
    // TODO Check for stateObj or other necessary things and render a warning if missing
    if (this.config.show_warning) {
      return this._showWarning(localize('common.show_warning'));
    }

    if (this.config.show_error) {
      return this._showError(localize('common.show_error'));
    }

    return html`
      <ha-card
        id="container"
        .header=${this.config.name}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
          hasHold: hasAction(this.config.hold_action),
          hasDoubleClick: hasAction(this.config.double_tap_action),
        })}
        tabindex="0"
        .label=${`BigSlider: ${this.config.entity || 'No Entity Defined'}`}
        >
        <div id="slider" ></div>
        <div id="content">
          <p>Hello World</p>
        </div>
      </ha-card>
    `;
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this.config && ev.detail.action) {
      handleAction(this, this.hass, this.config, ev.detail.action);
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
        --bsc-background: #aaaaaa;
        --bsc-slider-background: #f9d2b0;
        --bsc-percent: 0%;

        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([pressed]) {
        transform: scale(0.98);
      }

      #container {
        height: 100%;
        width: 100%;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        background: var(--bsc-background);
      }

      #slider {
        height: 100%;
        position: absolute;
        background: var(--bsc-slider-background);
        left: 0;
        top: 0;
        right: var(--bsc-percent);
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
