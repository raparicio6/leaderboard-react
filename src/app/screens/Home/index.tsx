import React from 'react';

import Player from '../../components/Player';

import styles from './styles.module.scss';

function Home() {
  return (
    <div
      className={`row center background-wild-sand all-screen-height ${styles.container}`}
    >
      <div className="column">
        <Player name="Rodrigo" lastname="Aparicio" wins={15} />
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
