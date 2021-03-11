import React, { useEffect, useState, useCallback } from 'react';
import { ApiResponse } from 'apisauce';

import Player from '../../components/Player';
import { create } from '../../../api';

import styles from './styles.module.scss';

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
const api = create(baseURL);

function Home() {
  const [players, setPlayers] = useState([]);

  const fetchUsers = useCallback(
    () =>
      api
        .getPlayers()
        .then(
          (response: ApiResponse<any>) =>
            response.ok && setPlayers(response.data.players)
        ),
    [setPlayers]
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div
      className={`row center top background-wild-sand all-screen-height ${styles.container}`}
    >
      <div className={`row middle space-around ${styles.list}`}>
        {players.map(({ name, lastname, wins, id }) => (
          <Player
            name={name}
            lastname={lastname}
            wins={wins}
            className="m-top-5"
            key={id}
          />
        ))}
      </div>
      {/* <div className="column center">
        <Turns
          current={currentTurn}
          left={turnsLeft}
          past={turnsPast}
          handleEndTurnOnClick={handleEndTurnOnClick}
        />
      </div> */}
    </div>
  );
}

export default Home;
