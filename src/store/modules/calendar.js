import { incMonth, decMonth } from '../../utils/dates'

const state = () => ({
  currDate: new Date(),
  calendarView: 2
})

const getters = {
  
}

const actions = {
  incrementMonth(context) {
    context.commit('incrementMonth')
  },
  decrementMonth(context) {
    context.commit('decrementMonth')
  },
  setToday({commit}) {
    commit('setToday')
  },
  setDate({ commit }, payload) {
    commit('setDate', payload)
  },
  setCalendarView(state, view) {
    state.calendarView = view
  }
}

const mutations = {
  incrementMonth(state) {
    state.currDate = incMonth(state.currDate)
  },
  decrementMonth(state) {
    state.currDate = decMonth(state.currDate)
  },
  setToday(state) {
    state.currDate = new Date()
  },
  setDate(state, payload) {
    state.currDate = new Date(payload)
  },
  setCalendarView({ commit }, payload) {
    commit('setCalendarView', payload)
  }
}

export default {
  namespaced : true,
  state,
  getters,
  actions,
  mutations
}