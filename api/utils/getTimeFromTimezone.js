export const getTimeFromTimezone = (timezoneOffset) => {
  const time = new Date()
  const utc = time.getTime() + (time.getTimezoneOffset() * 60000)
  const nd = new Date(utc + (1000 * timezoneOffset))
  return nd
}
