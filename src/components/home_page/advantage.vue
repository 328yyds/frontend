<template>
  <div>
    <div class="main_header"
         v-bind:style="{backgroundImage:'url(' + title_bg + ')',
           backgroundRepeat:'no-repeat',
           backgroundSize:'100% 100%'}">
      <div class="title_text">系统核心优势</div>
    </div>
    <div class="main_main">
      <el-row :gutter="90">
        <el-col :span="8" offset="4">
          <div class="advantage_inf">
            <div class="show_advantage">
              <el-image :src="src"></el-image>
              <div class="advantage_text">优势1</div>
              <div class="advantage_detail">优势1的细节</div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="advantage_inf">
            <div class="show_advantage">
              <el-image :src="src"></el-image>
              <div class="advantage_text">优势2</div>
              <div class="advantage_detail">优势2的细节</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="90">
        <el-col :span="8" offset="4">
          <div class="advantage_inf">
            <div class="show_advantage">
              <el-image :src="src"></el-image>
              <div class="advantage_text">优势3</div>
              <div class="advantage_detail">优势3的细节</div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="advantage_inf">
            <div class="show_advantage">
              <el-image :src="src"></el-image>
              <div class="advantage_text">优势4</div>
              <div class="advantage_detail">优势4的细节</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      activeIndex: '1',
      fit: 'scale-down',
      title_bg: require('@/assets/advantage/title_page.png'),
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    };
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
  height: 1020px;
  width: 100%;
}

#email_logo {
  position: absolute;
  left: 80%;
}

.main_header {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 281px;
}

.main_main {
  position: absolute;
  top: 335px;
  left: 0;
  width: 100%;
  height: 753px;
  background-color: #f4f7fc;
}

.title_text {
  position: absolute;
  left: 20%;
  top: 100px;
  font-size: 48px;
  font-weight: 500;
  font-family: 微软雅黑;
  color: black;
}

.el-menu {
  position: absolute;
  left: 40%;
}

.advantage_inf {
  margin: 30px;
  padding: 75px;
  height: 165px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.show_advantage {
  padding: 0px;
}

.advantage_text {
  font-size: 14px;
  color: #d3d3d3;
}

.advantage_detail {
  font-size: 14px;
  color: #808080;
}

.el_footer_text {
  padding: 20px;
  color: #8e8f90;
  font-family: 微軟正黑體;
  font-size: 14px;
}

</style>