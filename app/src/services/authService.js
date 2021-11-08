// import API from "./api";
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Accept: "application/json",
  },
});

const AuthService = {
  login: (data) => {
    return API.post("/login", data)
      .then(({ data }) => {
        API.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        return data;
      })
      .catch((err) => {
        console.log("Auth service err", err);
        throw err;
      });
  },
  register: (data) => {
    return API.post("/register", data)
      .then(({ data }) => {
        API.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        return data;
      })
      .catch((err) => {
        console.log("Auth service err", err);
      });
  },

  logout: () => {
    API.defaults.headers["Authorization"] = "";
  },
};

export default AuthService;
