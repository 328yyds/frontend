<template>
  <div id="app">
    <div id="background_div">
      <bg></bg>
      <div id="login_div">
        <el-row style="display:flex;flex-wrap: wrap;">
          <el-col>
            <div id="left_div"><img alt="BJTUmis" src="../../assets/BJTUmis.png"></div>
          </el-col>
          <el-col>
            <div id="right_div">
              <login :class="{right_div: register}"></login>
              <el-button :class="{right_div: register}" type="text" id="login_register" @click="register=true">没有账号？立即注册
              </el-button>
              <register :class="{right_div: !register}"></register>
              <el-button :class="{right_div: !register}" type="text" id="register_login" @click="register=false">
                已有帐号？马上登录
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

</template>

<script>

import bg from '../background'
import login from "@/components/Login/login";
import register from "@/components/Login/register";

export default {
  name: "init_page",
  data() {
    return {
      register: false
    };
  },


  components: {
    register,
    bg,
    login,
  },

  methods: {}
}
</script>

<style scoped>

.right_div {
  display: none;
}

#right_div {
  position: absolute;
  left: 500px;
  background: #ffffff;
  opacity: 0.9;
  height: 550px;
  width: 480px;
}

#login_div {
  position: absolute;
  font-size: 24px;
  transform: translate(-50%, 0%);
  top: 15%;
  width: 1000px;
  left: 50%;
  box-shadow: rgba(0, 0, 0, 0.07);
}


#left_div {
  position: absolute;
  left: 0;
  opacity: 0.9;
  height: 550px;
  width: 520px;
}


#login_register {
  position: absolute;
  transform: translate(-50%, 0%);
  top: 468px;
  left: 50%;
}

#register_login {
  position: absolute;
  transform: translate(-50%, 0%);
  top: 491px;
  left: 50%;
}

</style>