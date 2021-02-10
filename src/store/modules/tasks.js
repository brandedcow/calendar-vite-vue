const state = () => ({
  tasks: []
})

const getters = {

}

const actions = {
  addItem({ commit }, payload) {
    commit('addItem', payload)
  },
  editItem({commit}, payload) {
    commit('editItem', payload)
  }
}

const mutations = {
  addItem(state, payload) {
    const newItem = {
      ...payload,
      id: Date.now(),
    }
    state.tasks = [...state.tasks, newItem]
  },
  editItem(state, payload) {
    const { id, title, content } = payload
    const index = state.tasks.findIndex(ele => ele.id == id)

    state.tasks[index] = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}