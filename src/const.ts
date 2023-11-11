import { BigSliderCardConfig } from "./types";

export const DEFAULT_ATTRIBUTE = 'brightness';
export const SETTLE_TIME = 3000;
export const HOLD_TIME = 600;
export const MIN_SLIDE_TIME = 0;
export const TAP_THRESHOLD = 5;
export const MIN = 0;
export const MAX = 100;
export const DEFAULT_CONFIG: BigSliderCardConfig = {
  type: 'custom:big-slider-card',
  attribute: DEFAULT_ATTRIBUTE,
  tap_action: {
    action: 'toggle',
    haptic: 'light',
  },
  hold_action: {
    action: 'more-info',
  },
  hold_time: HOLD_TIME,
  settle_time: SETTLE_TIME,
  min_slide_time: MIN_SLIDE_TIME,
  min: MIN,
  max: MAX,
}
