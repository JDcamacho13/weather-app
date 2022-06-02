export const getTimeFromTimezone = (timezone) => {
  let d = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Caracas" }))
  const localTime = d.getTime()
  const localOffset = d.getTimezoneOffset() * 60000
  const utc = localTime + localOffset
  var atlanta = utc + (1000 * timezone)
  const nd = new Date(atlanta)
  return nd
}