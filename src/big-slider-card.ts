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
  handleAction,
  LovelaceCardEditor,
  getLovelace,
  computeEntity,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';

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
  stateObj: any | null;

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
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._updateSlider();
    Gestures.addListener(this, 'down', this._handleDown.bind(this));
    Gestures.addListener(this, 'up', this._handleUp.bind(this));
    Gestures.addListener(this, 'tap', this._handleTap.bind(this));
    Gestures.addListener(this, 'track', this._handleTrack.bind(this));
  }

  disconnectedCallback(): void {
    Gestures.removeListener(this, 'down', this._handleDown.bind(this));
    Gestures.removeListener(this, 'up', this._handleUp.bind(this));
    Gestures.removeListener(this, 'tap', this._handleTap.bind(this));
    Gestures.removeListener(this, 'track', this._handleTrack.bind(this));
    super.disconnectedCallback();
  }

  _handleDown(): void {
    this._press();
  }

  _handleUp(): void {
    this._unpress();
  }

  _handleTap(): void {
    console.log('tap');
    if (this.config?.tap_action) {
      handleAction(this, this.hass, this.config, 'tap');
    }
  }

  _handleTrack(e): void {
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

  _startTrack(): void {
    this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y };
    this.oldValue = this.currentValue;
    this._press();
  }

  _track(): void {
    this._updateValue();
  }

  _endTrack(): void {
    this._updateValue();
    this._unpress();
  }

  _press(): void {
    this.setAttribute('pressed', '');
  }

  _unpress(): void {
    this.removeAttribute('pressed');
  }

  _updateValue(): void {
    const width = this.containerWidth;
    const x = this.mouseStartPos.x - this.mousePos.x;

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
    this.style.setProperty('--bsc-percent', ( 100 - this.currentValue ) + "%");
  }

  protected updated(): void {
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
    if (this.config?.entity && this.config?.entity in this.hass.states) {
      this.stateObj = this.hass.states[this.config.entity];
    } else {
      this.stateObj = null;
    }

    if (this.stateObj == null) {
      return this._showError(localize('common.show_error'));
    }

    const name = this.stateObj.attributes && this.stateObj.attributes.friendly_name
          ? this.stateObj.attributes.friendly_name
          : computeEntity(this.stateObj.entity_id);

    return html`
      <ha-card
        id="container"
        tabindex="0"
        .label=${`BigSlider: ${this.config.entity || 'No Entity Defined'}`}
        >
        <div id="slider" ></div>
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
