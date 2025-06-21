// Api Service
import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "http://localhost:8000";

// create an Axios instance
export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    // Only add the CSRF TOKEN for non-GET requests
    if (config.method !== "get") {
      let csrfToken = Cookies.get("XSRF-TOKEN");
      if (!csrfToken) {
        // Fetch the CSRF token if it doesn't exist
        await api.get("/sanctum/csrf-cookie");
        csrfToken = Cookies.get("XSRF-TOKEN");
      }
      if (csrfToken) {
        config.headers["X-XSRF-TOKEN"] = csrfToken;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
