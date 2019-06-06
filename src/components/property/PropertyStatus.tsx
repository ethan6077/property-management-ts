import React from 'react';
import SmallCircle from './SmallCircle';
import StatusMap from '../header/StatusMap';
import styles from './PropertyStatus.module.css';
import { EPropertyStatus } from '../../types';

interface IProps {
  status: EPropertyStatus;
}

function PropertyStatus(props: IProps) {
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
