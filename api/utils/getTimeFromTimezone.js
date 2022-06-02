
export const getTimeFromTimezone = (timezone) => {
  const date = new Date()
  const time = date.getTime()
  const offset = date.getTimezoneOffset() * 60000
  const utc = time + offset
  const newDate = new Date(utc + (1000 * timezone))
  return newDate
}

