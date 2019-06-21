export interface StoreStateI {
  propertyFilter: PropertyFilterT;
  propertyList: PropertyI[];
  propertyListStatus: string;
}

export interface AddressI {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
}

export interface PropertyI {
  id: number;
  image: string;
  price: number;
  status: PropertyStatusE;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
}

export enum PropertyStatusE {
  Current = 'current',
  Sold = 'sold',
  WithDrawn = 'withdrawn',
  OffMarket = 'off_market'
}

export enum FilterDefaultE {
  All = 'all'
}

export type PropertyFilterT = PropertyStatusE | FilterDefaultE;

export type PropertyFilterTupleArrayT = [PropertyFilterT, string][];
