import { BigSliderCard } from './big-slider-card';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  BIG-SLIDER-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

customElements.define("big-slider-card", BigSliderCard);

(window as any).customCards = (window as any).customCards ?? [];
(window as any).customCards.push({
  type: 'big-slider-card',
  name: localize('card.name'),
  description: localize('card.description'),
  preview: true,
  getEntitySuggestion: (_hass: any, entityId: string) => {
    if (!entityId.startsWith('light.')) {
      return null;
    }
    return {
      type: 'custom:big-slider-card',
      config: {
        type: 'custom:big-slider-card',
        entity: entityId,
      },
    };
  },
});
