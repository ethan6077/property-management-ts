import React, { FC } from "react";
import SmallCircle from "./SmallCircle";
import PropertyFilterTupleArray from "../../util/PropertyFilterTupleArray";
import styles from "./PropertyStatus.module.css";
import { PropertyStatusE } from "../../types";

interface PropertyStatusProps {
  status: PropertyStatusE;
}

const PropertyStatus: FC<PropertyStatusProps> = ({ status }) => {
  const statusTuple = PropertyFilterTupleArray.find(
    filter => filter[0] === status
  );
  const statusValue = statusTuple ? statusTuple[1] : "";

  return (
    <div>
      <span className={styles.text}>{statusValue}</span>
      <SmallCircle status={status} />
    </div>
  );
};

export default PropertyStatus;
