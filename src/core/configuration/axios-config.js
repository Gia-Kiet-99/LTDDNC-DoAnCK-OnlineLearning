import axios from "axios";

const instance = axios.create({
  baseURL: 'http://api.dev.letstudy.org',
})

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;

export default instance;