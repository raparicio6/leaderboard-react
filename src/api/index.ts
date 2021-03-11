import apisauce from 'apisauce';

import { Player } from './types';

export const create = (baseURL = '') => {
  const api = apisauce.create({
    baseURL,
    timeout: 15000,
  });

  const getPlayers = () => api.get('/players');

  const createPlayer = (player: Player) => api.post('/players', { player });

  return {
    getPlayers,
    createPlayer,
  };
};

export * from './types';
