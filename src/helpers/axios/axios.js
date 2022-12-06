import axios from "axios";
export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    baseURL: "http://localhost3000",
    timeOut: 10000,
    Authorization: "Bearer ",
  },
});
