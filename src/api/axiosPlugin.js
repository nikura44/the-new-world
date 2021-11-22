import axios from 'axios'

const axiosPlugin = {
    createHttp() {
        const $http = axios.create();
        $http.defaults.timeout = 2500;
        $http.defaults.baseURL = '/nicolas/';
        // 省略部分代码...
        
        return $http;
    },
    install(Vue) {
        Vue.prototype.$http = this.createHttp();
    }
};

export default axiosPlugin;