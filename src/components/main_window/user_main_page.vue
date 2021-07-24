<template>
  <div id="init_page_div">
      <el-row>
          <div id="top_div"></div>
      </el-row>

      <el-row>
        <el-col>
          <el-menu id="left_menu"
              default-active="1"
              class="el-menu"
              @open="handleOpen"
              @close="handleClose"
              unique-opened
              background-color="#efefef"
              text-color="#000000"
              active-text-color="#00A5DC">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-view"></i>
                <span>实时画面</span>
              </template>
              <el-submenu index="1-1">
                <template slot="title">设备列表</template>
                <el-menu-item index="1-1-1" @click="change_view('/view');">设备1</el-menu-item>
                <el-menu-item index="1-1-2" @click="change_view('/view');">设备2</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>入侵记录</span>
              </template>
              <el-submenu index="2-1">
                <template slot="title">入侵分类</template>
                <el-menu-item index="2-1-1" @click="change_view('/invade_recode');">陌生人入侵</el-menu-item>
                <el-menu-item index="2-1-2" @click="change_view('/invade_recode');">非陌生人入侵</el-menu-item>
              </el-submenu>
              <el-menu-item index="2-2">入侵视频回放</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>系统管理</span>

              </template>
              <el-menu-item index="3-1" @click="change_view('/info_modify');">用户信息编辑</el-menu-item>
              <el-menu-item index="3-2" @click="change_view('/password_modify');">修改个人密码</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col>
          <div id="right_div">
            <router-view name="menu_content"></router-view>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>

export default {
  name: "user_main_page",
  data(){
    return {
      index:'1'
    }
  },

  components:{

  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change_view(path) {
      const that = this;
      that.$router.replace(path);
    },
  }
}

</script>

<style scoped>


#top_div{
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100px;
  background: url("../../assets/top_img.png") no-repeat center;
  background-size: 100% 100%;
}
#left_menu{
  position: absolute;
  left: 0;
  top: 100px;
  width: 200px;
  height: 764px;
  background-color: #efefef;
  color: rgba(16, 16, 16, 100);
}

#right_div{
  position: absolute;
  left: 200px;

}

.el-menu{
  text-align: left;
}

</style>