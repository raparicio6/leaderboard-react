import React, { useState, useCallback } from 'react';
import { string, number, func } from 'prop-types';
import Avatar from 'react-avatar';

import styles from './styles.module.scss';

interface PlayerComponent {
  name: string;
  lastname: string;
  wins: number;
  className?: string;
  id: string;
}

function Player({
  name,
  lastname,
  wins,
  className,
  id,
  updateWins,
}: PlayerComponent) {
  const [newWins, setNewWins] = useState(0);

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();
      updateWins({ id, name, lastname, wins: newWins });
      setNewWins(0);
    },
    [updateWins, newWins, id, name, lastname]
  );

  return (
    <div className={`row ${styles.container} ${className}`}>
      <div className={`column middle ${styles.avatar}`}>
        <Avatar name={`${name} ${lastname}`} round="20px" />
      </div>
      <div className={`column middle center ${styles.data}`}>
        <span className={styles.info}>{name}</span>
        <span className={`${styles.info} m-top-3`}>{lastname}</span>
        <div className="row space-around m-top-3">
          <form onSubmit={handleOnSubmit}>
            <div className="column center">
              <input
                className={`${styles.input}`}
                placeholder="Wins"
                type="text"
                onChange={(event) =>
                  setNewWins(parseInt(event.target.value, 10))
                }
              />

              <button type="submit" className="m-top-1">
                Update wins
              </button>
            </div>
          </form>

          <span className={styles.subtitle}>{wins}</span>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  lastname: string.isRequired,
  wins: number.isRequired,
  updateWins: func.isRequired,
  className: string,
};

Player.defaultProps = {
  className: '',
};

export default Player;
