import { BigSliderCard } from './big-slider-card';
import { CARD_VERSION, SUPPORTED_DOMAINS } from './const';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  BIG-SLIDER-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

if (!customElements.get("big-slider-card")) {
  customElements.define("big-slider-card", BigSliderCard);
}

window.customCards = window.customCards ?? [];
if (!window.customCards.some(c => c.type === 'big-slider-card')) {
  window.customCards.push({
    type: 'big-slider-card',
    name: localize('card.name'),
    description: localize('card.description'),
    preview: true,
    getEntitySuggestion: (_hass: unknown, entityId: string) => {
      if (!SUPPORTED_DOMAINS.includes(entityId.split('.')[0])) {
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
}

window.dispatchEvent(new CustomEvent('ll-rebuild'));
