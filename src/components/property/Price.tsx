import React from 'react';
import numeral from 'numeral';

interface Props {
  price: number;
}

function Price(props: Props): JSX.Element {
  const { price } = props;
  const priceStr = numeral(price).format('$0,0');
  return <div>{priceStr}</div>;
}

export default Price;
