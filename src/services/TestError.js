import Joi from 'joi'
import To from 'await-to-js'
import Callback from '@/services/Callback'

export default class SystemParams {
  static async get(payload) {
    let [err, res] = [null, null]
    const schema = Joi.object().keys({
      code: Joi.string().required(),
    })
    const validateRes = Joi.validate(payload, schema)
    if (validateRes.error) {
      err = {
        code: 654,
        message: '请求参数错误',
        details: validateRes.error.details,
      }
    } else {
      ;[err, res] = await To(
        axios.get(`http://uiserver01.wiz.com:3000/cats/${validateRes.value.code}`)
      )
    }
    return Callback(err, res)
  }
}
