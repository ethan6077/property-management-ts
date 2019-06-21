import React from 'react';
import PropertyStatusSelect from '../../containers/PropertyStatusSelect';
import styles from './HeaderBar.module.css';

function HeaderBar(): JSX.Element {
  return (
    <div className={styles.headerBar}>
      <PropertyStatusSelect />
    </div>
  );
}

export default HeaderBar;
