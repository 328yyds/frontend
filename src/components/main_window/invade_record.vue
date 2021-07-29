<template>
  <div id="background_div">
    <div id="right_record_show">
      <!-- 表格 -->
      <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
        <el-table-column label="种类" prop="category" width="180">
        </el-table-column>
        <el-table-column label="日期" prop="date" width="180">
        </el-table-column>
        <el-table-column label="图片" prop="img">
          <template slot-scope="scope">
            <el-popover placement="top-start" title="" trigger="hover">
              <img :src="scope.row.img" alt="">
              <img slot="reference" :src="scope.row.img" style="height: 30px;">
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <div class="block" style="margin-top:15px;">
        <el-pagination :current-page="currentPage" :page-size="pageSize" :page-sizes="[1,5,10,20]"
                       :total="tableData.length"
                       @current-change="handleCurrentChange"
                       @size-change="handleSizeChange"
                       align='center'
                       layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 5000,
})
export default {
  name: "admin_record",
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 8, // 每页的数据条数

      urls: [],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  },
  created() {
    axios_instance.get('/invade_info').then(response => {
      for(let i = 0; i < response.data.length; i++){
        this.tableData.push({
          'category': response.data[i][0],
          'date': response.data[i][1],
          'img': "http://127.0.0.1:8000/invade_img/" + i,
        })
        this.urls.push("http://127.0.0.1:8000/invade_img/" + i);
      }
    })
  }
}

</script>

<style scoped>
#background_div {
  position: absolute;
  left: 30%;
  top: 120px;
  width: 60%;
}
</style>