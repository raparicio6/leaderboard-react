import apisauce from 'apisauce';

import { Player, StoredPlayer } from './types';

export const create = (baseURL = '') => {
  const api = apisauce.create({
    baseURL,
    timeout: 15000,
  });

  const getPlayers = () => api.get('/players');

  const createPlayer = (player: Player) => api.post('/players', { player });

  const updatePlayer = (player: StoredPlayer) =>
    api.put('/players', { player });

  return {
    getPlayers,
    createPlayer,
    updatePlayer,
  };
};

export * from './types';
