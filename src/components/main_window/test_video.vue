<template>
  <div class="test_video">
    <el-col :key="o" :span="8" v-for="(o) in 2">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="urls[o - 1]" class="image">
        <div style="padding: 14px;">
          <div class="bottom clearfix">
            <el-button class="button" type="text"><strong>test video {{o}}</strong></el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import axios from 'axios'

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 5000,
});

export default {
  name: "test_video",
  data() {
    return {
      row: 0,
      col: 0,
      size: 0,
      urls: []
    };
  },

  created() {
    axios_instance.get('/test_video_img/-1').then(response => {
      this.row = Math.ceil(response.data / 4);
      this.size = response.data;
      for (let i = 0; i < response.data; i++) {
        this.urls.push("http://127.0.0.1:8000/test_video_img/" + i);
      }
      console.log(this.urls)
    })
  },


}
</script>

<style scoped>
.test_video{
  position: absolute;
  left: 20%;
  top: 120px;
  width: 60%;
}


.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  text-align: center;
}

.image {
  width: 100%;
  height: 220px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>