<template>
  <div class="main_div">
    <div class="main_header"
         v-bind:style="{backgroundImage:'url(https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cHM6Ly81ZjExNDcxZmNhMjgzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMjAvMDcvMzY0ZGFhMmE3ZjY5MDRhNmJjNTAzZjIyYzM5ZDZmOTEtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp)',
           backgroundRepeat:'no-repeat',
           backgroundSize:'100%'}" >
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
        <div class="carousel_title_2">每个人都是团队的核心</div>
      </div>
      <div class="carousel_show">
        <el-carousel :interval="4000" arrow="always" height="450px">
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
        {id:0,idView:require("@/assets/about_us/person1.png")},
        {id:1,idView:require("@/assets/about_us/person2.png")},
        {id:2,idView:require("@/assets/about_us/person3.png")},
        {id:3,idView:require("@/assets/about_us/person4.png")},
        {id:4,idView:require("@/assets/about_us/person5.png")},
        {id:5,idView:require("@/assets/about_us/person6.png")},
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
  /*-webkit-filter: blur(3px) brightness(85%);*/
  /*filter: blur(3px) brightness(85%);*/
}

.main_main{
  position: absolute;
  top: 353px;
  left: 0;
  width: 100%;
  height: 455px;
}

.main_footer{
  position: absolute;
  top: 808px;
  left: 0;
  width: 100%;
  height: 715px;
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
}

.our_wish_text{
  position: absolute;
  left: 50%;
  top: 279px;
  font-size: 16px;
  color: #808080;
}

.el-carousel__item h3 {
  font-size: 14px;
  opacity: 0.75;
  line-height: 350px;
  margin: 0;
}

.carousel_show{
  position: absolute;
  top: 220px;
  left: 19%;
  width: 60%;
}

.carousel_title{
  position: absolute;
  top: 50px;
  left: 45%;
}

.carousel_title_1{
  padding: 10px;
  font-size: 32px;
  border-bottom-width: 2px;
  border-bottom-color: #f1501a;
  border-bottom-style: solid;
}

.carousel_title_2{
  padding: 10px;
  font-size: 16px;
  color: #808080;
}

</style>