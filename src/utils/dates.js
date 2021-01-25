import {startOfWeek, endOfWeek, lastDayOfMonth, eachDayOfInterval } from 'date-fns'

export function getExtendedMonth(date) {
  const month = date.getMonth()
  const year = date.getFullYear()
  const start = startOfWeek(new Date(year, month, 1))
  const end = endOfWeek(lastDayOfMonth(date))

  return eachDayOfInterval({ start, end })
}