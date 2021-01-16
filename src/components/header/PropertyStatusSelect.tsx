import React, { FC } from "react";
import PropertyFilterTupleArray from "../../util/PropertyFilterTupleArray";
import { PropertyFilterT } from "../../types";

interface PropertyStatusSelectProps {
  propertyFilter: string;
  onPropertyFilterChanged: (filer: PropertyFilterT) => void;
}

const PropertyStatusSelect: FC<PropertyStatusSelectProps> = ({
  propertyFilter,
  onPropertyFilterChanged
}) => (
  <select
    value={propertyFilter}
    onChange={e => onPropertyFilterChanged(e.target.value as PropertyFilterT)}
  >
    <option key={"all"} value="all">
      Filter Status
    </option>
    {PropertyFilterTupleArray.map(statusTuple => (
      <option key={statusTuple[0]} value={statusTuple[0]}>
        {statusTuple[1]}
      </option>
    ))}
  </select>
);

export default PropertyStatusSelect;
