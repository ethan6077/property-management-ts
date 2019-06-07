import React from 'react';
import Property from '../property/Property';
import { IProperty } from '../../types';

interface IProps {
  propertyList: Array<IProperty>;
}

function renderPropertyItem(property: IProperty) {
  return <li key={property.id}><Property property={property} /></li>
}

function PropertyList(props: IProps) {
  const { propertyList } = props;
  return (
    <ul>{propertyList.map(item => renderPropertyItem(item))}</ul>
  );
}

export default PropertyList;
