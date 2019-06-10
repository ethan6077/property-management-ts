import React from 'react';
import SmallCircle from './SmallCircle';
import StatusMap from '../header/StatusMap';
import styles from './PropertyStatus.module.css';
import { PropertyStatusE } from '../../types';

interface Props {
  status: PropertyStatusE;
}

function PropertyStatus(props: Props): JSX.Element {
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
