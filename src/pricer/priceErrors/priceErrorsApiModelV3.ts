import { PriceChargeType, PriceErrorDetails, PriceSourceType, Problem } from '../pricerCommonTypes';
import { ResourceLink, ResourceLinkWithVersion } from '../../commonTypes';

export interface CreatePriceErrorRequestV3 extends Problem {
  chargeType?: PriceChargeType;
  sourceType?: PriceSourceType;
  additionalData?: PriceErrorDetails;
  _links: PriceErrorLinksV3;
}

export interface PriceErrorResponseV3 extends CreatePriceErrorRequestV3 {
  _links: PriceErrorResponseLinksV3;
}

export interface PriceErrorLinksV3 {
  source?: ResourceLink;
  priceConfiguration?: ResourceLink;
  priceConfigurationPrice?: ResourceLinkWithVersion;
  priceModel?: ResourceLinkWithVersion | ResourceLink;
  pricingTerm?: ResourceLinkWithVersion | ResourceLink;
  contract?: ResourceLink;
}

export interface PriceErrorResponseLinksV3 extends PriceErrorLinksV3 {
  self?: ResourceLink;
}
