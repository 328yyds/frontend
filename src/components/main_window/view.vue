<template>
  <div id="right_video">
    <el-row>
      <el-col>
        <el-input class="ip_input"
                  placeholder="请输入监控端IP"
                  v-model="input"></el-input>
      </el-col>
      <el-col>
        <el-button @click="get_video_by_ip(input)" class="confirm_btn" type="primary">确定</el-button>
      </el-col>
    </el-row>
    <el-button @click="show_drawer = true" class="set_area_btn" type="primary">设置警戒区域</el-button>
    <el-button class="action_btn" type="primary" @click="send_ip_behaviour(ip)">检测物体姿态</el-button>
    <img :src="src" id="img">

    <el-drawer
        :before-close="handleClose"
        :visible.sync="show_drawer"
        custom-class="demo-drawer"
        direction="rtl"
        ref="drawer"
        title="设置警戒区域">
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="左上角坐标(x)" label-width="150px">
            <el-input autocomplete="off" class="el-form-input" v-model="form.coordinates_x"></el-input>
          </el-form-item>
          <el-form-item label="左上角坐标(y)" label-width="150px">
            <el-input autocomplete="off" class="el-form-input" v-model="form.coordinates_y"></el-input>
          </el-form-item>
          <el-form-item label="警戒区域长度" label-width="150px">
            <el-input autocomplete="off" class="el-form-input" v-model="form.width"></el-input>
          </el-form-item>
          <el-form-item label="警戒区域宽度" label-width="150px">
            <el-input autocomplete="off" class="el-form-input" v-model="form.height"></el-input>
          </el-form-item>
          <el-form-item>
            <el-image fit="fill"
                      id="example_img"
                      :src="require(`@/assets/drawexample.jpg`)"
                      @click="getMouseXY($event)"
                      style="width: 400px; height: 220px"></el-image>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button :loading="loading" @click="$refs.drawer.closeDrawer();send_ip_coordinate(ip);" type="primary">
            {{ loading ? '提交中 ...' : '确 定' }}
          </el-button>
        </div>
      </div>
    </el-drawer>

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
      show_drawer: false,
      loading: false,
      src: "http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png",
      ip: '',
      form: {
        coordinates_x: '',
        coordinates_y: '',
        width: '',
        height: '',
      },
      formLabelWidth: '80px',
      timer: null,

      abs_x: '',
      abs_y: '',
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

    get_video_by_ip(ip) {
      this.set_ip("http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png")
      let regExp = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
      if (regExp.test(ip) === false) {
        this.$message({
          showClose: true,
          message: "无效IP",
          type: 'error'
        });
      }else{
        this.ip = ip
        this.$message({
          showClose: true,
          message: "合法IP",
          type: 'success'
        });
      }
    },

    handle_error(msg){
      this.set_ip("http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png")
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      });
    },

    send_ip_coordinate(ip){
      axios_instance.get('/video_judge/' + ip).then(response =>{
        if (response.data === true)
          this.set_ip('http://127.0.0.1:8000/video_area/' + ip +
              ':x=' + this.form.coordinates_x +
              ':y=' + this.form.coordinates_y +
              ':w=' + this.form.width +
              ':h=' + this.form.height);
        else if (response === false) {
          this.handle_error("无法访问该ip")
        } else if (response.data === 'not register') {
          this.handle_error("该摄像头未注册")
        }
      }).catch(() => {
        this.handle_error("无法访问该ip")
      })
    },

    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
          .then(() => {
            this.loading = true;
            this.timer = setTimeout(() => {
              done();
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.loading = false;
              }, 400);
            }, 2000);
          })
          .catch(() => {
          });
    },
    cancelForm() {
      this.loading = false;
      this.show_drawer = false;
      clearTimeout(this.timer);
    },

    set_ip(ip) {
      this.src = ip;
    },
    mounted() {
      this.set_ip("http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png")
    },
    getMouseXY(event) {
      if (this.show_drawer) {
        if (this.form.coordinates_x !== '' && this.form.width !== '') {
          this.form.coordinates_x = ''
          this.form.coordinates_y = ''
          this.form.width = ''
          this.form.height = ''
        }
        //获取相对于当前所指向对象的位置坐标
        let img = document.getElementById('example_img').getBoundingClientRect()
        if (this.form.coordinates_x === '') {
          this.form.coordinates_x = Math.ceil((event.x - img.x) * 2.5)
          this.form.coordinates_y = Math.ceil((event.y - img.y) * 2.5)
          this.abs_x = event.x
          this.abs_y = event.y
        } else {
          this.form.coordinates_x = Math.ceil((Math.min(event.x, this.abs_x) - img.x) * 2.5)
          this.form.coordinates_y = Math.ceil((Math.min(event.y, this.abs_y) - img.y) * 2.5)
          this.form.width = Math.abs(Math.ceil((Math.max(event.x, this.abs_x) - this.form.coordinates_x / 2.5 - img.x) * 2.5));
          this.form.height = Math.abs(Math.ceil((Math.max(event.y, this.abs_y) - this.form.coordinates_y / 2.5 - img.y) * 2.5));
        }
      }
    },
    send_ip_behaviour(ip){
      axios_instance.get('/video_judge/' + ip).then(response =>{
        if (response.data === true)
          this.set_ip('http://127.0.0.1:8000/video_behaviour/' + ip);
        else if (response === false) {
          this.handle_error("无法访问该ip")
        } else if (response.data === 'not register') {
          this.handle_error("该摄像头未注册")
        }
      }).catch(() => {
        this.handle_error("无法访问该ip")
      })
    }
  },




}
</script>

<style scoped>

#img {
  position: absolute;
  left: 60%;
  width: 1000px;
  height: 550px;
}

#right_video {
  position: absolute;
  top: 110px;
  left: 15%;
}

.confirm_btn {
  position: absolute;
  top: 150px;
  left: 1200px;
}

.ip_input {
  position: absolute;
  width: 150px;
  top: 150px;
  left: 1020px
}

.set_area_btn {
  position: absolute;
  width: 250px;
  top: 250px;
  left: 1020px;
}

.action_btn {
  position: absolute;
  width: 250px;
  top: 350px;
  left: 1010px;
}

.el-form-input {
  width: 250px;
}
</style>