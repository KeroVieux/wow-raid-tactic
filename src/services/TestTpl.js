import _ from 'lodash'
import Joi from 'joi'
import To from 'await-to-js'
import Callback from '@/services/Callback'

export default class TestTpl {
  static async create(payload) {
    let [err, res] = [null, null]
    const schema = Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(30)
        .required(),
      value: Joi.any().required(),
      status: Joi.number()
        .integer()
        .optional(),
    })
    const validateRes = Joi.validate(_.omit(payload, ['id']), schema)
    if (validateRes.error) {
      err = {
        message: '请求参数错误',
        details: validateRes.error.details,
      }
    } else {
      ;[err, res] = await To(apiInstance.post('/test-tpl', validateRes.value))
    }
    return Callback(err, res)
  }
  static async update(payload) {
    let [err, res] = [null, null]
    const schema = Joi.object().keys({
      id: Joi.string().required(),
      name: Joi.string()
        .min(3)
        .max(30)
        .optional(),
      value: Joi.any().optional(),
      status: Joi.number()
        .integer()
        .optional(),
    })
    const validateRes = Joi.validate(payload, schema)
    if (validateRes.error) {
      err = {
        message: '请求参数错误',
        details: validateRes.error.details,
      }
    } else {
      ;[err, res] = await To(apiInstance.patch('/test-tpl', validateRes.value))
    }
    return Callback(err, res)
  }
  static async remove(payload) {
    let [err, res] = [null, null]
    const schema = Joi.object().keys({
      id: Joi.string().required(),
    })
    const validateRes = Joi.validate(payload, schema)
    if (validateRes.error) {
      err = {
        message: '请求参数错误',
        details: validateRes.error.details,
      }
    } else {
      ;[err, res] = await To(apiInstance.delete('/test-tpl', validateRes.value))
    }
    return Callback(err, res)
  }
  static async get(payload) {
    let [err, res] = [null, null]
    const schema = Joi.object().keys({
      id: Joi.string().required(),
    })
    const validateRes = Joi.validate(payload, schema)
    if (validateRes.error) {
      err = {
        message: '请求参数错误',
        details: validateRes.error.details,
      }
    } else {
      ;[err, res] = await To(apiInstance.get(`/test-tpl/${validateRes.value.id}`))
    }
    return Callback(err, res)
  }
  static async find(payload) {
    let [err, res] = [null, null]
    const schema = Joi.object().keys({
      name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .optional(),
      value: Joi.any().optional(),
      status: Joi.number()
        .integer()
        .optional(),
    })
    const validateRes = Joi.validate(payload, schema)
    if (validateRes.error) {
      err = {
        message: '请求参数错误',
        details: validateRes.error.details,
      }
    } else {
      ;[err, res] = await To(apiInstance.get('/test-tpl/?'))
    }
    return Callback(err, res)
  }
}
