export const getTimeFromTimezone = (timezone) => {
  const date = new Date()
  const offset = date.getTimezoneOffset()

  const timezoneOffset = timezone * 60 * 1000

  const newDate = new Date(date.getTime() + timezoneOffset + offset * 60 * 1000)

  return newDate
}