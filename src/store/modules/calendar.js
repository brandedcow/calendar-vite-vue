import { incDay, decDay, incWeek, decWeek, incMonth, decMonth, incYear, decYear } from '../../utils/dates'

const state = () => ({
  currDate: new Date(),
  calendarView: 2
})

const getters = {
  
}

const actions = {
  incrementDay({ commit }) {
    commit('incrementDay')
  },
  decrementDay({ commit }) {
    commit('decrementDay')
  },
  incrementWeek({ commit }) {
    commit('incrementWeek')
  },
  decrementWeek({ commit }) {
    commit('decrementWeek')
  },
  incrementMonth({ commit }) {
    commit('incrementMonth')
  },
  decrementMonth({ commit }) {
    commit('decrementMonth')
  },
  incrementYear({ commit }) {
    commit('incrementYear')
  },
  decrementYear({ commit }) {
    commit('decrementYear')
  },
  setToday({commit}) {
    commit('setToday')
  },
  setDate({ commit }, payload) {
    commit('setDate', payload)
  },
  setCalendarView({ commit }, payload) {
    commit('setCalendarView', payload)
  }

}

const mutations = {
  incrementDay(state) {
    state.currDate = incDay(state.currDate)
  },
  decrementDay(state) {
    state.currDate = decDay(state.currDate)
  },
  incrementWeek(state) {
    state.currDate = incWeek(state.currDate)
  },
  decrementWeek(state) {
    state.currDate = decWeek(state.currDate)
  },
  incrementMonth(state) {
    state.currDate = incMonth(state.currDate)
  },
  decrementMonth(state) {
    state.currDate = decMonth(state.currDate)
  },
  incrementYear(state) {
    state.currDate = incYear(state.currDate)
  },
  decrementYear(state) {
    state.currDate = decYear(state.currDate)
  },
  setToday(state) {
    state.currDate = new Date()
  },
  setDate(state, payload) {
    state.currDate = new Date(payload)
  },
  setCalendarView(state, view) {
    state.calendarView = view
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}