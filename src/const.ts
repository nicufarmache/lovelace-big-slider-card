import { BigSliderCardConfig } from "./types";

export const CARD_VERSION = '1.2.9';
export const DEFAULT_ATTRIBUTE = 'brightness';
export const SETTLE_TIME = 3000;
export const HOLD_TIME = 600;
export const MIN_SLIDE_TIME = 0;
export const TAP_THRESHOLD = 5;
// Fingers wobble far more than a mouse does, so a touch or pen gesture needs
// more slack before it counts as a drag. Roughly matches browser touch slop.
export const TOUCH_TAP_THRESHOLD = 10;
// Each end takes a band of this size, so anything at or above 50 would
// leave no usable travel between them.
export const MAX_EDGE_MARGIN = 25;
// A value this close to an end counts as being at it. Lights commonly top out
// at 254 of 255, which reads as 99.6% and would otherwise leave the fill a
// whole margin short of full.
export const EDGE_FLUSH_EPSILON = 0.5;
export const MIN = 0;
export const MAX = 100;
export const SUPPORTED_DOMAINS = [
  'light',
  'number',
  'input_number',
  'fan',
  'cover',
  'climate',
  'humidifier',
  'water_heater',
  'valve',
  'media_player',
];
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
