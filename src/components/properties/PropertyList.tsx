import React from 'react';
import Property from '../property/Property';
import { PropertyI } from '../../types';

interface Props {
  propertyList: PropertyI[];
}

function renderPropertyItem(property: PropertyI): JSX.Element {
  return (
    <li key={property.id}>
      <Property property={property} />
    </li>
  );
}

function PropertyList(props: Props): JSX.Element {
  const { propertyList } = props;
  return (
    <ul>{propertyList.map((item): JSX.Element => renderPropertyItem(item))}</ul>
  );
}

export default PropertyList;
