export interface StoreStateI {
  propertyFilter: string;
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

export type PropertyFilterT = PropertyStatusE | 'all';

export type PropertyFilterTupleArrayT = [PropertyFilterT, string][];
