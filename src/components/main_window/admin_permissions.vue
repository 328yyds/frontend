<template>
  <div id="right_page">
    <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        :key="refresh">
      <el-table-column
          label="Name"
          prop="name">
      </el-table-column>
      <el-table-column
          label="Username"
          prop="username">
      </el-table-column>
      <el-table-column
          label="Tel"
          prop="tel">
      </el-table-column>
      <el-table-column
          label="Last login time"
          prop="last_login_time">
      </el-table-column>
      <el-table-column
          align="right">
        <template slot="header" slot-scope="{}">
          <el-input
              v-model="search"
              size="mini"
              placeholder="输入用户姓名搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index)">删除用户</el-button>
          <el-button
              size="mini"
              type="primary"
              @click="handleSetAdmin(scope.$index)">设为管理员</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios"

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 5000,
})

export default {
  name: "admin_permissions",
  data() {
    return {
      refresh: true,
      user_name:'',
      user_ID:'',
      user_tel:'',
      user_identity:'',
      search_input:'',
      fit: 'fill',

      tableData: [],
      search: ''
    }
  },

  methods: {
    //登录成功弹出框
    success_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'success'
      });
    },
    //登录失败弹出框
    fail_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      });
    },
    handleDelete(index) {
      this.delete_user(this.tableData[index].username)
    },
    handleSetAdmin(index) {
      this.set_user_admin(this.tableData[index].username)
    },
    delete_user(username){
      axios_instance.post("/delete_user", {
        username: username,
      }).then((response) => {
        if (response.data[0] === true) {
          this.success_box("用户删除成功！");
          axios_instance.get('/normal_user_info').then(response => {
            //清空tableData
            this.tableData = []
            for(let i = 0; i < response.data.length; i++){
              this.tableData.push({
                'name': response.data[i][0],
                'username': response.data[i][1],
                'tel': response.data[i][2],
                'last_login_time': response.data[i][3]
              })
            }
          })
        } else {
          this.fail_box(response.data[1]);
        }
      })
    },
    set_user_admin(username){
      axios_instance.post("/set_user_admin", {
        username: username,
      }).then((response) => {
        if (response.data[0] === true) {
          this.success_box("设置管理员成功！");
          axios_instance.get('/normal_user_info').then(response => {
            //清空tableData
            this.tableData = []
            for(let i = 0; i < response.data.length; i++){
              this.tableData.push({
                'name': response.data[i][0],
                'username': response.data[i][1],
                'tel': response.data[i][2],
                'last_login_time': response.data[i][3]
              })
            }
          })
        } else {
          this.fail_box(response.data[1]);
        }
      })
    }
  },
  created() {
    axios_instance.get('/normal_user_info').then(response => {
      for(let i = 0; i < response.data.length; i++){
        this.tableData.push({
          'name': response.data[i][0],
          'username': response.data[i][1],
          'tel': response.data[i][2],
          'last_login_time': response.data[i][3]
        })
      }
    })
  }
}
</script>

<style scoped>

#right_page{
  position: absolute;
  left: 20%;
  top: 150px;
  width: 1060px;
  height: 530px;
}
</style>
