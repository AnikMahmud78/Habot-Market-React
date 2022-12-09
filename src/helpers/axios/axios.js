import axios from "axios"

// const baseURL = "https://habot.io/"
// const baseURL = "http://127.0.0.1:8000/"
const baseURL = process.env.REACT_APP_API_BASE_URL

const clientToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNjE4NDY1LCJqdGkiOiJiZTI0Mzc2OGU5YzM0NmU4OGU4NzdkMDE5OGQzN2JkNyIsInVzZXJfaWQiOjR9.td-b-Qujgs49J_KVsSUkW0N4EDv7x71VMNkjF-SJk14"
// const vendorToken = ""
const token = clientToken

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
})
