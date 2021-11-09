<template>
  <div id="app">
    <el-container class="one-for-all">
      <el-header class="top-menu">
        <img src="./assets/logo.svg" class="logo"/><TopMenu class="top-menu-box"/></el-header>
      <el-container>
        <el-aside class="side-menu" width=null><SideMenu /></el-aside>
        <el-container>
          <el-main><Home /></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopMenu from "./views/layout/TopMenu.vue";
import SideMenu from "./views/layout/SideMenu.vue";
import Home from "./views/Home.vue";
export default {
  components: {
    SideMenu,
    Home,
    TopMenu,
  },
};
</script>

<style scoped>
.one-for-all{
  width: 100%;
  height: 100vh;
}


.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.top-menu{
  padding-left: 0px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.logo{
  padding: 10px;
  width: 181px;
}

.side-menu{
  /* display: flex;
  justify-content: center; */
  width: 201px;
}
</style>
