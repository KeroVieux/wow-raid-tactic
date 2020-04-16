<template>
  <el-container style="height: 100vh;">
    <el-header style="height: 50px;">
      <div class="header-common">
        <div class="fix">
          <div class="l m-r-10 menu-area">
            <div class="menu-trigger">
              <i class="fa fa-bars"></i>
            </div>
            <div class="submenu-area" style="background-color: rgb(14, 18, 29)">
              <ul class="submenu-main">
                <template v-for="item in menuList">
                  <li :key="item.id">
                    <div class="fix submenu-main-link">
                      <span class="title-text">
                        <i class="m-r-10" :class="[item.icon ? item.icon : '']"></i>
                        <a :href="item.url" target="_blank">{{ item.name }}</a>
                        <i class="fa fa-angle-right r m-t-5"></i>
                      </span>
                      <div class="submenu-expand">
                        <div v-if="item.children && item.children.length">
                          <div
                            class="flex-box"
                            v-for="(array, arrayIndex) in _.chunk(item.children, 5)"
                            :key="arrayIndex"
                          >
                            <div class="items" v-for="(i, index) in array" :key="index">
                              <div>
                                <h3>{{ i.name }}</h3>
                                <ul>
                                  <li v-for="link in i.children" :key="link.id">
                                    <a :href="link.url" target="_blank">{{ link.name }}</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </template>
              </ul>
            </div>
          </div>
          <div class="l m-t-10">
            <a class="" :href="currentEnv.VUE_APP_APP_URL">
              <img
                style="height: 30px;"
                :src="logo || '//img.alicdn.com/tps/TB16hl5LpXXXXXRXVXXXXXXXXXX-198-46.png'"
              />
            </a>
          </div>
          <div class="r menu-search">
            <el-input placeholder="请搜索关键字" suffix-icon="el-icon-search"></el-input>
          </div>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-main class="p-0">
        <main-content>
          <slot></slot>
        </main-content>
      </el-main>
    </el-container>
  </el-container>
</template>
<script type="text/babel">
import RouteMenu from '@/assets/config/routeMenu.yml'
import EascService from '@/services/Easc'
import FnMixins from '@/assets/js/fnMixins'

