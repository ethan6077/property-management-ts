import React from 'react';
import styles from './Error.module.css';
import SadFace from '../../img/sad-face.svg';
import RefreshBtn from '../../img/refresh.svg';

function Error() {
  return (
    <div className={styles.error}>
      <section className={styles.errorSection}>
        <img className={styles.sadFace} src={SadFace} alt="sad-face" />
        <span className={styles.text}>Uh-oh... it looks like some things haven't loaded correctly.</span>
      </section>
      <img className={styles.refreshBtn} src={RefreshBtn} alt="sad-face" onClick={() => window.location.reload(true)} />
    </div>
  );
}

export default Error;
