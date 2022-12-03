import axios from 'axios';

// comentando que mudei para o heroku de novo

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;
