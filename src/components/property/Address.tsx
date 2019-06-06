import React from 'react';
import styles from './Address.module.css';

export interface Props {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
}

function Address(props: Props) {
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
