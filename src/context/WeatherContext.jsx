import { createContext, useState } from "react"

export const Context = createContext()

const Provider = ({ children }) => {
  const [country, setCountry] = useState({})
  const [isDay, setIsDay] = useState(true)
  const [weatherToday, setWeatherToday] = useState({})
  const [weatherForecast, setWeatherForecast] = useState([])
  const [city, setCity] = useState({})
  const [time, setTime] = useState({})
  const [unit, setUnit] = useState(false)

  const updateData = (data) => {
    setCountry(data.country)
    setWeatherToday(data.weatherToday)
    setWeatherForecast(data.weatherForecast)
    setCity(data.city)
    setTime(data.time)
    setIsDay(data.is_day)
  }

  const convertTemp = (temp) => {
    if (unit) {
      return Math.round((temp * 9) / 5 + 32)
    }
    return Math.round(temp)
  }

  return (
    <Context.Provider
      value={{
        weatherToday,
        weatherForecast,
        country,
        city,
        time,
        unit,
        convertTemp,
        setUnit,
        updateData,
        isDay
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}