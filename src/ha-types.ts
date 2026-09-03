import {
  Auth,
  Connection,
  HassConfig,
  HassEntities,
  HassEntity,
  HassServices,
  HassServiceTarget,
  MessageBase,
} from "home-assistant-js-websocket";

export interface ServiceCallResponse {
  context: {
    id: string;
    parent_id?: string;
    user_id?: string | null;
  };
}

export interface ServiceCallRequest {
  domain: string;
  service: string;
  serviceData?: Record<string, any>;
  target?: HassServiceTarget;
}

export interface HomeAssistant {
  auth: Auth & { external?: any };
  connection: Connection;
  connected: boolean;
  states: HassEntities;
  entities: { [id: string]: any };
  devices: { [id: string]: any };
  areas: { [id: string]: any };
  services: HassServices;
  config: HassConfig;
  themes: any;
  selectedTheme: any | null;
  panels: any;
  panelUrl: string;
  language: string;
  selectedLanguage: string | null;
  locale: any;
  resources: Record<string, Record<string, string>>;
  localize: any;
  translationMetadata: any;
  suspendWhenHidden: boolean;
  enableShortcuts: boolean;
  vibrate: boolean;
  debugConnection: boolean;
  dockedSidebar: "docked" | "always_hidden" | "auto";
  defaultPanel: string;
  moreInfoEntityId: string | null;
  user?: any;
  userData?: any | null;
  hassUrl(path?: string): string;
  callService(
    domain: ServiceCallRequest["domain"],
    service: ServiceCallRequest["service"],
    serviceData?: ServiceCallRequest["serviceData"],
    target?: ServiceCallRequest["target"],
    notifyOnError?: boolean
  ): Promise<ServiceCallResponse>;
  callApi<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    parameters?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<T>;
  fetchWithAuth(path: string, init?: Record<string, any>): Promise<Response>;
  sendWS(msg: MessageBase): void;
  callWS<T>(msg: MessageBase): Promise<T>;
  loadBackendTranslation(
    category: any,
    integrations?: any,
    configFlow?: any
  ): Promise<any>;
  loadFragmentTranslation(fragment: string): Promise<any | undefined>;
  formatEntityState(stateObj: HassEntity, state?: string): string;
  formatEntityAttributeValue(
    stateObj: HassEntity,
    attribute: string,
    value?: any
  ): string;
  formatEntityAttributeName(stateObj: HassEntity, attribute: string): string;
}
