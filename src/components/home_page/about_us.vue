<template>
  <div class="main_div" style="height:1450px">
    <div class="main_header"
         style="
         background-image: url(https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cHM6Ly81ZjExNDcxZmNhMjgzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMjAvMDcvMzY0ZGFhMmE3ZjY5MDRhNmJjNTAzZjIyYzM5ZDZmOTEtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp);
         background-repeat: no-repeat;
         background-size: 100%;
         background-attachment: fixed">
    </div>
    <div class="title_text">关于我们</div>
    <div class="main_main">
      <div class="card">
        <div class="imgBox">
          <img :src="require('@/assets/about_us/all_img.jpg')">
        </div>
        <div class="details">
          <div class="content">
            <h2>Together we are strong
              <br>
              <span>北京交通大学软件学院1903班328宿舍</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="main_footer">
      <div class="carousel_title">
        <div class="carousel_title_1">我们的团队</div>
        <div class="carousel_title_2">每个人都是团队的核心</div>
      </div>
      <div class="carousel_show">
        <el-carousel :interval="4000" arrow="always" height="450px">
          <el-carousel-item :key="item.id" v-for="item in imgList">
            <img :src="item.idView" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="foot_fixed_pic"
           v-bind:style="{backgroundImage: 'url(' + require('@/assets/about_us/aboutus.jpg')+ ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundAttachment: 'fixed'}">
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
      fit: 'scale-down',
      title_bg: require('@/assets/about_us/about_us_top_img.png'),
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      imgList: [
        {id: 0, idView: require("@/assets/about_us/person1.png")},
        {id: 1, idView: require("@/assets/about_us/person2.png")},
        {id: 2, idView: require("@/assets/about_us/person3.png")},
        {id: 3, idView: require("@/assets/about_us/person4.png")},
        {id: 4, idView: require("@/assets/about_us/person5.png")},
        {id: 5, idView: require("@/assets/about_us/person6.png")},
      ],
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
  height: 1662px;
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
  height: 383px;
  -webkit-filter: blur(3px) brightness(85%);
  filter: blur(3px) brightness(85%);
}

.main_main {
  position: absolute;
  top: 383px;
  left: 0;
  width: 100%;
  height: 455px;
  background-color: #ffffff;
}

.main_footer {
  position: absolute;
  top: 808px;
  left: 0;
  width: 100%;
  height: 715px;
  background-color: #f2f2f2;
}

.title_text {
  position: absolute;
  letter-spacing: 40px;
  left: 40%;
  top: 125px;
  font-size: 48px;
  font-weight: 500;
  font-family: "微软雅黑 Bold";
  color: black;
}

.el-menu {
  position: absolute;
  left: 40%;
}

.el_footer_text {
  padding: 20px;
  color: #8e8f90;
  font-family: 微軟正黑體;
  font-size: 14px;
}

.all_member_img {
  position: absolute;
  top: 109px;
  left: 15%;
}

.all_member_title {
  position: absolute;
  font-size: 22px;
  font-weight: 700;
  font-family: 微软雅黑;
  color: #595959;
  left: 50%;
  top: 109px;
}

.title_English_1 {
  position: absolute;
  font-size: 16px;
  font-family: Arial;
  color: #b9c6cd;
  left: 56%;
  top: 115px;
}

.all_member_text {
  position: absolute;
  left: 50%;
  top: 140px;
  font-size: 16px;
  color: #808080;
}

.our_wish_title {
  position: absolute;
  left: 50%;
  top: 249px;
  font-size: 22px;
  font-weight: 700;
  font-family: 微软雅黑;
  color: #595959;
}

.title_English_2 {
  position: absolute;
  font-size: 16px;
  font-family: Arial;
  left: 56%;
  top: 255px;
  color: #b9c6cd;
}

.our_wish_text {
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

.carousel_show {
  position: absolute;
  top: 220px;
  left: 19%;
  width: 60%;
}

.carousel_title {
  position: absolute;
  top: 50px;
  left: 45%;
}

.carousel_title_1 {
  padding: 10px;
  font-size: 32px;
  border-bottom-width: 2px;
  border-bottom-color: #f1501a;
  border-bottom-style: solid;
}

.carousel_title_2 {
  padding: 10px;
  font-size: 16px;
  color: #808080;
}

.foot_fixed_pic {
  position: absolute;
  margin-top: 180px;
  padding-top: 38px;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 500px;
  -webkit-filter: blur(3px) brightness(85%);
  /*filter: blur(3px) brightness(85%);*/
}

.card{
  position: absolute;
  top: 75px;
  left: 500px;
  width: 450px;
  height: 300px;
  background: #fff;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  box-shadow: 10px 20px 40px rgba(0,0,0,0.25);
  transition: 1s;
}

.card .details{
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card .details .content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card .details .content h2{
  text-align: center;
  font-weight: 700;
  line-height: 1em;
}

.card .details .content h2 span{
  color: #e21212;
  font-size: 0.8em;
}

.card .imgBox{
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: left;
  transform-style: preserve-3d;
  background: #000;
  transition: 1s;
}

.card:hover{
  transform: translateX(50%);
}

.card:hover .imgBox{
  transform: rotateY(-180deg);
}

.card .imgBox img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-style: preserve-3d;
}

</style>