<template>
  <div class="about">
    <h1 class="b fz-24 m-b-30">叶师傅 - MC g团 规则</h1>
    <div class="m-b-30">
      <h3 class="b fz-20">固定补助</h3>
      <ul>
        <li>MT兼职火炕 200</li>
        <li>dps 100 80 50</li>
        <li>驱散第一50</li>
        <li>灭火每个15</li>
      </ul>
    </div>
    <div class="m-b-30">
      <h3 class="b fz-20 m-b-10">共享10%补助</h3>
      <ul>
        <li>副t</li>
        <li>奶</li>
      </ul>
    </div>
    <div class="m-b-30">
      <h3 class="b fz-20 m-b-10">考核标准</h3>
      <ul>
        <li>全职业第1输出高过100万，就顺移下一个的百分之60</li>
        <li>驱散换算500dps或治疗量，是不够dps的时候拿来换，已经够dps的就不换算</li>
      </ul>
    </div>
    <div class="m-b-30">
      <h3 class="b fz-20 m-b-10">其他</h3>
      <ul>
        <li>add 炸团罚款50</li>
        <li>恶意ot罚款50</li>
        <li>如果距离最低dps标准差2w内，分半g。超过2w不分g。</li>
      </ul>
    </div>
    <div class="m-b-30">
      <h3 class="b fz-20 m-b-10">叫组宏</h3>
      <p>/1 叶师傅G团，mc开组，来各职业。固定补助：MT兼职火炕 200； dps 100 80 50；驱散第一50；灭火15 。 共享补助10%-TN分。低于第一60%不分（第1输出高过100万，就顺移下一个的百分之60），add、炸团导致灭团的罚款50，恶意ot罚款50计入消费。</p>
    </div>
    <div class="tr">
      <el-select v-model="value" placeholder="请选择" class="m-r-10">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <router-link to="/team-players"><el-button type="primary">下一步</el-button></router-link>
    </div>
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
    <div class="m-b-30">
      <h3 class="m-b-10 fz-24">TODO</h3>
      <ul>
        <li>1. 判断重名</li>
        <li>2. 判断输入金额格式</li>
        <li>3. 储存数据库</li>
        <li>4. 分日期，分副本记录</li>
        <li>5. 统计数据</li>
        <li>6. 美化界面</li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'home',
  data() {
    return {
      options: [{
        value: 'mc',
        label: 'mc'
      }],
      value: 'mc'
    }
  },
  methods: {},
  created() {}
}
</script>
