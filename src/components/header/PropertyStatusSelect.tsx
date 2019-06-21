import React, { ChangeEvent } from 'react';
import PropertyFilterTupleArray from '../../util/PropertyFilterTupleArray';
import { PropertyFilterT } from '../../types';

interface Props {
  propertyFilter: string;
  changePropertyFilter: (filer: PropertyFilterT) => any;
}

function handleChange(
  event: ChangeEvent<HTMLSelectElement>,
  changePropertyFilter: (filer: PropertyFilterT) => any
): void {
  changePropertyFilter(event.target.value as PropertyFilterT);
}

function PropertyStatusSelect(props: Props): JSX.Element {
  const { propertyFilter, changePropertyFilter } = props;
  return (
    <select
      value={propertyFilter}
      onChange={e => handleChange(e, changePropertyFilter)}
    >
      <option key={'all'} value="all">
        Filter Status
      </option>
      {PropertyFilterTupleArray.map(
        (statusTuple): JSX.Element => {
          return (
            <option key={statusTuple[0]} value={statusTuple[0]}>
              {statusTuple[1]}
            </option>
          );
        }
      )}
    </select>
  );
}

export default PropertyStatusSelect;
