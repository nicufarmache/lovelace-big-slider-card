import { HomeAssistant } from "./ha-types";
import { LitElement, TemplateResult, html } from "lit";
import { BigSliderCardConfig } from "./types";
import { fireEvent } from "custom-card-helpers";

const SCHEMA = [
  { name: "entity", selector: { entity: { domain: "light" } } },
  { name: "name", selector: { text: {} } },
  { name: "icon", selector: { icon: {} }, context: { icon_entity: "entity" } },
  { name: "colorize", selector: { boolean: {} } },
  { name: "show_percentage", selector: { boolean: {} } },
  { name: "bold_text", selector: { boolean: {} } },
  { name: "tap_action", selector: { "ui-action": {} } },
  { name: "hold_action", selector: { "ui-action": {} } }
]

export class BigSliderCardEditor extends LitElement {
  private _config?: BigSliderCardConfig;
  private hass!: HomeAssistant;

  protected setConfig(config: BigSliderCardConfig) {
    this._config = config;
  }

  protected render(): TemplateResult | void {
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(e: CustomEvent): void {
    fireEvent(this, "config-changed", { config: e.detail.value });
  }
}