import {
  startOfWeek, 
  endOfWeek, 
  lastDayOfMonth, 
  eachDayOfInterval, 
  subMonths, 
  addMonths 
} from 'date-fns'

export function getExtendedMonth(date) {
  const month = date.getMonth()
  const year = date.getFullYear()
  const start = startOfWeek(new Date(year, month, 1))
  const end = endOfWeek(lastDayOfMonth(date))

  return eachDayOfInterval({ start, end })
}

export function getWeek(date) {
  return eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date)
  })
}

export function incMonth(date) {
  return addMonths(date, 1)
}

export function decMonth(date) {
  return subMonths(date, 1)
}