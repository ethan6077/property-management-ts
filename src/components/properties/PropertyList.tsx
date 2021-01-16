import React, { FC } from "react";
import Property from "../property/Property";
import { PropertyI } from "../../types";

interface PropertyItemProps {
  property: PropertyI;
}

const PropertyItem: FC<PropertyItemProps> = ({ property }) => (
  <li key={property.id}>
    <Property property={property} />
  </li>
);

interface PropertyListProps {
  propertyList: PropertyI[];
}

const PropertyList: FC<PropertyListProps> = ({ propertyList }) => (
  <ul>
    {propertyList.map(item => (
      <PropertyItem property={item} />
    ))}
  </ul>
);

export default PropertyList;
