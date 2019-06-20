import React from 'react';
import SmallCircle from './SmallCircle';
import PropertyFilterTupleArray from '../../util/PropertyFilterTupleArray';
import styles from './PropertyStatus.module.css';
import { PropertyStatusE } from '../../types';

interface Props {
  status: PropertyStatusE;
}

function PropertyStatus(props: Props): JSX.Element {
  const { status } = props;
  const statusTuple = PropertyFilterTupleArray.find(
    filter => filter[0] === status
  );
  let statusValue = '';
  if (statusTuple) {
    statusValue = statusTuple[1];
  }
  return (
    <div>
      <span className={styles.text}>{statusValue}</span>
      <SmallCircle status={status} />
    </div>
  );
}

export default PropertyStatus;
