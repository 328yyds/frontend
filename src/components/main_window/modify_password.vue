<template>
  <div id="right_page">
    <el-row :gutter="0">
      <el-col :span="12">
        <div id="show_image">
          <el-row>
            <el-image
                fit="fill"
                :src="img_url"
                style="width: 200px; height: 245px"></el-image>
          </el-row>
          <el-row>
            <div id="show_name">{{ this.store.top_username }}</div>
          </el-row>
        </div>
      </el-col>

      <el-form :model="ruleForm" :rules="rules" class="demo-ruleForm" label-width="120px" ref="ruleForm" status-icon>
        <el-col :span="12">
          <div id="show_inf">
            <el-row class="el-row1" :gutter="20">
              <el-col :span="19">
                <el-form-item id="text_auth_code" label="验证码" prop="code">
                  <el-input
                      class="input_auth_code"
                      placeholder="请输入密保手机中收到的验证码"
                      v-model="ruleForm.code">
                    <el-button :disabled="show"
                               @click="send_auth_code" slot="append">
                      {{ show ? ('重新获取(' + auth_code_wait_time + ')') : "获取验证码" }}
                    </el-button>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row class="el-row1" :gutter="20">
              <el-col :span="19">
                <el-form-item id="text_password" label="设置密码" prop="pass">
                  <el-input
                      autocomplete="off"
                      class="user_reset_password"
                      placeholder="请输入密码"
                      prefix-icon="el-icon-lock"
                      show-password
                      type="password"
                      v-model="ruleForm.pass">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row class="el-row1" :gutter="20">
              <el-col :span="19">
                <el-form-item id="text_password_again" label="再次输入密码" prop="checkPass">
                  <el-input
                      autocomplete="off"
                      class="user_reset_password"
                      placeholder="请输入再次输入密码"
                      prefix-icon="el-icon-lock"
                      show-password
                      type="password"
                      v-model="ruleForm.checkPass">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row class="el-row1" :gutter="20">
              <el-col :span="17">
                <el-form-item>
                  <el-button @click="change_password" id="btm_confirm">确 定</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 5000,
});

export default {
  name: "new_admin_password",
  data() {
    let checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'));
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.pass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        code: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        code: [
          {validator: checkCode, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      },

      //验证码
      show: false,
      auth_code_wait_time: 60,
      return_auth_code: '',
      img_url: require(`@/assets/default_img.jpg`)
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

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

    change_password() {
      if (this.ruleForm.code.length === 0 || this.ruleForm.pass.length === 0 || this.ruleForm.checkPass.length === 0) {
        return;
      } else if (this.return_auth_code !== this.ruleForm.code) {
        this.fail_box("验证码错误！");
        return;
      }

      this.$confirm('确认更改密码?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios_instance.post("/change_password", {
          password: this.ruleForm.checkPass,
          username: this.store.top_username,
          usertype: this.store.top_usertype,
        }).then((response) => {
          if (response.data[0] === true) {
            this.success_box("修改密码成功！");
            this.$router.replace('/main_window');
          } else {
            this.fail_box(response.data[1]);
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        });
      });
    },

    send_auth_code() {
      // 判断手机格式
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.store.top_tel)) {
        this.fail_box("手机号格式错误");
      } else {
        console.log(this.store.top_tel);
        this.show = true;
        this.auth_code_wait_time = 60;
        let timer = setInterval(() => {
          if (this.auth_code_wait_time === 0) {
            this.show = false;
            clearInterval(timer);
          }
          this.auth_code_wait_time -= 1;
        }, 1000);

        axios_instance.post("/send_auth_code", {
          tel: this.store.top_tel,
        }).then((response) => {
          this.return_auth_code = response.data[0] + response.data[1] + response.data[2] + response.data[3] + response.data[4] + response.data[5]
        })
      }
    },
  },
  mounted() {
    if(this.store.top_username === '')
      return
    axios_instance.get('/get_user_head/' + this.store.top_username).then((response) =>{
      if(response.data !== false){
        this.img_url = 'http://127.0.0.1:8000/get_user_head/' + this.store.top_username
      }
    })
  }
}
</script>

<style scoped>


.el-row1 {
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap
}

#show_image {
  position: absolute;
  left: 130px;
  top: 100px;
  width: 320px;
  height: 375px;
}

#show_name {
  position: relative;
  top: 50px;
  font-size: 25px;
}

#right_page {
  position: absolute;
  left: 15%;
  top: 100px;
  width: 200px;
  height: 764px;
}

#show_inf {
  position: absolute;
  left: 555px;
  top: 100px;
  width: 600px;
  height: 500px;
}

#inf_title {
  font-size: 25px;
}

#text_auth_code {
  font-size: 20px;
}

#text_password {
  font-size: 20px;
}

#text_password_again {
  font-size: 20px;
}

#btm_confirm {
  position: relative;
  top: -30px;
  width: 150px;
  height: 50px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 100);
  font-size: 25px;
  text-align: center;
  font-family: Microsoft Yahei, sans-serif;
  border: 1px solid rgba(187, 187, 187, 100);
}
</style>