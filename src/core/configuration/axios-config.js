import axios from "axios";

const instance = axios.create({
  baseURL: 'http://api.dev.letstudy.org',
})

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.timeout = 10000;

export const setTokenToHeader = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default instance;