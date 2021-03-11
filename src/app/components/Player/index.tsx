import React from 'react';
import { string, number } from 'prop-types';
import Avatar from 'react-avatar';

import styles from './styles.module.scss';

interface PlayerType {
  name: string;
  lastname: string;
  wins: number;
  className?: string;
}

function Player({ name, lastname, wins, className }: PlayerType) {
  return (
    <div className={`row ${styles.container} ${className}`}>
      <div className={`column middle ${styles.avatar}`}>
        <Avatar name={`${name} ${lastname}`} round="20px" />
      </div>
      <div className={`column middle center ${styles.data}`}>
        <span className={styles.info}>{name}</span>
        <span className={`${styles.info} m-top-3`}>{lastname}</span>
        <span className={`${styles.subtitle} row center m-top-3`}>{wins}</span>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: string.isRequired,
  lastname: string.isRequired,
  wins: number.isRequired,
  className: string,
};

Player.defaultProps = {
  className: '',
};

export default Player;
