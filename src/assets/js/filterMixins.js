/**
 * This provides mixins used for common filters in the Vue components.
 * Before you begin to used it , plz inject this mixins in the components
 * like mixins: [FiltersMixin]
 *
 * @mixin
 */

const FiltersMixin = {
  flowNodeTranslate(val) {
    switch (val) {
      case 'S':
        return '开始'
      case 'E':
        return '通过'
      default:
        return val
    }
  },
  contractStatusTranslate(val) {
    switch (val) {
      case -1:
        return '未发起'
      case 0:
        return '未发起'
      case 1:
        return '审批中'
      case 2:
        return '通过'
      case 4:
        return '审批中'
      default:
        return '不通过'
    }
  },
  standardStatusTranslate(val) {
    switch (val) {
      case -1:
        return '撤回'
      case 0:
        return '保存'
      case 1:
        return '审批中'
      case 2:
        return '通过'
      case 3:
        return '不通过'
      case 4:
        return '回到上一步'
      default:
        return '未知'
    }
  },
  statusTranslate(val) {
    switch (val) {
      case 0:
        return '正常'
      case 1:
        return '被禁用'
      default:
        return '未知'
    }
  },
  paramTypeTranslate(val) {
    switch (val) {
      case 1:
        return '系统text类型'
      case 2:
        return '位号类别'
      case 3:
        return '文档类别'
      case 4:
        return '数据字典'
      case 5:
        return '图片类型'
      default:
        return '自定义文本类型'
    }
  },
  /**
   * Detect it's a real empty
   * @param {string} value - A arg gonna be detect .
   * @param {string} defaultText - If it's a empty arg , will show the default test .
   * @returns {string}
   * @example
   * {{data.author | isEmpty('空')}}
   */
  isEmpty(value, defaultText) {
    const trimValue = _.trim(value)
    if (!trimValue) {
      if (defaultText) {
        return defaultText
      }
      return '空'
    }
    return trimValue
  },
  add(value, addend = 0) {
    if (!_.isNumber(value)) {
      value = _.toNumber(value)
    }
    if (_.isNaN(value)) {
      return '不是正确的数值'
    }
    if (!_.isNumber(addend)) {
      addend = _.toNumber(addend)
    }
    if (_.isNaN(addend)) {
      return '不是正确的数值'
    }
    return _.add(value, addend)
  },
  subtract(value, subtrahend = 0) {
    if (!_.isNumber(value)) {
      value = _.toNumber(value)
    }
    if (_.isNaN(value)) {
      return '不是正确的数值'
    }
    if (!_.isNumber(subtrahend)) {
      subtrahend = _.toNumber(subtrahend)
    }
    if (_.isNaN(subtrahend)) {
      return '不是正确的数值'
    }
    return _.subtract(value, subtrahend)
  },
  multiply(value, multiplicand = 1) {
    if (!_.isNumber(value)) {
      value = _.toNumber(value)
    }
    if (_.isNaN(value)) {
      return '不是正确的数值'
    }
    if (!_.isNumber(multiplicand)) {
      multiplicand = _.toNumber(multiplicand)
    }
    if (_.isNaN(multiplicand)) {
      return '不是正确的数值'
    }
    return _.multiply(value, multiplicand)
  },
  divide(value, divisor = 1) {
    if (!_.isNumber(value)) {
      value = _.toNumber(value)
    }
    if (_.isNaN(value)) {
      return '不是正确的数值'
    }
    if (!_.isNumber(divisor)) {
      divisor = _.toNumber(divisor)
    }
    if (_.isNaN(divisor)) {
      return '不是正确的数值'
    }
    return _.divide(value, divisor)
  },
  /**
   * 向下取整
   * @param {number} value - A floor number need to formatted ,
   * whatever the org floor number looks like .
   * @param {int} precision - 精确到的位数，默认百分位.
   * @returns {number | string}
   * @example
   * {{data.number | round(3)}}
   */
  floor(value, precision = 0) {
    if (!_.isNumber(value)) {
      value = _.toNumber(value)
    }
    if (_.isNaN(value)) {
      return '不是正确的数值'
    }
    if (!_.isNumber(precision)) {
      precision = _.toNumber(precision)
    }
    if (_.isNaN(precision)) {
      return '不是正确的数值'
    }
    return _.floor(value, precision)
  },
  /**
   * 四舍五入
   * @param {number} value - A floor number need to formatted ,
   * whatever the org floor number looks like .
   * @param {int} precision - 精确到的位数，默认百分位.
   * @returns {number | string}
   * @example
   * {{data.number | round(3)}}
   */
  round(value, precision = 2) {
    if (!_.isNumber(value)) {
      value = _.toNumber(value)
    }
    if (_.isNaN(value)) {
      return '不是正确的数值'
    }
    if (!_.isNumber(precision)) {
      precision = _.toNumber(precision)
    }
    if (_.isNaN(precision)) {
      return '不是正确的数值'
    }
    return _.round(value, precision)
  },
  /**
   * 向上取整
   * @param {number} value - A floor number need to formatted ,
   * whatever the org floor number looks like .
   * @param {int} precision - 精确到的位数，默认百分位.
   * @returns {number | string}
   * @example
   * {{data.number | ceil(3)}}
   */
  ceil(value, precision = 2) {
    if (!_.isNumber(value)) {
      value = _.toNumber(value)
    }
    if (_.isNaN(value)) {
      return '不是正确的数值'
    }
    if (!_.isNumber(precision)) {
      precision = _.toNumber(precision)
    }
    if (_.isNaN(precision)) {
      return '不是正确的数值'
    }
    return _.ceil(value, precision)
  },
  /**
   * Timing formatter
   * @param {date} value - A timing need to formatted , whatever the org format looks like .
   * @param {string} format - (more info: http://momentjs.cn/ ) .
   * @see {@link http://momentjs.cn/}
   * @returns {Date|string}
   * @example
   * {{data.created_at | formatDate('l')}}
   */
  dateFormat(value, format) {
    if (!_.isDate(new Date(value))) {
      return '日期错误'
    }
    return Moment(value).format(format)
  },
  dateCalendar(value) {
    if (!_.isDate(new Date(value))) {
      return '日期错误'
    }
    return Moment(value).calendar()
  },
  dateToNow(value) {
    if (!_.isDate(new Date(value))) {
      return '日期错误'
    }
    return Moment(value).toNow()
  },
  /**
   * Truncate
   * @param {string} value - A long sentence need truncate .
   * @param {object} options - The options object .
   * @returns {string}
   * @example
   * {{data.body | truncate({'length': 24, 'separator': /,? +/, 'omission': ' [...]'})}}
   */
  truncate(value, options) {
    const finalOpt = {
      length: 24,
      separator: /,? +/,
      omission: ' ...',
    }
    _.assign(finalOpt, options)
    if (!_.isString(value)) {
      value = _.toString(value)
    }
    if (!_.isObject(finalOpt)) {
      return '错误的参数'
    }
    return _.truncate(value, finalOpt)
  },
  trim(value, chars = null) {
    if (!_.isString(value)) {
      value = _.toString(value)
    }
    if (!_.isString(chars)) {
      value = _.toString(chars)
    }
    return _.trim(value, chars)
  },
  replace(value, pattern = null, replacement = null) {
    if (!_.isString(value)) {
      value = _.toString(value)
    }
    if (!_.isRegExp(pattern) && !_.isString(pattern)) {
      return '错误的参数'
    }
    if (!_.isFunction(replacement) && !_.isString(replacement)) {
      return '错误的参数'
    }
    return _.replace(value, pattern, replacement)
  },
  repeat(value, n = 1) {
    if (!_.isNumber(n) || _.isNaN(n)) {
      return '错误的参数'
    }
    if (!_.isString(value)) {
      value = _.toString(value)
    }
    return _.repeat(value, n)
  },
}
export default {
  filters: FiltersMixin,
}
