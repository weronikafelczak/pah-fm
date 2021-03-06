import {
  LOADING,
  DATA,
  ERRORS,
  FETCH,
  SET_DATA,
  SET_ERRORS,
} from './constants';
import { get } from '../services/api/http';
import { i18n } from '../main';

const defaultState = {
  [LOADING]: false,
  [DATA]: null,
  [ERRORS]: null,
};

const makeModule = moduleActions => ({
  namespaced: true,
  state: { ...defaultState },
  mutations: {
    /* eslint-disable no-param-reassign */
    [FETCH](state) {
      state[LOADING] = true;
      state[ERRORS] = null;
    },
    [SET_DATA](state, data) {
      state[LOADING] = false;
      state[DATA] = data;
      state[ERRORS] = null;
    },
    [SET_ERRORS](state, errors) {
      state[LOADING] = false;
      state[ERRORS] = errors;
    },
    /* eslint-enable no-param-reassign */
  },
  actions: moduleActions,
});

const makeFetchData = url => ({ commit }) => {
  get(url)
    .then((data) => {
      commit(SET_DATA, data);
    })
    .catch(() => {
      commit(SET_ERRORS, i18n.tc('common.error'));
    });
};

export {
  makeModule,
  makeFetchData,
};
