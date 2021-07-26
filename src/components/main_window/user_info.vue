<template>
  <div id="right_page">
    <el-row :gutter="0">
      <el-col :span="12">
        <div id="show_image">
          <el-row>
            <el-image
                style="width: 200px; height: 275px"
                :src="require(`@/assets/user_image.jpg`)"
                :fit="fit"></el-image>
          </el-row>
          <el-row>
            <el-button type="text" id="change_image">修改头像（200*275）</el-button>
          </el-row>
          <el-row>
            <div id="show_name">{{this.store.top_username}}</div>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div id="show_inf">
          <el-row :gutter="20" class="el-row1">
            <el-col :span="24">
              <div id="inf_title">基 本 信 息</div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="el-row1">
            <el-col :span="8">
              <div id="text_name">姓名</div>
            </el-col>
            <el-col :span="12">
              <el-input :placeholder="this.store.top_name"
                        v-model="user_name"
                        :disabled="true"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="el-row1">
            <el-col :span="8">
              <div id="text_username">用户名</div>
            </el-col>
            <el-col :span="12">
              <el-input :placeholder="this.store.top_username"
                        v-model="user_ID"
                        :disabled="true"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="el-row1">
            <el-col :span="8">
              <div id="text_tel">手机号</div>
            </el-col>
            <el-col :span="12">
              <el-input
                  :placeholder="this.store.top_tel"
                  v-model="user_tel"
                  :disabled="true">
              </el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="el-row1">
            <el-col :span="8">
              <div id="text_identity">身份</div>
            </el-col>
            <el-col :span="12">
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
      usertype: ""
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    if(this.store.usertype === 'root_user'){
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
  top: 50px;
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
  top: 50px;
  width: 600px;
  height: 500px;
}

#inf_title {
  font-size: 25px;
}

#text_name {
  font-size: 20px;
}

#text_identity {
  font-size: 20px;
}

#text_tel {
  font-size: 20px;
}

#text_username {
  font-size: 20px;
}

#btm_confirm {
  width: 200px;
  height: 60px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 100);
  font-size: 28px;
  text-align: center;
  font-family: Microsoft Yahei,sans-serif;
  border: 1px solid rgba(187, 187, 187, 100);
}
</style>
