import axios from "axios";
import { getCountryName } from "./utils/getCountryName";

export default async (req, res) => {
  const { searchText } = req.query;

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/search.json',
    params: { q: searchText },
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY
    }
  };

  const request = await axios(options);

  const { data } = request;

  const results = data.map(item => {
    return {
      name: item.name,
      country: getCountryName(item.country),
    }
  });

  res.status(200).json(results);
}
