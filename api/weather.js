import { getCountryName } from "./utils/getCountryName";
import { getTimeFromTimezone } from "./utils/getTimeFromTimezone";
import responseHandler from "./utils/responseHandler";

const getForecast = async ({ latitude, longitude }) => {
  const optionsFuture = {
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    params: {
      units: 'metric',
      lat: latitude,
      lon: longitude,
      lang: 'sp'
    },
    host: 'community-open-weather-map.p.rapidapi.com'
  };

  const requestFuture = await responseHandler(optionsFuture)

  const { name, country } = requestFuture.data.city

  const dataList = requestFuture.data.list

  return {
    name,
    country,
    dataList
  }
}

const getWeather = async ({ name, country }) => {
  const options = {
    host: 'community-open-weather-map.p.rapidapi.com',
    params: {
      q: `${name},${country}`,
      units: 'metric',
      lang: 'sp'
    },
    url: 'https://community-open-weather-map.p.rapidapi.com/weather'
  }

  const request = await responseHandler(options)

  return request.data
}

export default async (req, res) => {
  try {
    const results = {
      weatherToday: {},
      weatherForecast: [],
      country: '',
      city: '',
      time: ''
    }

    const { latitude, longitude } = req.query

    const { name, country, dataList } = await getForecast({ latitude, longitude })

    const { weather, main, wind, visibility, timezone, dt } = await getWeather({ name, country })

    results.weatherToday = {
      id: weather[0].id,
      icon: weather[0].icon,
      weather: weather[0].description,
      temp: main.temp,
      wind,
      humidity: main.humidity,
      visibility: visibility,
      pressure: main.pressure,
    }

    const today = getTimeFromTimezone(timezone)

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let date = ("0" + today.getDate()).slice(-2);
    let date_time = year + "-" + month + "-" + date;

    const data = dataList.filter(item => {
      return item.dt_txt.includes('12:00:00') && !item.dt_txt.includes(date_time)
    })

    results.weatherForecast = data.map(item => {
      return {
        id: item.weather[0].id,
        icon: item.weather[0].icon,
        weather: item.weather[0].description,
        temp: item.main.temp,
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
        wind: item.wind,
        humidity: item.main.humidity,
        visibility: item.visibility,
        pressure: item.main.pressure,
        date: item.dt_txt
      }
    })

    results.country = getCountryName(country)
    results.city = name

    results.time = today

    res.status(200).json(results)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error',
      error: err
    })
  }

}