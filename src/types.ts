import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'big-slider-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface MousePos {
  x: number;
  y: number;
}
export interface BigSliderCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  entity?: string;
  attribute?: string;
  transition?: number;
  hold_time?: number;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}
