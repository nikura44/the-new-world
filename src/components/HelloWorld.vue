<template>
  <div class="box">
    <div class="left">
      <ContentSlot class="echarts"><EChartsTemplate /></ContentSlot>
    </div>
  </div>
</template>

<script>
import ContentSlot from "../components/content-slot.vue";
import EChartsTemplate from "../components/echarts/echarts-template.vue";
export default {
  name: "HelloWorld",
  components: {
    ContentSlot,
    EChartsTemplate,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #000214;
}
.box .left {
  width: 22.9%;
}
.echarts{
  display: flex;
  justify-content: center;
}
</style>
