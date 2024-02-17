import { BigSliderCard } from './big-slider-card';
import { CARD_VERSION } from './const';
import { BigSliderCardEditor } from './editor';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  BIG-SLIDER-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

customElements.define("big-slider-card", BigSliderCard);
customElements.define("big-slider-card-editor", BigSliderCardEditor);

(window as any).customCards = (window as any).customCards ?? [];
(window as any).customCards.push({
  type: 'big-slider-card',
  name: 'Big Slider Card',
  description: 'Big slider card for light entities.',
});