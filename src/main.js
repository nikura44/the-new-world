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
//引入markdown插件
import mavonEditor from 'mavon-editor'
//引入markdown插件的样式文件
import 'mavon-editor/dist/css/index.css'
//github-markdown-css
import 'github-markdown-css/github-markdown.css'

Vue.use(mavonEditor)
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
