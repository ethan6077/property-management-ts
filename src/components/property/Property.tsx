import React from 'react';
import styles from './Property.module.css';
import Price from './Price';
import PropertyStatus from './PropertyStatus';
import Address from './Address';
import { IProperty } from '../../types'

interface IProps {
  property: IProperty;
}

function Property(props: IProps) {
  const { property } = props;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Price price={property.price} />
        <PropertyStatus status={property.status} />
      </div>
      <div className={styles.imgContainer}>
        <img src={property.image} alt={'property_img'} />
      </div>
      <div>
        <Address
          street={property.street}
          suburb={property.suburb}
          state={property.state}
          postcode={property.postcode}
        />
      </div>
    </div>
  );
}

export default Property;
