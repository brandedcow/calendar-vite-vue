import firebase from '../../firebase'

const state = () => ({
  user: {}
})

const getters = {

}

const actions = {
  setUser({commit}, payload) {
    commit('setUser', payload)
  }
}

const mutations = {
  setUser(state, payload) {
    state.user = JSON.parse(JSON.stringify(payload))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}