import type { HassEntity } from 'home-assistant-js-websocket';
import { vi, type Mock } from 'vitest';
import { BigSliderCard } from '../src/big-slider-card';
import type { HomeAssistant } from '../src/ha-types';
import type { BigSliderCardConfig } from '../src/types';

export type ServiceCallMock = Mock<(domain: string, service: string, data?: Record<string, unknown>) => Promise<unknown>>;

export function createEntity(
  entityId: string,
  state = 'on',
  attributes: Record<string, unknown> = {},
): HassEntity {
  return {
    entity_id: entityId,
    state,
    attributes: {
      friendly_name: 'Test entity',
      ...attributes,
    },
    last_changed: '',
    last_updated: '',
    context: { id: '', parent_id: null, user_id: null },
  } as HassEntity;
}

export function createHass(...entities: HassEntity[]): {
  hass: HomeAssistant;
  callService: ServiceCallMock;
} {
  const callService: ServiceCallMock = vi.fn(async () => ({}));
  const states = Object.fromEntries(entities.map(entity => [entity.entity_id, entity]));
  const hass = {
    states,
    callService,
    formatEntityState: (entity: HassEntity) => entity.state,
  } as unknown as HomeAssistant;

  return { hass, callService };
}

export function createCard(
  entity: HassEntity,
  config: Partial<BigSliderCardConfig> = {},
): { card: BigSliderCard; callService: ServiceCallMock; hass: HomeAssistant } {
  const card = new BigSliderCard();
  card.setConfig({ entity: entity.entity_id, ...config });
  const { hass, callService } = createHass(entity);
  card.hass = hass;
  return { card, callService, hass };
}

export function setCurrentValue(card: BigSliderCard, value: number): void {
  Reflect.set(card, 'currentValue', value);
}

export function getCurrentValue(card: BigSliderCard): number {
  return Reflect.get(card, 'currentValue') as number;
}

export async function mount(card: BigSliderCard): Promise<void> {
  document.body.append(card);
  await card.updateComplete;
}
