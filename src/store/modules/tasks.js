const state = () => ([])

const getters = {

}

const actions = {
  addItem({ commit }, payload) {
    commit('addItem', payload)
  }
}

const mutations = {
  addItem(state, payload) {
    state = [...state, payload]
    console.log(state)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}