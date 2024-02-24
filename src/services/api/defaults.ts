import type {AxiosRequestConfig} from 'axios';
import {API_BASE_URL, API_TIMEOUT} from '../../app/constants';

// SETUP API DEFAULTS
export const axiosDefaultRequestConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json',
  },
};
