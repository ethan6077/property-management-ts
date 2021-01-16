import React, { FC } from "react";
import PropertyList from "./PropertyList";
import { PropertyI } from "../../types";
import styles from "./PropertyListWrapper.module.css";

interface PropertyListWrapperProps {
  propertyList: PropertyI[];
}

const PropertyListWrapper: FC<PropertyListWrapperProps> = ({
  propertyList
}) => (
  <div className={styles.list}>
    <PropertyList propertyList={propertyList} />
  </div>
);

export default PropertyListWrapper;
