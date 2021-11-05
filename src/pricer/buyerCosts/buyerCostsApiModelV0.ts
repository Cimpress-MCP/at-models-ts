import { Amount, PriceChargeType, StoreResultsOption } from '../pricerCommonTypes';
import { PriceErrorResponseV3 } from '../priceErrors/priceErrorsApiModelV3';
import { PriceDomain, ResourceLink } from '../../commonTypes';

export type BuyerCostRequest = ShippingBuyerCostRequest | ProductBuyerCostRequest;

export interface BuyerCostsBatchRequest {
  storeResults: StoreResultsOption;
  requestBehavior?: BuyerCostRequestBehavior[];
  buyerCosts: BuyerCostRequest[];
}

export interface ShippingBuyerCostRequest {
  requestId: string;
  buyer: BuyerCostBuyer;
  evaluationDate: string;
  costDomain: PriceDomain.shipping;
  costInputs: ShippingBuyerCostInputs[];
}

export interface ProductBuyerCostRequest {
  requestId: string;
  buyer: BuyerCostBuyer;
  evaluationDate: string;
  costDomain: PriceDomain.product;
  costInputs: ProductBuyerCostInputs[];
}

export interface ShippingBuyerCostInputs {
  fulfillmentConfigurationUrl: string;
  productConfigurationUrl: string;
  deliveryRequestUrl: string;
  shippingCost?: Amount;
}

export interface ProductBuyerCostInputs {
  fulfillmentConfigurationUrl?: string;
  productConfigurationUrl: string;
  deliveryRequestUrl?: string;
}

export interface BuyerCostBuyer {
  accountUrl?: string;
  merchantId: string;
}

export interface BuyerCostsResponse {
  _embedded: BuyerCostsResponseEmbedded;
}

export interface BuyerCostsResponseEmbedded {
  buyerCosts: BuyerCostDetails[];
}

export interface BuyerCostDetails {
  requestId: string;
  charges: BuyerCostDetailsCharge[];
  errors: BuyerCostError[];
}

export interface BuyerCostDetailsCharge {
  _links?: BuyerCostDetailsChargeLinks;
  _embedded: BuyerCostDetailsChargeEmbedded;
}

export interface BuyerCostError {
  _links?: BuyerCostErrorLinks;
  _embedded: BuyerCostErrorEmbedded;
}

export interface BuyerCostErrorLinks {
  error: ResourceLink;
}

export interface BuyerCostErrorEmbedded {
  error: PriceErrorResponseV3;
}

export interface BuyerCostDetailsChargeLinks {
  charge: ResourceLink;
}

export interface BuyerCostDetailsChargeEmbedded {
  charge: {
    amount: number;
    currency: string;
    chargeType: PriceChargeType;
  };
}

export enum BuyerCostRequestBehavior {
  forceCalculationTimeout = 'forceCalculationTimeout',
}
