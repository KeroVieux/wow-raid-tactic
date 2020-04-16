<template>
  <div class="home">
    <h1 class="m-b-10 fz-30">工具人列表</h1>
    <div class="border-color-white"></div>
    <div class="p-b-20"></div>
    <h2 class="fz-24">重要的写在最前面，英文逗号分隔；</h2>
    <h2 class="fz-24">只记工具人，简称就可以，不需要全团都录入。</h2>
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <div>
      <form-create v-model="fApi" :rule="rule" :option="option" @on-submit="onSubmit"></form-create>
      <div class="tr p-t-30 m-b-30">
        <el-button type="danger" @click="toAccount">记账</el-button>
        <el-button type="primary" @click="toTactic">策略</el-button>
      </div>
      <div class="m-b-30" v-if="tableShow">
        <div class="p-t-30"></div>
        <div class="p-t-30"></div>
        <div class="p-t-30"></div>
        <div class="p-t-30"></div>
        <div class="p-t-30"></div>
        <div class="p-t-30"></div>
        <div class="p-t-30"></div>
        <div class="p-t-30"></div>
        <div class="border-color-white"></div>
        <div class="p-t-30"></div>
        <div class="p-t-30"></div>
        <div class="p-t-30"></div>
        <h3 class="m-b-10 fz-24">配置</h3>
        <template>
          <el-table
              :data="recommend"
              style="width: 100%">
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column
                label="人员">
              <template slot-scope="scope">
                <span :class = "scope.row.key">{{scope.row.key}}</span>
              </template>
            </el-table-column>
            <el-table-column
                prop="value"
                label="建议数量">
            </el-table-column>
            <el-table-column
                prop="fact"
                label="实际数量">
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
    <div class="back_btn">
      <el-button type="primary" @click="$router.push('/')">规则</el-button>
      <el-button type="warning" @click="getData"><i class="fa fa-refresh"></i> 更新</el-button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      tableShow: false,
      apiServer: '',
      recommend: [
        {
          key: 'zs',
          value: 4,
          fact: 0,
        },
        {
          key: 'ss',
          value: 3,
          fact: 0,
        },
        {
          key: 'lr',
          value: 4,
          fact: 0,
        },
        {
          key: 'fs',
          value: 8,
          fact: 0,
        },
        {
          key: 'sm',
          value: 3,
          fact: 0,
        },
        {
          key: 'xd',
          value: 2,
          fact: 0,
        },
        {
          key: 'dz',
          value: 4,
          fact: 0,
        },
        {
          key: 'ms',
          value: 5,
          fact: 0,
        },
      ],
      teamPlayers: [],
      globalTactic: [],
      banishTactic: [],
      msFsBuffTactic: [],
      boss4Tactic: [],
      boss5Tactic: [],
      boss6Tactic: [],
      boss7Tactic: [],
      boss8Tactic: [],
      boss9Tactic: [],
      boss10Tactic: [],
      boss1: '',
      boss2: '',
      randomNames: [],
      fApi: {},
      rule: [
        {
          col: {
            span: 12
          },
          type: 'input',
          props: {
            type: 'textarea',
            rows: 5,
          },
          field: 'zs',
          title: '战士列表',
          validate: [{ type: 'string', required: true, message: '必填' }],
          on: {
            change: () => {
              this.setData('zs')
            }
          }
        },
        {
          col: {
            span: 12
          },
          type: 'input',
          props: {
            type: 'textarea',
            rows: 5,
          },
          field: 'ss',
          title: '术士列表',
          validate: [{ type: 'string', required: true, message: '必填' }],
          on: {
            change: () => {
              this.setData('ss')
            }
          }
        },
        {
          col: {
            span: 12
          },
          type: 'input',
          props: {
            type: 'textarea',
            rows: 5,
          },
          field: 'sm',
          title: '萨满列表',
          validate: [{ type: 'string', required: true, message: '必填' }],
          on: {
            change: () => {
              this.setData('sm')
            }
          }
        },
        {
          col: {
            span: 12
          },
          type: 'input',
          props: {
            type: 'textarea',
            rows: 5,
          },

          field: 'xd',
          title: '德鲁伊列表',
          validate: [{ type: 'string', required: true, message: '必填' }],
          on: {
            change: () => {
              this.setData('xd')
            }
          }
        },
        {
          col: {
            span: 12
          },
          type: 'input',
          props: {
            type: 'textarea',
            rows: 5,
          },
          field: 'ms',
          title: '牧师列表',
          validate: [{ type: 'string', required: true, message: '必填' }],
          on: {
            change: () => {
              this.setData('ms')
            }
          }
        },
        {
          col: {
            span: 12
          },
          type: 'input',
          props: {
            type: 'textarea',
            rows: 5,
          },
          field: 'fs',
          title: '法师列表',
          validate: [{ type: 'string', required: true, message: '必填' }],
          on: {
            change: () => {
              this.setData('fs')
            }
          }
        },
        {
          col: {
            span: 12
          },
          type: 'input',
          props: {
            type: 'textarea',
            rows: 5,
          },
          field: 'lr',
          title: '猎人列表',
          validate: [{ type: 'string', required: true, message: '必填' }],
          on: {
            change: () => {
              this.setData('lr')
            }
          }
        },
        {
          col: {
            span: 12
          },
          type: 'input',
          props: {
            type: 'textarea',
            rows: 5,
          },
          field: 'dz',
          title: '盗贼列表',
          validate: [{ type: 'string', required: true, message: '必填' }],
          on: {
            change: () => {
              this.setData('dz')
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
        this.fApi.setValue(key, _.toString(value));
      })
      this.fApi.clearValidateState()
    },
    async setData() {
      this.fApi.submit(async (formData) => {
        const data = _.cloneDeep(formData)

        _.forIn(data, (value, key) => {
          data[key] = value.split(',')
          const table = _.find(this.recommend, { key })
          table.fact = data[key].length
        })
        const onlineData = $store.get('onlineData')
        const res = await axios.put(`${this.apiServer}/raid-tactic/${onlineData._id}`, _.assign(onlineData, { teamPlayers: data, updatedAt: moment().valueOf() }))
        $store.set('onlineData', _.assign(onlineData, { _rev: res.data.rev }))
        this.tableShow = true
      })
    },
    toAccount() {
      this.$router.push('/account')
    },
    toTactic() {
      this.$router.push('/tactic')
    },
  },
  async created() {
    this.$nextTick(async () => {
      await this.getData()
      this.fApi.clearValidateState()
    })
  }
}
</script>
