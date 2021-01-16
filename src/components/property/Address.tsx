import React, { FC } from "react";
import styles from "./Address.module.css";
import { AddressI } from "../../types";

const Address: FC<AddressI> = ({ street, suburb, state, postcode }) => (
  <div className={styles.container}>
    <span>{street}</span>
    <span>{suburb}</span>
    <span>{state + " " + postcode}</span>
  </div>
);

export default Address;
