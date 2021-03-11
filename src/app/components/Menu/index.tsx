import React, { useCallback, useState } from 'react';
import { string, func } from 'prop-types';

import styles from './styles.module.scss';

function Menu({
  firstPlayerName,
  secondPlayerName,
  thirdPlayerName,
  createPlayer,
}) {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [wins, setWins] = useState(0);

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();
      createPlayer({ name, lastname, wins });
    },
    [createPlayer, name, lastname, wins]
  );

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

      <form onSubmit={handleOnSubmit}>
        <div className={`column ${styles.btncontainer}`}>
          <h2
            className={`${styles.info} ${styles.big} background-black row center`}
          >
            Create a new player
          </h2>
          <input
            className={`${styles.input} ${styles.placeholder} m-top-5`}
            placeholder="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className={`${styles.input} ${styles.placeholder} m-top-3`}
            placeholder="Lastname"
            type="text"
            onChange={(event) => setLastname(event.target.value)}
          />
          <input
            className={`${styles.input} ${styles.placeholder} m-top-3`}
            placeholder="Wins"
            type="text"
            onChange={(event) => setWins(parseInt(event.target.value, 10))}
          />

          <button type="submit" className={`${styles.button} m-top-7`}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

Menu.propTypes = {
  createPlayer: func.isRequired,
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
