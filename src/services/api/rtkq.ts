import {BaseQueryFn, createApi} from '@reduxjs/toolkit/query/react';
import {AxiosRequestConfig, Method} from 'axios';
import api from './api';
import {tagTypes} from '../../common/types';
import {combineReducers} from '@reduxjs/toolkit';

export interface baseQueryFnArgs<
  Data = AxiosRequestConfig['data'] | undefined,
> {
  url: string;
  method?: Method;
  data?: Data;
  params?: AxiosRequestConfig['params'];
}

const simpleBaseQuery: BaseQueryFn<
  baseQueryFnArgs, // Args
  unknown
> = async args => {
  const {method = 'GET', url, params, data} = args;
  try {
    // dispatch api call
    const response = await api({
      method,
      url,
      data,
      params,
    });
    // return our result in the format that RTKQ expects (wrapped in data so it can infer type)
    return {data: response.data};
  } catch (axiosError) {
    // return our error in the format that RTKQ expects (wrapped in error so it can infer type)
    return {error: axiosError};
  }
};

// Define main API service using axios base query
// Endpoints are added in separate files
export const gNewsApi = createApi({
  reducerPath: 'gNewsApi',
  baseQuery: simpleBaseQuery,
  tagTypes,
  endpoints: () => ({}),
});

export const rootReducer = combineReducers({
  [gNewsApi.reducerPath]: gNewsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
