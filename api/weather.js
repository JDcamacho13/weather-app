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


export default (req, res) => {

  res.status(200).json(
    {
      "weatherToday": {
        "id": 804,
        "icon": "04n",
        "weather": "nubes",
        "temp": 22.23,
        "wind": {
          "speed": 1.69,
          "deg": 17,
          "gust": 2.24
        },
        "humidity": 73,
        "visibility": 10000,
        "pressure": 1013
      },
      "weatherForecast": [
        {
          "id": 804,
          "icon": "04d",
          "weather": "nubes",
          "temp": 24.61,
          "temp_min": 24.61,
          "temp_max": 24.61,
          "wind": {
            "speed": 0.45,
            "deg": 190,
            "gust": 0.66
          },
          "humidity": 63,
          "visibility": 10000,
          "pressure": 1014,
          "date": "2022-06-01 12:00:00"
        },
        {
          "id": 804,
          "icon": "04d",
          "weather": "nubes",
          "temp": 25.82,
          "temp_min": 25.82,
          "temp_max": 25.82,
          "wind": {
            "speed": 1.03,
            "deg": 130,
            "gust": 1.8
          },
          "humidity": 62,
          "visibility": 10000,
          "pressure": 1014,
          "date": "2022-06-02 12:00:00"
        },
        {
          "id": 500,
          "icon": "10d",
          "weather": "lluvia ligera",
          "temp": 24.71,
          "temp_min": 24.71,
          "temp_max": 24.71,
          "wind": {
            "speed": 1.14,
            "deg": 157,
            "gust": 1.93
          },
          "humidity": 77,
          "visibility": 10000,
          "pressure": 1014,
          "date": "2022-06-03 12:00:00"
        },
        {
          "id": 804,
          "icon": "04d",
          "weather": "nubes",
          "temp": 23.82,
          "temp_min": 23.82,
          "temp_max": 23.82,
          "wind": {
            "speed": 1.19,
            "deg": 136,
            "gust": 2.3
          },
          "humidity": 83,
          "visibility": 10000,
          "pressure": 1014,
          "date": "2022-06-04 12:00:00"
        },
        {
          "id": 500,
          "icon": "10d",
          "weather": "lluvia ligera",
          "temp": 24.17,
          "temp_min": 24.17,
          "temp_max": 24.17,
          "wind": {
            "speed": 1.2,
            "deg": 125,
            "gust": 2.04
          },
          "humidity": 82,
          "visibility": 10000,
          "pressure": 1014,
          "date": "2022-06-05 12:00:00"
        }
      ],
      "country": "Venezuela",
      "city": "Camburito",
      "time": "2020-10-09T05:54:56.882Z"
    })
}

const realData = async (req, res) => {
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