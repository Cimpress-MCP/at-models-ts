import { Identity, ItemResources, PriceType } from '../pricerCommonTypes';
import { PriceDomain, ResourceLink } from '../../commonTypes';

export interface PriceCalculationsRequest {
  priceCalculationsType: PriceCalculationsType;
  seller: Identity;
  buyer: Identity;
  itemsResources: ItemResources;
}

export interface PriceCalculationsFulfillmentGroupRequest {
  priceCalculationsType: PriceCalculationsType;
  fulfillmentGroupUrl: string;
  repairErrorsOnly?: boolean;
  evaluationDate?: string;
}

export interface PriceCalculationsFulfillmentGroupResponse {
  _embedded: {
    priceCalculations: PriceCalculation[];
  };
}

export interface PriceCalculation {
  priceType: PriceType;
  priceDomain: PriceDomain;
  prices: PriceCalculationsResponsePrice[];
  errors: PriceCalculationsResponseError[];
}

export interface PriceCalculationsResponseBase {
  resourceKeys: string[];
}

export interface PriceCalculationsResponsePrice extends PriceCalculationsResponseBase {
  _links: {
    price: ResourceLink;
  };
}

export interface PriceCalculationsResponseError extends PriceCalculationsResponseBase {
  _links: {
    priceError: ResourceLink;
  };
}

export enum PriceCalculationsType {
  ManufacturingCost = 'ManufacturingCost',
  TransferPrices = 'TransferPrices',
  TransferProductPrice = 'TransferProductPrice',
  TransferShippingPrice = 'TransferShippingPrice',
}

export const PriceCalculationsTypeToPermissionResourceType = {
  [PriceCalculationsType.ManufacturingCost]: 'fulfillers',
};

export const PriceCalculationsTypeToCommonPriceType = {
  [PriceCalculationsType.ManufacturingCost]: PriceType.manufacturingCost,
  [PriceCalculationsType.TransferPrices]: PriceType.transferPrice,
  [PriceCalculationsType.TransferProductPrice]: PriceType.transferPrice,
  [PriceCalculationsType.TransferShippingPrice]: PriceType.transferPrice,
};
