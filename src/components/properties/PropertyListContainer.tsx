import React from 'react';
import PropertyList from './PropertyList';
import { PropertyI } from '../../types';
import styles from './PropertyListContainer.module.css';

interface Props {
  propertyList: PropertyI[];
}

function PropertyListContainer(props: Props): JSX.Element {
  const { propertyList } = props;
  return (
    <div className={styles.listContainer}>
      <PropertyList propertyList={propertyList} />
    </div>
  );
}

export default PropertyListContainer;
