import Vue from 'vue'
import App from './App.vue'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局css样式
import './assets/css/resetcs.css'
// 引入echarts
import * as echarts from 'echarts';
// 引入vue-router
import router from './router'
// 设置全局的echarts变量
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
