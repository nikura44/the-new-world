<template>
  <div id="draw"></div>
</template>

<script>
export default {
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      var chartDom = document.getElementById("draw");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
};
</script>

<style>
#draw{
  width: 100%;
  height: 50vh;
}
</style>