import axios from "axios"
import { getCountryName } from "./utils/getCountryName";

const getTheCity = async (req) => {

  const options = {
    method: 'GET',
    url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
    params: {
      ip: req.socket.remoteAddress === "127.0.0.1" ? process.env.DEFAULT_IP_ADDRESS : req.socket.remoteAddress,
      apikey: process.env.API_KEY_IP
    },
    headers: {
      'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY
    }
  };

  return axios.request(options).then(function (response) {
    const city = response.data.city
    const country = response.data.countryISO2
    return { city, country }
  }).catch(function (error) {
    console.log(error);
  });
}

export default (req, res) => {
  res.status(200).json(
    {
      "weatherToday": {
        "id": 803,
        "weather": "muy nuboso",
        "temp": 27.08,
        "wind": {
          "speed": 2.57,
          "deg": 20
        },
        "humidity": 78,
        "visibility": 10000,
        "pressure": 1013
      },
      "weatherForecast": [
        {
          "id": 804,
          "weather": "nubes",
          "temp": 26.2,
          "wind": {
            "speed": 3.38,
            "deg": 100,
            "gust": 4.94
          },
          "humidity": 74,
          "visibility": 10000,
          "pressure": 1014,
          "date": "2022-05-28 12:00:00"
        },
        {
          "id": 804,
          "weather": "nubes",
          "temp": 27.15,
          "wind": {
            "speed": 2.95,
            "deg": 98,
            "gust": 4.33
          },
          "humidity": 74,
          "visibility": 10000,
          "pressure": 1013,
          "date": "2022-05-29 12:00:00"
        },
        {
          "id": 803,
          "weather": "muy nuboso",
          "temp": 27.03,
          "wind": {
            "speed": 2.95,
            "deg": 99,
            "gust": 4.21
          },
          "humidity": 79,
          "visibility": 10000,
          "pressure": 1013,
          "date": "2022-05-30 12:00:00"
        },
        {
          "id": 804,
          "weather": "nubes",
          "temp": 26.95,
          "wind": {
            "speed": 3.18,
            "deg": 103,
            "gust": 4.55
          },
          "humidity": 80,
          "visibility": 10000,
          "pressure": 1013,
          "date": "2022-05-31 12:00:00"
        },
        {
          "id": 803,
          "weather": "muy nuboso",
          "temp": 27.39,
          "wind": {
            "speed": 1.95,
            "deg": 95,
            "gust": 2.96
          },
          "humidity": 77,
          "visibility": 10000,
          "pressure": 1013,
          "date": "2022-06-01 12:00:00"
        }
      ],
      "country": "Venezuela"
    })
}

const realDataApi = async (req, res) => {
  try {
    const { city, country } = await getTheCity(req)

    const results = {
      weatherToday: {},
      weatherForecast: [],
      country: getCountryName(country)
    }

    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: city,
        units: 'metric',
        lang: 'sp'
      },
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY
      }
    };

    const request = await axios.request(options)

    const { weather, main, wind, visibility, } = request.data

    results.weatherToday = {
      id: weather[0].id,
      weather: weather[0].description,
      temp: main.temp,
      wind,
      humidity: main.humidity,
      visibility: visibility,
      pressure: main.pressure,
    }

    const optionsFuture = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
      params: {
        q: city,
        units: 'metric',
        lang: 'sp'
      },
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY
      }
    };

    const requestFuture = await axios.request(optionsFuture)

    const dataList = requestFuture.data.list

    const data = dataList.filter(item => {
      return item.dt_txt.includes('12:00:00')
    })

    results.weatherForecast = data.map(item => {
      return {
        id: item.weather[0].id,
        weather: item.weather[0].description,
        temp: item.main.temp,
        wind: item.wind,
        humidity: item.main.humidity,
        visibility: item.visibility,
        pressure: item.main.pressure,
        date: item.dt_txt
      }
    })

    res.status(200).json(results)
  } catch (err) {
    res.status(500).json({
      message: 'Error',
      error: err
    })
  }

}