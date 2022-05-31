import { getCountryName } from "./utils/getCountryName";
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


const mooked = (req, res) => {

  res.status(200).json(
    {
      "weatherToday": {
        "id": 802,
        "icon": "03n",
        "weather": "nubes dispersas",
        "temp": 26.08,
        "wind": {
          "speed": 3.09,
          "deg": 110
        },
        "humidity": 78,
        "visibility": 10000,
        "pressure": 1013
      },
      "weatherForecast": [
        {
          "id": 801,
          "icon": "02d",
          "weather": "algo de nubes",
          "temp": 27.4,
          "wind": {
            "speed": 2.91,
            "deg": 86,
            "gust": 3.69
          },
          "humidity": 72,
          "visibility": 10000,
          "pressure": 1013,
          "date": "2022-05-31 12:00:00"
        },
        {
          "id": 803,
          "icon": "04d",
          "weather": "muy nuboso",
          "temp": 27.86,
          "wind": {
            "speed": 1.61,
            "deg": 99,
            "gust": 2.53
          },
          "humidity": 71,
          "visibility": 10000,
          "pressure": 1013,
          "date": "2022-06-01 12:00:00"
        },
        {
          "id": 804,
          "icon": "04d",
          "weather": "nubes",
          "temp": 27.81,
          "wind": {
            "speed": 1.38,
            "deg": 98,
            "gust": 2.72
          },
          "humidity": 68,
          "visibility": 10000,
          "pressure": 1013,
          "date": "2022-06-02 12:00:00"
        },
        {
          "id": 802,
          "icon": "03d",
          "weather": "nubes dispersas",
          "temp": 27.61,
          "wind": {
            "speed": 2.06,
            "deg": 91,
            "gust": 3.21
          },
          "humidity": 75,
          "visibility": 10000,
          "pressure": 1013,
          "date": "2022-06-03 12:00:00"
        },
        {
          "id": 500,
          "icon": "10d",
          "weather": "lluvia ligera",
          "temp": 27.16,
          "wind": {
            "speed": 0.96,
            "deg": 127,
            "gust": 2.61
          },
          "humidity": 84,
          "visibility": 10000,
          "pressure": 1013,
          "date": "2022-06-04 12:00:00"
        }
      ],
      "country": "Venezuela"
    })
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

    const { weather, main, wind, visibility, sys } = await getWeather({ name, country })

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

    const timezone = sys.timezone
    const today_str = new Date().toLocaleString('en-US', { timeZone: timezone })
    const today = new Date(today_str)

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

    results.time = today_str

    res.status(200).json(results)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error',
      error: err
    })
  }

}