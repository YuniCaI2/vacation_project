// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    iflogin: false,
    user: null,
  },
  mutations: {
    login(state, user) {
      state.user = user;
      state.iflogin = 1;
    },
    logout(state) {
      state.user = null;
      state.iflogin = 0;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await axios.post('/api/login', { username, password }, { withCredentials: true });

        if (response.status === 200) {
          commit('login', response.data.message);
          return { success: true };
        } else {
          return { success: false, message: response.data.error };
        }
      } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'Login failed' };
      }
    },
    logout({ commit }) {
      // 这里可以根据你的需求处理登出逻辑，例如清除会话信息等
      commit('logout');
    },
  },
});

export default store;
