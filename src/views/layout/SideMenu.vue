<template>
  <el-menu
    :default-active="defaultRoute"
    class="el-menu-vertical-demo"
    :router="true"
    @open="handleOpen"
    @close="handleClose"
    
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-collection"></i>
        <span>笔记中心</span>
      </template>
      <el-menu-item-group>
        <template slot="title">前端相关</template>
        <el-menu-item index="/" @click="gotoCss">CSS</el-menu-item>
        <el-menu-item index="/blog_list">JavaScript</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="后端相关">
        <el-menu-item index="/blog_content">后端基础</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">Java</template>
        <el-menu-item index="1-4-1">Spring</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  created(){
    console.log(this.$route.path)
  },
  computed: {
    defaultRoute(){
      return this.$route.path;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gotoCss(){
      console.log(this.$route.path);
    }
  },
};
</script>

<style>
</style>