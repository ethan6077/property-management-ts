import React, { ChangeEvent } from 'react';
import PropertyFilterTupleArray from '../../util/PropertyFilterTupleArray';

interface Props {
  propertyFilter: string;
  changePropertyFilter: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function PropertyStatusSelect(props: Props): JSX.Element {
  const { propertyFilter, changePropertyFilter } = props;
  return (
    <select value={propertyFilter} onChange={changePropertyFilter}>
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
