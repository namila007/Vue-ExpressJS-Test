import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)
const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

const stores =  new Vuex.Store({
  strict: true,
  state: {
    token:null,
    user: null,
    isUserLogged: false
  },
  plugins: [vuexLocalStorage.plugin],
  mutations: {
    setToken (state, token) {
      state.token = token 
      if (token) {
        state.isUserLogged = true
      } else {
        state.isUserLogged = false 
      }
    },
    setUser (state, user){
      state.user = user 
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user){
      commit('setUser', user)
    }
  }
})
export default stores
