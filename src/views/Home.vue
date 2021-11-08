<template>
  <div class="home">
    <div class='box'>
      <div style='width: 30%;'>
       <router-view />
      </div>
      <div style='width: 30%;'>
        <router-view name="Side"></router-view>
      </div>
      <div style='width: 30%;'>
       <router-view name="Top"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // name: "Home",
  // components: {
  //   HelloWorld,
  // },
};
</script>
<style scoped>
  .box{
    display: flex;
  }
</style>
