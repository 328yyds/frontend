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
          <el-select v-model="value" placeholder="设备列表">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col>
        <div id="right_video">

        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "user_view_page",
  data(){
    return {
      options:[{
        value: '选项1',
        label: '设备1'
      },{
        value: "选项2",
        label: "设备2"
      }],
      value: "",
    }
  }
}
</script>

<style scoped>
template{

}
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

.btn1{
  position: absolute;
  width: 147px;
  height: 50px;
  left: 999px;
  top: 20%;
}

.btn2{
  position: absolute;
  width: 147px;
  height: 50px;
  left: 1170px;
  top: 20%;
}

.btn3{
  position: absolute;
  width: 147px;
  height: 50px;
  left: 1351px;
  top: 20%;
}

#left_menu{
  position: absolute;
  left: 0;
  top: 100px;
  width: 200px;
  height: 764px;
  background-color: #efefef;
}

#right_video{

}


</style>