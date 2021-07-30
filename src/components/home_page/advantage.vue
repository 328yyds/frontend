<template>
  <div>
  <h1>项目技术介绍<br/>Technology Introduction</h1>
  <div class="background"
       v-bind:style="{backgroundImage:'url(' + require('@/assets/bkg.jpg') + ')'}">
    <span>Tech</span></div>
  <h2>
    <div class="tech_area">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="show_advantage">
            <el-image
                :fit="fit"
                :src="require(`@/assets/advantage/first_pic.png`)"
                style="width: 240px; height: 200px"></el-image>
            <div class="advantage_text">YOLO</div>
            <div class="advantage_detail">一个用于目标检测的网络。可以用来确定图像中存在某些对象的位置，以及对这些对象进行分类</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="show_advantage_2">
            <el-image
                :fit="fit"
                :src="require(`@/assets/advantage/second_pic.png`)"
                style="width: 240px; height: 200px"></el-image>
            <div class="advantage_text">OpenPose</div>
            <div class="advantage_detail">OpenPose可以实现人体动作、面部表情、手指运动等姿态估计。是世界上首个基于深度学习的实时多人二维姿态估计应用</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="show_advantage">
            <el-image
                :fit="fit"
                :src="require(`@/assets/advantage/third_pic.png`)"
                style="width: 240px; height: 200px"></el-image>
            <div class="advantage_text">ORM</div>
            <div class="advantage_detail">ORM通过使用描述对象和数据库之间映射的元数据，将程序中的对象自动持久化到关系数据库中。</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="show_advantage">
            <el-image
                :fit="fit"
                :src="require(`@/assets/advantage/forth_pic.png`)"
                style="width: 240px; height: 200px"></el-image>
            <div class="advantage_text">掩码</div>
            <div class="advantage_detail">图像掩码操作一般用来对处理的图像(全部或者局部)进行遮挡，来控制图像处理的区域或处理过程。</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </h2>
  </div>
</template>

<script>
export default {
  name: "tmp_bg",

  mounted() {
    const bkg = document.querySelector(".background")
    document.addEventListener('scroll', () =>{
      console.log(bkg)
      const scrollY = window.scrollY
      if(scrollY !== 0){
        bkg.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
      }else{
        bkg.style.backgroundPosition = ''
      }
    })
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  height: 200vh;
  overflow-x: hidden;
}

.background{
  background-size: cover;
  background-position: 75% 75%;
  height: 1458px;
  font: 900 36rem '';
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-align: center;
  overflow: hidden;
}

.background::before{
  content: '';
  background-size: cover;
  background-image: inherit;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -99;
}

h1{
  position: absolute;
  text-align: center;
  width: 100%;
  letter-spacing: 10px;
  color: #3c3f41;
}

h2{
  position: absolute;
  letter-spacing: 1px;
  font-size: 20px;
  top: 120vh;
  width: 100%;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);
  padding: 30px;
  background-color: rgba(0, 0, 0, .3);
}

.advantage_text{
  font-size: 20px;
  color: #ffffff;
}

.advantage_detail{
  font-size: 15px;
  color: #fcfcfc;
}

</style>