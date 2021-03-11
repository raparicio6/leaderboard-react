import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Menu({ firstPlayerName, secondPlayerName, thirdPlayerName }) {
  return (
    <div className={`column ${styles.container}`}>
      <div className={styles.menu}>
        <span className={`row center ${styles.info} ${styles.big}`}>Menu</span>
      </div>
      <div className={styles.data}>
        <div className={`column center ${styles.bordered}`}>
          {firstPlayerName && (
            <>
              <span className={styles.info}>First position</span>
              <span className={`${styles.info} ${styles.verybig} m-top-4`}>
                {firstPlayerName}
              </span>
            </>
          )}
          {secondPlayerName && (
            <>
              <span className={`${styles.info} m-top-10`}>Second position</span>
              <span className={`${styles.info} ${styles.verybig} m-top-4`}>
                {secondPlayerName}
              </span>
            </>
          )}
          {thirdPlayerName && (
            <>
              <span className={`${styles.info} m-top-10`}>Third position</span>
              <span className={`${styles.info} ${styles.verybig} m-top-4`}>
                {thirdPlayerName}
              </span>
            </>
          )}
        </div>
      </div>
      <div className={`row center middle ${styles.btncontainer}`}>
        <button type="button" className={styles.button}>
          aaaaaaa
        </button>
      </div>
    </div>
  );
}

Menu.propTypes = {
  firstPlayerName: string,
  secondPlayerName: string,
  thirdPlayerName: string,
};

Menu.defaultProps = {
  firstPlayerName: '',
  secondPlayerName: '',
  thirdPlayerName: '',
};

export default Menu;
