import Vue from 'vue'
// 全局引入vuetouter
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

import Cookies from 'js-cookie'

// 定义路由组件
import Tabbar from './components/Tabbar'
import Home from './components/Tabbar/Home'
import Car from './components/Tabbar/Car'
import Mine from './components/Tabbar/Mine'

import Detail from './components/Detail'
import Sign from './components/Sign'
import Setting from './components/Setting'
import News from './components/News'
import Search from './components/Search'


const routes = [{
        name: 'tabbar',
        path: '/tabbar',
        component: Tabbar,
        // 嵌套路由，先进底部选项卡，再去找首页
        children: [{
                name: 'home',
                path: 'home',
                component: Home,
            }, {
                name: 'car',
                path: 'car',
                component: Car,
            },
            {
                name: 'mine',
                path: 'mine',
                component: Mine,
            }
        ],
    },
    { //详情页
        name: 'detail',
        path: '/detail',
        component: Detail,
    },
    { //登录页
        name: 'sign',
        path: '/sign',
        component: Sign,
    },
    { //系统设置
        name: 'setting',
        path: '/setting',
        component: Setting,
    },
    { //消息页
        name: 'news',
        path: '/news',
        component: News,
    },
    { //搜索页
        name: 'search',
        path: '/search',
        component: Search,
    },
    // 重定向
    {
        path: '/',
        // 别名
        alias: '/index.html',
        redirect: () => {
            return '/tabbar/home'
        }
    }
]


const router = new VueRouter({
    // mode: 'history',
    routes
})


router.beforeEach(async(to, from, next) => {
    let status = Cookies.get("status");
    // 如果你是首页，详情页，登录页或者你登陆了，都可以进去，否则不给你进去
    if (status == 1 || to.path === '/sign' || to.path === '/tabbar/home' || to.path === '/search' || to.path === '/detail' || to.path === "/news") {
        next()
    } else {
        // 编程式导航
        router.push({
            name: 'sign'
        })
    }

})
export default router