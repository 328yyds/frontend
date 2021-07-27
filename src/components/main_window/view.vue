<template>
  <div id="right_video">
    <el-row>
      <el-col>
        <el-input placeholder="请输入IP" style="position:absolute; width: 300px; top: -50px; left: 150px"
                  v-model="input"></el-input>
      </el-col>
      <el-col>
        <el-button @click="get_video_by_ip(input)" style="position:absolute; top: -50px;left: 450px" type="primary">确定
        </el-button>
      </el-col>
    </el-row>
    <img :src="src" id="img">
  </div>
</template>

<script>
import axios from 'axios'

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 1000,
})
export default {
  name: "admin_view_page",
  data() {
    return {
      input: '',
      numberValidateForm: {
        ip: ''
      },
      src: "http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png"
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    get_video_by_ip(ip) {
      let regExp = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
      if (regExp.test(ip) === false) {
        this.$message({
          showClose: true,
          message: "无效IP",
          type: 'error'
        });
      } else {
        axios_instance.get('/video_judge/' + ip).then((response) => {
          console.log(response)
          if (response.data === true)
            this.set_ip('http://127.0.0.1:8000/video/' + ip);
          else if (response === false) {
            this.set_ip("http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png")
            this.$message({
              showClose: true,
              message: "无法访问该IP",
              type: 'error'
            });
          } else if (response.data === 'not register') {
            this.set_ip("http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png")
            this.$message({
              showClose: true,
              message: "该摄像头未注册",
              type: 'error'
            });
          }
        }).catch(() => {
          this.set_ip("http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png")
          this.$message({
            showClose: true,
            message: "无法访问该IP",
            type: 'error'
          });
        })
      }
    },

    set_ip(ip) {
      this.src = ip;
    },
    mounted() {
      this.set_ip("http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png")
    }

  },


}
</script>

<style scoped>

#img {
  width: 800px;
  height: 600px;
}


#right_video {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 120px;
}
</style>