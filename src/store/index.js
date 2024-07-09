import { createStore } from 'vuex'

export default createStore({
  state:{
    iflogin:1,     
  },
  mutations: {
    // 定义mutations，用于修改状态(同步)
    login (state) {
      state.iflogin = 1
    }
  },
  actions: {
    login (context) {
      context.commit('login')
    }
  },
  getters: {
    // 定义一个getters
    formatInfo (state) {
      return state.iflogin 
    }
  },
  modules: {
  }
})