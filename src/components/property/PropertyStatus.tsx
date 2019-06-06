import React from 'react';
import SmallCircle from './SmallCircle';
import StatusMap from '../header/StatusMap';
import styles from './PropertyStatus.module.css';
import { PropertyStatus } from '../../types';

interface Props {
  status: PropertyStatus;
}

function PropertyStatus(props: Props) {
  const { status } = props;
  const statusValue = StatusMap.get(status);
  return (
    <div>
      <span className={styles.text}>{statusValue}</span>
      <SmallCircle status={status} />
    </div>
  );
}

export default PropertyStatus;
