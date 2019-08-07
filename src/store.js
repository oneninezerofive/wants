import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 初始化一个仓库
const store = new Vuex.Store({
    // 状态===仓库的值
    state: {
        author: 'zheng1',
        keyword: ''

    },
    // 用于修改仓库里面的值
    mutations: {
        setKey(state, newKey) {
            state.keyword = newKey
            // 不需要return，跟getters很像
        }
    }
})
export default store //导出