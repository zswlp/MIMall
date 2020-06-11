import Vue from 'vue'
import router from './router'
// import store from './store'
import App from './App.vue'
// import axios from 'axios'

Vue.config.productionTip = false
new Vue({
    // store,
    router,
    render: h => h(App),
}).$mount('#app')