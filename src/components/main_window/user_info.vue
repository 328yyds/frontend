<template>
  <div id="right_page">
    <el-row :gutter="0">
      <el-col :span="12">
        <div id="show_image">
          <input type="file" name="image" accept="image/*" @change='onchangeImgFun'
                 class="header-upload-btn user-header-com">
          <img  alt="" :src='imgStr' class="user-header-img user-header-com">
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
      imgStr: require('@/assets/upload_img.png'),
      errorStr: ''
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },onchangeImgFun (e) {
      var file = e.target.files[0]
      console.log(file)
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size
      console.log(imgSize)
      var _this = this // this指向问题，所以在外面先定义
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 0.5 * 1024 * 1024) {
        // 合格
        _this.errorStr = ''
        console.log('大小合适')
        // 开始渲染选择的图片
        // 本地路径方法 1
        // this.imgStr = window.URL.createObjectURL(e.target.files[0])
        // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息

        // base64方法 2
        var reader = new FileReader()
        reader.readAsDataURL(file) // 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          var dataURL = reader.result
          console.log(dataURL)
          _this.imgStr = dataURL
          // 下面逻辑处理
        }
      } else {
        console.log('大小不合适')
        _this.errorStr = '图片大小超出范围'
      }
    }
  },
  mounted() {
    if(this.store.top_usertype === 'root_user'){
      this.usertype = '管理员';
    }else{
      this.usertype = '普通用户';
    }
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
