<template>
  <div>
    <Markdown :content="content" class="contents" />
  </div>
</template>

<script>
import Markdown from "./Markdown.vue";
import { getBlogContent } from "../../api/api.js";
export default {
  name: "Home",
  components: {
    Markdown,
  },
  data: () => ({
    content: "",
  }),
  created() {
    let data = {
      reqInt: 1,
    };
    getBlogContent(data).then((res) => {
      let blogJson = res.respBody;
      this.content = blogJson.content;
    });
  },
};
</script>

<style scoped>
.contents{
    padding: 20px;
}
</style>