import axios from "axios";
import {getAuthTokenFromStorage} from "../services/async-storage-service";

const instance = axios.create({
  baseURL: 'http://api.dev.letstudy.org',
})

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.timeout = 10000;
// instance.defaults.headers.auth =
export const setTokenToHeader = (token) => {
  // console.log("setTokenToHeader")
  instance.interceptors.request.use(function (config) {
    config.headers.Authorization =  token;
    // console.log(config)
    return config;
  });
}

export default instance;