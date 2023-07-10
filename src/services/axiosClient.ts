import axios, { AxiosResponse } from "axios";
import queryString from "query-string";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.status !== 204) {
      return response;
    }
    return Promise.resolve(response) as Promise<AxiosResponse<any>>;
  },
  (error) => {
    // Handle errors
    console.error("An error occurred:", error);
  }
);

export default axiosClient;
