import type { Module } from 'vuex'
import type { RootState } from '..'

export interface AuthState {
  access_token: string | null
  email: string | null
  password: string | null
}

const authModule: Module<AuthState, RootState> = {
  namespaced: true,
  state: {
    access_token: null,
    email: null,
    password: null
  },
  mutations: {
    setUser(state, user) {
      state.email = user.email
      state.password = user.password
    },
    logout(state) {
      state.email = null
      state.password = null
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user)
    },
    logout({ commit }) {
      commit('logout')
    }
  },
  getters: {
    isLogin(state) {
      if (state.email) {
        return true
      }
      return false
    }
  }
}

export default authModule
