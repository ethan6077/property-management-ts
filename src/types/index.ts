export enum PropertyStatus {
  Current = 'current',
  Sold = 'sold',
  WithDrawn = 'withdrawn',
  OffMarket = 'off_market',
};

export interface Address {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
}

export interface Property {
  id: number;
  image: string;
  price: number;
  status: string; 
  street: string;
  suburb: string;
  state: string;
  postcode: string;
}
