import { createStore } from 'vuex'
import { incMonth, decMonth } from './utils/dates'

const store = createStore({
  state() {
    return {
      currDate: new Date(),
      calendarView: 2
    }
  },
  mutations: {
    incrementMonth(state) {
      state.currDate = incMonth(state.currDate)
    },
    decrementMonth(state) {
      state.currDate = decMonth(state.currDate)
    },
    setToday(state) {
      state.currDate = new Date()
    },
    setCalendarView(state, view) {
      state.calendarView = view
    }
  },
  actions: {
    incrementMonth(context) {
      context.commit('incrementMonth')
    },
    decrementMonth(context) {
      context.commit('decrementMonth')
    },
    setToday({commit}) {
      commit('setToday')
    },
    setCalendarView({ commit }, payload) {
      commit('setCalendarView', payload)
    }
  }
})

export default store