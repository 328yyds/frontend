<template>
  <div id="register_div_right">
    <div>
      <a :class="{active : !is_admin}" id="user_register" href="javascript:" @click="is_admin=false;usertype='normal_user';
      username='';tel='';password1='';password2='';admin_code='';auth_code='';progress_value=0">客户注册</a>
      <a :class="{active : is_admin}" id="admin_register" href="javascript:" @click="is_admin=true;usertype='root_user';
      username='';tel='';password1='';password2='';admin_code='';auth_code='';progress_value=0">管理员注册</a>
    </div>

    <el-button type="success" id="register_button" @click="register" :disabled="register_not_complete">注 册</el-button>
    <div :class="{on : !is_admin}">
      <el-input
          class="admin_input_username"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          size="small"
          v-model="username"
          v-on:input ="refresh_progress">
      </el-input>
      <el-input
          class="admin_input_tel"
          placeholder="请输入手机号"
          prefix-icon="el-icon-mobile"
          size="small"
          v-model="tel"
          v-on:input ="refresh_progress">
      </el-input>
      <el-input placeholder="请输入验证码" v-model="auth_code" prefix-icon="el-icon-message" size="small"
                class="admin_register_input_auth_code"
                v-on:input ="refresh_progress">
        <el-button slot="append"
                   :disabled="show" @click="send_auth_code">
          {{show?('重新获取('+auth_code_wait_time+')') : "获取验证码"}}</el-button>
      </el-input>
      <el-input
          class="admin_input_password"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          size="small"
          show-password
          v-model="password1"
          v-on:input ="refresh_progress">
      </el-input>
      <el-input
          class="admin_input_passwordAgain"
          placeholder="请输入再次密码"
          prefix-icon="el-icon-lock"
          size="small"
          show-password
          v-model="password2"
          v-on:input ="refresh_progress">
      </el-input>
      <el-input
          class="admin_input_AdminCode"
          placeholder="请输入管理员序列码"
          prefix-icon="el-icon-s-custom"
          size="small"
          show-password
          v-model="admin_code"
          v-on:input ="refresh_progress">
      </el-input>
    </div>

    <div :class="{on : is_admin}">
      <el-input
          class="user_input_username"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          size="small"
          v-model="username"
          v-on:input ="refresh_progress">
      </el-input>
      <el-input
          class="user_input_tel"
          placeholder="请输入手机号"
          prefix-icon="el-icon-mobile"
          size="small"
          v-model="tel">
      </el-input>
      <el-input placeholder="请输入验证码" v-model="auth_code" prefix-icon="el-icon-message" size="small"
                class="user_register_input_auth_code"
                v-on:input ="refresh_progress">
        <el-button slot="append"
                   :disabled="show" @click="send_auth_code">
          {{show?('重新获取('+auth_code_wait_time+')') : "获取验证码"}}</el-button>
      </el-input>
      <el-input
          class="user_input_password"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          size="small"
          show-password
          v-model="password1"
          v-on:input ="refresh_progress">
      </el-input>
      <el-input
          class="user_input_passwordAgain"
          placeholder="请输入再次密码"
          prefix-icon="el-icon-lock"
          size="small"
          show-password
          v-model="password2"
          v-on:input ="refresh_progress">
      </el-input>
    </div>
    <el-progress :percentage="this.progress_value" status="success" class="register_progress"></el-progress>
  </div>
</template>

<script>
import axios from 'axios'

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 5000,
});

