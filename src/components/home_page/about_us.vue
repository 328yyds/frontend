<template>
  <div class="main_div">
    <div class="main_header"
         v-bind:style="{backgroundImage:'url(' + title_bg + ')',
           backgroundRepeat:'no-repeat',
           backgroundSize:'100% 100%'}">
    </div>
    <div class="title_text">关于我们</div>
    <div class="main_main">
      <div class="all_member_img">
        <el-image
            style="width: 350px; height: 263px"
            :src="require(`@/assets/about_us/all_img.jpg`)"
            :fit="fit"></el-image>
      </div>
      <div class="all_member_title">团队概况</div>
      <div class="title_English_1">\ TEAM PROFILES</div>
      <div class="all_member_text">来自北京交通大学软件学院1903班</div>
      <div class="our_wish_title">团队愿景</div>
      <div class="title_English_2">\ TEAM VISION</div>
      <div class="our_wish_text">冲就完事了嗷</div>
    </div>
    <div class="main_footer">
      <div class="carousel_title">
        <div class="carousel_title_1">我们的团队</div>
        <el-divider class="title_divider"></el-divider>
        <div class="carousel_title_2">每个人都是团队的核心</div>
      </div>
      <div class="carousel_show">
        <el-carousel :interval="4000" type="card" height="350px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.idView" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about_us",
  data() {
    return {
      activeIndex: '1',
      fit:'scale-down',
      title_bg:require('@/assets/about_us/about_us_top_img.png'),
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      imgList: [
        {id:0,idView:require("@/assets/about_us/person1.jpg")},
      ]
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

.el-footer{
  background-color: #22282d;
  color: #333;
  text-align: center;
  height: 500px;
}

.el-main {
  color: #333;
  text-align: center;
  height: 1662px;
  width: 100%;
}

#email_logo{
  position: absolute;
  left: 80%;
}

.main_header{
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 293px;
  -webkit-filter: blur(3px) brightness(85%);
  filter: blur(3px) brightness(85%);
}

.main_main{
  position: absolute;
  top: 353px;
  left: 0;
  width: 100%;
  height: 455px;
  background-color: #ffffff;
}

.main_footer{
  position: absolute;
  top: 808px;
  left: 0;
  width: 100%;
  height: 715px;
  background-color: #f2f2f2;
}

.title_text{
  position: absolute;
  left: 42%;
  top: 165px;
  font-size: 48px;
  font-weight: 500;
  font-family: "微软雅黑 Light";
  color: black;
}

.el-menu{
  position: absolute;
  left: 40%;
}

.el_footer_text{
  padding: 20px;
  color: #8e8f90;
  font-family: 微軟正黑體;
  font-size: 14px;
}

.all_member_img{
  position: absolute;
  top: 109px;
  left: 15%;
}

.all_member_title{
  position: absolute;
  font-size: 22px;
  font-weight: 700;
  font-family: 微软雅黑;
  color: #595959;
  left: 50%;
  top: 109px;
}

.title_English_1{
  position: absolute;
  font-size: 16px;
  font-family: Arial;
  color: #b9c6cd;
  left: 56%;
  top: 115px;
}

.all_member_text{
  position: absolute;
  left: 50%;
  top: 140px;
  font-size: 16px;
  color: #808080;
}

.our_wish_title{
  position: absolute;
  left: 50%;
  top: 249px;
  font-size: 22px;
  font-weight: 700;
  font-family: 微软雅黑;
  color: #595959;
}

.title_English_2{
  position: absolute;
  font-size: 16px;
  font-family: Arial;
  left: 56%;
  top: 255px;
  color: #b9c6cd;
}


.our_wish_text{
  position: absolute;
  left: 50%;
  top: 279px;
  font-size: 16px;
  color: #808080;
}

.el-carousel__item h3 {
  color: #f2f2f2;
  font-size: 14px;
  opacity: 0.75;
  line-height: 350px;
  margin: 0;
}

.carousel_show{
  position: absolute;
  top: 220px;
  left: 5%;
  width: 90%;
}

.carousel_title{
  position: absolute;
  top: 50px;
  left: 45%;
}

.carousel_title_1{
  font-size: 32px;
}

.carousel_title_2{
  font-size: 16px;
  color: #808080;
}

</style>