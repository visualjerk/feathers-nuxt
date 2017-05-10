import feathers from '~plugins/feathers';

export const state = {
  user: null,
};

export const mutations = {
  SET_USER (state, user) {
    console.log('SET_USER', user);
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
        console.log('JWT authentication successful');
        commit('SET_USER', response);
      })
      .catch(error => {
        console.log('JWT authentication failed');
      });
  },
  login({commit}, {email, password}) {
    return feathers.authenticate({
      strategy: 'local',
      email,
      password,
    })
      .then(response => {
        console.log('Login success');
        commit('SET_USER', response);
      });
  },
  logout ({commit}) {
    return feathers.logout()
      .then(() => {
        console.log('Logout success');
        commit('SET_USER', null);
      });
  },
};
