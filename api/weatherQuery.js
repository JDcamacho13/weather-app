import responseHandler from "./utils/responseHandler";

export default async (req, res) => {
  const { city } = req.query;

  console.log(city);

  const options = {
    host: 'community-open-weather-map.p.rapidapi.com',
    params: {
      q: `${city},es`,
      units: 'metric',
      lang: 'sp'
    },
    url: 'https://community-open-weather-map.p.rapidapi.com/weather'
  }

  responseHandler(options).then(response => {
    res.json(response.data);
  }).catch(err => {
    // console.log(err)
    res.status(500).json({
      message: err.message
    });
  });
}