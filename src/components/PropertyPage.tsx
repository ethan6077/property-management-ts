import React, { FC, useEffect } from "react";
import HeaderBar from "./header/HeaderBar";
import PropertyListWrapper from "./properties/PropertyListWrapper";
import Loader from "./common/Loader";
import Error from "./common/Error";
import { PropertyI, FilterDefaultE } from "../types";
import styles from "./PropertyPage.module.css";
interface PropertyPageProps {
  propertyFilter: string;
  propertyList: PropertyI[];
  propertyListStatus: string;
  fetchProperties: () => void;
}

const PropertyPage: FC<PropertyPageProps> = ({
  propertyListStatus,
  propertyFilter,
  propertyList,
  fetchProperties
}) => {
  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  if (propertyListStatus === "loading") {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  if (propertyListStatus === "error") {
    return (
      <div className={styles.msgContainer}>
        <Error />
      </div>
    );
  }

  const filteredPropertyList =
    propertyFilter === FilterDefaultE.All
      ? propertyList
      : propertyList.filter(p => p.status === propertyFilter);

  return (
    <div className={styles.propertyPage}>
      <HeaderBar />
      <PropertyListWrapper propertyList={filteredPropertyList} />
    </div>
  );
};

export default PropertyPage;
