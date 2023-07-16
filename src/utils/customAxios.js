// customAxios.js file where the Axios instance is defined

import axios from "axios";

const token = localStorage.getItem("token");

const customAxios = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

customAxios.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      error.config.url !== "/users/showMe"
    ) {
      localStorage.removeItem(token);
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default customAxios;
