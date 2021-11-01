<template>
<!-- 这是一个画盒子的组件 -->
  <div class="box">
    <div class="top-left"></div>
    <div class="top-right"></div>
    <div class="bottom-left"></div>
    <div class="bottom-right"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.box {
    width: 100%;
    position: relative;
    margin-bottom: 15px;
}
.box .top-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-top: 2px solid #0033FA;
    border-right: 2px solid #0033FA;
}
.box .top-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-top: 2px solid #0033FA;
    border-left: 2px solid #0033FA;
}
.box .bottom-left {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-bottom: 2px solid #0033FA;
    border-left: 2px solid #0033FA;
}
.box .bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-bottom: 2px solid #0033FA;
    border-right: 2px solid #0033FA;
}
</style>