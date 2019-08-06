import Vue from 'vue'
import App from './App.vue'

// 全局引入
import axios from 'axios'
// 引入路由模块
import router from './routers'
// 引入状态管理
import store from 'store'

Vue.config.productionTip = false

// Vue继承axios
Vue.prototype.$axios = axios

// 引入vant的组件
import Vant from './vants/index'
Vant()

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')