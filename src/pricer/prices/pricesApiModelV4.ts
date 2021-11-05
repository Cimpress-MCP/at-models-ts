import { PriceChargeType, PriceSourceType } from '../pricerCommonTypes';
import { Link, ResourceLink, ResourceLinkWithVersion } from '../../commonTypes';

export interface CreatePriceRequestV4 {
  amount: number;
  currency: string;
  permissions: Link[];
  chargeType?: PriceChargeType;
  sourceType?: PriceSourceType;
  _links: PriceLinksV4;
}

export interface CreatePriceRequestWithProvidedIdV4 extends CreatePriceRequestV4 {
  priceId: string;
}

export interface CreatePriceBatchRequestV4 {
  prices: CreatePriceRequestWithProvidedIdV4[];
}

export interface PriceResponseV4 {
  priceId: string;
  createdAt: string;
  createdBy: string;
  amount: number;
  currency: string;
  permissions: Link[];
  chargeType?: PriceChargeType;
  sourceType?: PriceSourceType;
  _links: PriceResponseLinksV4;
}

export interface PriceBatchResponseV4 {
  _embedded: {
    prices: PriceResponseV4[];
  };
}

export interface PriceLinksV4 {
  source?: ResourceLink;
  priceConfiguration?: ResourceLink;
  priceConfigurationPrice?: ResourceLinkWithVersion;
  priceModel?: ResourceLinkWithVersion | ResourceLink;
  pricingTerm?: ResourceLinkWithVersion | ResourceLink;
  contract?: ResourceLink;
}

export interface PriceResponseLinksV4 extends PriceLinksV4 {
  self: ResourceLink;
}

export interface CreatePriceReversalRequestV4 {
  originalPriceId: string;
}
