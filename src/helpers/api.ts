import axios from "axios";
import { getToken } from "./auth";

const APP_API_URL = "http://137.74.230.245:81";// process.env.REACT_APP_APPLICATION_API_URL ||

const getUrl = () => `${APP_API_URL}`;

export const getAxiosClient = () => {
  const baseURL = getUrl();
  const axiosClient = axios.create({ baseURL });
  const authToken = getToken();

  if (authToken === null || authToken === undefined) {
    axiosClient.defaults.headers.common.Authorization = null;
  } else {
    axiosClient.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  }
  return axiosClient;
};