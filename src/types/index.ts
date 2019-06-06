export enum EPropertyStatus {
  Current = 'current',
  Sold = 'sold',
  WithDrawn = 'withdrawn',
  OffMarket = 'off_market',
};

export interface IAddress {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
}

export interface IProperty {
  id: number;
  image: string;
  price: number;
  status: EPropertyStatus; 
  street: string;
  suburb: string;
  state: string;
  postcode: string;
}
