import { createStore } from 'vuex'

export default createStore({
  state: {
    uder: undefined,
  },
  getters: {
  },
  mutations: {
    setUser(state,payload) {
      state.user=payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
