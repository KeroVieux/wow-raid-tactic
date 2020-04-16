<template>
  <div class="home">
    <div v-if="teamPlayers">
      <div class="p-30">
        <h1 class="b fz-32">团队策略</h1>
        <div class="p-b-30"></div>
        <el-row gutter="60">
          <el-col span="12">
            <h2 class="b fz-24">buff分配</h2>
            <template>
              <el-table
                  class="bg-color-black"
                  :data="msFsBuffTactic"
                  style="width: 100%">
                <el-table-column
                    type="index"
                    width="50"
                    label="序号">
                </el-table-column>
                <el-table-column
                    width="200"
                    label="fs">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="fsImg" alt="">
                    <span class="fs p-l-10">{{ scope.row.fs }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                    width="200"
                    label="ms">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="msImg" alt="">
                    <span class="ms p-l-10">{{ scope.row.ms }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                    label="组别">
                  <template slot-scope="scope">
                    <span class="ms p-l-10">{{ scope.row.num }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-col>
          <el-col span="12">
            <h2 class="b fz-24">buff分配</h2>
            <template>
              <el-table
                  class="bg-color-black"
                  :data="xdBuffTactic"
                  style="width: 100%">
                <el-table-column
                    type="index"
                    width="50"
                    label="序号">
                </el-table-column>
                <el-table-column
                    width="200"
                    label="xd">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="xdImg" alt="">
                    <span class="xd p-l-10">{{ scope.row.xd }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                    label="组别">
                  <template slot-scope="scope">
                    <span class=" p-l-10">{{ scope.row.num }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-col>
        </el-row>
        <div class="p-b-30"></div>
        <div class="p-b-30"></div>
        <el-row gutter="60">
          <el-col span="12">
            <h2 class="b fz-24">MT分组</h2>
            <template>
              <el-table
                  class="bg-color-black"
                  :data="globalTactic"
                  style="width: 100%">
                <el-table-column
                    type="index"
                    width="50"
                    label="序号">
                </el-table-column>
                <el-table-column
                    prop="target"
                    label="目标"
                    width="80">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="scope.row.target" alt="">
                  </template>
                </el-table-column>
                <el-table-column
                    prop="mt"
                    label="MT"
                    width="200">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="zsImg" alt="">
                    <span class="zs p-l-10">{{ scope.row.mt }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                    prop="healer"
                    label="治疗"
                    width="200">
                  <template slot-scope="scope">
                    <div>
                      <img height="20" width="20" :src="msImg" alt="">
                      <span class="ms p-l-10">{{ scope.row.healer.ms1 }}</span>
                    </div>
                    <div v-if="scope.row.healer.ms2">
                      <img height="20" width="20" :src="msImg" alt="">
                      <span class="ms p-l-10">{{ scope.row.healer.ms2 }}</span>
                    </div>
                    <div v-if="scope.row.healer.xd">
                      <img height="20" width="20" :src="xdImg" alt="">
                      <span class="xd p-l-10">{{ scope.row.healer.xd }}</span>
                    </div>
                    <div v-if="scope.row.healer.sm">
                      <img height="20" width="20" :src="smImg" alt="">
                      <span class="sm p-l-10">{{ scope.row.healer.sm }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                    prop="lr"
                    label="协助猎人">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="lrImg" alt="">
                    <span class="lr p-l-10">{{ scope.row.lr }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-col>
          <el-col span="12">
            <h2 class="b fz-24">放逐分配</h2>
            <template>
              <el-table
                  class="bg-color-black"
                  :data="banishTactic"
                  style="width: 100%">
                <el-table-column
                    type="index"
                    width="50"
                    label="序号">
                </el-table-column>
                <el-table-column
                    prop="target"
                    label="目标"
                    width="80">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="scope.row.target" alt="">
                  </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="SS">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="ssImg" alt="">
                    <span class="ss p-l-10">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-col>
        </el-row>
      </div>
      <div class="border-color-white"></div>
      <div class="p-30">
        <h1 class="b fz-32">小怪策略</h1>
        <div class="p-b-30"></div>
        <el-row gutter="60">
          <el-col span="12">
            <h2 class="b fz-24">F4</h2>
            <template>
              <el-table
                  class="bg-color-black"
                  :data="f4Tactic"
                  style="width: 100%">
                <el-table-column
                    type="index"
                    width="100"
                    label="击杀顺序">
                </el-table-column>
                <el-table-column
                    label="目标"
                    width="80">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="scope.row.icon" alt="">
                  </template>
                </el-table-column>
                <el-table-column
                    label="名称"
                    width="80">
                  <template slot-scope="scope">
                    <span class="zs p-l-10">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                    label="MT">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="zsImg" alt="">
                    <span class="zs p-l-10">{{ scope.row.zs }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                    label="放逐">
                  <template slot-scope="scope">
                    <img height="20" width="20" :src="ssImg" alt="">
                    <span class="ss p-l-10">{{ scope.row.ss }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-col>
          <el-col span="12"></el-col>
        </el-row>
      </div>
      <div class="border-color-white"></div>
      <div class="p-30">
        <h2 class="b fz-24">BOSS1</h2>
        <div class="p-b-30"></div>
        <template>
          <el-table
              class="bg-color-black"
              :data="boss1Tactic.main"
              style="width: 100%">
            <el-table-column
                type="index"
                width="100"
                label="击杀顺序">
            </el-table-column>
            <el-table-column
                label="目标"
                width="80">
              <template slot-scope="scope">
                <img height="20" width="20" :src="scope.row.icon" alt="">
              </template>
            </el-table-column>
            <el-table-column
                label="MT">
              <template slot-scope="scope">
                <img height="20" width="20" :src="zsImg" alt="">
                <span class="zs p-l-10">{{ scope.row.zs }}</span>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <div class="p-b-30"></div>
        <div>
          <h3 class="b fz-18">解诅咒责任人 - <span class="m-r-10"><img height="20" width="20" :src="fsImg" alt=""><span class="fs p-l-10">{{ teamPlayers.fs[4] }}</span></span><span class="m-r-10"><img height="20" width="20" :src="fsImg" alt=""><span class="fs p-l-10">{{ teamPlayers.fs[5] }}</span></span></h3>
          <h3 class="b fz-18">解心控责任人 - <span class="m-r-10"><img height="20" width="20" :src="msImg" alt=""><span class="ms p-l-10">{{ teamPlayers.ms[3] }}</span></span><span class="m-r-10"><img height="20" width="20" :src="msImg" alt=""><span class="ms p-l-10">{{ teamPlayers.ms[4] }}</span></span></h3>
        </div>
      </div>
      <div class="border-color-white"></div>
      <div class="p-30">
        <h2 class="b fz-24">BOSS3</h2>
        <div class="p-b-30"></div>
        <template>
          <el-table
              class="bg-color-black"
              :data="boss3Tactic.main"
              style="width: 100%">
            <el-table-column
                type="index"
                width="100"
                label="击杀顺序">
            </el-table-column>
            <el-table-column
                label="目标"
                width="80">
              <template slot-scope="scope">
                <img height="20" width="20" :src="scope.row.icon" alt="">
              </template>
            </el-table-column>
            <el-table-column
                label="MT">
              <template slot-scope="scope">
                <img height="20" width="20" :src="zsImg" alt="">
                <span class="zs p-l-10">{{ scope.row.zs }}</span>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <div class="p-b-30"></div>
        <div>
          <h3 class="b fz-18">解诅咒责任人 - <span class="m-r-10"><img height="20" width="20" :src="fsImg" alt=""><span class="fs p-l-10">{{ teamPlayers.fs[4] }}</span></span><span class="m-r-10"><img height="20" width="20" :src="fsImg" alt=""><span class="fs p-l-10">{{ teamPlayers.fs[5] }}</span></span></h3>
        </div>
      </div>
      <div class="border-color-white"></div>
      <div class="p-30">
        <div class="m-b-30">
          <h2 class="b fz-24 m-b-20">BOSS4 - 嘉怡</h2>
          <el-row gutter="60">
            <el-col span="16">
              <h2 class="b fz-22">MT分组</h2>
              <template>
                <el-table
                    class="bg-color-black"
                    :data="boss4Tactic.zs"
                    style="width: 100%">
                  <el-table-column
                      type="index"
                      width="100"
                      label="MT序号">
                  </el-table-column>
                  <el-table-column
                      label="目标1"
                      width="80">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="scope.row.target1" alt="">
                    </template>
                  </el-table-column>
                  <el-table-column
                      label="目标2"
                      width="80">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="scope.row.target2" alt="">
                    </template>
                  </el-table-column>
                  <el-table-column
                      label="MT"
                      width="200">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="zsImg" alt="">
                      <span class="zs p-l-10">{{ scope.row.mt }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                      prop="healer"
                      label="治疗"
                      width="200">
                    <template slot-scope="scope">
                      <div>
                        <img height="20" width="20" :src="msImg" alt="">
                        <span class="ms p-l-10">{{ scope.row.healer.ms1 }}</span>
                      </div>
                      <div v-if="scope.row.healer.ms2">
                        <img height="20" width="20" :src="msImg" alt="">
                        <span class="ms p-l-10">{{ scope.row.healer.ms2 }}</span>
                      </div>
                      <div v-if="scope.row.healer.xd">
                        <img height="20" width="20" :src="xdImg" alt="">
                        <span class="xd p-l-10">{{ scope.row.healer.xd }}</span>
                      </div>
                      <div v-if="scope.row.healer.sm">
                        <img height="20" width="20" :src="smImg" alt="">
                        <span class="sm p-l-10">{{ scope.row.healer.sm }}</span>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                      prop="lr"
                      label="协助猎人">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="lrImg" alt="">
                      <span class="lr p-l-10">{{ scope.row.lr }}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-col>
            <el-col span="8">
              <h2 class="b fz-24">放逐分配</h2>
              <template>
                <el-table
                    class="bg-color-black"
                    :data="boss4Tactic.banish"
                    style="width: 100%">
                  <el-table-column
                      type="index"
                      width="50"
                      label="序号">
                  </el-table-column>
                  <el-table-column
                      prop="target"
                      label="目标"
                      width="80">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="scope.row.target" alt="">
                    </template>
                  </el-table-column>
                  <el-table-column
                      prop="name"
                      label="SS">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="ssImg" alt=""  v-if="scope.row.name">
                      <span class="ss p-l-10" v-if="scope.row.name">{{ scope.row.name }}</span>
                      <span class="p-l-10" v-if="!scope.row.name"><img height="20" width="20" :src="zsImg" alt=""  v-if="scope.row.zs"> <span class="zs">{{ scope.row.zs }}</span> 拉住，优先击杀</span>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-col>
          </el-row>
        </div>
        <div class="m-b-30">
          <h2 class="b fz-24">策略</h2>
          <template>
            <el-table
                class="bg-color-black"
                :data="boss4Tactic.tips"
                style="width: 100%">
              <el-table-column
                  type="index"
                  width="50"
                  label="序号">
              </el-table-column>
              <el-table-column
                  prop="description"
                  label="描述">
              </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
      <div class="border-color-white"></div>
      <div class="p-30">
        <h2 class="b fz-24">BOSS5</h2>
        <div class="p-b-30"></div>
        <h2 class="b fz-24">策略</h2>
        <template>
          <el-table
              class="bg-color-black"
              :data="boss5Tactic.tips"
              style="width: 100%">
            <el-table-column
                type="index"
                width="50"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="description"
                label="描述">
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="border-color-white"></div>
      <div class="p-30">
        <h2 class="b fz-24">BOSS6</h2>
        <div class="p-b-30"></div>
        <h2 class="b fz-24">策略</h2>
        <template>
          <el-table
              class="bg-color-black"
              :data="boss6Tactic.tips"
              style="width: 100%">
            <el-table-column
                type="index"
                width="50"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="description"
                label="描述">
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="border-color-white"></div>
      <div class="p-30">
        <h2 class="b fz-24 m-b-20">BOSS7 - 萨弗隆先驱者</h2>
        <div class="m-b-30">
          <h2 class="b fz-22">MT分组</h2>
          <template>
            <el-table
                class="bg-color-black"
                :data="boss7Tactic.zs"
                style="width: 100%">
              <el-table-column
                  type="index"
                  width="100"
                  label="MT序号">
              </el-table-column>
              <el-table-column
                  label="目标1"
                  width="80">
                <template slot-scope="scope">
                  <img height="20" width="20" :src="scope.row.target1" alt="">
                </template>
              </el-table-column>
              <el-table-column
                  label="目标2"
                  width="80">
                <template slot-scope="scope">
                  <img height="20" width="20" :src="scope.row.target2" alt="">
                </template>
              </el-table-column>
              <el-table-column
                  label="MT"
                  width="200">
                <template slot-scope="scope">
                  <img height="20" width="20" :src="zsImg" alt="">
                  <span class="zs p-l-10">{{ scope.row.mt }}</span>
                </template>
              </el-table-column>
              <el-table-column
                  prop="healer"
                  label="治疗"
                  width="200">
                <template slot-scope="scope">
                  <div v-for="i in scope.row.healer">
                    <img height="20" width="20" :src="i.icon" alt="">
                    <span class="p-l-10" :class = "i.class">{{ i.name }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                  prop="lr"
                  label="协助猎人">
                <template slot-scope="scope">
                  <img height="20" width="20" :src="lrImg" alt="">
                  <span class="lr p-l-10">{{ scope.row.lr }}</span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="m-b-30">
          <h2 class="b fz-22">打断分组</h2>
          <template>
            <el-table
                class="bg-color-black"
                :data="boss7Tactic.ban"
                style="width: 100%">
              <el-table-column
                  type="index"
                  width="50"
                  label="序号">
              </el-table-column>
              <el-table-column
                  label="目标"
                  width="80">
                <template slot-scope="scope">
                  <img height="20" width="20" :src="scope.row.target" alt="">
                </template>
              </el-table-column>
              <el-table-column
                  label="1打断"
                  width="200">
                <template slot-scope="scope">
                  <img height="20" width="20" :src="dzImg" alt="">
                  <span class="dz p-l-10">{{ scope.row.dz }}</span>
                </template>
              </el-table-column>
              <el-table-column
                  label="2打断">
                <template slot-scope="scope">
                  <img height="20" width="20" :src="fsImg" alt="">
                  <span class="fs p-l-10">{{ scope.row.fs }}</span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="m-b-30">
          <h2 class="b fz-24">策略</h2>
          <template>
            <el-table
                class="bg-color-black"
                :data="boss7Tactic.tips"
                style="width: 100%">
              <el-table-column
                  type="index"
                  width="50"
                  label="序号">
              </el-table-column>
              <el-table-column
                  prop="description"
                  label="描述">
              </el-table-column>
            </el-table>
          </template>
        </div>
        <h3 class="b fz-22 zs">驱散痛魔法责任人 - <span class="m-r-10"><img height="20" width="20" :src="msImg" alt=""><span class="ms p-l-10">{{ teamPlayers.ms[3] }}</span></span><span class="m-r-10"><img height="20" width="20" :src="msImg" alt=""><span class="ms p-l-10">{{ teamPlayers.ms[4] }}</span></span></h3>
      </div>
      <div class="border-color-white"></div>
      <div class="p-30">
        <h2 class="b fz-24 m-b-20">BOSS9 - 管理者</h2>
        <div class="m-b-30">
          <el-row gutter="60">
            <el-col span="12">
              <h2 class="b fz-22">贴身贼</h2>
              <template>
                <el-table
                    class="bg-color-black"
                    :data="boss9Tactic.kick"
                    style="width: 100%">
                  <el-table-column
                      type="index"
                      width="50"
                      label="序号">
                  </el-table-column>
                  <el-table-column
                      width="80"
                      label="目标">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="scope.row.target" alt="">
                    </template>
                  </el-table-column>
                  <el-table-column
                      label="昵称">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="dzImg" alt="">
                      <span class="dz p-l-10">{{ scope.row.dz }}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-col>
            <el-col span="12">
              <h2 class="b fz-22">羊分组</h2>
              <template>
                <el-table
                    class="bg-color-black"
                    :data="boss9Tactic.ban"
                    style="width: 100%">
                  <el-table-column
                      type="index"
                      width="50"
                      label="序号">
                  </el-table-column>
                  <el-table-column
                      label="目标"
                      width="80">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="scope.row.target" alt="">
                    </template>
                  </el-table-column>
                  <el-table-column
                      label="1羊"
                      width="200">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="fsImg" alt="">
                      <span class="fs p-l-10">{{ scope.row.fs1 }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                      label="补羊">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="fsImg" alt="">
                      <span class="fs p-l-10">{{ scope.row.fs2 }}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-col>
          </el-row>
        </div>
        <div class="m-b-30">
          <el-row gutter="60">
            <el-col span="12">
              <h2 class="b fz-22">MT分组</h2>
              <template>
                <el-table
                    class="bg-color-black"
                    :data="boss9Tactic.zs"
                    style="width: 100%">
                  <el-table-column
                      type="index"
                      width="50"
                      label="序号">
                  </el-table-column>
                  <el-table-column
                      label="目标1"
                      width="80">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="scope.row.target1" alt="">
                    </template>
                  </el-table-column>
                  <el-table-column
                      label="目标2"
                      width="80">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="scope.row.target2" alt="">
                    </template>
                  </el-table-column>
                  <el-table-column
                      label="MT"
                      width="200">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="zsImg" alt="">
                      <span class="zs p-l-10">{{ scope.row.mt }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                      prop="healer"
                      label="治疗"
                      width="200">
                    <template slot-scope="scope">
                      <div v-for="i in scope.row.healer">
                        <img height="20" width="20" :src="i.icon" alt="">
                        <span class="p-l-10" :class = "i.class">{{ i.name }}</span>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                      prop="lr"
                      label="协助猎人">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="lrImg" alt="">
                      <span class="lr p-l-10">{{ scope.row.lr }}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-col>
            <el-col span="12">
              <h2 class="b fz-22">击杀顺序</h2>
              <template>
                <el-table
                    class="bg-color-black"
                    :data="boss9Tactic.rush"
                    style="width: 100%">
                  <el-table-column
                      type="index"
                      width="50"
                      label="序号">
                  </el-table-column>
                  <el-table-column
                      width="80"
                      label="目标">
                    <template slot-scope="scope">
                      <img height="20" width="20" :src="scope.row.target" alt="">
                    </template>
                  </el-table-column>
                  <el-table-column
                      label="备注">
                    <template slot-scope="scope">
                      {{scope.row.remark}}
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-col>
          </el-row>
        </div>
        <div class="m-b-30">
          <h2 class="b fz-24">策略</h2>
          <template>
            <el-table
                class="bg-color-black"
                :data="boss9Tactic.tips"
                style="width: 100%">
              <el-table-column
                  type="index"
                  width="50"
                  label="序号">
              </el-table-column>
              <el-table-column
                  prop="description"
                  label="描述">
              </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
      <div class="border-color-white"></div>
      <div class="p-30">
        <h2 class="b fz-24">BOSS10</h2>
        <div class="p-b-30"></div>
        <h2 class="b fz-24">策略</h2>
        <template>
          <el-table
              class="bg-color-black"
              :data="boss10Tactic.tips"
              style="width: 100%">
            <el-table-column
                type="index"
                width="50"
                label="序号">
            </el-table-column>
            <el-table-column
                prop="description"
                label="描述">
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="back_btn">
        <el-button type="primary" @click="$router.push('/team-players')">团员列表</el-button>
        <el-button type="primary" @click="$router.push('/account')">流水账</el-button>
        <el-button type="warning" @click="getData"><i class="fa fa-refresh"></i> 更新</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import xdImg from '@/assets/images/xd.png'
import lrImg from '@/assets/images/lr.png'
import fsImg from '@/assets/images/fs.png'
import msImg from '@/assets/images/ms.png'
import dzImg from '@/assets/images/dz.png'
import smImg from '@/assets/images/sm.png'
import ssImg from '@/assets/images/ss.png'
import zsImg from '@/assets/images/zs.png'
import klImg from '@/assets/images/kl.jpg'
import xxImg from '@/assets/images/xx.jpg'
import fkImg from '@/assets/images/fk.jpg'
import ylImg from '@/assets/images/yl.jpg'
import sjImg from '@/assets/images/sj.jpg'
import zlImg from '@/assets/images/zl.jpg'
import dbImg from '@/assets/images/db.jpg'
import xingImg from '@/assets/images/xing.jpg'
import bossImg from '@/assets/images/boss.webp'

export default {
  name: 'home',
  data() {
    return {
      xdImg,
      lrImg,
      fsImg,
      msImg,
      dzImg,
      smImg,
      ssImg,
      zsImg,
      klImg,
      xxImg,
      fkImg,
      ylImg,
      sjImg,
      zlImg,
      dbImg,
      xingImg,
      teamPlayers: null,
      globalTactic: [],
      banishTactic: [],
      msFsBuffTactic: [],
      xdBuffTactic: [],
      f4Tactic: [],
      boss1Tactic: {},
      boss3Tactic: {},
      boss4Tactic: [],
      boss5Tactic: [],
      boss6Tactic: [],
      boss7Tactic: [],
      boss8Tactic: [],
      boss9Tactic: [],
      boss10Tactic: [],
      apiServer: '',
    }
  },
  methods: {
    async getData() {
      const res = await axios.get(`${this.apiServer}/raid-tactic/8e3719fa3b04301ee0114e1503003a51`)

      this.teamPlayers = res.data.teamPlayers
      this.globalTactic = [{
        target: klImg,
        mt: this.teamPlayers.zs[0],
        lr: this.teamPlayers.lr[0],
        healer: {
          ms1: this.teamPlayers.ms[0],
          xd: this.teamPlayers.xd[0] || '',
          sm: !this.teamPlayers.xd[0] ? this.teamPlayers.sm[0] : '',
          ms2: !this.teamPlayers.xd[0] && !this.teamPlayers.sm[0] ? this.teamPlayers.ms[4] : '',
        },
        healer1: [{
          class: 'ms',
          icon: msImg,
          name: this.teamPlayers.ms[0]
        }, {
          class: 'xd',
          icon: xdImg,
          name: this.teamPlayers.xd[0] || this.teamPlayers.sm[0] || this.teamPlayers.ms[4]
        },],
      }, {
        target: xxImg,
        mt: this.teamPlayers.zs[1],
        lr: this.teamPlayers.zs[1],
        healer: {
          ms1: this.teamPlayers.ms[1],
          ms2: !this.teamPlayers.xd[1] && !this.teamPlayers.sm[1] ? this.teamPlayers.ms[5] : '',
          xd: this.teamPlayers.xd[1] || '',
          sm: !this.teamPlayers.xd[1] ? this.teamPlayers.sm[1] : '',
        },
        healer1: [{
          class: 'ms',
          icon: msImg,
          name: this.teamPlayers.ms[1]
        }, {
          class: 'xd',
          icon: xdImg,
          name: this.teamPlayers.xd[1] || this.teamPlayers.sm[1] || this.teamPlayers.ms[5]
        },],
      }, {
        target: fkImg,
        mt: this.teamPlayers.zs[2],
        lr: this.teamPlayers.lr[2],
        healer: {
          ms1: this.teamPlayers.ms[2],
          ms2: !this.teamPlayers.xd[2] && !this.teamPlayers.sm[2] ? this.teamPlayers.ms[6] : '',
          xd: this.teamPlayers.xd[2] || '',
          sm: !this.teamPlayers.xd[2] ? this.teamPlayers.sm[2] : '',
        },
        healer1: [{
          class: 'ms',
          icon: msImg,
          name: this.teamPlayers.ms[2]
        }, {
          class: 'xd',
          icon: xdImg,
          name: this.teamPlayers.xd[2] || this.teamPlayers.sm[2] || this.teamPlayers.ms[6]
        },],
      }, {
        target: ylImg,
        mt: this.teamPlayers.zs[3],
        healer: {
          ms1: this.teamPlayers.ms[3],
          ms2: !this.teamPlayers.xd[3] && !this.teamPlayers.sm[3] ? this.teamPlayers.ms[7] : '',
          xd: this.teamPlayers.xd[3] || '',
          sm: !this.teamPlayers.xd[3] ? this.teamPlayers.sm[3] : '',
        },
        healer1: [{
          class: 'ms',
          icon: msImg,
          name: this.teamPlayers.ms[3]
        }, {
          class: 'sm',
          icon: smImg,
          name: this.teamPlayers.xd[3] || this.teamPlayers.sm[3] || this.teamPlayers.ms[7]
        },],
      }]
      this.banishTactic = [
        {
          target: sjImg,
          name: this.teamPlayers.ss[0]
        },
        {
          target: zlImg,
          name: this.teamPlayers.ss[1]
        },
      ]
      this.msFsBuffTactic = [
        {
          fs: this.teamPlayers.fs[0],
          ms: this.teamPlayers.ms[0],
          num: '1,2',
        },
        {
          fs: this.teamPlayers.fs[1],
          ms: this.teamPlayers.ms[1],
          num: '3,4',
        },
        {
          fs: this.teamPlayers.fs[2],
          ms: this.teamPlayers.ms[2],
          num: '5,6',
        },
        {
          fs: this.teamPlayers.fs[3],
          ms: this.teamPlayers.ms[3],
          num: '7,8',
        }
      ]
      this.xdBuffTactic = [
        {
          xd: this.teamPlayers.xd[0],
          num: '1234',
        },
        {
          xd: this.teamPlayers.fs[1],
          num: '5678',
        }
      ]
      this.f4Tactic = [
        {
          icon: klImg,
          name: '行者',
          zs: this.teamPlayers.zs[0],
          ss: ''
        },
        {
          icon: xxImg,
          name: '守卫',
          zs: this.teamPlayers.zs[1],
          ss: ''
        },
        {
          icon: fkImg,
          name: '石头人',
          zs: this.teamPlayers.zs[0],
          ss: this.teamPlayers.ss[0]
        },
        {
          icon: ylImg,
          name: '石头人',
          zs: this.teamPlayers.zs[0],
          ss: this.teamPlayers.ss[1]
        },
      ]
      this.boss1Tactic = {
        main: [
          {
            icon: fkImg,
            zs: this.teamPlayers.zs[2],
          },
          {
            icon: xxImg,
            zs: this.teamPlayers.zs[1],
          },
          {
            icon: klImg,
            zs: this.teamPlayers.zs[0],
          },
        ]
      }
      this.boss3Tactic = {
        main: [
          {
            icon: fkImg,
            zs: this.teamPlayers.zs[2],
          },
          {
            icon: xxImg,
            zs: this.teamPlayers.zs[1],
          },
          {
            icon: klImg,
            zs: this.teamPlayers.zs[0],
          },
        ]
      }
      this.boss4Tactic = {
        zs: [{
          target1: klImg,
          target2: xingImg,
          mt: this.teamPlayers.zs[0],
          lr: this.teamPlayers.lr[0],
          healer: {
            ms1: this.teamPlayers.ms[0],
            xd: this.teamPlayers.xd[0] || '',
            sm: !this.teamPlayers.xd[0] ? this.teamPlayers.sm[0] : '',
            ms2: !this.teamPlayers.xd[0] && !this.teamPlayers.sm[0] ? this.teamPlayers.ms[4] : '',
          },
          healer1: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[0]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.sm[0]
          },],
        }, {
          target1: xxImg,
          target2: fkImg,
          mt: this.teamPlayers.zs[1],
          lr: this.teamPlayers.zs[1],
          healer: {
            ms1: this.teamPlayers.ms[1],
            xd: this.teamPlayers.xd[1] || '',
            sm: !this.teamPlayers.xd[1] ? this.teamPlayers.sm[1] : '',
            ms2: !this.teamPlayers.xd[1] && !this.teamPlayers.sm[1] ? this.teamPlayers.ms[5] : '',
          },
          healer1: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[1]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.xd[0]
          },],
        }, {
          target1: bossImg,
          target2: '',
          mt: this.teamPlayers.zs[2],
          lr: this.teamPlayers.lr[2],
          healer: {
            ms1: this.teamPlayers.ms[2],
            xd: this.teamPlayers.xd[2] || '',
            sm: !this.teamPlayers.xd[2] ? this.teamPlayers.sm[2] : '',
            ms2: !this.teamPlayers.xd[2] && !this.teamPlayers.sm[2] ? this.teamPlayers.ms[6] : '',
          },
          healer1: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[2]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.xd[1]
          },],
        }, {
          target1: ylImg,
          target2: '',
          mt: this.teamPlayers.zs[3],
          healer: {
            ms1: this.teamPlayers.ms[3],
            xd: this.teamPlayers.xd[3] || '',
            sm: !this.teamPlayers.xd[3] ? this.teamPlayers.sm[3] : '',
            ms2: !this.teamPlayers.xd[3] && !this.teamPlayers.sm[3] ? this.teamPlayers.ms[7] : '',
          },
          healer1: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[3]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.sm[1]
          },],
        }],
        banish: [
          {
            target: sjImg,
            name: this.teamPlayers.ss[0],
            zs: '',
          },
          {
            target: zlImg,
            name: this.teamPlayers.ss[1],
            zs: '',
          },
          {
            target: dbImg,
            name: this.teamPlayers.ss[2],
            zs: this.teamPlayers.zs[4],
          },
        ],
        tips: [
          {
            description: '法师冰箱开怪'
          },
          {
            description: '猎人误导给T，ss放逐'
          },
          {
            description: 'boss左边，小怪右边，距离40码'
          },
          {
            description: '全员打boss，fs靠右边打，随时开始A小怪'
          },
          {
            description: '近战继续打boss，远程A小怪'
          },
        ]
      }
      this.boss5Tactic = {
        tips: [
          {
            description: '回加尔房间半圆站位'
          },
          {
            description: 'fs魔法侦测'
          },
          {
            description: '优先解诅咒'
          },
        ]
      }
      this.boss6Tactic = {
        tips: [
          {
            description: '炸弹点名'
          },
          {
            description: 'ms驱散'
          },
        ]
      }
      this.boss7Tactic = {
        zs: [{
          target1: klImg,
          target2: xxImg,
          mt: this.teamPlayers.zs[0],
          lr: this.teamPlayers.lr[0],
          healer: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[0]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.sm[0]
          },],
        }, {
          target1: bossImg,
          target2: '',
          mt: this.teamPlayers.zs[1],
          lr: this.teamPlayers.zs[1],
          healer: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[1]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.xd[0]
          },],
        }, {
          target1: fkImg,
          target2: '',
          mt: this.teamPlayers.zs[2],
          lr: this.teamPlayers.lr[2],
          healer: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[2]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.xd[1]
          },],
        }, {
          target1: ylImg,
          target2: '',
          mt: this.teamPlayers.zs[3],
          healer: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[3]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.sm[1]
          },],
        }],
        ban: [
          {
            target: klImg,
            fs: this.teamPlayers.fs[0],
            dz: this.teamPlayers.dz[0],
          },
          {
            target: xxImg,
            fs: this.teamPlayers.fs[1],
            dz: this.teamPlayers.dz[1],
          },
          {
            target: fkImg,
            fs: this.teamPlayers.fs[2],
            dz: this.teamPlayers.dz[2],
          },
          {
            target: ylImg,
            fs: this.teamPlayers.fs[3],
            dz: this.teamPlayers.dz[3],
          },
        ],
        tips: [
          {
            description: '法师冰箱开怪'
          },
          {
            description: '猎人误导给T'
          },
          {
            description: 'boss右边，小怪左边，MT注意保命'
          },
          {
            description: 'T拉好，A小怪'
          },
          {
            description: 'ms，驱散痛，加暗抗'
          },
        ]
      }
      this.boss8Tactic = {
        tips: [
          {
            description: '狗拉到底部 分开30码'
          },
          {
            description: '近战会叠debuff'
          },
        ]
      }
      this.boss9Tactic = {
        zs: [{
          target1: dbImg,
          target2: sjImg,
          mt: this.teamPlayers.zs[0],
          lr: this.teamPlayers.lr[0],
          healer: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[0]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.sm[0]
          },],
        }, {
          target1: klImg,
          target2: xxImg,
          mt: this.teamPlayers.zs[1],
          lr: this.teamPlayers.zs[1],
          healer: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[1]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.xd[0]
          },],
        }, {
          target1: bossImg,
          target2: '',
          mt: this.teamPlayers.zs[2],
          lr: this.teamPlayers.lr[2],
          healer: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[2]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.xd[1]
          },],
        }, {
          target1: fkImg,
          target2: ylImg,
          mt: this.teamPlayers.zs[3],
          healer: [{
            class: 'ms',
            icon: msImg,
            name: this.teamPlayers.ms[3]
          }, {
            class: 'xd',
            icon: xdImg,
            name: this.teamPlayers.sm[1]
          },],
        }],
        ban: [
          {
            target: xxImg,
            fs1: this.teamPlayers.fs[0],
            fs2: this.teamPlayers.fs[1],
          },
          {
            target: ylImg,
            fs1: this.teamPlayers.fs[2],
            fs2: this.teamPlayers.fs[3],
          },
          {
            target: zlImg,
            fs1: this.teamPlayers.fs[4],
            fs2: this.teamPlayers.fs[5],
          },
          {
            target: xingImg,
            fs1: this.teamPlayers.fs[6],
            fs2: this.teamPlayers.fs[7],
          },
        ],
        kick: [
          {
            target: xxImg,
            dz: this.teamPlayers.dz[0],
          },
          {
            target: ylImg,
            dz: this.teamPlayers.dz[1],
          },
          {
            target: zlImg,
            dz: this.teamPlayers.dz[2],
          },
          {
            target: xingImg,
            dz: this.teamPlayers.dz[3],
          },
        ],
        rush: [
          {
            target: klImg,
            remark: '护卫',
          },
          {
            target: fkImg,
            remark: '护卫',
          },
          {
            target: xxImg,
            remark: '医师',
          },
          {
            target: zlImg,
            remark: '医师',
          },
          {
            target: sjImg,
            remark: '护卫',
          },
          {
            target: ylImg,
            remark: '医师',
          },
          {
            target: dbImg,
            remark: '护卫',
          },
          {
            target: xingImg,
            remark: '医师',
          },
        ],
        tips: [
          {
            description: '猎人不要多重'
          },
          {
            description: 'fs dz打断技能拉出来'
          },
          {
            description: '法师冰箱开怪'
          },
          {
            description: '猎人误导给T'
          },
          {
            description: 'boss拉到棺材边上，分散小怪30码'
          },
          {
            description: '开盾停手，打断加血'
          },
          {
            description: '最后4只小怪可以A'
          },
        ]
      }
      this.boss10Tactic = {
        tips: [
          {
            description: '近战退'
          },
          {
            description: 'P2提前陷阱'
          },
          {
            description: 'P2安排冰环'
          },
        ]
      }
    },
  },
  created() {
    this.getData()
  }
}
</script>
