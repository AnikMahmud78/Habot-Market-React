import axios from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.REACT_APP_BACKEND;
const token = Cookies.get("access");
// const clientToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNjE4NDY1LCJqdGkiOiJiZTI0Mzc2OGU5YzM0NmU4OGU4NzdkMDE5OGQzN2JkNyIsInVzZXJfaWQiOjR9.td-b-Qujgs49J_KVsSUkW0N4EDv7x71VMNkjF-SJk14";
// // const vendorToken = ""
// const token = clientToken;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/auth/signin" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axios.post(
            "https://habot.io/accounts/token/refresh/",
            {
              refreshToken: Cookies.get("refresh"),
            }
          );

          const { accessToken } = rs.data;
          axios.headers.Authorization = `Bearer ${accessToken}`;
          Cookies.set("access", accessToken);

          return axios(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

axios.interceptors.request.use(function (config) {
  const token = Cookies.get("access");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
