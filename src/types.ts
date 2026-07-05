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
  attribute: string;
  transition?: number;
  height?: number | string;
  width?: number | string;
  color?: string;
  background_color?: string;
  text_color?: string;
  icon_color?: string;
  icon_off_color?: string;
  constant_icon_color?: boolean;
  show_icon_halo?: boolean;
  use_alternative_slider_color?: boolean;
  border_color?: string;
  border_radius?: number | string;
  border_style?: string;
  border_width?: number | string;
  icon_size?: number | string;
  text_size?: number | string;
  colorize?: boolean;
  icon?: string;
  show_percentage?: boolean;
  bold_text?: boolean;
  no_scale?: boolean;
  no_transition_animation?: boolean;
  immediate_update?: boolean;
  vertical?: boolean;
  min: number;
  max: number;
  original_min?: number;
  original_max?: number;
  min_slide_time: number;
  hold_time: number;
  settle_time: number;
  tap_action: ActionConfig;
  hold_action?: ActionConfig;
}
