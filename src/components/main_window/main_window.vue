<template>
  <el-container>
    <el-header>
      <el-row :gutter="90">
        <el-col :span="6">
          <el-image
              :fit="fit"
              :src="require(`@/assets/init_page/logo_img.jpg`)"
              style="width: 190px; height: 65px"></el-image>
        </el-col>
        <el-col :span="12">
          <div class="top_title">实时视频入侵检测系统</div>
        </el-col>
        <el-col :span="6">
          <div id="email_logo">
            <el-image
                :fit="fit"
                :src="require(`@/assets/init_page/email_img.jpg`)"
                style="width: 190px; height: 65px"></el-image>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu id="left_menu"
                 default-active="1"
                 class="el-menu"
                 @open="handleOpen"
                 @close="handleClose"
                 unique-opened
                 background-color="#32383d"
                 text-color="#f7f9fa"
                 active-text-color="#fb4f01">
          <el-menu-item index="1" @click="change_view('/view')">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span>实时画面</span>
            </template>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>入侵记录</span>
            </template>
            <el-menu-item index="2-1-1" @click="change_view('/invade_recode');">入侵情况</el-menu-item>
            <el-menu-item index="2-2">入侵视频回放</el-menu-item>
            <el-menu-item index="2-3" @click="change_view('/data_show')">入侵数据查询</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item index="3-1" @click="change_view('/info_modify');">个人信息</el-menu-item>
            <el-menu-item index="3-2" @click="change_view('/password_modify');">修改个人密码</el-menu-item>
            <el-menu-item :class="{admin_modify: this.usertype === 'normal_user'}"
                          index="3-3" @click="change_view('/admin_permissions');">修改用户权限</el-menu-item>
            <el-menu-item index="3-4" @click="change_view('/available_device');">查看可用设备</el-menu-item>
            <el-menu-item index="3-5" @click="add_device">注册摄像头</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div id="right_div">
          <router-view name="menu_content"></router-view>
        </div>
      </el-main>
    </el-container>

    <el-footer>
      <div class="el_footer_text">Copyright© 2021 328小分队 All Rights Reserved</div>
    </el-footer>
  </el-container>
</template>

<script>
import axios from 'axios'

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 5000,
});

export default {
  name: "admin_main_page",
  data() {
    return {
      url: '',
      index: '1',
      fit: 'scale-down',
      usertype: this.store.top_usertype
    }
  },

  components: {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change_view(path) {
      const that = this;
      that.$router.push(path);
    },

    add_device() {
      this.$prompt('请输入设备IP', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/,
        inputErrorMessage: 'IP格式错误'
      }).then(({ value }) => {
        axios_instance.get("/register_video/" + value).then((response) => {
          if (response.data[0] === true) {
            this.$message({
              showClose: true,
              message: response.data[1],
              type: 'seccess'
            });
          } else {
            this.$message({
              showClose: true,
              message: response.data[1],
              type: 'error'
            });
          }
        }).catch(()=>{
          this.$message({
            showClose: true,
            message: '该摄像头无法访问',
            type: 'error'
          });
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
  },
  mounted() {
    if (typeof (this.store.top_name) === 'undefined' || this.store.top_name.length === 0) {
      this.$prompt('请输入您的真实姓名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[\u4e00-\u9fa5]{1,5}$/,
        inputErrorMessage: '姓名格式不正确'
      }).then(({value}) => {
        this.store.top_user_name = value;

        axios_instance.post("/set_user_name", {
          usertype: this.store.top_usertype,
          username: this.store.top_username,
          name: this.store.top_user_name
        }).then((response) => {
          if (response.data[0] === true) {
            this.success_box("姓名设置成功！");
          } else {
            this.fail_box(response.data[1]);
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }
  }
}

</script>

<style scoped>

.admin_modify {
  display: none;
}

.el-header {
  background-color: #242933;
  color: #333;
  text-align: center;
  height: 78px;
  width: 100%;
}

.el-footer {
  background-color: #242933;
  color: #333;
  text-align: center;
  height: 500px;
  width: 100%;
}

.el-main {
  color: #333;
  text-align: center;
  height: 670px;
  width: 100%;
}

#left_menu {
  position: absolute;
  left: 0;
  top: 60px;
  width: 200px;
  height: 670px;
  background-color: #efefef;
  color: rgba(16, 16, 16, 100);
}

.el-menu {
  text-align: left;
}

#email_logo {
  position: absolute;
  left: 80%;
}

.el_footer_text {
  padding: 20px;
  color: #8e8f90;
  font-family: 微軟正黑體;
  font-size: 14px;
}

.top_title {
  position: absolute;
  left: 40%;
  color: #b8ac91;
  font-family: 微軟正黑體;
  top: 15px;
  font-size: 25px;
  font-weight: 700;
}

</style>