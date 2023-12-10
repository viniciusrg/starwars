// axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;