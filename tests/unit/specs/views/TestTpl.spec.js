import { expect } from 'chai'
import TestTpl from '@/views/TestTpl/layout'
import Utils from '../../utils'

describe('TestTpl', () => {
  let vm
  afterEach(() => {
    Utils.destroyVM(vm)
  })
  it('create', () => {
    vm = Utils.createTest(TestTpl, {}, true)
    const elm = vm.$el
    expect(elm.id).to.equal('TestTplLayout')
  })
})
