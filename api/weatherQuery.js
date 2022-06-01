import axios from "axios";
import responseHandler from "./utils/responseHandler";

export default async (req, res) => {
  const { city } = req.query;

  const apikey = "78ee103fe0de6c807f80c3631d314d06"

  const options = {
    method: "GET",
    url: `https://battuta.medunes.net/api/city/es/search/?city=${city}&key=${apikey}`
  };

  const request = await axios(options);

  console.log(request.data);
}