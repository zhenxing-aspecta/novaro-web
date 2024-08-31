import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coinmarketcap.com',
  timeout: 10000,
  headers: {
    'X-Request-Id': '1c65665d-f27e-4bfb-98a5-84342ef24021'
  },
});

api.interceptors.request.use(
    (config) => {
    //   console.log('Request:', config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
    //   console.log('Response:', response);
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export default api