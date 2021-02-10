const state = () => ({
  tasks: []
})

const getters = {

}

const actions = {
  addItem({ commit }, payload) {
    commit('addItem', payload)
  }
}

const mutations = {
  addItem(state, payload) {
    const newItem = {
      ...payload,
      id: Date.now(),
    }
    console.log(state)
    state.tasks = [...state.tasks, newItem]
    
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}