<template id="login">
  <div id="login_div_right">
    <div>
      <a class="login_username" href="javascript:"
         @click="login_way=true;tel='';password='';username='';auth_code='';login_type='password'">用户名密码登录</a>
      <a class="login_phone" href="javascript:"
         @click="login_way=false;tel='';password='';username='';auth_code='';login_type='phone'">手机登录</a>
    </div>

    <el-radio-group v-model="radio" class="login_radio">
      <el-radio :label="1" border class="login_radio1"
                @change="usertype='normal_user';password='';username='';auth_code='';">客户登录
      </el-radio>
      <el-radio :label="2" border class="login_radio2"
                @change="usertype='root_user';password='';username='';auth_code='';">管理员登录
      </el-radio>
    </el-radio-group>

    <div :class="{on : !login_way}">

      <el-input class="input_username" placeholder="请输入用户名" suffix-icon="el-icon-user-solid"
                v-model="username"></el-input>
      <el-input class="input_password" placeholder="请输入密码" show-password v-model="password"></el-input>
    </div>

    <div :class="{on : login_way}">
      <el-input class="input_tel" placeholder="请输入手机号" suffix-icon="el-icon-user-solid" v-model="tel">
      </el-input>
      <el-input placeholder="请输入验证码" v-model="auth_code" class="input_auth_code">
        <el-button slot="append"
                   :disabled="show" @click="send_auth_code">
          {{show?('重新获取('+auth_code_wait_time+')') : "获取验证码"}}</el-button>
      </el-input>
    </div>
    <el-button type="success" id="login_button" @click="login">登 录</el-button>
  </div>
</template>

<script>

import axios from "axios";

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 5000,
});

export default {
  name: "login",
  data() {
    return {
      login_way: true,
      radio: 1,
      input: '',
      input1: '',
      input3: '',

      password: "",
      tel: "",
      username: "",
      auth_code: "",
      return_auth_code: "",
      usertype: "normal_user",
      login_type: "password",

      show: false,
      auth_code_wait_time: 60,
    };
  },

  components: {},

  methods: {
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
    //登录
    login() {
      if (this.login_type === 'password') {
        if (this.username.length === 0) {
          this.no_complete_info("用户名")
          return;
        } else if (this.password.length === 0) {
          this.no_complete_info("密码")
          return;
        }
      } else {
        if (this.tel.length === 0) {
          this.no_complete_info("手机号")
          return;
        } else if (this.auth_code.length === 0) {
          this.no_complete_info("验证码")
          return;
        } else if (this.auth_code !== this.return_auth_code){
          this.fail_box("验证码错误！")
          return;
        }
      }

      axios_instance.post("/login", {
        login_type: this.login_type,
        usertype: this.usertype,
        username: this.username,
        password: this.password,
        tel: this.tel,
        auth_code: this.auth_code
      }).then((response) => {
        if (response.data[0] === true) {
          this.success_box("登录成功");

          //修改全局变量
          this.store.set_top_username(response.data[1]);
          this.store.set_top_tel(response.data[2]);
          this.store.set_top_name(response.data[3]);
          console.log(response.data[3])
          if(this.usertype === 'root_user'){
            this.store.set_top_usertype('root_user');
          }else{
            this.store.set_top_usertype('normal_user');
          }
          this.$router.replace('/main_window');
        } else {
          this.fail_box(response.data[1]);
        }
      })
    },

    send_auth_code(){
      // 判断手机格式
      if(!/^[1][34578][0-9]{9}$/.test(this.tel)){
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

    //test()是一个成功的test
    test() {
      axios_instance.post('/items', {
        login_type: "12313"
      }).then(() => {
        this.fail_box(1);
      })
    }
  }
}

</script>

<style scoped>

#login_button {
  position: absolute;
  font-size: 20px;
  width: 380px;
  top: 390px;
  height: 48px;
  border-radius: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: rgb(239, 79, 25);
  border-color: rgb(239, 79, 25);
}


.login_radio {
  position: absolute;
  top: 120px;
  height: 27px;
  font-size: 18px;
}

.login_radio1 {
  position: absolute;
  left: -130px;
}

.login_radio2 {
  position: absolute;
  left: 0;
}

.input_username, .input_tel {
  position: absolute;
  height: 36px;
  width: 380px;
  top: 211px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.input_password, .input_auth_code {
  position: absolute;
  height: 36px;
  width: 380px;
  top: 283px;
  left: 50%;
  transform: translate(-50%, 0%);
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

.login_username {
  position: absolute;
  font-size: 16px;
  top: 330px;
  left: 230px;
}

.login_phone {
  position: absolute;
  font-size: 16px;
  top: 330px;
  left: 350px;
}

.on {
  display: none;
}
</style>