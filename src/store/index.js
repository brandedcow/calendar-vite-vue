import { createStore, createLogger } from 'vuex'
import tasks from './modules/tasks'
import calendar from './modules/calendar'
import user from './modules/user'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    tasks,
    calendar,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})