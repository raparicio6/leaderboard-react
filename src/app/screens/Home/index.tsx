import React, { useEffect, useState, useCallback } from 'react';
import { ApiResponse } from 'apisauce';

import Player from '../../components/Player';
import { create } from '../../../api';
import Menu from '../../components/Menu';

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
      <div className="column center">
        <Menu
          firstPlayerName={
            players[0] && `${players[0].name} ${players[0].lastname}`
          }
          secondPlayerName={
            players[1] && `${players[1].name} ${players[1].lastname}`
          }
          thirdPlayerName={
            players[2] && `${players[2].name} ${players[2].lastname}`
          }
        />
      </div>
    </div>
  );
}

export default Home;
