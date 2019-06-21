import {
  PropertyFilterTupleArrayT,
  PropertyStatusE,
  FilterDefaultE
} from '../types';

const PropertyFilterTupleArray: PropertyFilterTupleArrayT = [
  [FilterDefaultE.All, 'ALL'],
  [PropertyStatusE.Current, 'Current'],
  [PropertyStatusE.Sold, 'Sold'],
  [PropertyStatusE.WithDrawn, 'With Drawn'],
  [PropertyStatusE.OffMarket, 'Off Market']
];

export default PropertyFilterTupleArray;
