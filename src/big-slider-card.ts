
import { SlideGesture, type SlideGestureEvent } from '@nicufarmache/slide-gesture';
import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from './ha-types';
import type { BigSliderCardConfig, MousePos } from './types';
import { DEFAULT_CONFIG, SUPPORTED_DOMAINS, TAP_THRESHOLD } from './const';
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

type SliderRange = {
  min: number;
  max: number;
};

export class BigSliderCard extends LitElement {
  @state() private _config: BigSliderCardConfig = DEFAULT_CONFIG;
  @state() private _entity?: string;
  @state() private _state?: HassEntity;
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
  private slideGesture?: SlideGesture;
  private isTap: boolean = false;
  private hasValidSlide: boolean = false;
  private hasCustomMin: boolean = false;
  private hasCustomMax: boolean = false;

  public static getStubConfig(
    _hass: HomeAssistant,
    entities: string[],
  ): Partial<BigSliderCardConfig> {
    const supportedEntities = entities.filter(entity => SUPPORTED_DOMAINS.includes(entity.split('.')[0])).sort();
    const randomEntity = supportedEntities[Math.floor(Math.random() * supportedEntities.length)];
    return {
      type: 'custom:big-slider-card',
      ...(randomEntity ? { entity: randomEntity } : {}),
    };
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
    const defaultHeight = this._config.vertical ? 180 : 56;
    const height = this._getNumericCssLength(this._config.height ?? defaultHeight);
    return Math.max(1, Math.ceil((height ?? defaultHeight) / 50));
  }

