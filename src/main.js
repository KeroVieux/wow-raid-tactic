import formCreate from '@form-create/element-ui'
import $echarts from 'echarts'
import $store from 'store'
import { Base64 } from 'js-base64'
import router from '@/router'
import store from '@/models/store'
import ConsoleTrigger from '@/assets/config/consoleTrigger'
import App from './App'
import fnMixin from './assets/js/fnMixins'
import './plugins/element'

let currentEnv = _.cloneDeep(process.env)
currentEnv.DEBUG = currentEnv.VUE_APP_DEBUG === 'true' || fnMixin.methods.urlParam('DEBUG')
Vue.config.devtools = currentEnv.DEBUG
Vue.config.productionTip = !currentEnv.DEBUG
ConsoleTrigger(currentEnv.DEBUG)
moment.locale('zh-CN')
localforage.setDriver(localforage.LOCALSTORAGE)

Vue.use(formCreate)
const apiInstance = axios.create()
const eascInstance = axios.create()

const init = () => {
  apiInstance.defaults.baseURL = currentEnv.VUE_APP_API_SERVER
  eascInstance.defaults.baseURL = currentEnv.VUE_APP_EASC_SERVER
  _.assign(window, {
    _,
    axios,
    apiInstance,
    eascInstance,
    moment,
    $store,
    currentEnv,
  })
  _.assign(Vue.prototype, {
    _,
    moment,
    currentEnv,
    $echarts,
  })
  const app = new Vue({
    router,
    store,
    render: (h) => {
      return h(App)
    },
  }).$mount('#app')

  _.assign(window, {
    app,
  })
}

const url = './extraConfig.json'
axios.get(url).then(async (extraConfigRes) => {
  if (extraConfigRes && extraConfigRes.data) {
    currentEnv.VUE_APP_API_SERVER = extraConfigRes.data.BASE_API
      ? Base64.decode(extraConfigRes.data.BASE_API)
      : currentEnv.VUE_APP_API_SERVER
    currentEnv.VUE_APP_EASC_SERVER = extraConfigRes.data.VUE_APP_EASC_SERVER
      ? Base64.decode(extraConfigRes.data.VUE_APP_EASC_SERVER)
      : currentEnv.VUE_APP_EASC_SERVER
    currentEnv = { ...extraConfigRes.data, ...currentEnv }
    return init()
  }
  return init()
})
