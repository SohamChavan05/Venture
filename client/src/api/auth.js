import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const loginUser = (email, password) => {
  return axios.post(`${BASE_URL}/login`, { email, password });
};

export const registerUser = (name, email, password) => {
  return axios.post(`${BASE_URL}/register`, { name, email, password });
};
