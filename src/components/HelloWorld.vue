<template>
  <div class="box">
    <div class="left"><ContentSlot>nian</ContentSlot></div>
  </div>
</template>

<script>
import ContentSlot from "../components/content-slot.vue";
export default {
  name: "HelloWorld",
  components: {
    ContentSlot,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #000214;
}
.box .left {
  width: 22.9%;
}
</style>
