import React, { ChangeEvent } from 'react';
import styles from './HeaderContainer.module.css';

interface Props {
  propertyFilter: string;
  changeFilter: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function HeaderContainer(props: Props): JSX.Element {
  const { propertyFilter, changeFilter } = props;
  const statusArray = [];
  return (
    <div className={styles.headerContainer}>
      <select
        className={styles.headerSelect}
        value={propertyFilter}
        onChange={changeFilter}
      >
        <option key={'default'} value="default">
          Filter Status
        </option>
        {statusArray.map(
          (statusKey): JSX.Element => {
            return (
              <option key={statusKey} value={statusKey}>
                {statusKey}
              </option>
            );
          }
        )}
      </select>
    </div>
  );
}

export default HeaderContainer;
