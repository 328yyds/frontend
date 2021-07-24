<template>
  <div id="right_page">
    <el-row :gutter="0">
      <el-col :span="12">
        <div id="show_image">
          <el-row>
            <el-image
                style="width: 200px; height: 275px"
                :src="require(`@/assets/user_image.jpg`)"
                fit="fill"></el-image>
          </el-row>
          <el-row>
            <div id="show_name">{{this.store.top_username}}</div>
          </el-row>
        </div>
      </el-col>


      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-col :span="12">
          <div id="show_inf">
            <el-row :gutter="20" class="el-row1">
              <el-col :span="24">
                <div id="inf_title">修改个人密码</div>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="el-row1">
              <el-col :span="23">
                <el-form-item id="text_auth_code" label="验证码" prop="code">
                  <el-input
                      placeholder="请输入密保手机中收到的验证码"
                      class="input_auth_code"
                      v-model="ruleForm.code">
                    <el-button slot="append">获取验证码</el-button>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20" class="el-row1">
              <el-col :span="23">
                <el-form-item id="text_password" label="设置密码" prop="pass">
                  <el-input
                      class="user_reset_password"
                      placeholder="请输入密码"
                      prefix-icon="el-icon-lock"
                      type="password"
                      show-password
                      v-model="ruleForm.pass"
                      autocomplete="off">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20" class="el-row1">
              <el-col :span="23">

                <el-form-item id="text_password_again" label="再次输入密码" prop="checkPass">
                  <el-input
                      class="user_reset_password"
                      placeholder="请输入再次输入密码"
                      type="password"
                      prefix-icon="el-icon-lock"
                      show-password
                      v-model="ruleForm.checkPass"
                      autocomplete="off">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20" class="el-row1">
              <el-col :span="20">
                <el-form-item>
                  <el-button id="btm_confirm" type="primary" @click="change_password">确  定</el-button>
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
  name: "new_user_password",
  data() {
    var checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'));
      }
      // setTimeout(() => {
      //   if (!Number.isInteger(value)) {
      //     callback(new Error('请输入数字值'));
      //   } else {
      //     if (value < 18) {
      //       callback(new Error('必须年满18岁'));
      //     } else {
      //       callback();
      //     }
      //   }
      // }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.pass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
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
          { validator: checkCode, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
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

    change_password(){
      if(this.ruleForm.code.length === 0 || this.ruleForm.pass.length === 0 || this.ruleForm.checkPass.length === 0){
        return;
      }

      axios_instance.post("/change_password" , {
        new_password:this.ruleForm.checkPass,
        username:this.store.top_username,
      }).then((response) => {
        if (response.data[0] === true) {
          this.success_box("修改密码成功！");
          this.$router.replace('/main_window');
        } else {
          this.fail_box(response.data[1]);
        }
      })
    }
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
  left: 150px;
  top: 180px;
  width: 200px;
  height: 764px;
}

#show_inf {
  position: absolute;
  left: 600px;
  top: 50px;
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
  width: 200px;
  height: 60px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 100);
  font-size: 28px;
  text-align: center;
  font-family: Microsoft Yahei,serif;
  border: 1px solid rgba(187, 187, 187, 100);
}
</style>