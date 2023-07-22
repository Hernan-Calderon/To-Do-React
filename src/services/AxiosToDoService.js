import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const getRequest = () => {
  return axios.get(baseURL);
};

export const postRequest = (body) => {
  return axios.post(baseURL, body);
};

export const pushRequest = (body) => {
  return axios.put(baseURL, body);
};

export const deleteRequest = (id) => {
  return axios.delete(baseURL + "/" + id);
};
