import  API_KEY  from "../../config";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer" + API_KEY,
  },
});
