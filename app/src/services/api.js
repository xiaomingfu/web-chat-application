import axios from "axios";

export default axios.create({
  baseUrl: "http://127.1.1.0",
  headers: {
    Accept: "application/json",
  },
});
