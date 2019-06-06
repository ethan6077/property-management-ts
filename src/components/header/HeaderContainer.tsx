import React, { ChangeEvent } from 'react';
import StatusMap from './StatusMap';
import styles from './HeaderContainer.module.css';

export interface Props {
  propertyFilter: string;
  changeFilter: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function HeaderContainer(props: Props) {
  const { propertyFilter, changeFilter } = props;
  const statusArray = Array.from(StatusMap.keys());
  return (
    <div className={styles.headerContainer}>
      <select className={styles.headerSelect} value={propertyFilter} onChange={changeFilter}>
        <option key={'default'} value="default">Filter Status</option>
        {
          statusArray.map((statusKey) => {
            return (
              <option key={statusKey} value={statusKey}>{StatusMap.get(statusKey)}</option>
            );
          })
        }
      </select>
    </div>
  );
}

export default HeaderContainer;
