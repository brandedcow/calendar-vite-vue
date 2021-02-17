import firebase from '../../firebase'

const db = firebase.firestore()

const state = () => ({
  tasks: []
})

const getters = {

}

const actions = {
  addItem({ commit, dispatch }, payload) {
    console.log('payload', payload)
    const user = firebase.auth().currentUser
    console.log(user)

    if (user) {
      db.collection('users')
      .doc(user.uid)
      .collection('tasks')
      .doc()
      .set({ 
        ...payload,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        dispatch('getItems')
      })
      .catch(console.error)
    }

    
  },
  editItem({commit, dispatch }, payload) {
    const user = firebase.auth().currentUser.uid

    if (user ) {
      db.collection('users')
        .doc(firebase.auth().currentUser.uid)
        .collection('tasks')
        .doc(payload.id)
        .update({
          ...payload,
        })
        .then(() => {
          dispatch('getItems')
        })
        .catch(console.error)
    }   
  },
  getItems({ commit }) {
    const user = firebase.auth().currentUser

    if (user) {
      db.collection('users')
        .doc(user.uid)
        .collection('tasks')
        .get()
        .then(snap => {
          const transformedDocs = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          commit('getItems', transformedDocs)
        })
    }
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
  },
  getItems(state, payload) {
    state.tasks = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}