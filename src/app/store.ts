import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {gNewsApi, rootReducer} from '../services/api/rtkq';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gNewsApi.middleware),
});

setupListeners(store.dispatch);

// Types
export type AppDispatch = typeof store.dispatch;

export default store;
