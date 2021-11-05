export interface Link {
  href: string;
}

export interface ResourceLink {
  href: string;
  name: string | null;
}

export interface ResourceLinkWithVersion extends ResourceLink {
  version: number;
}

export enum PriceDomain {
  product = 'product',
  shipping = 'shipping',
}
