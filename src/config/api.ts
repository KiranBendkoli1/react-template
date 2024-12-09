import axios from "axios";
import { LOCALSTORAGE } from "../constants/LOCALSTORAGE";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCALSTORAGE.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Response Error:", error.response);

      if (error.response.status === 401) {
        console.error("Unauthorized: Redirecting to login...");
      }
    } else if (error.request) {
      console.error("No Response:", error.request);
    } else {
      console.error("Axios Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
