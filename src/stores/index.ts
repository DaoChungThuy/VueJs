import { Store, createStore } from 'vuex'
import countModule, { type State } from './modules/count'
export interface RootState {
  count: State
}

const store: Store<RootState> = createStore({
  modules: {
    count: countModule
  }
})

export default store
