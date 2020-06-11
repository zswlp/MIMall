import Vue from 'vue'
import router from './router'
// import store from './store'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from "./env"
// 拦截器
// axios.defaults.baseURL = env.baseURL;
axios.interceptors.response.use(function(response) {
    let res = response.data;
    // 根据前端的跨域方式做调整
    axios.defaults.baseURL = '/api'
    axios.defaults.timeout = 8000;
    // 根据环境变量来获取不同的请求地址
    // 没错误返回0  错误·拦截
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        window.location.href = '/#/login'

    } else {
        alert(res.msg)
    }
})
Vue.use(VueAxios, axios);
Vue.config.productionTip = false
    // 

new Vue({
    // store,
    router,
    render: h => h(App),
}).$mount('#app')