import axios from "axios";
import { getCountryName } from "./utils/getCountryName";

export default async (req, res) => {
  const { searchText } = req.query;

  const options = {
    method: "GET",
    url: `http://api.geonames.org/searchJSON?q=${searchText}&maxRows=10&featureClass=P&username=jdcamacho`
  };

  const request = await axios(options);

  const { data } = request;

  const { geonames } = data;

  const results = geonames.map(item => {
    return {
      name: item.name,
      country: getCountryName(item.countryCode),
      countryCode: item.countryCode,
    }
  });

  const filteredResults = deleteDuplicated(results);

  res.status(200).json(filteredResults);
}

function deleteDuplicated(inputArr) {
  let obj = {};
  const out = inputArr.filter(o => obj[o.name + o.country] ? false : obj[o.name + o.country] = true);
  return out;
}
