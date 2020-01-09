import axios from 'axios';
import env from 'expo-config';

const syscor = axios.create({
  baseURL: env.syscor,
});

syscor.interceptors.request.use(async data => {
  data.headers = {
    Auth: env.token_syscor,
  };

  return data;
});

export default syscor;
