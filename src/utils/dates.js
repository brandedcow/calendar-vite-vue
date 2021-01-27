import {
  startOfWeek, 
  endOfWeek, 
  lastDayOfMonth, 
  eachDayOfInterval,
  addDays,
  subDays,
  addWeeks,
  subWeeks, 
  subMonths, 
  addMonths,
  addYears,
  subYears,
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

export const incDay = date => addDays(date, 1)
export const decDay = date => subDays(date, 1)
export const incWeek = date => addWeeks(date, 1)
export const decWeek = date => subWeeks(date, 1)
export const incMonth = date => addMonths(date, 1)
export const decMonth = date => subMonths(date, 1)
export const incYear = date => addYears(date, 1)
export const decYear = date => subYears(date, 1)
