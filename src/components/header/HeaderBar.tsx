import React, { FC } from "react";
import PropertyStatusSelect from "../../containers/PropertyStatusSelect";
import styles from "./HeaderBar.module.css";

const HeaderBar: FC = () => (
  <div className={styles.headerBar}>
    <PropertyStatusSelect />
  </div>
);

export default HeaderBar;
