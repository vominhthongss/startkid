import * as LOCAL_STORAGE from "../utils/localStorage";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import * as AUTH from "../constants/auth";
import { Alert } from "react-native";
import * as STRINGS from "../constants/strings";
const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = await LOCAL_STORAGE.getItem(AUTH.TOKEN);
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
  async (error) => {
    if (error.response.status === 401) {
      await LOCAL_STORAGE.removeItem(AUTH.TOKEN);
      Alert.alert(STRINGS.alertTitle, STRINGS.loginAgain);
    }
    return Promise.reject(error);
  }
);

export default api;
