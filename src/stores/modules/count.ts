import type { Module } from 'vuex'
import type { RootState } from '../index'

export interface State {
  count: number
}

const countModule: Module<State, RootState> = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    summation(state) {
      state.count++
    }
  },
  actions: {
    summation({ commit }) {
      commit('summation')
    }
  },
  getters: {
    getCount(state) {
      return state.count
    }
  }
}

export default countModule
