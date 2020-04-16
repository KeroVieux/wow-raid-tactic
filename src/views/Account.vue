<template>
  <div class="account">
    <h1 class="m-b-10 fz-30">流水账列表</h1>
    <div class="border-color-white"></div>
    <div class="p-b-20"></div>
    <h2 class="fz-24">每一行一个事件，填写格式为 金额，英文逗号，备注； </h2>
    <h2 class="fz-24">收入是正数，支出是负数。</h2>
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <div class="m-b-30">
      <el-row  :gutter="60">
        <el-col span="12">
          <form-create v-model="fApi" :rule="rule" :option="option"></form-create>
        </el-col>
        <el-col span="12">
          <div class="p-b-30"></div>
          <div class="p-b-30"></div>
          <template>
            <el-table
                :data="playerData"
                style="width: 100%">
              <el-table-column
                  label="职业"
                  prop="key"
                  width="80">
              </el-table-column>
              <el-table-column
                  label="人员">
                <template slot-scope="scope">
              <span v-for="item, index in scope.row.value">
                <span :class = "scope.row.key">{{ item }}</span>
                <span v-if="index < scope.row.value.length - 2" class="p-r-20">,</span>
              </span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-col>
      </el-row>
      <div class="tr">
        <el-button type="primary" @click="toIncome">查看结果页</el-button>
      </div>
      <div class="p-b-30"></div>
      <div class="border-color-white"></div>
      <div class="p-b-30"></div>
      <h2 class="m-b-10 fz-28">收入预览</h2>
      <div class="p-30">
        <h3 class="m-b-30 fz-22">总收入 <span class="text-color-red b">{{totalIncome}} g</span></h3>
        <el-row>
          <el-col span="8" v-if="income.tnRate && income.tn">
            <h3 class="b fz-20 m-b-10">共享{{income.tnRate}}%补助 共 {{totalIncome * 0.1}} g</h3>
            <ul>
              <li class="m-b-5">分享人数 {{income.tn}} 人</li>
              <li class="m-b-5">每人 <span class="b fz-20 text-color-red">{{totalIncome * 0.1 / income.tn}} g</span></li>
            </ul>
          </el-col>
          <el-col span="8">
            <h3 class="b fz-20 m-b-10">工资共 {{totalIncome - totalIncome * 0.1}}</h3>
            <ul>
              <li class="m-b-5">分享人数 {{income.all}}人分</li>
              <li class="m-b-5">每人 <span class="b fz-20 text-color-red">{{_.floor((totalIncome - totalIncome * 0.1) / income.all)}} g</span></li>
            </ul>
          </el-col>
        </el-row>
      </div>
      <div class="back_btn">
        <el-button type="primary" @click="$router.push('/team-players')">团员列表</el-button>
        <el-button type="primary" @click="$router.push('/tactic')">策略</el-button>
        <el-button type="warning" @click="getData"><i class="fa fa-refresh"></i> 更新</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import fnMixins from '../assets/js/fnMixins'

export default {
  name: 'home',
  mixins: [fnMixins],
  data() {
    return {
      apiServer: '',
      teamPlayers: [],
      totalIncome: 0,
      income: {},
      playerData: [],
      fApi: {},
      rule: [
        {
          col: {
            span: 12
          },
          type: 'inputNumber',
          value: 10,
          field: 'tn',
          title: 'TN人数',
          validate: [{
            type: 'number', max: 40, required: true, message: '最多为40'
          }],
          on: {
            change: () => {
              this.setData()
            }
          }
        },
        {
          col: {
            span: 12
          },
          type: 'inputNumber',
          value: 40,
          field: 'all',
          title: '总分金人数',
          validate: [{
            type: 'number', max: 40, required: true, message: '最多为40'
          }],
          on: {
            change: () => {
              this.setData()
            }
          }
        },
        {
          col: {
            span: 12
          },
          type: 'inputNumber',
          value: 10,
          field: 'tnRate',
          title: '共享补贴百分比',
          validate: [{
            type: 'number', required: true, message: '必填'
          }],
          on: {
            change: () => {
              this.setData()
            }
          }
        },
        {
          type: 'input',
          value: '',
          props: {
            type: 'textarea',
            rows: 35,
          },
          field: 'list',
          title: '流水',
          validate: [{ type: 'string', required: true, message: '必填' }],
          on: {
            change: () => {
              this.setData()
            }
          }
        },
      ],
      option: {
        submitBtn: false,
      }
    }
  },
  methods: {
    async getData() {
      const res = await axios.get(`${this.apiServer}/raid-tactic/8e3719fa3b04301ee0114e1503003a51`)
      const data = res.data
      $store.set('onlineData', data)
      _.forIn(data.teamPlayers, (value, key) => {
        this.fApi.setValue(key, value);
      })
      this.fApi.clearValidateState()
      this.playerData = []
      this.teamPlayers = data.teamPlayers
      _.forIn(data.teamPlayers, (value, key) => {
        this.playerData.push({
          key,
          value,
        })
      })
      const strList = _.map(data.income.list, (i) => {
        return `${i.number},${i.remark}`
      })
      this.fApi.setValue({
        list: strList.join('\n'),
        tnRate: data.income.tnRate,
        tn: data.income.tn,
        all: data.income.all
      })
      this.income = {
        list: strList.join('\n'),
        tn: data.income.tn,
        tnRate: data.income.tnRate,
        all: data.income.all
      }
      this.totalIncome = this.sumArr(_.map(data.income.list, (i) => {
        return i.number
      }))
    },
    setData() {
      this.fApi.submit(async (formData) => {
        const list = formData.list.split('\n')
        const incomeData = {
          tn: formData.tn,
          all: formData.all,
          tnRate: formData.tnRate,
          list: _.map(list, (i) => {
            return {
              number: _.toNumber(i.slice(0, i.indexOf(','))),
              remark: i.slice(i.indexOf(',') + 1),
            }
          }),
        }
        const onlineData = $store.get('onlineData')
        const res = await axios.put(`${this.apiServer}/raid-tactic/${onlineData._id}`, _.assign(onlineData, { income: incomeData, updatedAt: moment().valueOf() }))
        $store.set('onlineData', _.assign(onlineData, { _rev: res.data.rev }))
        const strList = _.map(incomeData.list, (i) => {
          return `${i.number},${i.remark}`
        })
        this.income = {
          list: strList.join('\n'),
          tn: incomeData.tn,
          tnRate: incomeData.tnRate,
          all: incomeData.all
        }
        this.totalIncome = this.sumArr(_.map(incomeData.list, (i) => {
          return i.number
        }))
      })
    },
    toIncome() {
      const onlineData = $store.get('onlineData')
      this.$router.push(`/income/${onlineData._id}`)
    },
  },
  created() {
    this.$nextTick(async () => {
      await this.getData()
    })
  }
}
</script>
