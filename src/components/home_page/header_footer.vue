<template>
  <div>
    <el-container>
      <el-header>
        <el-row :gutter="90">
          <el-col :span="6"><el-image
              style="width: 190px; height: 35px; top: 13px"
              :src="require(`@/assets/init_page/logo_img.jpg`)"
              :fit="fit"></el-image>
          </el-col>
          <el-col :span="12">
            <el-menu
                :default-active="activeIndex"
                class="el-menu"
                mode="horizontal"
                @select="handleSelect"
                background-color="#22282d"
                text-color="#fff"
                active-text-color="#ef4f19">
              <el-menu-item index="1" @click="change_view('/home_page')">首页</el-menu-item>
              <el-menu-item index="2" @click="change_view('/advantage')">技术介绍</el-menu-item>
              <el-menu-item index="3" @click="change_view('/about_us')">关于我们</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="6">
            <div id="email_logo">
              <el-image
                  style="width: 190px; height: 35px; top: 13px"
                  :src="require(`@/assets/init_page/email_img.jpg`)"
                  :fit="fit"></el-image>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-main class="el-main">
        <router-view name="home_page_body"></router-view>
      </el-main>

      <el-footer>
        <div class="el_footer_text">Copyright© 2021 328小分队 All Rights Reserved</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "header-footer",
  data() {
    return{
      activeIndex: '1',
      fit:'scale-down',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
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

.main_div {
  width: 100%;
}

.el-header {
  background-color: #22282d;
  color: #333;
  text-align: center;
  height: 78px;
}

.el-footer {
  background-color: #22282d;
  color: #333;
  text-align: center;
  height: 500px;
}

.el-main {
  color: #333;
  text-align: center;
  padding: 0;
  margin: 0;
  height: 1458px;
  width: 100%;
}

.el-menu {
  position: absolute;
  left: 40%;
}

.el_footer_text {
  padding: 20px;
  color: #8e8f90;
  font-family: 微軟正黑體;
  font-size: 14px;
}
#email_logo {
  position: absolute;
  left: 80%;
}
</style>