import apisauce from 'apisauce';

export const create = (baseURL = '') => {
  const api = apisauce.create({
    baseURL,
    timeout: 15000,
  });

  const getPlayers = () => api.get('/players');

  return {
    getPlayers,
  };
};

export * from './types';
