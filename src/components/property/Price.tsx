import React from 'react';
import numeral from 'numeral';

export interface Props {
  price: number;
}

function Price(props: Props) {
  const { price } = props;
  const priceStr = numeral(price).format('$0,0');
  return (
    <div>
      {priceStr}
    </div>
  );
}

export default Price;
