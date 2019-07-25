import axios from "axios";
export default axios.create({
  baseURL: "https://stagingapi.autographamt.com/v1/sources/18/json/",
  timeout: 1000
});
