export const getTimeFromTimezone = (timezone) => {
  d = new Date()
  localTime = d.getTime()
  localOffset = d.getTimezoneOffset() * 60000
  utc = localTime + localOffset
  var atlanta = utc + (1000 * timezone)
  nd = new Date(atlanta)
  return nd
}