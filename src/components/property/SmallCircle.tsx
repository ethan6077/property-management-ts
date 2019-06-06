import React from 'react';
import classNames from 'classnames';
import styles from './SmallCircle.module.css';
import  { PropertyStatus } from '../../types';

interface Props {
  status: PropertyStatus;
}

function SmallCircle(props: Props) {
  const { status } = props;
    return (
      <span className={classNames({
        [styles.current]: status === 'current',
        [styles.sold]: status === 'sold',
        [styles.offMarket]: status === 'off_market',
        [styles.withDrawn]: status === 'withdrawn',
      })}></span>
    );
}

export default SmallCircle;
