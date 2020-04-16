import _ from 'lodash'
import TestTplService from '@/services/TestTpl'

const TestTpl = {
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
    list(state) {
      return state.list
    },
    detail(state) {
      return state.detail
    },
  },
  actions: {
    async create({ commit, getters }, { payload }) {
      const { list } = getters
      const detail = await TestTplService.create(payload)
      if (!detail.code) {
        commit({
          type: 'updateState',
          payload: {
            detail,
            list: [...list, detail],
          },
        })
      }
      return detail
    },
    async update({ commit, getters }, { payload }) {
      const { list } = getters
      const detail = await TestTplService.update(payload)
      if (!detail.code) {
        commit({
          type: 'updateState',
          payload: {
            detail,
            list: _.map(list, (i) => {
              if (i.id === payload.id) {
                i = detail
              }
              return i
            }),
          },
        })
      }
      return detail
    },
    async remove({ commit, getters }, { payload }) {
      const { list } = getters
      const res = await TestTplService.remove(payload)
      if (!res.code) {
        commit({
          type: 'updateState',
          payload: {
            list: _.filter(list, (i) => {
              return i.id !== payload.id
            }),
            detail: {},
          },
        })
      }
      return res
    },
    async get({ commit }, { payload }) {
      const detail = await TestTplService.get(payload)
      if (!detail.code) {
        commit({
          type: 'updateState',
          payload: {
            detail: detail.data,
          },
        })
      }
      return detail
    },
    async find({ commit }, { payload }) {
      const list = await TestTplService.find(payload)
      if (!list.code) {
        commit({
          type: 'updateState',
          payload: {
            list,
            detail: {},
          },
        })
      }
      return list
    },
  },
}

export default TestTpl
