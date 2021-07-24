<template>
  <div id="right_page">
    <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
      <el-table-column
          label="Date"
          prop="date">
      </el-table-column>
      <el-table-column
          label="Name"
          prop="name">
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
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
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

      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  },

  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
}
</script>

<style scoped>

#right_page{
  position: absolute;
  left:100px;
  top: 150px;
  width: 860px;
  height: 764px;
}
</style>
