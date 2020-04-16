import Joi from 'joi'
import To from 'await-to-js'
import Callback from '@/services/Callback'

export default class EascService {
  static async apiGetLogin(payload) {
    const instance = axios.create({
      headers: {},
    })
    const [err, res] = await To(
      instance.get(
        `${currentEnv.VUE_APP_EASC_SERVER}/login/${currentEnv.VUE_APP_APP_ID}/${payload.username}/${
          payload.password
        }`
      )
    )
    return Callback(err, res, { errorMsg: false })
  }
  static async apiRsaSign(payload) {
    const instance = axios.create({
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: null,
      },
    })
    if (payload.formData) {
      payload.formData.append('appId', currentEnv.VUE_APP_APP_ID)
    }
    const [err, res] = await To(
      instance.post(`${currentEnv.VUE_APP_EASC_SERVER}/rsalogin`, payload.formData)
    )
    return Callback(err, res, { errorMsg: false })
  }
  static async apiGetPubKey() {
    const instance = axios.create({
      headers: {
        Authorization: null,
      },
    })
    const [err, res] = await To(instance.get(`${currentEnv.VUE_APP_EASC_SERVER}/getrsapublickey`))
    return Callback(err, res, { errorMsg: false })
  }
  static async apiUserInfo() {
    const [err, res] = await To(eascInstance.get(`${currentEnv.VUE_APP_EASC_SERVER}/userinfo`))
    return Callback(err, res)
  }
  static async tree() {
    const [err, res] = await To(
      eascInstance.get(
        `${currentEnv.VUE_APP_EASC_SERVER}/org/getallorgswithuserdata/${currentEnv.VUE_APP_APP_ID}`
      )
    )
    return Callback(err, res)
  }
  static async allOrg() {
    const [err, res] = await To(
      eascInstance.get(
        `${currentEnv.VUE_APP_EASC_SERVER}/org/getallorgdata/${currentEnv.VUE_APP_APP_ID}`
      )
    )
    return Callback(err, res)
  }
  static async allUsers() {
    const [err, res] = await To(
      eascInstance.get(
        `${currentEnv.VUE_APP_EASC_SERVER}/app/getappusersasync/${currentEnv.VUE_APP_APP_ID}`
      )
    )
    return Callback(err, res)
  }
  static async activeApp(payload) {
    let [err, res] = [null, null]
    const schema = Joi.object().keys({
      serverUrl: Joi.string().required(),
      appName: Joi.string()
        .min(3)
        .max(30)
        .required(),
      adminPassword: Joi.string().required(),
      modules: Joi.array().required(),
    })
    const validateRes = Joi.validate(payload, schema)
    if (validateRes.error) {
      err = {
        message: '请求参数错误',
        details: validateRes.error.details,
      }
    } else {
      ;[err, res] = await To(
        eascInstance.post(`${validateRes.value.serverUrl}/active-app`, validateRes.value)
      )
    }
    return Callback(err, res)
  }
}
