import React, { FC } from "react";
import classNames from "classnames";
import styles from "./SmallCircle.module.css";
import { PropertyStatusE } from "../../types";

interface SmallCircleProps {
  status: PropertyStatusE;
}

const SmallCircle: FC<SmallCircleProps> = ({ status }) => (
  <span
    className={classNames({
      [styles.current]: status === PropertyStatusE.Current,
      [styles.sold]: status === PropertyStatusE.Sold,
      [styles.offMarket]: status === PropertyStatusE.OffMarket,
      [styles.withDrawn]: status === PropertyStatusE.WithDrawn
    })}
  ></span>
);

export default SmallCircle;
