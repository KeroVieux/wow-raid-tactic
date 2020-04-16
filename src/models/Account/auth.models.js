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
    rsaKey(state) {
      return state.rsaKey
    },
    token(state) {
      return state.token
    },
  },
  actions: {
    async rsaKey({ commit }) {
      const rsaKey = await localforage.getItem('rsaKey')
      commit({
        type: 'updateState',
        payload: {
          rsaKey,
        },
      })
    },
    async token({ commit }) {
      const token = await localforage.getItem('token')
      commit({
        type: 'updateState',
        payload: {
          token,
        },
      })
    },
  },
}

export default param
