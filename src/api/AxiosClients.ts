import axios from "axios";
import { ApiConfig } from "./ApiConfig";

const axiosClient = axios.create({
  // baseURL: ApiConfig.API_URL,
  baseURL: 'https://ac95-113-161-44-191.ngrok-free.app',
  headers: {
    "Content-type": "application/json",
  },
  responseType: "json",
  timeout: 30000
});

axiosClient.interceptors.request.use(
  (config) => {
    // log("----------------REQUEST-------------------");
    // log('URL:', config.url);
    // log('HEADER:', config.headers);
    // log('Body:', config.data);
    // log("---------------END REQUEST----------------");
    if (config.headers.Authorization) {
      config.headers.Authorization = config.headers.Authorization;
    }
    return config;
  },
  function error() {
    return Promise.reject(error);
  }
);


export default axiosClient;