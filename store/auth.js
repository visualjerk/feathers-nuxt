import feathers from '~plugins/feathers';

export const state = {
  user: null,
};

export const mutations = {
  SET_USER (state, user) {
    state.user = user || null;
  },
};

export const getters = {
  isAuthenticated (state) {
    return !!state.user;
  },
};

export const actions = {
  jwt({commit}, {accessToken}) {
    return feathers.authenticate({
      strategy: 'jwt',
      accessToken,
    })
      .then(response => {
        commit('SET_USER', response);
      });
  },
  login({commit}, {email, password}) {
    return feathers.authenticate({
      strategy: 'local',
      email,
      password,
    })
      .then(response => {
        commit('SET_USER', response);
      });
  },
  logout ({commit}) {
    return feathers.logout()
      .then(() => {
        commit('SET_USER', null);
      });
  },
};
