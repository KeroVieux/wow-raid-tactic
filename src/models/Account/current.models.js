import _ from 'lodash'

const param = {
  namespaced: true,
  state: {
    list: [],
    detail: {},
  },
  mutations: {
    updateState(state, { payload }) {
      _.assign(state, payload)
    },
  },
  getters: {
    currentUser(state) {
      return state.currentUser
    },
  },
  actions: {
    async currentUser({ commit }) {
      const currentUser = await localforage.getItem('currentUser')
      commit({
        type: 'updateState',
        payload: {
          currentUser,
        },
      })
    },
  },
}

export default param
