import React from 'react';
import PropertyList from './PropertyList';
import { PropertyI } from '../../types';
import styles from './PropertyListWrapper.module.css';

interface Props {
  propertyList: PropertyI[];
}

function PropertyListWrapper(props: Props): JSX.Element {
  const { propertyList } = props;
  return (
    <div className={styles.list}>
      <PropertyList propertyList={propertyList} />
    </div>
  );
}

export default PropertyListWrapper;
