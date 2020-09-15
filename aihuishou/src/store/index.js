import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],
    scroll:false
    
  },
  mutations: {
    setData(state,staus){
        state.data.push(...staus)
    },
    setScroll(state,staus){
      state.scroll = staus
    }
  },
  actions: {
  },
  modules: {
  }
})
