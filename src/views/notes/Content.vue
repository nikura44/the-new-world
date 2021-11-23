<template>
  <div class="one-for-all">
    <div class="title-box">
      <el-input
        v-model="title"
        placeholder="请输入标题"
        class="input"
      ></el-input>
      <el-button @click="submit">提交文章</el-button>
    </div>
    <div id="editor">
      <mavon-editor
        style="height: 100%"
        v-model="handbook"
        :toolbars="toolbars"
      ></mavon-editor>
    </div>
  </div>
</template>

<script>
// Local Registration
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { insertBlog } from "../../api/api.js";
export default {
  name: "editor",
  data() {
    return {
      handbook: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        code: true, // code
        table: true, // 表格
        htmlcode: true, // 展示html源码
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      title: "",
    };
  },
  components: {
    mavonEditor,
    // or 'mavon-editor': mavonEditor
  },
  methods: {
    submit() {
      let blog = {
        title: this.title,
        content: this.handbook,
        author: "north",
      };
      insertBlog(blog).then(() => {
        console.log("insert success");
        this.$message({
          message: '成功提交文章',
          type: 'success'
        });
        this.$router.push("/blog_list");
      });
    },
  },
};
</script>
<style scoped>
.one-for-all {
  line-height: 0;
}
.title-box {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
.input {
  margin-right: 20px;
}
#editor {
  width: 100%;
  height: 80vh;
}
</style>