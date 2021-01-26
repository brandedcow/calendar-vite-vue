import { createStore } from 'vuex'
import { incMonth, decMonth } from './utils/dates'

const store = createStore({
  state() {
    return {
      currDate: new Date()
    }
  },
  mutations: {
    incrementMonth() {
      currDate = incMonth(currDate)
    },
    decrementMonth() {
      currDate = decMonth(currDate)
    }
  }
})

export default store