<template>
  <div class="box">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="createTime" label="发布日期">
      </el-table-column>
      <el-table-column prop="updateTime" label="最后更新"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="views" label="浏览量"> </el-table-column>
      <el-table-column prop="commentTime" label="评论量"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div style="text-align:center; margin-top:12px">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[5,10,15,20]"
      :page-size="10"
      layout="total,sizes,prev,pager,next,jumper"
      :total="0"
      ></el-pagination>
  </div> -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.pageNum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getBlogList } from "../../api/api.js";
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    //改变表格页面数据数量
    handleSizeChange(size) {
      this.pageSize = size;
      this.pageNum = 1;
      this.constructData(); //查询清单列表
    },
    handleCurrentChange(current){
      this.pageNum = current;
      this.constructData(); //查询清单列表
    },
    constructData() {
      let data = {
        "pageSize" : this.pageSize,
        "pageNum" : this.pageNum
      }
      getBlogList(data).then((res) => {
        let blogListJson = res.respBody;
        this.total = res.respInt;
        console.log(blogListJson);
        let temp = [];
        for (let i = 0; i < blogListJson.length; i++) {
          let rouData = {};
          rouData.createTime = blogListJson[i].createTime;
          rouData.updateTime = blogListJson[i].updateTime;
          rouData.title = blogListJson[i].title;
          rouData.author = blogListJson[i].author;
          rouData.views = blogListJson[i].views;
          rouData.commentTime = blogListJson[i].commentTime;
          temp.push(rouData);
        }
        this.tableData = temp;
      });
    },
  },
  mounted() {
    this.constructData();
  },
  data() {
    return {
      tableData: [],
      pageSize: 5,
      total: 0,
      pageNum: 1,
    };
  },
};
</script>

<style scoped>
.block {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>