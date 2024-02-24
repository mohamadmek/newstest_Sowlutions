import axios from 'axios';
import {axiosDefaultRequestConfig} from './defaults';

// CREATE API INSTANCE WITH DEFAULTS
const api = axios.create(axiosDefaultRequestConfig);

// ************************************************************
// REQUEST INTERCEPTOR
// ************************************************************
api.interceptors.request.use(async config => {
  return config;
});

export default api;
