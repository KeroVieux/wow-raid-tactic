<template>
  <div>
    <el-container id="BasicLayout">
      <el-header class="common-topbar-top">
        <el-row>
          <el-col :span="6">
            <el-row type="flex" class="row-bg">
              <el-col style="width: 60px;">
                <div
                  class="all-nav"
                  @click="sideBarCollapse = !sideBarCollapse"
                >
                  <img
                    src="https://img.alicdn.com/tfs/TB17mppCFOWBuNjy0FiXXXFxVXa-36-28.png"
                    width="18"
                    alt=""
                  />
                </div>
              </el-col>
              <el-col>
                <a class="common-topbar-logo" href="#;">
                  <img
                    src="//img.alicdn.com/tps/TB16hl5LpXXXXXRXVXXXXXXXXXX-198-46.png"
                  />
                </a>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="18">
            <el-menu
              mode="horizontal"
              class="r"
              background-color="#1c2327"
              text-color="#fff"
              active-text-color="#00c1de"
              router
            >
              <el-submenu index="2-4">
                <template slot="title"
                  >中国站</template
                >
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="/">home</el-menu-item>
              <el-menu-item index="/about">about</el-menu-item>
              <el-menu-item index="/element">element</el-menu-item>
              <el-menu-item index="/users">users</el-menu-item>
              <el-menu-item index="/system-params/detail/read/1"
                >登录</el-menu-item
              >
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside :width="asideWidth">
          <el-menu
            style="height: 100%;"
            default-active="1-4-1"
            background-color="#1c2327"
            text-color="#fff"
            active-text-color="#00c1de"
            :collapse="sideBarCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="p-0">
          <slot name="main"></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script type="text/babel">
export default {
  name: 'BasicLayout',
  components: {},
  mixins: [],
  data() {
    return {
      sideBarCollapse: true,
    }
  },
  computed: {
    asideWidth() {
      return this.sideBarCollapse ? '56px' : '200px'
    },
  },
  watch: {},
  methods: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
}
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped></style>
