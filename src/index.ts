import { BigSliderCard } from './big-slider-card';
import { version } from '../package.json';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  BIG-SLIDER-CARD \n%c  ${localize('common.version')} ${version}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

customElements.define("big-slider-card", BigSliderCard);

(window as any).customCards = (window as any).customCards ?? [];
(window as any).customCards.push({
  type: 'big-slider-card',
  name: 'Big Slider Card',
  description: 'Big slider card for light entities.',
});