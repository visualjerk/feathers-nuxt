import feathers from '~plugins/feathers'

export const state = {
  posts: null,
}

export const mutations = {
  SET_POSTS (state, posts) {
    console.log('Posts retrieved', posts)
    state.posts = posts || null
  },
}

export const actions = {
  getlist ({commit}) {
    return feathers.service('posts').find()
      .then(response => {
        commit('SET_POSTS', response.data)
      })
  },
  create ({dispatch}, {description}) {
    return feathers.service('posts').create({description})
      .then(response => {
        return dispatch('getlist')
      })
  },
}
