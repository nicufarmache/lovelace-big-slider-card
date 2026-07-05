
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
  @state() private _name: string = '';
  private _hass?: HomeAssistant;
  private mouseStartPos: MousePos = { x: 0, y: 0 };
  private mousePos: MousePos = { x: 0, y: 0 };
  private containerWidth: number = 0;
  private containerHeight: number = 0;
  private oldValue: number = 0;
  private currentValue: number = 0;
  private holdTimer: number = 0;
  private isHold: boolean = false;
  private _shouldUpdate: boolean = true;
  private updateTimeout: number = 0;
  private pressTimeout: number = 0;
  private immediateUpdateTimeout: number = 0;
  private trackingStartTime: number = 0;
  private slideGesture: any;
  private isTap: boolean = false;
  private hasValidSlide: boolean = false;

  public static getStubConfig(
    _hass: HomeAssistant,
    entities: string[],
  ): Partial<BigSliderCardConfig> {
    const lights = entities.filter(entity => entity.split('.')[0] === 'light').sort();
    const randomLight = lights[Math.floor(Math.random() * lights.length)];
    return { type: 'custom:big-slider-card', entity: randomLight };
  }

  public getGridOptions() {
    if (this._config.vertical) {
      return {
        columns: 2,
        rows: 4,
        min_columns: 1,
        min_rows: 3,
      };
    } else {
      return {
        columns: 6,
        rows: 1,
        min_columns: 3,
        min_rows: 1,
      };
    }
  }

  public getCardSize(): number {
    const defaultHeight = this._config.vertical ? 180 : 60;
    const height = this._getNumericCssLength(this._config.height ?? defaultHeight);
    return Math.max(1, Math.ceil((height ?? defaultHeight) / 50));
  }

  public static getConfigForm() {
    return {
      schema: [
        {
          name: 'entity',
          required: true,
          selector: { entity: { domain: 'light' } },
        },
        {
          name: 'name',
          selector: { text: {} },
        },
        {
          name: 'icon',
          selector: { icon: {} },
        },
        {
          type: 'expandable',
          name: 'display',
          title: localize('editor.sections.display'),
          flatten: true,
          schema: [
            {
              name: 'attribute',
              selector: {
                select: {
                  options: [
                    { value: 'brightness', label: localize('editor.attributes.brightness') },
                    { value: 'red', label: localize('editor.attributes.red') },
                    { value: 'green', label: localize('editor.attributes.green') },
                    { value: 'blue', label: localize('editor.attributes.blue') },
                    { value: 'hue', label: localize('editor.attributes.hue') },
                    { value: 'saturation', label: localize('editor.attributes.saturation') },
                    { value: 'color_temp_kelvin', label: localize('editor.attributes.color_temp_kelvin') },
                  ],
                },
              },
            },
            {
              name: 'colorize',
              selector: { boolean: {} },
            },
            {
              name: 'show_percentage',
              selector: { boolean: {} },
            },
            {
              name: 'vertical',
              selector: { boolean: {} },
            },
          ],
        },
        {
          type: 'expandable',
          name: 'styling',
          title: localize('editor.sections.styling'),
          flatten: true,
          schema: [
            {
              name: 'height',
              selector: {
                number: {
                  mode: 'box',
                  min: 10,
                  max: 200,
                  unit_of_measurement: 'px',
                },
              },
            },
            {
              name: 'width',
              selector: {
                number: {
                  mode: 'box',
                  min: 10,
                  max: 400,
                  unit_of_measurement: 'px',
                },
              },
            },
            {
              name: 'icon_size',
              selector: {
                number: {
                  mode: 'box',
                  min: 8,
                  max: 96,
                  unit_of_measurement: 'px',
                },
              },
            },
            {
              name: 'text_size',
              selector: {
                number: {
                  mode: 'box',
                  min: 8,
                  max: 48,
                  unit_of_measurement: 'px',
                },
              },
            },
            { name: 'color', selector: { text: {} } },
            { name: 'background_color', selector: { text: {} } },
            { name: 'text_color', selector: { text: {} } },
            { name: 'icon_color', selector: { text: {} } },
            { name: 'icon_off_color', selector: { text: {} } },
            {
              name: 'constant_icon_color',
              selector: { boolean: {} },
            },
            {
              name: 'bold_text',
              selector: { boolean: {} },
            },
            {
              name: 'no_scale',
              selector: { boolean: {} },
            },
            {
              name: 'no_transition_animation',
              selector: { boolean: {} },
            },
            { name: 'border_color', selector: { text: {} } },
            {
              name: 'border_radius',
              selector: {
                number: {
                  mode: 'box',
                  min: 0,
                  unit_of_measurement: 'px',
                },
              },
            },
            { name: 'border_style', selector: { text: {} } },
            {
              name: 'border_width',
              selector: {
                number: {
                  mode: 'box',
                  min: 0,
                  unit_of_measurement: 'px',
                },
              },
            },
          ],
        },
        {
          type: 'expandable',
          name: 'behavior',
          title: localize('editor.sections.behavior'),
          flatten: true,
          schema: [
            {
              name: 'transition',
              selector: {
                number: {
                  mode: 'box',
                  min: 0,
                  step: 0.1,
                  unit_of_measurement: 's',
                },
              },
            },
            { name: 'min', selector: { number: { mode: 'box' } } },
            { name: 'max', selector: { number: { mode: 'box' } } },
            {
              name: 'min_slide_time',
              selector: {
                number: {
                  mode: 'box',
                  unit_of_measurement: 'ms',
                },
              },
            },
            {
              name: 'hold_time',
              selector: {
                number: {
                  mode: 'box',
                  unit_of_measurement: 'ms',
                },
              },
            },
            {
              name: 'settle_time',
              selector: {
                number: {
                  mode: 'box',
                  unit_of_measurement: 'ms',
                },
              },
            },
            {
              name: 'immediate_update',
              selector: { boolean: {} },
            },
            { name: 'tap_action', selector: { ui_action: {} } },
            { name: 'hold_action', selector: { ui_action: {} } },
          ],
        },
      ],
      computeLabel: (schema: any, hassLocalize: any) => {
        const customLabels: Record<string, string> = {
          colorize: localize('editor.labels.colorize'),
          show_percentage: localize('editor.labels.show_percentage'),
          bold_text: localize('editor.labels.bold_text'),
          no_scale: localize('editor.labels.no_scale'),
          no_transition_animation: localize('editor.labels.no_transition_animation'),
          vertical: localize('editor.labels.vertical'),
          min_slide_time: localize('editor.labels.min_slide_time'),
          hold_time: localize('editor.labels.hold_time'),
          settle_time: localize('editor.labels.settle_time'),
          immediate_update: localize('editor.labels.immediate_update'),
          background_color: localize('editor.labels.background_color'),
          height: localize('editor.labels.height'),
          width: localize('editor.labels.width'),
          text_color: localize('editor.labels.text_color'),
          icon_color: localize('editor.labels.icon_color'),
          icon_off_color: localize('editor.labels.icon_off_color'),
          constant_icon_color: localize('editor.labels.constant_icon_color'),
          icon_size: localize('editor.labels.icon_size'),
          text_size: localize('editor.labels.text_size'),
          border_color: localize('editor.labels.border_color'),
          border_radius: localize('editor.labels.border_radius'),
          border_style: localize('editor.labels.border_style'),
          border_width: localize('editor.labels.border_width'),
        };
        return (
          customLabels[schema.name] ||
          hassLocalize(`ui.panel.lovelace.editor.card.generic.${schema.name}`) ||
          schema.name
        );
      },
    };
  }

  // life cycle

  public setConfig(config: Partial<BigSliderCardConfig>): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.entity && config.entity.split(".")[0] !== "light") {
      throw new Error(localize('errors.light_domain_only'));
    }

    const attributeDefaults = this._getAttributeDefaults(config.attribute ?? DEFAULT_CONFIG.attribute);

    this._config = { ...DEFAULT_CONFIG, ...attributeDefaults, ...config };
    this._entity = this._config.entity;
    this._config.original_min = this._config.min;
    this._config.original_max = this._config.max;
  }

  _getAttributeDefaults(attribute: string): Partial<BigSliderCardConfig> {
    switch (attribute) {
      case 'color_temp_kelvin':
        return { min: 2200, max: 6500 };
      default:
        return {};
    }
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    if (!this._entity) return;
    this._state = hass.states[this._entity];
    this._name =
      this._config.name ??
      this._state?.attributes?.friendly_name ??
      this._entity.split('.')[1] ??
      '';
  }

  private get _effectiveState(): HassEntity {
    if (this._state) {
      return this._state;
    }
    return {
      entity_id: this._entity || 'light.example_light',
      state: this._effectiveStatus,
      attributes: {
        friendly_name: this._effectiveName,
        brightness: 153, // 60%
        rgb_color: [255, 165, 0],
      },
      last_changed: '',
      last_updated: '',
      context: { id: '', parent_id: null, user_id: null }
    };
  }

  private get _effectiveName(): string {
    if (this._config.name) return this._config.name;
    if (this._state) {
      return this._state.attributes?.friendly_name ?? this._entity?.split('.')[1] ?? '';
    }
    return localize('preview.example_light');
  }

  private get _effectiveStatus(): string {
    return this._state ? this._state.state : 'on';
  }

  _log(text: string): void {
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
      touchActions: this._config.vertical ? 'pan-x' : 'pan-y',
      stopScrollDirection: this._config.vertical ? 'vertical' : 'horizontal'
    });
  }

  disconnectedCallback(): void {
    this.removeEventListener('contextmenu', this._handleContextMenu);
    this._clearImmediateUpdate();
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

  _handlePointer = (evt: PointerEvent, extra: any): void => {
    this.mousePos = { x: evt.pageX, y: evt.pageY };
    const minSlideTime = this._config.min_slide_time;

    if (evt.type === 'pointerdown') {
      this._press();
      this.isTap = true;
      this.isHold = false;
      this.hasValidSlide = false;
      this._clearImmediateUpdate();
      this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time);
      this.trackingStartTime = Date.now();
      this._updateContainerSize();
      this._resetTrack();
    }

    if (!this.isHold && ['pointerdown', 'pointermove', 'pointerup'].includes(evt.type)) {
      this._updateValue();
    }

    if (evt.type === 'pointermove') {
      if (this.isHold) return;
      if (this.isTap && (Math.abs(extra.relativeX) < TAP_THRESHOLD && Math.abs(extra.relativeY) < TAP_THRESHOLD))
        return;
      this.isTap = false;
      clearTimeout(this.holdTimer);
      this._stopUpdates();
      this._scheduleImmediateUpdate();
    }

    if (evt.type === 'pointercancel') {
      clearTimeout(this.holdTimer);
      this._clearImmediateUpdate();
      this._unpress();
      this._startUpdates();
    }

    if (evt.type === 'pointerup') {
      clearTimeout(this.holdTimer);
      this._clearImmediateUpdate();
      this._unpress();
      this._startUpdates();

      if (this.isHold) return;

      if (this.isTap) {
        this._handleTap();
        return;
      }

      if (this.hasValidSlide && (Date.now() - this.trackingStartTime) > minSlideTime) {
        this._setValue();
        this._startUpdates(true);
      }
    }
  }

  _updateValue(): void {
    if (!this._updateContainerSize()) return;

    const size = this._config.vertical ? this.containerHeight : this.containerWidth;
    const delta = this._config.vertical
      ? this.mouseStartPos.y - this.mousePos.y
      : this.mousePos.x - this.mouseStartPos.x;

    const valueDelta = this._usesRangeSlider()
      ? Math.round((this._config.max - this._config.min) * delta / size)
      : Math.round(100 * delta / size);

    if (!Number.isFinite(valueDelta)) return;

    this.currentValue = this.oldValue + valueDelta;
    this._checklimits();
    this._updateSlider();
    this.hasValidSlide = true;
  }

  _updateContainerSize(): boolean {
    this.containerWidth = this.shadowRoot?.getElementById('container')?.clientWidth ?? 0;
    this.containerHeight = this.shadowRoot?.getElementById('container')?.clientHeight ?? 0;
    return this._config.vertical ? this.containerHeight > 0 : this.containerWidth > 0;
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
    this._clearImmediateUpdate();
    this._shouldUpdate = true;
    this.requestUpdate();
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
    if (this.pressTimeout) clearTimeout(this.pressTimeout);
    this.pressTimeout = window.setTimeout(() => this.setAttribute('pressed', ''), this._config.min_slide_time)
    this.setAttribute('half-pressed', '')
  }

  _unpress(): void {
    if (this.pressTimeout) clearTimeout(this.pressTimeout);
    this.removeAttribute('pressed');
    this.removeAttribute('half-pressed');
  }

  _checklimits(): void {
    const min = this._config.min ?? 0;
    const max = this._config.max ?? 100;
    if (this.currentValue < min) {
      this.currentValue = min;
      this._resetTrack();
    }
    if (this.currentValue > max) {
      this.currentValue = max;
      this._resetTrack();
    }
  }

  _updateSlider(): void {
    const sliderPercentage = this._getSliderPercentage();

    this.style.setProperty('--bsc-percent', sliderPercentage + '%');
    const percentage = this?.shadowRoot?.getElementById('percentage');
    percentage && (percentage.innerText = this._getSliderLabel(sliderPercentage));
  }

  _getSliderLabel(sliderPercentage: number): string {
    if (this._config.attribute === 'color_temp_kelvin') {
      return `${Math.round(this.currentValue)}K`;
    }

    return `${Math.round(sliderPercentage)}%`;
  }

  _getSliderPercentage(): number {
    if (!this._usesRangeSlider()) return this.currentValue;

    const range = this._config.max - this._config.min;
    if (range <= 0) return 0;

    const percentage = 100 * (this.currentValue - this._config.min) / range;
    if (!Number.isFinite(percentage)) return 0;

    return Math.max(0, Math.min(100, percentage));
  }

  _usesRangeSlider(): boolean {
    return this._config.attribute === 'color_temp_kelvin';
  }

  _updateColors(): void {
    let color = 'var(--bsc-color)';
    let brightness = '0%';
    let brightnessUI = '50%';
    let isOn = false;

    const stateObj = this._effectiveState;
    const status = this._effectiveStatus;

    if (status == 'on') {
      const stateColor = stateObj.attributes?.rgb_color ?? [255, 255, 255];
      const stateBrightness = stateObj.attributes?.brightness ?? 255;
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

    const percentage = this?.shadowRoot?.getElementById('percentage');
    if (!isOn) {
      const stateText = stateObj
        ? (this._hass && typeof this._hass.formatEntityState === 'function'
            ? this._hass.formatEntityState(stateObj)
            : stateObj.state)
        : localize('common.off');
      percentage && (percentage.innerText = stateText);
    }
    this.style.setProperty('--bsc-entity-color', color);
    this.style.setProperty('--bsc-brightness', brightness);
    this.style.setProperty('--bsc-brightness-ui', brightnessUI);
    this.style.setProperty('--bsc-icon-brightness', this._config.constant_icon_color === true ? '100%' : brightnessUI);
    if (isOn && this._config.icon_color) {
      this.style.setProperty('--bsc-icon-color', this._config.icon_color);
    } else if (!isOn && this._config.icon_off_color) {
      this.style.setProperty('--bsc-icon-color', this._config.icon_off_color);
    } else {
      this.style.removeProperty('--bsc-icon-color');
    }
  }

  _getValue(): void {
    if (!this._shouldUpdate) return;

    const stateObj = this._effectiveState;
    const status = this._effectiveStatus;
    const attr = this._config?.attribute;
    let _value = 0;

    if (status == 'unavailable') {
      this._config.min = 0;
      this._config.max = 0;
      this.style.setProperty('--bsc-opacity', '0.5');
    } else {
      this._config.min = this._config.original_min;
      this._config.max = this._config.original_max;
      this.style.removeProperty('--bsc-opacity');
    }

    if (status != 'on') {
      _value = 0;
    } else {
      switch (attr) {
        case 'brightness':
          _value = Math.round(100 * (stateObj.attributes.brightness ?? 255) / 255)
          break;
        case 'red':
        case 'green':
        case 'blue':
          const rgb = stateObj.attributes.rgb_color ?? [255, 255, 255];
          if (attr === 'red') _value = rgb[0];
          if (attr === 'green') _value = rgb[1];
          if (attr === 'blue') _value = rgb[2];
          _value = Math.ceil(100 * _value / 255);
          break;
        case 'hue':
        case 'saturation':
          const hs = stateObj.attributes.hs_color ?? [100, 100];
          if (attr === 'hue') _value = hs[0];
          if (attr === 'saturation') _value = hs[1];
          break;
        case 'color_temp_kelvin':
          _value = stateObj.attributes[attr] ?? this._config.min ?? 0;
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
        value = Math.ceil(value / 100.0 * 255);
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
      case 'color_temp_kelvin':
        value = Math.round(value);
        break;
    }

    const params: Record<string, any> = {
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
    if (this.updateTimeout) clearTimeout(this.updateTimeout);
    if (!this._shouldUpdate) return;
    this.shadowRoot?.getElementById('slider')?.classList?.remove('animate')
    this._shouldUpdate = false;
  }

  _scheduleImmediateUpdate(): void {
    if (!this._config.immediate_update || this.immediateUpdateTimeout) return;

    this.immediateUpdateTimeout = window.setTimeout(() => {
      this.immediateUpdateTimeout = 0;
      if (!this.isHold && (Date.now() - this.trackingStartTime) > this._config.min_slide_time) {
        this._setValue();
      }
    }, 300);
  }

  _clearImmediateUpdate(): void {
    if (this.immediateUpdateTimeout) {
      clearTimeout(this.immediateUpdateTimeout);
      this.immediateUpdateTimeout = 0;
    }
  }

  _startUpdates(settle = false): void {
    if (this.updateTimeout) clearTimeout(this.updateTimeout);
    this.updateTimeout = window.setTimeout(() => {
      this._shouldUpdate = true;
      this.shadowRoot?.getElementById('slider')?.classList?.add('animate')
      this.requestUpdate();
    }, settle ? this._config.settle_time : 0);

  }

  protected updated(): void {
    this._updateContainerSize();
    this._getValue();
    this._updateColors();
  }

  protected render(): TemplateResult | void {
    if (this._entity && !(this._entity in (this._hass?.states ?? {}))) {
      return this._showError(`${localize('common.no_entity')}: ${this._entity}`);
    }

    const stateObj = this._effectiveState;
    const status = this._effectiveStatus;
    const name = this._effectiveName;
    const entity = this._entity || 'light.example_light';

    const colorize = (this._config.colorize && true) ?? false;

    const showPercentage = (this._config.show_percentage && true) ?? false;

    const boldText = (this._config.bold_text && true) ?? false;

    const scale = this._config.no_scale !== true;

    const transitionAnimation = this._config.no_transition_animation !== true;

    const vertical = this._config.vertical === true;

    this._setStyleProperty('--bsc-background', this._config.background_color);
    this._setStyleProperty('--bsc-primary-text-color', this._config.text_color);
    this._setStyleProperty('--bsc-slider-color', this._config.color);
    this._setStyleProperty('--bsc-border-color', this._config.border_color);
    this._setStyleProperty('--bsc-border-radius', this._config.border_radius, this._normalizeCssLength);
    this._setStyleProperty('--bsc-border-style', this._config.border_style);
    this._setStyleProperty('--bsc-border-width', this._config.border_width, this._normalizeCssLength);
    this._setStyleProperty('--bsc-height', this._config.height, this._normalizeCssLength);
    this._setStyleProperty('--bsc-width', this._config.width, this._normalizeCssLength);
    this._setStyleProperty('--bsc-icon-size', this._config.icon_size, this._normalizeCssLength);
    this._setStyleProperty('--bsc-text-size', this._config.text_size, this._normalizeCssLength);
    this.style.setProperty('--bsc-press-transition', scale ? 'transform 0.1s ease-out' : 'none');
    this.style.setProperty('--bsc-half-pressed-transform', scale ? 'scale(0.99)' : 'none');
    this.style.setProperty('--bsc-pressed-transform', scale ? 'scale(0.98)' : 'none');
    this.style.setProperty('--bsc-color-transition', transitionAnimation ? 'background-color 1s ease, filter 1s ease' : 'none');
    this.style.setProperty('--bsc-slider-transition', transitionAnimation ? 'right 1s ease, background-color 1s ease, filter 1s ease' : 'none');
    this.style.setProperty('--bsc-vertical-slider-transition', transitionAnimation ? 'top 1s ease, background-color 1s ease, filter 1s ease' : 'none');
    this.style.setProperty('--bsc-icon-transition', transitionAnimation ? 'color 0.3s ease-out' : 'none');

    return html`
      <ha-card
        id="container"
        class="${vertical ? 'vertical' : ''}"
        tabindex="0"
        >
        <div id="slider" class="animate ${colorize ? 'colorize' : ''}"></div>
        <ha-state-icon
          id="icon"
          .icon=${this._config.icon}
          .state=${stateObj}
          .hass=${this._hass}
          .stateObj=${stateObj}
          data-domain=${entity.split(".")[0]}
          data-state=${ifDefined(status)}
        ></ha-state-icon>
        <div id="content">
          <p id="label" class="${boldText ? 'bold' : ''}">
            <span id="name">${name}</span>
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

  _normalizeCssLength(value: string | number): string {
    return typeof value === 'number' ? `${value}px` : value;
  }

  _getNumericCssLength(value?: string | number): number | undefined {
    if (typeof value === 'number') return value;
    if (typeof value !== 'string') return undefined;

    const match = value.trim().match(/^(\d+(?:\.\d+)?)px$/);
    return match ? Number(match[1]) : undefined;
  }

  // private _showWarning(warning: string): TemplateResult {
  //   return html`
  //     <hui-warning>${warning}</hui-warning>
  //   `;
  // }

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
        --bsc-icon-brightness: var(--bsc-brightness-ui);
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-icon-size: 24px;
        --bsc-text-size: inherit;
        --bsc-press-transition: transform 0.1s ease-out;
        --bsc-half-pressed-transform: scale(0.99);
        --bsc-pressed-transform: scale(0.98);
        --bsc-color-transition: background-color 1s ease, filter 1s ease;
        --bsc-slider-transition: right 1s ease, background-color 1s ease, filter 1s ease;
        --bsc-vertical-slider-transition: top 1s ease, background-color 1s ease, filter 1s ease;
        --bsc-icon-transition: color 0.3s ease-out;
        --bsc-opacity: 1;

        width: 100%;
        height: 100%;
        display: flex;
        transition: var(--bsc-press-transition);
        user-select: none;
      }

      :host([half-pressed]) {
        transform: var(--bsc-half-pressed-transform);
      }

      :host([pressed]) {
        transform: var(--bsc-pressed-transform);
      }

      #container {
        width: var(--bsc-width, 100%);
        height: var(--bsc-height, 100%);
        min-height: var(--bsc-height, 60px);
        min-width: var(--bsc-width, 180px);
        position: relative;
        overflow: hidden;
        opacity: var(--bsc-opacity);
        background: var(--bsc-background);
        border-color: var(--bsc-border-color);
        border-radius: var(--bsc-border-radius);
        border-style: var(--bsc-border-style);
        border-width: var(--bsc-border-width);
        transition: none;
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
      }

      #container.vertical {
        min-height: var(--bsc-height, 180px);
        min-width: var(--bsc-width, 60px);
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

      #container.vertical #slider {
        height: auto;
        right: 0;
        top: calc(100% - var(--bsc-percent));
        bottom: 0;
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color, var(--bsc-slider-color));
        filter: brightness(var(--bsc-brightness-ui));
        transition: var(--bsc-color-transition);
      }

      #slider.animate {
        transition: var(--bsc-slider-transition);
      }

      #container.vertical #slider.animate {
        transition: var(--bsc-vertical-slider-transition);
      }

      #icon {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 24px;
        width: var(--bsc-icon-size);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color, var(--bsc-entity-color));
        filter: brightness(var(--bsc-icon-brightness));
        transition: var(--bsc-icon-transition);
        --mdc-icon-size: var(--bsc-icon-size);
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 24px 0 calc(48px + var(--bsc-icon-size));
        box-sizing: border-box;
      }

      #container.vertical #icon {
        top: 24px;
        right: 0;
        bottom: auto;
        left: 0;
        width: 100%;
      }

      #container.vertical #content {
        justify-content: center;
        align-items: flex-end;
        padding: 0 12px 24px;
        text-align: center;
      }

      #label {
        display: flex;
        flex-direction: column;
        font-size: var(--bsc-text-size);
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
