export interface Identity {
  type: IdentityType;
  id: string;
  accountId: string;
}

export enum IdentityType {
  fulfillers = 'fulfillers',
  merchants = 'merchants',
}

export interface ItemResources {
  productConfigurationUrl: string;
  deliveryRequestUrl?: string;
  deliveryOptionUrl?: string;
  manufacturingDataUrl?: string;
  fulfillmentLocationUrl?: string;
  fulfillmentConfigurationUrl?: string;
  shippingCost?: Amount;
}

export enum PriceSourceType {
  calculatorEvaluation = 'calculatorEvaluation',
  claim = 'claim',
  adjustment = 'adjustment',
  customQuote = 'customQuote',
  reversal = 'reversal',
}

export enum PriceChargeType {
  item = 'item',
  order = 'order',
  setup = 'setup',
}

export interface Amount {
  amount: number;
  currency: string;
}

export enum PriceType {
  transferPrice = 'transferPrice',
  manufacturingCost = 'manufacturingCost',
}

export enum StoreResultsOption {
  none = 'none',
  charges = 'charges',
  errors = 'errors',
  all = 'all',
}

export enum ErrorCategory {
  missingPriceConfiguration = 'missingPriceConfiguration',
  missingRequiredInput = 'missingRequiredInput',
  invalidPriceConfiguration = 'invalidPriceConfiguration',
  failedPriceEvaluation = 'failedPriceEvaluation',
  failedCustomQuoteCalculation = 'failedCustomQuoteCalculation',
  timeout = 'timeout',
  generic = 'generic',
}

export interface PriceErrorDetails {
  unresolvedInputs?: { scope: string; name: string }[];
  missingResources?: string[];
  evaluationDate?: string;
  resources?: {
    resourceType: string;
    resourceId: string;
  }[];
}

export enum PricedResourceType {
  product = 'product',
  package = 'package',
  gang = 'gang',
}

export interface Input {
  scope: string;
  name: string;
  value: string;
}

export interface Output {
  name: string;
  type: string;
  value: unknown;
}

export interface Problem {
  title: ErrorCategory;
  detail: string;
  causes?: object[];
}
