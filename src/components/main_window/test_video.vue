<template>
  <div class="test_video">
    <img class="image" id="showImg" style="height:650px; top: 0; position:relative; padding: 0"
         :src="url">
    <!-- 表格 -->
    <div class="video_table">
      <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 600px; position: relative">
        <el-table-column label="No" prop="No" width="180px">
        </el-table-column>-
        <el-table-column label="封面" prop="img" style="width: 50px">
          <template slot-scope="scope">
            <el-popover placement="top-start" title="" trigger="hover">
              <img :src="scope.row.img" alt="" style="width: 300px;">
              <img slot="reference" :src="scope.row.img" style="height: 30px;">
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="封面" prop="img" style="width: 50px">
          <template slot-scope="scope">
            <el-button type="primary" round @click="get_test_video(scope.row.No)" style="height: 30px">观看</el-button>
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
import axios from 'axios'

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // 本地接口服务
  timeout: 5000,
});

export default {
  name: "test_video",
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 8, // 每页的数据条数
      url: 'http://f.goodq.top/qfy-content/plugins/qfy_editor/assets/images/grid-10.png',
    };
  },

  methods:{
    get_test_video(num){
      num -= 1
      this.set_url('http://127.0.0.1:8000/test_video/' + num)
    },
    set_url(url){
      this.url = url;
    },
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
    axios_instance.get('/test_video_img/-1').then(response => {
      let size = response.data
      for (let i = 0; i < size; i++){
        this.tableData.push({
          'No': i + 1,
          'img': "http://127.0.0.1:8000/test_video_img/" + i,
        })
      }
    })
  },


}
</script>

<style scoped>
.test_video{
  position: absolute;
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

.video_table{
  position: absolute;
  left: 80%;
  top: 0;
}

</style>