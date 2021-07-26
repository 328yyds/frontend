<template>
  <div class="main_div">
    <div id="main_header">
      <div id="main_header_text_chinese" style="z-index: 99" v-show="visible">实时视频入侵检测系统</div>
      <div id="main_header_text_English" style="z-index: 99" v-show="visible">BJTU Video intrusion detection system
      </div>
      <el-button @click="login" id="main_header_btn" round style="z-index: 99" type="primary" v-show="visible">Login
      </el-button>

      <img class="backimg" id="img1"
           src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cHM6Ly81N2VhMjM2MDM2OWI1LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvYzkzYzNhY2Y0NTMzOWE4M2Q1NGI3ZjE2NTc2OGJhOTQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp">
      <img class="backimg" id="img2"
           src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS84NGI3MTgzMTQ0NWVkZWEyODMzOTRkMGI4NjI3ZTJmMS05MC53ZWJw.webp">
      <img id="cube" src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS85Y2ZjYzhhYjU2ZDQ3OTY0YjZmMWUzMWM1YTY4MzBiMy05MC53ZWJw.webp"
           v-show="visible">
      <div id="login_div" v-show="!visible">
        <login :class="{login_div: register}"></login>
        <el-button :class="{login_div: register}" @click="register=true" id="login_register" type="text">没有账号？立即注册
        </el-button>
        <register :class="{login_div: !register}"></register>
        <el-button :class="{login_div: !register}" @click="register=false" id="register_login" type="text">
          已有帐号？马上登录
        </el-button>
      </div>
    </div>
    <div id="main_main">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="show_advantage">
            <el-image :src="src"></el-image>
            <div class="advantage_text">优势1</div>
            <div class="advantage_detail">优势1的细节</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="show_advantage">
            <el-image :src="src"></el-image>
            <div class="advantage_text">优势2</div>
            <div class="advantage_detail">优势2的细节</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="show_advantage">
            <el-image :src="src"></el-image>
            <div class="advantage_text">优势3</div>
            <div class="advantage_detail">优势3的细节</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="show_advantage">
            <el-image :src="src"></el-image>
            <div class="advantage_text">优势4</div>
            <div class="advantage_detail">优势4的细节</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="main_footer"
         v-bind:style="{backgroundImage:'url(' + bg2 + ')',
             backgroundRepeat:'no-repeat',
             backgroundSize:'100% 100%'}">
      <el-row>
        <el-col :span="24">
          <div class="scenarios_title">系统应用场景</div>
        </el-col>
      </el-row>
      <el-row :gutter="50">
        <el-col :offset="3" :span="6">
          <div class="scenarios">
            <div class="scenarios_div">
              <el-image :src="src"></el-image>
              <div class="scenarios_text">场景1</div>
              <div class="scenarios_detail">场景1的细节</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="scenarios">
            <div class="scenarios_div">
              <el-image :src="src"></el-image>
              <div class="scenarios_text">场景2</div>
              <div class="scenarios_detail">场景2的细节</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="scenarios">
            <div class="scenarios_div">
              <el-image :src="src"></el-image>
              <div class="scenarios_text">场景3</div>
              <div class="scenarios_detail">场景3的细节</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import login from "@/components/home_page/Login/login";
import register from "@/components/home_page/Login/register";

export default {
  name: "tmp",
  data() {
    return {
      visible: true,
      fit: 'scale-down',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      bg2: require('@/assets/init_page/bg2.png'),
      register: false
    };
  },
  components: {
    login, register
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    change_view(path) {
      const that = this;
      that.$router.replace(path);
    },
    login() {
      this.visible = false;
    }
  }
}
</script>

<style scoped>

#login_div{
  position: absolute;
  left: 60%;
  opacity: 0.9;
  top: -50px;
  height: 600px;
  width: 480px;
}
.login_div {
  display: none;
}

@keyframes changeDeg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes changeOpc1 {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes changeOpc2 {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#cube {
  position: absolute;
  top: 50px;
  left: 65%;
  animation: changeDeg 60s linear 0.05s infinite;
}

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
  height: 1458px;
  width: 100%;
}

#main_header {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 461px;
  background-color: #171717;
}

#main_main {
  position: absolute;
  top: 520px;
  left: 0;
  width: 100%;
  height: 286px;
  background-color: #32383d;
}

#main_footer {
  position: absolute;
  top: 805px;
  left: 0;
  width: 100%;
  height: 713px;
  background-color: #f9f9f9;
}

.el-menu {
  position: absolute;
  left: 40%;
}

#main_header_text_chinese {
  position: absolute;
  left: 10%;
  top: 135px;
  color: #f9f9f9;
  font-family: 微軟正黑體;
  font-size: 45px;
  font-weight: 700;
}

#main_header_text_English {
  position: absolute;
  left: 10%;
  top: 210px;
  color: #f9f9f9;
  font-family: courier new;
  font-size: 30px;
  font-weight: 500;
}

.el_footer_text {
  padding: 20px;
  color: #8e8f90;
  font-family: 微軟正黑體;
  font-size: 14px;
}

#main_header_btn {
  position: absolute;
  left: 10%;
  top: 265px;
  font-family: 微软雅黑;
  font-size: 16px;
  padding: 12px 40px;
  border-width: 1px;
  border-color: rgb(239, 79, 25);
  background-color: rgb(239, 79, 25);
  color: rgb(255, 255, 255);
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.show_advantage {
  padding: 75px;
}

.advantage_text {
  font-size: 14px;
  color: #d3d3d3;
}

.advantage_detail {
  font-size: 14px;
  color: #808080;
}

.scenarios_title {
  font-size: 36px;
  font-weight: 700;
  font-style: normal;
  color: #000000;
  display: inline-block;
  padding: 90px;
  vertical-align: bottom;
}

.scenarios {
  padding: 30px;
  background-color: #2c3e50;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.scenarios_div {
  padding: 15px;
}

.scenarios_text {
  font-size: 20px;
  color: #ffffff;
}

.scenarios_detail {
  font-size: 14px;
  color: #808080;
}

.backimg {
  position: absolute;
  left: 0;
  width: 100%;
}

#img1 {
  animation: changeOpc1 15s linear 1s infinite;
}

#img2 {
  animation: changeOpc2 15s linear 1s infinite;
}

#email_logo {
  position: absolute;
  left: 80%;
}

#login_register {
  position: absolute;
  transform: translate(-50%, 0%);
  top: 450px;
  left: 50%;
}

#register_login {
  position: absolute;
  transform: translate(-50%, 0%);
  top: 470px;
  left: 50%;
}
</style>