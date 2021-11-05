import { Identity } from '../pricerCommonTypes';

export interface LegacyProductPriceRequest {
  seller: Omit<Identity, 'accountId'>;
  buyer: Omit<Identity, 'accountId'>;
  productConfigurationUrl: string;
  fulfillmentConfigurationUrl?: string;
  deliveryRequestUrl?: string;
  manufacturingDataUrl?: string;
  fulfillmentLocationUrl?: string;
  deliveryOptionUrl?: string;
  evaluationDate?: string;
}

export interface LegacyProductPriceResponse {
  price: {
    totalAmount: number;
    baseAmount: number;
    currency: string;
    discountPercent: 0;
    markupPercent: 0;
    termId: undefined;
  };
  intermediateResults: [];
}
