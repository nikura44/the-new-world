<template>
  <div class="box">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="createTime" label="发布日期" width="150">
      </el-table-column>
      <el-table-column prop="updateTime" label="最后更新" width="120">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="120"> </el-table-column>
      <el-table-column prop="author" label="作者" width="120">
      </el-table-column>
      <el-table-column prop="views" label="浏览量" width="300">
      </el-table-column>
      <el-table-column prop="commentTime" label="评论量" width="120">
      </el-table-column>
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
  </div>
</template>

<script>
import { getBlogList } from "../../api/api.js";
export default {
  methods: {
    handleClick(row) {
      console.log(row);
      getBlogList().then((res) => {
        if (res.code === 200) {
          console.log(res);
        } else {
          console.log(res.message);
        }
      });
    },
    constructData() {
      getBlogList().then((res) => {
        console.log('res ===> ' + res.data)
        if (res.code === 200) {
          console.log(res);
        } else {
          console.log(res.message);
        }
      });
    },
  },
  mounted() {
    this.constructData()
  },
  data() {
    return {
      rouData: {
        createTime: "",
        updateTime: "",
        title: "",
        author: "",
        views: "",
        commentTime: "",
      },
      tableData: [],
      // tableData: [
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     province: "上海",
      //     city: "普陀区",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     zip: 200333,
      //   },
      // ],
    };
  },
};
</script>

