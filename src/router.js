import { createRouter, createWebHistory } from 'vue-router'

import DayCalendar from './components/DayCalendar.vue'
import MonthCalendar from './components/MonthCalendar.vue'
import WeekCalendar from './components/WeekCalendar.vue'

const routes = [
  {
    path: '/',
    component: MonthCalendar
  },
  {
    path: '/day',
    component: DayCalendar
  },
  {
    path: '/week',
    component: WeekCalendar
  },
  {
    path: '/month', 
    component: MonthCalendar
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router