  public static getConfigForm() {
    return {
      schema: [
        {
          name: 'entity',
          required: true,
          selector: { entity: { domain: SUPPORTED_DOMAINS } },
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
                    { value: 'value', label: localize('editor.attributes.value') },
                    { value: 'percentage', label: localize('editor.attributes.percentage') },
                    { value: 'position', label: localize('editor.attributes.position') },
                    { value: 'tilt_position', label: localize('editor.attributes.tilt_position') },
                    { value: 'temperature', label: localize('editor.attributes.temperature') },
                    { value: 'humidity', label: localize('editor.attributes.humidity') },
                    { value: 'volume', label: localize('editor.attributes.volume') },
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
              name: 'show_icon_halo',
              selector: { boolean: {} },
            },
            {
              name: 'use_alternative_slider_color',
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
              name: 'icon_box_size',
              selector: {
                number: {
                  mode: 'box',
                  min: 24,
                  max: 96,
                  unit_of_measurement: 'px',
                },
              },
            },
            {
              name: 'slider_opacity',
              selector: {
                number: {
                  mode: 'box',
                  min: 0,
                  max: 1,
                  step: 0.05,
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
          show_icon_halo: localize('editor.labels.show_icon_halo'),
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
          icon_box_size: localize('editor.labels.icon_box_size'),
          slider_opacity: localize('editor.labels.slider_opacity'),
          use_alternative_slider_color: localize('editor.labels.use_alternative_slider_color'),
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

    const domain = this._getDomain(config.entity);
    if (domain && !SUPPORTED_DOMAINS.includes(domain)) {
      throw new Error(localize('errors.unsupported_domain'));
    }

    const attribute = config.attribute ?? this._getDefaultAttribute(domain);
    const attributeDefaults = this._getAttributeDefaults(attribute, domain);

    this.hasCustomMin = config.min !== undefined;
    this.hasCustomMax = config.max !== undefined;
    this._config = { ...DEFAULT_CONFIG, attribute, ...attributeDefaults, ...config };
    this._entity = this._config.entity;
    this._config.original_min = this._config.min;
    this._config.original_max = this._config.max;

    if (this.isConnected) {
      this._setupSlideGesture();
    }
  }

  _getAttributeDefaults(attribute: string, _domain?: string): Partial<BigSliderCardConfig> {
    switch (attribute) {
      case 'color_temp_kelvin':
        return { min: 2200, max: 6500 };
      default:
        return {};
    }
  }

  _getDomain(entityId?: string): string {
    return entityId?.split('.')[0] ?? 'light';
  }

  _getDefaultAttribute(domain?: string): string {
    switch (domain) {
      case 'number':
      case 'input_number':
        return 'value';
      case 'fan':
        return 'percentage';
      case 'cover':
      case 'valve':
        return 'position';
      case 'media_player':
        return 'volume';
      case 'climate':
      case 'water_heater':
        return 'temperature';
      case 'humidifier':
        return 'humidity';
      default:
        return DEFAULT_CONFIG.attribute;
    }
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    if (!this._entity) return;
    this._state = hass.states[this._entity];
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

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('contextmenu', this._handleContextMenu);
    this._setupSlideGesture();
  }

  private _setupSlideGesture(): void {
    this.slideGesture?.removeListeners();
    this.slideGesture = new SlideGesture(this, this._handlePointer.bind(this), {
      touchActions: this._config.vertical ? 'pan-x' : 'pan-y',
      stopScrollDirection: this._config.vertical ? 'vertical' : 'horizontal'
    });
  }

  disconnectedCallback(): void {
    this.removeEventListener('contextmenu', this._handleContextMenu);
    this._clearImmediateUpdate();
    this.slideGesture?.removeListeners();
    this.slideGesture = undefined;
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

  _handlePointer = (evt: PointerEvent, extra: SlideGestureEvent): void => {
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

    const range = this._getRange();
    const valueDelta = this._usesRangeSlider()
      ? this._roundValue((range.max - range.min) * delta / size)
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
    const { min, max } = this._getRange();
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
    const unit = this._getValueUnit();

    if (this._usesRangeSlider()) {
      return `${this._formatValue(this.currentValue)}${unit}`;
    }

    return `${Math.round(sliderPercentage)}%`;
  }

  _getSliderPercentage(): number {
    if (!this._usesRangeSlider()) {
      return Math.max(0, Math.min(100, this.currentValue));
    }

    const { min, max } = this._getRange();
    const range = max - min;
    if (range <= 0) return 0;

    const percentage = 100 * (this.currentValue - min) / range;
    if (!Number.isFinite(percentage)) return 0;

    return Math.max(0, Math.min(100, percentage));
  }

  _usesRangeSlider(): boolean {
    const { min, max } = this._getRange();
    return this._config.attribute === 'color_temp_kelvin' || min !== 0 || max !== 100;
  }

  _getRange(): SliderRange {
    const min = this._config.min ?? 0;
    const max = this._config.max ?? 100;
    return { min, max };
  }

  _getValueUnit(): string {
    const attr = this._config.attribute;
    const stateObj = this._effectiveState;

    if (attr === 'color_temp_kelvin') return 'K';
    if (attr === 'percentage' || attr === 'position' || attr === 'tilt_position' || attr === 'humidity' || attr === 'volume') return '%';

    return stateObj.attributes?.unit_of_measurement ?? '';
  }

  _formatValue(value: number): string {
    if (!Number.isFinite(value)) return '0';
    return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(1)));
  }

  _roundValue(value: number): number {
    const step = Number(this._effectiveState.attributes?.step ?? this._effectiveState.attributes?.target_temp_step);
    if (!Number.isFinite(step) || step <= 0) {
      return Math.round(value);
    }

    const decimals = this._getDecimalPlaces(step);
    return Number((Math.round(value / step) * step).toFixed(decimals));
  }

  _getDecimalPlaces(value: number): number {
    const valueString = String(value);
    return valueString.includes('.') ? valueString.split('.')[1].length : 0;
  }

  _updateColors(): void {
    let color = 'var(--bsc-color)';
    let brightness = '0%';
    let brightnessUI = '50%';
    let isActive = false;

    const stateObj = this._effectiveState;
    const status = this._effectiveStatus;
    const domain = this._getDomain(stateObj.entity_id);

    if (this._isActiveState(status)) {
      const stateColor = domain === 'light' ? stateObj.attributes?.rgb_color : undefined;
      const stateBrightness = stateObj.attributes?.brightness ?? 255;
      isActive = true;
      if (stateColor) {
        color = `rgb(${stateColor.join(',')})`;
      } else {
        color = 'var(--bsc-active-color)';
      }
      if (stateBrightness) {
        brightness = `${Math.ceil(100 * stateBrightness / 255)}%`
        brightnessUI = `${Math.ceil(100 * stateBrightness / 510 + 50)}%`
      }
    } else {
      color = 'var(--bsc-off-color)';
    }

    const percentage = this?.shadowRoot?.getElementById('percentage');
    if (domain === 'light' && !isActive) {
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
    this.style.setProperty('--bsc-icon-background', this._config.show_icon_halo === true
      ? 'color-mix(in srgb, var(--bsc-icon-color, var(--bsc-entity-color)) 20%, transparent)'
      : 'transparent'
    );
    this.style.setProperty('--bsc-icon-off-background', this._config.show_icon_halo === true
      ? 'color-mix(in srgb, var(--bsc-off-color) 20%, transparent)'
      : 'transparent'
    );
    if (isActive && this._config.icon_color) {
      this.style.setProperty('--bsc-icon-color', this._config.icon_color);
    } else if (!isActive && this._config.icon_off_color) {
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

    if (this._isUnavailable(status)) {
      this._config.min = 0;
      this._config.max = 0;
      this.style.setProperty('--bsc-opacity', '0.5');
    } else {
      const range = this._getEntityRange(stateObj);
      this._config.min = this.hasCustomMin ? (this._config.original_min ?? DEFAULT_CONFIG.min) : range.min;
      this._config.max = this.hasCustomMax ? (this._config.original_max ?? DEFAULT_CONFIG.max) : range.max;
      this.style.removeProperty('--bsc-opacity');
    }

    this.currentValue = this._getEntityValue(stateObj, attr);
    this._checklimits();
    this._updateSlider();
  }

  _setValue(): void {
    if (!this._state) return;

    let value = this._roundValue(this.currentValue);
    let attr = this._config.attribute;
    const domain = this._getDomain(this._state.entity_id);

    if (domain !== 'light') {
      this._setDomainValue(domain, attr, value);
      return;
    }

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

  _getEntityValue(stateObj: HassEntity, attr: string): number {
    const domain = this._getDomain(stateObj.entity_id);
    const status = stateObj.state;

    if (this._isUnavailable(status)) return this._config.min ?? 0;

    if (domain === 'light' && status !== 'on') return 0;

    switch (domain) {
      case 'light':
        return this._getLightValue(stateObj, attr);
      case 'number':
      case 'input_number':
        return this._toNumber(stateObj.state, this._config.min ?? 0);
      case 'fan':
        return this._toNumber(stateObj.attributes?.percentage, 0);
      case 'cover':
        return attr === 'tilt_position'
          ? this._toNumber(stateObj.attributes?.current_tilt_position, 0)
          : this._toNumber(stateObj.attributes?.current_position, 0);
      case 'valve':
        return this._toNumber(stateObj.attributes?.current_position ?? stateObj.attributes?.position, 0);
      case 'media_player':
        return Math.round(100 * this._toNumber(stateObj.attributes?.volume_level, 0));
      case 'climate':
        return attr === 'humidity'
          ? this._toNumber(stateObj.attributes?.humidity, this._config.min ?? 0)
          : this._toNumber(stateObj.attributes?.temperature, this._config.min ?? 0);
      case 'humidifier':
        return this._toNumber(stateObj.attributes?.humidity, this._config.min ?? 0);
      case 'water_heater':
        return this._toNumber(stateObj.attributes?.temperature, this._config.min ?? 0);
      default:
        return this._toNumber(stateObj.state, this._config.min ?? 0);
    }
  }

  _getLightValue(stateObj: HassEntity, attr: string): number {
    switch (attr) {
      case 'brightness':
        return Math.round(100 * (stateObj.attributes.brightness ?? 255) / 255);
      case 'red':
      case 'green':
      case 'blue':
        const rgb = stateObj.attributes.rgb_color ?? [255, 255, 255];
        if (attr === 'red') return Math.ceil(100 * rgb[0] / 255);
        if (attr === 'green') return Math.ceil(100 * rgb[1] / 255);
        return Math.ceil(100 * rgb[2] / 255);
      case 'hue':
      case 'saturation':
        const hs = stateObj.attributes.hs_color ?? [100, 100];
        return attr === 'hue' ? hs[0] : hs[1];
      case 'color_temp_kelvin':
        return this._toNumber(stateObj.attributes[attr], this._config.min ?? 0);
      default:
        return 0;
    }
  }

  _setDomainValue(domain: string, attr: string, value: number): void {
    const entityId = this._state!.entity_id;
    const roundedValue = this._roundValue(value);

    switch (domain) {
      case 'number':
      case 'input_number':
        this._hass!.callService(domain, 'set_value', {
          entity_id: entityId,
          value: roundedValue,
        });
        return;
      case 'fan':
        this._hass!.callService('fan', roundedValue <= 0 ? 'turn_off' : 'set_percentage', {
          entity_id: entityId,
          ...(roundedValue > 0 ? { percentage: Math.round(roundedValue) } : {}),
        });
        return;
      case 'cover':
        this._hass!.callService('cover', attr === 'tilt_position' ? 'set_cover_tilt_position' : 'set_cover_position', {
          entity_id: entityId,
          [attr === 'tilt_position' ? 'tilt_position' : 'position']: Math.round(roundedValue),
        });
        return;
      case 'valve':
        this._hass!.callService('valve', 'set_valve_position', {
          entity_id: entityId,
          position: Math.round(roundedValue),
        });
        return;
      case 'media_player':
        this._hass!.callService('media_player', 'volume_set', {
          entity_id: entityId,
          volume_level: Math.max(0, Math.min(1, roundedValue / 100)),
        });
        return;
      case 'climate':
        this._hass!.callService('climate', attr === 'humidity' ? 'set_humidity' : 'set_temperature', {
          entity_id: entityId,
          [attr === 'humidity' ? 'humidity' : 'temperature']: roundedValue,
        });
        return;
      case 'humidifier':
        this._hass!.callService('humidifier', 'set_humidity', {
          entity_id: entityId,
          humidity: Math.round(roundedValue),
        });
        return;
      case 'water_heater':
        this._hass!.callService('water_heater', 'set_temperature', {
          entity_id: entityId,
          temperature: roundedValue,
        });
        return;
    }
  }

  _getEntityRange(stateObj: HassEntity): SliderRange {
    const domain = this._getDomain(stateObj.entity_id);
    const attr = this._config.attribute;

    if (attr === 'color_temp_kelvin') {
      return { min: 2200, max: 6500 };
    }

    switch (domain) {
      case 'number':
      case 'input_number':
        return {
          min: this._toNumber(stateObj.attributes?.min, DEFAULT_CONFIG.min),
          max: this._toNumber(stateObj.attributes?.max, DEFAULT_CONFIG.max),
        };
      case 'climate':
      case 'water_heater':
        if (attr === 'humidity') return { min: 0, max: 100 };
        return {
          min: this._toNumber(stateObj.attributes?.min_temp, DEFAULT_CONFIG.min),
          max: this._toNumber(stateObj.attributes?.max_temp, DEFAULT_CONFIG.max),
        };
      default:
        return { min: DEFAULT_CONFIG.min, max: DEFAULT_CONFIG.max };
    }
  }

  _toNumber(value: any, fallback: number): number {
    const numericValue = Number(value);
    return Number.isFinite(numericValue) ? numericValue : fallback;
  }

  _isUnavailable(status: string): boolean {
    return status === 'unavailable' || status === 'unknown';
  }

  _isActiveState(status: string): boolean {
    return !['off', 'unavailable', 'unknown'].includes(status);
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
    this._updateHostAttributes();
  }

  _updateHostAttributes(): void {
    const stateObj = this._effectiveState;
    this.dataset.domain = this._getDomain(stateObj.entity_id);
    this.dataset.state = this._effectiveStatus;
  }

  protected render(): TemplateResult | void {
    if (this._entity && !(this._entity in (this._hass?.states ?? {}))) {
      return this._showError(`${localize('common.no_entity')}: ${this._entity}`);
    }

    const stateObj = this._effectiveState;
    const status = this._effectiveStatus;
    const name = this._effectiveName;
    const entity = this._entity || 'light.example_light';
    const domain = entity.split(".")[0];

    const colorize = (this._config.colorize && true) ?? false;

    const showPercentage = (this._config.show_percentage && true) ?? false;

    const boldText = (this._config.bold_text && true) ?? false;

    const scale = this._config.no_scale !== true;

    const transitionAnimation = this._config.no_transition_animation !== true;

    const vertical = this._config.vertical === true;
    const defaultSliderColor = this._config.use_alternative_slider_color === true
      ? 'var(--paper-slider-active-color, #f9d2b0)'
      : 'var(--bsc-active-color)';

    this.style.setProperty('--bsc-default-slider-color', defaultSliderColor);
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
    this._setStyleProperty('--bsc-icon-box-size', this._config.icon_box_size, this._normalizeCssLength);
    this._setStyleProperty('--bsc-slider-opacity', this._config.slider_opacity);
    this._setStyleProperty('--bsc-text-size', this._config.text_size, this._normalizeCssLength);
    this.style.setProperty('--bsc-press-transition', scale ? 'transform 0.1s ease-out' : 'none');
    this.style.setProperty('--bsc-half-pressed-transform', scale ? 'scale(0.99)' : 'none');
    this.style.setProperty('--bsc-pressed-transform', scale ? 'scale(0.98)' : 'none');
    this.style.setProperty('--bsc-color-transition', transitionAnimation ? 'background-color 180ms ease-in-out, filter 180ms ease-in-out' : 'none');
    this.style.setProperty('--bsc-slider-transition', transitionAnimation ? 'right 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out' : 'none');
    this.style.setProperty('--bsc-vertical-slider-transition', transitionAnimation ? 'top 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out' : 'none');
    this.style.setProperty('--bsc-icon-transition', transitionAnimation ? 'color 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out' : 'none');

    return html`
      <ha-card
        id="container"
        class="${vertical ? 'vertical' : ''}"
        data-domain=${ifDefined(domain)}
        data-state=${ifDefined(status)}
        tabindex="0"
        >
        <div id="slider" class="animate ${colorize ? 'colorize' : ''}"></div>
        <ha-state-icon
          id="icon"
          .icon=${this._config.icon}
          .state=${stateObj}
          .hass=${this._hass}
          .stateObj=${stateObj}
          data-domain=${ifDefined(domain)}
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
    } else {
      this.style.removeProperty(name);
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
        --bsc-background: var(--card-background-color);
        --bsc-active-color: var(--state-light-on-color, var(--state-light-active-color, var(--state-active-color)));
        --bsc-default-slider-color: var(--bsc-active-color);
        --bsc-slider-color: var(--bsc-default-slider-color);
        --bsc-slider-opacity: 0.3;
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-icon-brightness: var(--bsc-brightness-ui);
        --bsc-color: var(--bsc-active-color);
        --bsc-off-color: var(--state-inactive-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        --bsc-border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg));
        --bsc-border-style: var(--ha-card-border-style, solid);
        --bsc-border-width: var(--ha-card-border-width, 1px);
        --bsc-icon-box-size: 36px;
        --bsc-icon-size: 24px;
        --bsc-icon-background: transparent;
        --bsc-icon-off-background: transparent;
        --bsc-text-size: var(--ha-font-size-m, 14px);
        --bsc-secondary-text-size: var(--ha-font-size-s, 12px);
        --bsc-press-transition: transform 0.1s ease-out;
        --bsc-half-pressed-transform: scale(0.99);
        --bsc-pressed-transform: scale(0.98);
        --bsc-color-transition: background-color 180ms ease-in-out, filter 180ms ease-in-out;
        --bsc-slider-transition: right 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out;
        --bsc-vertical-slider-transition: top 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out;
        --bsc-icon-transition: color 180ms ease-in-out, background-color 180ms ease-in-out, filter 180ms ease-in-out;
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
        min-height: var(--bsc-height, 56px);
        min-width: var(--bsc-width, 0);
        position: relative;
        overflow: hidden;
        opacity: var(--bsc-opacity);
        background: var(--bsc-background);
        border-color: var(--bsc-border-color);
        border-radius: var(--bsc-border-radius);
        border-style: var(--bsc-border-style);
        border-width: var(--bsc-border-width);
        transition: none;
        box-sizing: border-box;
        z-index: 1; /* fix safari bug with filter transition https://stackoverflow.com/a/27935035 */
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
        opacity: var(--bsc-slider-opacity);
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
        left: 10px;
        width: var(--bsc-icon-box-size);
        height: var(--bsc-icon-box-size);
        margin: auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bsc-icon-color, var(--bsc-entity-color));
        background: var(--bsc-icon-background);
        border-radius: var(--ha-tile-icon-border-radius, var(--ha-border-radius-pill, 999px));
        box-sizing: border-box;
        filter: brightness(var(--bsc-icon-brightness));
        transition: var(--bsc-icon-transition);
        --mdc-icon-size: var(--bsc-icon-size);
      }

      #icon[data-state="off"],
      #icon[data-state="unavailable"],
      #icon[data-state="unknown"] {
        background: var(--bsc-icon-off-background);
      }

      #content {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10px 0 calc(20px + var(--bsc-icon-box-size));
        box-sizing: border-box;
        min-width: 0;
      }

      #container.vertical #icon {
        top: 24px;
        right: 0;
        bottom: auto;
        left: 0;
        width: var(--bsc-icon-box-size);
        height: var(--bsc-icon-box-size);
        margin: 0 auto;
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
        line-height: var(--ha-line-height-normal, 20px);
        margin: 0;
        min-width: 0;
        width: 100%;
      }

      #label.bold {
        font-weight: bold;
      }

      #name {
        color: var(--bsc-primary-text-color);
        line-height: var(--ha-line-height-normal, 20px);
        letter-spacing: 0.1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #percentage {
        color: var(--bsc-secondary-text-color);
        font-size: var(--bsc-secondary-text-size);
        line-height: var(--ha-line-height-condensed, 16px);
        letter-spacing: 0.4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `;
  }
}
