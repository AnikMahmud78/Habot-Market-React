import axios from "axios";
import Cookies from "js-cookie";

// export const axiosInstance = axios.create({
//   headers: {
//     "Content-Type": "application/json",
//     baseURL: "http://localhost3001",
//     timeOut: 10000,
//     Authorization: "Bearer ",
//   },
// });
// axios.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("access")
//     console.log("token",token)
//     if (token) {

//       // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // for Node.js Express back-end
//       console.log(axios.defaults.headers)
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

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
