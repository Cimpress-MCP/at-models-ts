import {
  ErrorCategory,
  PriceChargeType,
  PriceErrorDetails,
  PriceSourceType,
} from '../pricerCommonTypes';
import { ResourceLink, ResourceLinkWithVersion } from '../../commonTypes';

export interface CreatePriceErrorRequestV0 {
  title: string;
  category: ErrorCategory;
  chargeType: PriceChargeType;
  sourceType?: PriceSourceType;
  details?: PriceErrorDetails;
  externalDetails?: unknown;
  _links: PriceErrorLinksV0;
}

export interface PriceErrorResponseV0 extends CreatePriceErrorRequestV0 {
  _links: PriceErrorResponseLinksV0;
}

export interface PriceErrorLinksV0 {
  source?: ResourceLink;
  priceConfiguration?: ResourceLink;
  priceConfigurationPrice?: ResourceLinkWithVersion;
  priceModel?: ResourceLinkWithVersion | ResourceLink;
  pricingTerm?: ResourceLinkWithVersion | ResourceLink;
  contract?: ResourceLink;
}

export interface PriceErrorResponseLinksV0 extends PriceErrorLinksV0 {
  self?: ResourceLink;
}

export interface LegacyGetPriceErrorRequestQueryParams {
  category: ErrorCategory;
  title: string;
}

export interface LegacyPriceErrorResponse {
  title: string;
  category: ErrorCategory;
  chargeType: PriceChargeType.item;
  _links: {};
}
