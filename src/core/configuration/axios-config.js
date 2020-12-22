import axios from "axios";
import {getAuthTokenFromStorage} from "../services/async-storage-service";

const instance = axios.create({
  baseURL: 'http://api.dev.letstudy.org',
})

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.timeout = 10000;
// instance.defaults.headers.auth =
export const setTokenToHeader = (token) => {
  instance.interceptors.request.use(function (config) {
    // getAuthTokenFromStorage().then(token => {
    //   config.headers.Authorization =  token;
    // });
    config.headers.Authorization =  token;
    return config;
  });
}

export default instance;