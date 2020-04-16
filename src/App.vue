<template>
  <div id="app">
    <main-content>
      <el-container style="height: 100%;">
        <el-main><router-view></router-view></el-main>
      </el-container>
    </main-content>
  </div>
</template>

<script>
import logoImg from '@/assets/logo.png'

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      logoImg,
      options: [
        {
          value: '1',
          label: '上海建科',
        },
        {
          value: '2',
          label: '上海金山',
        },
        {
          value: '3',
          label: '高安屯',
        },
        {
          value: '4',
          label: '曲靖局',
        },
        {
          value: '5',
          label: '昆明局',
        },
      ],
      siteId: '1',
      setting: {},
    }
  },
  methods: {
    async loginAction() {
      await this.$store.dispatch({
        type: 'accountAuth/rsaKey',
      })
      await this.$store.dispatch({
        type: 'accountAuth/token',
      })
      await this.$store.dispatch({
        type: 'accountCurrent/currentUser',
      })
    },
  },
}
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
.common-topbar-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  input.el-input__inner {
    border: none !important;
  }
}
</style>
