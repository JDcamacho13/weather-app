import { getTraducedData } from "./utils/getTraducedData";
import responseHandler from "./utils/responseHandler";


const getWeather = async ({ latitude, longitude }) => {
  const options = {
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
      q: `${latitude},${longitude}`,
      days: '5'
    },
    host: 'weatherapi-com.p.rapidapi.com'
  };

  const request = await responseHandler(options)

  const { current, location, forecast } = request.data

  const obj = {
    city: location.name,
    country: location.country,
    time: location.localtime,
    weather: getTraducedData(current.condition.code),
    temp: current.temp_c,
    wind: current.wind_kph,
    humidity: current.humidity,
    visibility: current.vis_km,
    pressure: current.pressure_mb,
    is_day: current.is_day,
    forecast: forecast.forecastday.map(day => ({
      date: day.date,
      weather: getTraducedData(day.day.condition.code),
      temp: day.day.avgtemp_c,
      wind: day.day.maxwind_kph,
      humidity: day.day.avghumidity,
      visibility: day.day.avgvis_km,
      pressure: day.day.avgpressure_mb,
    }))
  }

  return obj
}

export default async (req, res) => {
  try {
    const results = {
      weatherToday: {},
      weatherForecast: [],
      country: '',
      city: '',
      time: '',
      is_day: ''
    }

    const { latitude, longitude } = req.query


    const { country, city, time, weather, is_day, temp, wind, humidity, visibility, pressure, forecast } = await getWeather({ latitude, longitude })

    results.country = country
    results.city = city
    results.time = time
    results.is_day = is_day

    results.weatherToday = {
      icon: is_day ? weather.icon + "d" : weather.icon + "n",
      weather: is_day ? weather.day_es : weather.night_es,
      temp: temp,
      wind,
      humidity,
      visibility,
      pressure
    }

    results.weatherForecast = forecast.map(day => ({
      date: day.date + " " + "12:00:00",
      icon: day.weather.icon + "d",
      weather: day.weather.day_es,
      temp: day.temp,
      wind: day.wind,
      humidity: day.humidity,
      visibility: day.visibility,
      pressure: day.pressure
    }))

    res.status(200).json(results)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error',
      error: err
    })
  }

}