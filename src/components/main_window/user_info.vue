<template>
  <div id="right_page">
    <el-row :gutter="0">
      <el-col :span="12">
        <div id="show_image">
          <input type="file" name="image" accept="image/*" @change='onchangeImgFun'
                 class="header-upload-btn user-header-com">
          <img alt="" :src='img_url' class="user-header-img user-header-com">
          <p class="tip">点击上方上传头像(200*245)<span class="error">{{errorStr}}</span></p>
          <el-row>
            <div id="show_name">{{this.store.top_username}}</div>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div id="show_inf">
          <el-row class="el-row1">
            <el-col :span="3">
              <div id="text_name">姓名</div>
            </el-col>
            <el-col :span="14">
              <el-input :placeholder="this.store.top_name"
                        v-model="user_name"
                        :disabled="true"></el-input>
            </el-col>
          </el-row>
          <el-row class="el-row1">
            <el-col :span="3">
              <div id="text_username">用户名</div>
            </el-col>
            <el-col :span="14">
              <el-input :placeholder="this.store.top_username"
                        v-model="user_ID"
                        :disabled="true"></el-input>
            </el-col>
          </el-row>
          <el-row class="el-row1">
            <el-col :span="3">
              <div id="text_tel">手机号</div>
            </el-col>
            <el-col :span="14">
              <el-input
                  :placeholder="this.store.top_tel"
                  v-model="user_tel"
                  :disabled="true">
              </el-input>
            </el-col>
          </el-row>
          <el-row class="el-row1">
            <el-col :span="3">
              <div id="text_identity">身份</div>
            </el-col>
            <el-col :span="14">
              <el-input
                  :placeholder="this.usertype"
                  v-model="user_identity"
                  :disabled="true">
              </el-input>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios"

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 5000,
})
export default {
  name: "admin_modify",
  data() {
    return {
      user_name: '',
      user_ID: '',
      user_tel: '',
      user_identity: '',
      fit: 'fill',
      usertype: "",
      //上传用户照片
      img_url: require('@/assets/upload_img.png'),
      errorStr: '',
      user_head_base64:''
    }
  },
  methods: {
    upload_user_head(dataURL){
      axios_instance.post("/set_user_head", {
        img_base64: dataURL,
        username: this.store.top_username,
      }).then((response) => {
        if (response.data[0] === true) {
          this.success_box("头像上传成功！");
        } else {
          this.fail_box(response.data[1]);
        }
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onchangeImgFun (e) {
      let file = e.target.files[0]
      console.log(file)
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size
      let _this = this // this指向问题，所以在外面先定义
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 0.5 * 1024 * 1024) {
        // 合格
        _this.errorStr = ''
        // base64方法 2
        let reader = new FileReader()
        reader.readAsDataURL(file) // 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          let dataURL = this.result
          _this.upload_user_head(dataURL)
          _this.img_url = dataURL
        }
      } else {
        console.log('大小不合适')
        _this.errorStr = '图片大小超出范围'
      }
    },
  },
  mounted() {
    if(this.store.top_usertype === 'root_user'){
      this.usertype = '管理员';
    }else{
      this.usertype = '普通用户';
    }
    if(this.store.top_username === '')
      return
    axios_instance.get('/get_user_head/' + this.store.top_username).then((response) =>{
      if(response.data !== false){
        this.img_url = 'http://127.0.0.1:8000/get_user_head/' + this.store.top_username
      }
    })
  }
}
</script>

<style scoped>

.el-row1 {
  margin-bottom: 40px;
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
  top: 0;
  font-size: 25px;
}

#right_page {
  position: absolute;
  left: 15%;
  top:100px;
  width: 200px;
  height: 764px;
}

#show_inf {
  position: absolute;
  left: 600px;
  top: 100px;
  width: 600px;
  height: 500px;
}

#inf_title{
  font-size: 25px;
}

#text_name {
  font-size: 15px;
  line-height: 40px;
}

#text_identity {
  font-size: 15px;
  line-height: 40px;
}

#text_tel {
  font-size: 15px;
  line-height: 40px;
}

#text_username {
  font-size: 15px;
  line-height: 40px;
}

.user-header{
  position: relative;
  display: inline-block;
}

.user-header-com{
  width: 200px;
  height: 245px;
  display: inline-block;
}

.header-upload-btn{
  position: absolute;
  left: 60px;
  top: 0;
  width: 200px;
  opacity: 0;
}

.tip{
  font-size: 14px;
  color: #666;
}

/* error是用于错误提示 */
.error{
  font-size: 12px;
  color: tomato;
  margin-left: 10px;
}
</style>
