<template>
  <div>
    <el-backtop>
    </el-backtop>
    <div class="box">
      <div class="title">
        <el-descriptions :column="3" border>
          <el-descriptions-item
            label="返回上一级"
            label-class-name="my-label"
            content-class-name="my-content"
            :labelStyle="{ 'text-align': 'center' }"
            :contentStyle="{ 'text-align': 'center' }"
          >
            <el-button type="success" @click="back()"
              >返回列表</el-button
            ></el-descriptions-item
          >
          <el-descriptions-item
            label="发布日期"
            :labelStyle="{ 'text-align': 'center' }"
            :contentStyle="{ 'text-align': 'center' }"
          >
            <template slot="label">
              <i class="el-icon-edit-outline"></i>
              发布日期 </template
            >{{ createTime }}</el-descriptions-item
          >
          <el-descriptions-item
            label="最后更新"
            :labelStyle="{ 'text-align': 'center' }"
            :contentStyle="{ 'text-align': 'center' }"
          >
            <template slot="label">
              <i class="el-icon-finished"></i>
              最后更新 </template
            >{{ updateTime }}</el-descriptions-item
          >
          <el-descriptions-item
            label="分类"
            :labelStyle="{ 'text-align': 'center' }"
            :contentStyle="{ 'text-align': 'center' }"
          >
            <template slot="label">
              <i class="el-icon-user"></i>
              作者 </template
            >{{ author }}
          </el-descriptions-item>
          <el-descriptions-item
            label="标题"
            :contentStyle="{
              'text-align': 'center',
              background: '#e1f3d8',
              fontSize: '20',
            }"
            :labelStyle="{ 'text-align': 'center' }"
          >
            <template slot="label">
              <i class="el-icon-postcard"></i>
              标题 </template
            >{{ content_title }}</el-descriptions-item
          >
        </el-descriptions>
      </div>
      <Markdown :content="content" class="contents" />
      <Comment />
    </div>
  </div>
</template>

<script>
import Markdown from "./Markdown.vue";
import Comment from "./Comnent.vue";
import { getBlogContent } from "../../api/api.js";
export default {
  name: "Home",
  components: {
    Markdown,
    Comment,
  },
  props: {
    //必须是数字类型
    blogId: Number,
  },
  methods: {
    back() {
      this.$emit("backRefresh");
    },
  },
  data: () => ({
    content: "",
    content_title: "",
    createTime: "",
    updateTime: "",
    author: "",
  }),
  created() {
    let data = {
      reqInt: this.blogId,
    };
    getBlogContent(data).then((res) => {
      let blogJson = res.respBody;
      this.content = blogJson.content;
      this.content_title = blogJson.title;
      this.createTime = blogJson.createTime;
      this.updateTime = blogJson.updateTime;
      this.author = blogJson.author;
    });
  },
};
</script>

<style scoped>
.contents {
  padding: 20px;
}
.my-label {
  background: #e1f3d8;
}

.my-content {
  background: #fde2e2;
}
.el-descriptions {
  box-sizing: border-box;
  font-size: 18px;
  color: #303133;
}
</style>