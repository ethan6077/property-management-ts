export enum PropertyStatusE {
  Current = 'current',
  Sold = 'sold',
  WithDrawn = 'withdrawn',
  OffMarket = 'off_market'
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

export interface StoreState {
  propertyFilter: string;
  propertyList: PropertyI[];
  propertyListStatus: string;
}
