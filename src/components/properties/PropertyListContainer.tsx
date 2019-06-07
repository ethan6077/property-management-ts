import React from 'react';
import PropertyList from './PropertyList';
import { IProperty } from '../../types';
import styles from './PropertyListContainer.module.css';

interface IProps {
  propertyList: Array<IProperty>;
}

function PropertyListContainer(props: IProps) {
  const { propertyList } = props;
  return (
    <div className={styles.listContainer}>
      <PropertyList propertyList={propertyList} />
    </div>
  );
}

export default PropertyListContainer;