export default {
  name: 'BasicLayout',
  props: {
    currentProjectCode: {
      type: String,
      required: true,
    },
    leftMenu: {
      type: Array,
    },
    logo: {
      required: true,
    },
  },
  components: {},
  mixins: [FnMixins],
  data() {
    return {
      wizplantUrl:
        'http://plant.show.wiz.top/?username=admin&password=25f9e794323b453885f5181f1b624d0b#',
      wizdataUrl:
        'http://data-gat.show.wiz.top/#/?RelyUserId=bc4ba096-ac22-4f68-b43d-9499679ede7a#',
      wizinspectionUrl: 'http://192.168.100.71:8060',
      RouteMenu,
      initForm: {
        password: '',
        confirmPassword: '',
      },
      loading: false,
      activeDialog: false,
      sideBarCollapse: true,
      userInfo: null,
    }
  },
  computed: {
    asideWidth() {
      return this.sideBarCollapse ? '56px' : '200px'
    },
  },
  watch: {},
  methods: {
    showUserInfo() {
      console.log('userInfo', this.userInfo)
    },
    async handleLoadStyle(mode) {
      this.LoadStyle(`http://localhost:8080/css/${mode}/screen.css`)
    },
    async activeApp() {
      if (this.initForm.password && this.initForm.confirmPassword) {
        if (this.initForm.password !== this.initForm.confirmPassword) {
          this.$message.warning('两次输入密码不一致')
          return false
        }
        const list = _.cloneDeep(RouteMenu)
        _.forEach(list, (i) => {
          _.forEach(i.items, (item) => {
            list.push(item)
          })
        })
        const modules = _.map(list, (i) => {
          return {
            code: i.code,
            title: i.title,
          }
        })
        const activeRes = await EascService.activeApp({
          modules,
          adminPassword: this.initForm.confirmPassword,
          appName: this.currentProjectCode,
          serverUrl: currentEnv.VUE_APP_EASC_SERVER,
        })
        if (activeRes && !activeRes.code) {
          this.activeDialog = false
        }
        console.log('activeRes', activeRes)
        return true
      }
      this.$message.warning('请填写管理员密码')
      return false
    },
    linkTo(url) {
      window.location.href = url
    },
  },
  beforeCreate() {},
  async created() {
    this.menuList = [
      // 一级菜单
      {
        name: '全寿期数字资产中心',
        url: '',
        id: '1',
        icon: 'fa fa-edit',
        children: [
          {
            name: '主数据管理',
            icon: '',
            url: '',
            id: '1-1',
            children: [
              {
                name: '位号类别管理',
                url: `${this.wizplantUrl}/mainData/TagClassManagement`,
                id: '1-1-2',
                icon: '',
              },
              {
                name: '属性模版管理',
                url: `${this.wizplantUrl}/mainData/AttributeManagement`,
                id: '1-1-3',
                icon: '',
              },
              {
                name: '位号对象管理',
                url: `${this.wizplantUrl}/mainData/TagManagement`,
                id: '1-1-4',
                icon: '',
              },
              {
                name: '文档类别管理',
                url: `${this.wizplantUrl}/mainData/DocumentClassManagement`,
                id: '1-1-5',
                icon: '',
              },
              {
                name: '文档清单管理',
                url: `${this.wizplantUrl}/mainData/DocumentManagement`,
                id: '1-1-6',
                icon: '',
              },
              {
                name: '数据字典管理',
                url: `${this.wizplantUrl}/mainData/DictionaryManagement`,
                id: '1-1-7',
                icon: '',
              },
              {
                name: '任务类型管理',
                url: `${this.wizplantUrl}/mainData/TaskTypeManagement`,
                id: '1-1-8',
                icon: '',
              },
              {
                name: '后台任务管理',
                url: `${this.wizplantUrl}/mainData/BackgroundTaskManagement`,
                id: '1-1-9',
                icon: '',
              },
              {
                name: '度量单位管理',
                url: `${this.wizplantUrl}/mainData/UnitManagement`,
                id: '1-1-10',
                icon: '',
              },
              {
                name: '关联关系管理',
                url: `${this.wizplantUrl}/mainData/connectionManagement`,
                id: '1-1-11',
                icon: '',
              },
              {
                name: '物资编码管理',
                url: `${this.wizplantUrl}/mainData/commodity`,
                id: '1-1-12',
                icon: '',
              },
              {
                name: '采购编码管理',
                url: `${this.wizplantUrl}/mainData/PartNumber`,
                id: '1-1-13',
                icon: '',
              },
            ],
          },
          {
            name: '资产浏览器',
            url: '',
            icon: '',
            id: '1-2',
            children: [
              {
                name: '目录结构树配置',
                url: `${this.wizplantUrl}/assetsBrowse/structureBreakdown`,
                id: '1-2-1',
                icon: '',
              },
              {
                name: '首页搜索',
                url: `${this.wizplantUrl}/assetsBrowse/search`,
                id: '1-2-2',
                icon: '',
              },
            ],
          },
          {
            name: '模型中心',
            url: '',
            icon: '',
            id: '1-3',
            children: [
              {
                name: '模型中心',
                url: `${this.wizplantUrl}/modelCenter/listV2`,
                id: '1-3-1',
                icon: '',
              },
            ],
          },
        ],
      },
      {
        name: '智慧营销',
        url: '',
        id: '2',
        icon: 'fa fa-search',
        children: [],
      },
      {
        name: '智慧运营中心',
        url: '',
        id: '3',
        icon: 'fa fa-user',
        children: [
          {
            name: '实时监控',
            url: '',
            id: '3-1',
            icon: 'fa fa-search',
            children: [
              {
                name: '实时画面',
                url: `${this.wizdataUrl}/realTimeWatch/realtimeImage`,
                id: '3-1-1',
              },
              {
                name: '报警画面',
                url: `${this.wizdataUrl}/realTimeWatch/alarmFrame`,
                id: '3-1-2',
              },
            ],
          },
          {
            name: '性能分析',
            url: '',
            id: '3-2',
            icon: 'fa fa-search',
            children: [
              {
                name: '燃机性能',
                url: `${this.wizdataUrl}/performanceAnalysis/gasTurbine`,
                id: '3-2-1',
              },
              {
                name: '汽机性能',
                url: `${this.wizdataUrl}/performanceAnalysis/steamTurbine`,
                id: '3-2-2',
              },
              {
                name: '余热锅炉性能',
                url: `${this.wizdataUrl}/performanceAnalysis/heatRecoveryProperty`,
                id: '3-2-3',
              },
              {
                name: '环保监督',
                url: `${this.wizdataUrl}/performanceAnalysis/envSupervision`,
                id: '3-2-4',
              },
              {
                name: '二氧化碳排放指标',
                url: `${this.wizdataUrl}/performanceAnalysis/carbonLetOut`,
                id: '3-2-5',
              },
            ],
          },
          {
            name: '运行管理',
            url: '',
            id: '3-3',
            icon: 'fa fa-search',
            children: [
              {
                name: '启停统计',
                url: `${this.wizdataUrl}/runningManage/startstopCnt`,
                id: '3-3-1',
              },
              {
                name: '工况寻优',
                url: `${this.wizdataUrl}/runningManage/workcondOptim`,
                id: '3-3-2',
              },
            ],
          },
          {
            name: '分析预测',
            url: '',
            id: '3-4',
            icon: 'fa fa-search',
            children: [
              {
                name: '历史回放',
                url: `${this.wizdataUrl}/analyticalPred/historicalBack`,
                id: '3-3-1',
              },
              {
                name: '趋势回放',
                url: `${this.wizdataUrl}/analyticalPred/analytical`,
                id: '3-3-2',
              },
            ],
          },
          {
            name: '设备管理',
            url: '',
            id: '3-5',
            icon: '',
            children: [
              {
                name: '设备评价',
                url: `${this.wizdataUrl}/deviceManage/deviceAppraise`,
                id: '3-5-2',
              },
            ],
          },
          // {
          //   name: '小指标报表',
          //   url: '',
          //   id: '3-5',
          //   icon: 'fa fa-search',
          //   sub: [
          //     {
          //       name: '班值供热量报表',
          //       url: '',
          //       id: '3-5-1',
          //     },
          //     {
          //       name: '班值上网电量报表',
          //       url: '',
          //       id: '3-5-2',
          //     },
          //     {
          //       name: '班值水量报表',
          //       url: '',
          //       id: '3-5-3',
          //     },
          //     {
          //       name: '班值天然气用量报表',
          //       url: '',
          //       id: '3-5-4',
          //     },
          //     {
          //       name: '班值外购电量报表',
          //       url: '',
          //       id: '3-5-5',
          //     },
          //     {
          //       name: '辅机电量班值报表',
          //       url: '',
          //       id: '3-5-6',
          //     },
          //     {
          //       name: '班值发电量报表',
          //       url: '',
          //       id: '3-5-7',
          //     },
          //     {
          //       name: '班值小指标报表',
          //       url: '',
          //       id: '3-5-8',
          //     }
          //   ]
          // },
          // {
          //   name: '水网管理',
          //   url: '',
          //   id: '3-6',
          //   icon: 'fa fa-search',
          //   sub: [
          //     {
          //       name: '水网管理',
          //       url: '',
          //       id: '3-6-1',
          //     }
          //   ]
          // },
        ],
      },
      {
        name: '智慧安全管控中心',
        url: '',
        id: '4',
        icon: 'fa fa-pencil',
        children: [],
      },
      {
        name: '智慧设备健康管理中心',
        url: '',
        id: '5',
        icon: 'fa fa-home',
        children: [
          {
            name: '设备管理',
            icon: '',
            url: '',
            id: '5-1',
            sub: [
              {
                name: '启停统计',
                icon: '',
                url: '',
                id: '5-1-1',
              },
              {
                name: '阀门状态',
                icon: '',
                url: '',
                id: '5-1-2',
              },
              {
                name: '重要辅机评价',
                icon: '',
                url: '',
                id: '5-1-3',
              },
              {
                name: '趋势分析',
                icon: '',
                url: '',
                id: '5-1-4',
              },
            ],
          },
          {
            name: '点检模板管理',
            icon: '',
            url: '',
            id: '5-2',
            children: [
              {
                name: '设备-部件模板管理',
                icon: '',
                url: `${this.wizinspectionUrl}/config/template/Device_Templet`,
                id: '5-2-1',
              },
              {
                name: '部件-点检点模板',
                icon: '',
                url: `${this.wizinspectionUrl}`,
                id: '5-2-2',
              },
              {
                name: '点检设备管理',
                icon: '',
                url: `${this.wizinspectionUrl}`,
                id: '5-2-3',
              },
              {
                name: '点检部件管理',
                icon: '',
                url: `${this.wizinspectionUrl}`,
                id: '5-2-4',
              },
              {
                name: '点检点管理',
                icon: '',
                url: `${this.wizinspectionUrl}`,
                id: '5-2-5',
              },
              {
                name: '点检区域管理',
                icon: '',
                url: `${this.wizinspectionUrl}`,
                id: '5-2-6',
              },
              {
                name: '点检线路管理',
                icon: '',
                url: `${this.wizinspectionUrl}`,
                id: '5-2-7',
              },
            ],
          },
          {
            name: '配置模板管理',
            children: [
              {
                name: '设备-部件模板管理',
                url: `${this.wizinspectionUrl}/config/template/Device_Templet`,
                id: 'hi4nrxvi',
              },
              {
                name: '部件-点检点模板',
                url: `${this.wizinspectionUrl}/config/template/Parts_Templet`,
                id: 'f1lfq5s6',
              },
              {
                name: '点检设备管理',
                url: `${this.wizinspectionUrl}/config/DeviceManger`,
                id: '1v8dihpn',
              },
              {
                name: '点检部件管理',
                url: `${this.wizinspectionUrl}/config/PartsManger`,
                id: 'nmanr66i',
              },
              {
                name: '点检点管理',
                url: `${this.wizinspectionUrl}/config/WizpetManger`,
                id: 'lsb8rk5r',
              },
              {
                name: '点检区域管理',
                url: `${this.wizinspectionUrl}/config/AreaManger`,
                id: '5zvpv3oz',
              },
              {
                name: '点检线路管理',
                url: `${this.wizinspectionUrl}/config/RouteManger`,
                id: 'egmt7bj2',
              },
            ],
          },
          {
            name: '点检任务设置',
            children: [
              {
                name: '点检任务生成策略管理',
                url: `${this.wizinspectionUrl}/taskConfig/StrategyManger`,
                id: 'v7yuz2pj',
              },
              {
                name: '点击周期设置',
                url: `${this.wizinspectionUrl}/taskConfig/PreiodSetting`,
                id: 'evjn8lxl',
              },
              {
                name: '临时性点检任务设置',
                url: `${this.wizinspectionUrl}/taskConfig/InterimMissionManger`,
                id: 'm5zvsnlu',
              },
            ],
          },
          {
            name: '点检查询及报表',
            children: [
              {
                name: '点检任务查询',
                url: `${this.wizinspectionUrl}/queryAndReport/MissionInquiry`,
                id: 'wqtfmi2x',
              },
              {
                name: '点检任务完成情况',
                url: `${this.wizinspectionUrl}/queryAndReport/MissionFinish01`,
                id: 'rtsbu0sg',
              },
              {
                name: '点检结果查询',
                url: `${this.wizinspectionUrl}/queryAndReport/ResultInquiry`,
                id: 'w88gft8g',
              },
              {
                name: '点检区域工时统计',
                url: `${this.wizinspectionUrl}/queryAndReport/areaWorkstatistics`,
                id: 'ann228n9',
              },
              {
                name: '点检任务工时统计',
                url: `${this.wizinspectionUrl}/queryAndReport/taskWorkstatistics`,
                id: 'unqr7eqg',
              },
            ],
          },
          {
            name: '点检个性化设置',
            children: [
              {
                name: '点检区域顺序设置',
                url: `${this.wizinspectionUrl}/setting/AreaOrderSetting`,
                id: 'b3ysx7ge',
              },
              {
                name: '点检设备顺序设置',
                url: `${this.wizinspectionUrl}/setting/deviceOrderSetting`,
                id: '8a54jwr9',
              },
              {
                name: '点检点顺序设置',
                url: `${this.wizinspectionUrl}/setting/OrderSetting`,
                id: 'qitkyflb',
              },
              {
                name: '点检员其他设置',
                url: `${this.wizinspectionUrl}/setting/WizpetOtherSetting`,
                id: 'hv2vob7n',
              },
            ],
          },
          {
            name: '系统设置',
            children: [
              {
                name: '节假日维护',
                url: `${this.wizinspectionUrl}/config/HolidayPrevent`,
                id: 'kmxcmtq7',
              },
              {
                name: '点检方式设置',
                url: `${this.wizinspectionUrl}/systemSetting/inspectionMethodSetting`,
                id: 'm8o2il7r',
              },
              {
                name: '数据单位设置',
                url: `${this.wizinspectionUrl}/systemSetting/uomSetting`,
                id: 'riw7jilr',
              },
              {
                name: '班值设置',
                url: `${this.wizinspectionUrl}/systemSetting/shiftSetting`,
                id: '0hp32hx8',
              },
              {
                name: '数据导入',
                url: `${this.wizinspectionUrl}/systemSetting/dataImport`,
                id: 'we9cic9j',
              },
              {
                name: '系统参数设置',
                url: `${this.wizinspectionUrl}/systemSetting/ParamSetting`,
                id: '096xukcp',
              },
              {
                name: '部门设置',
                url: `${this.wizinspectionUrl}/systemSetting/departSetting`,
                id: 'j2kqvnbj',
              },
              {
                name: '专业设置',
                url: `${this.wizinspectionUrl}/systemSetting/professionSetting`,
                id: 'oq75s33w',
              },
              {
                name: '部门-专业关系设置',
                url: `${this.wizinspectionUrl}/systemSetting/departAndProfessionSetting`,
                id: 'wca5nwk9',
              },
            ],
          },
          {
            name: '操作培训',
            icon: '',
            url: '',
            id: '5-3',
            children: [],
          },
          {
            name: '传感器设置',
            icon: '',
            url: '',
            id: '5-4',
            children: [],
          },
        ],
      },
    ]
  },
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
<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.header-common {
  background: rgb(8, 13, 28);
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
  color: #fff;
  position: relative;
  z-index: 998;
  a {
    color: #fff;
    &:hover {
      color: rgb(60, 188, 255);
    }
  }
  .title-text {
    cursor: pointer;
    font-weight: 500;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    i {
      font-size: 14px;
      font-weight: 500;
    }
  }
  .menu-area {
    &:hover {
      .submenu-main {
        left: 0;
      }
    }
  }
  .submenu-main {
    transition: all 0.5s;
    position: fixed;
    width: 220px;
    height: 100vh;
    background: rgb(17, 23, 38);
    /*background: #272b2d;*/
    border-right: 1px solid hsla(0, 0%, 100%, 0.15);
    border-top: none;
    top: 50px;
    left: -220px;
    .submenu-main-link {
      position: relative;
      color: #fff;
      display: block;
      width: 100%;
      padding: 12px;
      cursor: pointer;
      &:hover {
        .title-text {
          a {
            color: rgb(60, 188, 255);
          }
          i {
            color: rgb(60, 188, 255);
          }
        }
        .submenu-expand {
          display: block;
          background: rgb(28, 33, 48);
          left: 219px;
        }
      }
    }
  }
  .submenu-expand {
    transition: all 0.5s;
    position: fixed;
    padding: 10px 15px 0 15px;
    display: none;
    left: -800px;
    top: 50px;
    border: 1px solid rgb(34, 35, 38);
    /*background: #303539;*/
    background: rgb(28, 33, 48);
    height: 100vh;
    width: 800px;
    h3 {
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 10px;
      padding-bottom: 10px;
    }
    .flex-box {
      display: flex;
      .items {
        flex-basis: 20%;
        h3 {
          margin-top: 5px;
          margin-bottom: 5px;
        }
        li {
          font-size: 12px;
          margin: 18px 0;
          a:hover {
            font-weight: 500;
            color: rgb(60, 188, 255);
          }
        }
      }
    }
  }
  .menu-trigger {
    font-size: 20px;
    border-right: 1px solid hsla(0, 0%, 100%, 0.15);
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    &:hover {
      background-color: rgb(60, 188, 255);
    }
  }
}
</style>
<style lang="scss">
.menu-search {
  input::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: rgb(61, 69, 91) !important;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: rgb(61, 69, 91) !important;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: rgb(61, 69, 91) !important;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgb(61, 69, 91) !important;
  }
  margin-right: 180px;
  .el-input__inner {
    height: 50px !important;
    background: rgb(27, 32, 46) !important;
    border-radius: 0 !important;
    font-size: 12px !important;
    border: none !important;
    /*color: rgb(61, 69, 91)!important;*/
  }
  .el-input__icon {
    color: rgb(61, 69, 91) !important;
  }
}
</style>
