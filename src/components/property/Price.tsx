import React, { FC } from "react";
import numeral from "numeral";

interface PriceProps {
  price: number;
}

const Price: FC<PriceProps> = ({ price }) => {
  const priceStr = numeral(price).format("$0,0");

  return <div>{priceStr}</div>;
};

export default Price;