export default {
  name: "register",
  auth_button_msg: "",
  data() {
    return {
      is_admin: false,
      tel: "",
      password1: '',
      password2: '',
      admin_code: '',
      auth_code: "",
      username:"",
      usertype: 'normal_user',

      show: false,

      auth_code_wait_time: 60,
      return_auth_code: '',
      progress_value: 0,
      register_not_complete: true,
    };
  },

  components: {
  },

  methods:{
    //登录成功弹出框
    success_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'success'
      });
    },
    //登录失败弹出框
    fail_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      });
    },
    //输入信息不完整
    no_complete_info(msg) {
      this.$message({
        showClose: true,
        message: '请输入' + msg,
        type: 'warning'
      });
    },
    //刷新进度条
    refresh_progress(){
      let value=0;
      if(this.usertype === 'normal_user'){
        if(this.username !== ''){
          value += 20;
        }
        if(this.tel !== ''){
          value += 20;
        }
        if(this.auth_code !== ''){
          value += 20;
        }
        if(this.password1 !== ''){
          value += 20;
        }
        if(this.password2 !== ''){
          value += 20;
        }
      }else{
        if(this.username !== ''){
          value += 100/6;
        }
        if(this.tel !== ''){
          value += 100/6;
        }
        if(this.auth_code !== ''){
          value += 100/6;
        }
        if(this.password1 !== ''){
          value += 100/6;
        }
        if(this.password2 !== ''){
          value += 100/6;
        }
        if(this.admin_code !== ''){
          value += 100/6;
        }
      }

      if(value > 99){
        this.register_not_complete = false;
      }else{
        this.register_not_complete = true;
      }

      this.progress_value = value;
    },

    register(){
      if(this.is_admin){
        if(this.tel.length === 0 || this.password1.length === 0 || this.password2.length === 0
            || this.auth_code.length === 0 || this.admin_code.length === 0){
          this.no_complete_info("完整信息");
          return;
        }else if(this.password1 !== this.password2){
          this.fail_box("两次密码输入不一致");
          return;
        }else if(this.return_auth_code !== this.auth_code){
          this.fail_box("验证码错误！");
          return;
        }
      }else{
        if(this.tel.length === 0 || this.password1.length === 0 || this.password2.length === 0
            || this.auth_code.length === 0){
          this.no_complete_info("完整信息");
          return;
        }else if(this.password1 !== this.password2){
          this.fail_box("两次密码输入不一致");
          return;
        }else if(this.return_auth_code !== this.auth_code){
          this.fail_box("验证码错误！");
          return;
        }
      }

      axios_instance.post('/register', {
        usertype: this.usertype,
        username: this.username,
        tel: this.tel,
        auth_code: this.auth_code,
        password: this.password1,
        admin_code: this.admin_code
      }).then((response)=>{
        if (response.data[0] === true) {
          this.success_box("注册成功");
          this.$router.go(0)
        } else {
          this.fail_box(response.data[1]);
        }
      })
    },

    send_auth_code(){
      // 判断手机格式
      if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)){
        this.fail_box("手机号格式错误");
      }else{
        this.show = true;
        this.auth_code_wait_time = 60;
        let timer = setInterval(()=>{
          if(this.auth_code_wait_time === 0){
            this.show = false;
            clearInterval(timer);
          }
          this.auth_code_wait_time -= 1;
        }, 1000);

        axios_instance.post("/send_auth_code" , {
          tel: this.tel,
        }).then((response) => {
          this.return_auth_code = response.data[0] + response.data[1] + response.data[2] + response.data[3] + response.data[4] + response.data[5]
        })
      }
    },
  }
}
</script>

<style scoped>

#register_button {
  position: absolute;
  font-size: 20px;
  width: 342px;
  top: 445px;
  height: 43px;
  border-radius: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: rgb(239, 79, 25);
  border-color: rgb(239, 79, 25);
}

>>> .user_input_username {
  position: absolute;
  height: 15px;
  width: 342px;
  top: 141px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.user_input_tel {
  position: absolute;
  height: 32px;
  width: 342px;
  top: 196px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.user_register_input_auth_code {
  position: absolute;
  height: 32px;
  width: 342px;
  top: 251px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.user_input_password {
  position: absolute;
  height: 32px;
  width: 342px;
  top: 306px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.user_input_passwordAgain {
  position: absolute;
  height: 32px;
  width: 342px;
  top: 361px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.admin_input_username {
  position: absolute;
  height: 32px;
  width: 342px;
  top: 130px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.admin_input_tel {
  position: absolute;
  height: 32px;
  width: 342px;
  top: 180px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.admin_register_input_auth_code {
  position: absolute;
  height: 32px;
  width: 342px;
  top: 230px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.admin_input_password {
  position: absolute;
  height: 10px;
  width: 342px;
  top: 280px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.admin_input_passwordAgain {
  position: absolute;
  height: 32px;
  width: 342px;
  top: 330px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.admin_input_AdminCode {
  position: absolute;
  height: 32px;
  width: 342px;
  top: 380px;
  left: 50%;
  transform: translate(-50%, 0%);
}

#user_register {
  position: absolute;
  font-size: 22px;
  top: 90px;
  left: 110px;
  color: #999;
  font-family: SourceHanSansSC-regular;
}

#admin_register {
  position: absolute;
  font-size: 22px;
  top: 90px;
  left: 240px;
  color: #999;
  font-family: SourceHanSansSC-regularsz;
}

a {
  text-decoration: none;
  color: #999;
}

a::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 0;
  border-bottom: 2px solid #009688;
}

/* 点击之后显示的下划线 */
.active {
  border-bottom: 2px solid #009688;
}

a:hover::before {
  transition: 0.2s all linear;
  width: 100%;
}

.on {
  display: none;
}

.register_progress{
  position: absolute;
  top: 420px;
  left: 11%;
  width: 80%;
}

</style>