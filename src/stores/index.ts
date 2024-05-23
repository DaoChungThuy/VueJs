import { Store, createStore } from 'vuex'
import countModule, { type State } from './modules/count'
import type { AuthState } from './modules/auth'
import authModule from './modules/auth'

export interface RootState {
  count: State
  auth: AuthState
}

const store: Store<RootState> = createStore({
  modules: {
    count: countModule,
    auth: authModule
  }
})

export default store
