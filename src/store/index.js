import { createStore, createLogger } from 'vuex'
import tasks from './modules/tasks'
import calendar from './modules/calendar'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    tasks,
    calendar
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})