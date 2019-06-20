import { PropertyFilterTupleArrayT, PropertyStatusE } from '../types';

const PropertyFilterTupleArray: PropertyFilterTupleArrayT = [
  ['all', 'ALL'],
  [PropertyStatusE.Current, 'Current'],
  [PropertyStatusE.Sold, 'Sold'],
  [PropertyStatusE.WithDrawn, 'With Drawn'],
  [PropertyStatusE.OffMarket, 'Off Market']
];

export default PropertyFilterTupleArray;
