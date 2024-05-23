export interface MotorcycleTypes {
  name: string;
  type: Type;
  uid: any;
  seller: Seller;
  slug: string;
  metadata: any;
  uuid: string;
  brand: Brand;
  used: boolean;
  featured: boolean;
  favourite: boolean;
  links: any[];
  seo: any;
  images: any[];
  categories: Category[];
  accessories: any[];
  services: any[];
  similar_to: any[];
  tags: any[];
  variants: Variant[];
}

export interface Type {
  name: string;
  uuid: string;
}

export interface Seller {
  name: string;
  uuid: string;
  metadata: any;
}

export interface Brand {
  name: string;
  uuid: string;
}

export interface Category {
  name: string;
  locale: string;
  uuid: string;
}

export interface Variant {
  name: string;
  slug: any;
  uid: any;
  externalId: string;
  uuid: string;
  used: any;
  featured: boolean;
  favourite: boolean;
  main: boolean;
  metadata: any;
  links: any[];
  seo: any;
  images: Image[];
  prices: Price[];
  details: Details;
  tags: any[];
  stock: number;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  data: Data;
  type: string;
  uuid: any;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Data {
  view_type: string;
}

export interface Price {
  amount: number;
  currency: string;
  purpose: string;
  uuid: string;
}

export interface Details {
  years: Year[];
  motors: Motor[];
  features: Feature[];
  fuel_types: FuelType[];
  doors: Door[];
  transmissions: Transmission[];
  body_types: BodyType[];
  testdrive: Testdrive[];
  kilometers: Kilometer[];
  description: Description[];
}

export interface Year {
  value: string;
  description: any;
  extra: any;
}

export interface Motor {
  value: string;
  description: any;
  extra: any;
}

export interface Feature {
  value: string;
  description: any;
  extra: any;
}

export interface FuelType {
  value: string;
  description: any;
  extra: any;
}

export interface Door {
  value: string;
  description: any;
  extra: any;
}

export interface Transmission {
  value: string;
  description: any;
  extra: any;
}

export interface BodyType {
  value: string;
  description: any;
  extra: any;
}

export interface Testdrive {
  value: string;
  description: any;
  extra: any;
}

export interface Kilometer {
  value: string;
  description: any;
  extra: any;
}

export interface Description {
  value: string;
  description: any;
  extra: any;
}
