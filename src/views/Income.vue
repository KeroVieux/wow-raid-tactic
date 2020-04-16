<template>
  <div class="account" v-if="income">
    <h1 class="m-b-10 fz-30 b">叶师傅 - {{moment(onlineData.updatedAt).format('YYYY-MM-DD')}} mc g 团</h1>
    <div class="border-color-white"></div>
    <div style=" font-size: 60px; padding: 50px;"><span class="text-color-red">每人工资</span></div>
    <div class="tc" style=" font-size: 200px; padding: 100px;"><span class="text-color-red">{{_.floor((totalIncome - totalIncome * 0.1) / income.all)}} g</span></div>
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <h2 class="m-b-10 fz-28">明细</h2>
    <div class="border-color-white"></div>
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
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <div class="p-b-30"></div>
    <div class="p-30">
      <el-row gutter="60">
        <el-col span="12">
          <h3 class="m-b-10 fz-24">收入流水</h3>
          <template>
            <el-table
                :data="income.list"
                style="width: 100%">
              <el-table-column
                  type="index"
                  width="50">
              </el-table-column>
              <el-table-column
                  prop="number"
                  label="金额"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="remark"
                  label="事件">
              </el-table-column>
            </el-table>
          </template>
        </el-col>
        <el-col span="12">
          <h3 class="m-b-10 fz-24">重要参团人员</h3>
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
      onlineData: {},
      totalIncome: 0,
      teamPlayers: null,
      income: null,
      playerData: [],
      apiServer: '',
    }
  },
  async created() {
    const res = await axios.get(`${this.apiServer}/raid-tactic/8e3719fa3b04301ee0114e1503003a51`)
    const data = res.data
    $store.set('onlineData', data)
    this.onlineData = data
    this.teamPlayers = data.teamPlayers
    this.income = data.income
    _.forIn(this.teamPlayers, (value, key) => {
      this.playerData.push({
        key,
        value,
      })
    })
    this.totalIncome = this.sumArr(_.map(this.income.list, (i) => {
      return i.number
    }))
  }
}
</script>
