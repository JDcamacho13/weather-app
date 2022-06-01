import { createContext, useState } from "react"

export const Context = createContext()

const Provider = ({ children }) => {
  const [country, setCountry] = useState({})
  const [weatherToday, setWeatherToday] = useState({})
  const [weatherForecast, setWeatherForecast] = useState([])
  const [city, setCity] = useState({})
  const [time, setTime] = useState({})


  const updateData = (data) => {
    setCountry(data.country)
    setWeatherToday(data.weatherToday)
    setWeatherForecast(data.weatherForecast)
    setCity(data.city)
    setTime(data.time)
  }

  return (
    <Context.Provider
      value={{
        weatherToday,
        weatherForecast,
        country,
        city,
        time,
        updateData
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