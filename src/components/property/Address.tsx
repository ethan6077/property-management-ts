import React from 'react';
import styles from './Address.module.css';
import { AddressI } from '../../types';

function Address(props: AddressI): JSX.Element {
  const { street, suburb, state, postcode } = props;
  return (
    <div className={styles.container}>
      <span>{street}</span>
      <span>{suburb}</span>
      <span>{state + ' ' + postcode}</span>
    </div>
  );
}

export default Address;
