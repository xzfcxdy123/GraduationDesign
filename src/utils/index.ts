import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";

const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
});

request.interceptors.request.use(config => {
  config.headers = {
    "Authorization": "Bearer " + localStorage.getItem("token"),
    ...config.headers
  } as AxiosRequestHeaders

  return config;
}, error => {
  return Promise.reject(error);
});

request.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
})

export default request;
