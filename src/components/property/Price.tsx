import React from 'react';
import numeral from 'numeral';

interface IProps {
  price: number;
}

function Price(props: IProps) {
  const { price } = props;
  const priceStr = numeral(price).format('$0,0');
  return (
    <div>
      {priceStr}
    </div>
  );
}

export default Price;
