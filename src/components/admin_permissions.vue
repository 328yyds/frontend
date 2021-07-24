<template>
  <div id="background_div">
    <el-row>
      <el-col>
        <div id="top_div">
          <el-button class="btn1">实时画面</el-button>
          <el-button class="btn2">入侵记录</el-button>
          <el-button class="btn3">系统管理</el-button>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <div id="left_menu">
          <el-row>
            <el-button class="inf_modify">用户信息编辑</el-button>
          </el-row>
          <el-row>
            <el-button class="password_modify">修改个人密码</el-button>
          </el-row>
          <el-row>
            <el-button class="permission_modify">修改用户权限</el-button>
          </el-row>
        </div>
      </el-col>
      <el-col>
        <el-row :gutter="20">
          <div id="search_user">
            <el-col :span="12">
              <el-input
                  placeholder="请输入用户名"
                  v-model="search_input"
                  clearable>
              </el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" icon="el-icon-search" class="search_btn">搜索</el-button>
            </el-col>
          </div>
        </el-row>
        <el-row>
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
                    <div id="show_name">姓 名</div>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="12">
                <div id="show_inf">
                  <el-row gutter="20" class="el-row1">
                    <el-col span="24">
                      <div id="inf_title">用户信息栏</div>
                    </el-col>
                  </el-row>
                  <el-row gutter="20" class="el-row1">
                    <el-col span="8">
                      <div id="text_name">姓名</div>
                    </el-col>
                    <el-col span="12">
                      <el-input placeholder="XXX"
                                v-model="user_name"
                                :disabled="true"></el-input>
                    </el-col>
                  </el-row>
                  <el-row gutter="20" class="el-row1">
                    <el-col span="8">
                      <div id="text_username">用户名</div>
                    </el-col>
                    <el-col span="12">
                      <el-input placeholder="XXX"
                                v-model="user_ID"
                                :disabled="true"></el-input>
                    </el-col>
                  </el-row>
                  <el-row gutter="20" class="el-row1">
                    <el-col span="8">
                      <div id="text_tel">手机号</div>
                    </el-col>
                    <el-col span="12">
                      <el-input
                          placeholder="XXX"
                          v-model="user_tel"
                          :disabled="true">
                      </el-input>
                    </el-col>
                  </el-row>
                  <el-row gutter="20" class="el-row1">
                    <el-col span="8">
                      <div id="text_identity">身份</div>
                    </el-col>
                    <el-col span="12">
                      <el-input
                          placeholder="XXX"
                          v-model="user_identity"
                          :disabled="true">
                      </el-input>
                    </el-col>
                  </el-row>
                  <el-row gutter="20" class="el-row1">
                    <el-col span="24">
                      <el-button id="btn_confirm">设为/取消管理员</el-button>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "admin_permissions",
  data() {
    return {
      user_name:'',
      user_ID:'',
      user_tel:'',
      user_identity:'',
      search_input:'',
      fit: 'fill',
    }
  }
}
</script>

<style scoped>
#background_div{
  padding: 0;
  margin: 0;
}
#top_div{
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100px;
  background: url("../assets/top_img.png");
}
.el-row1 {
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap
}

.btn1{
  position: absolute;
  width: 147px;
  height: 50px;
  left: 979px;
  top: 20%;
  font-size: 20px;
}

.btn2{
  position: absolute;
  width: 147px;
  height: 50px;
  left: 1150px;
  top: 20%;
  font-size: 20px;
}

.btn3{
  position: absolute;
  width: 147px;
  height: 50px;
  left: 1331px;
  top: 20%;
  font-size: 20px;
}

.inf_modify{
  left: 0px;
  top: 100px;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 100);
  font-size: 19px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(187, 187, 187, 100);
}

#show_image{
  position: absolute;
  left: 130px;
  top: 175px;
  width: 320px;
  height: 375px;
}

#show_name{
  position: relative;
  top:50px;
  font-size: 25px;
}

.password_modify{
  left: 0px;
  top: 150px;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 100);
  font-size: 19px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(187, 187, 187, 100);
}

.permission_modify{
  left: 0px;
  top: 200px;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 100);
  font-size: 19px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(187, 187, 187, 100);
}


#left_menu{
  position: absolute;
  left: 0;
  top: 100px;
  width: 200px;
  height: 764px;
  background-color: #efefef;
  color: rgba(16, 16, 16, 100);
}

#right_page{
  position: absolute;
  left: 200px;
  top: 100px;
  width: 200px;
  height: 764px;
}

#show_inf{
  position: absolute;
  left: 600px;
  top: 100px;
  width: 600px;
  height: 500px;
}
#inf_title{
  font-size: 25px;
}
#text_name{
  font-size: 20px;
}
#text_identity{
  font-size: 20px;
}
#text_tel{
  font-size: 20px;
}
#text_username{
  font-size: 20px;
}
#btn_confirm{
  width: 240px;
  height: 60px;
  border-radius: 4px;
  color: rgba(16, 16, 16, 100);
  font-size: 28px;
  text-align: center;
  font-family: Microsoft Yahei;
  border: 1px solid rgba(187, 187, 187, 100);
}

#search_user{
  position: absolute;
  left:1150px;
  top: 125px;
  width: 350px;
  height: 35px;
}
</style>
