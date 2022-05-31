import axios from "axios";

export default async ({ host, params, url }) => {

  const options = {
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'X-RapidAPI-Host': host,
      'X-RapidAPI-Key': process.env.RAPID_API_KEY
    }
  };

  const response = await axios.request(options)

  return response
}