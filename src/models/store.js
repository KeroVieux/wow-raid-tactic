import systemParam from './System/param.models'
import accountAuth from './Account/auth.models'
import accountCurrent from './Account/current.models'

import TestTpl from './TestTpl.models'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TestTpl,
    systemParam,
    accountAuth,
    accountCurrent,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
})
