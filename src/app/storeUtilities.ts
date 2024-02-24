import type {ThunkDispatch, UnknownAction} from '@reduxjs/toolkit';
import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../services/api/rtkq';

// Common methods
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// Needed for if/when we have custom middlewares
export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<RootState, null, UnknownAction>>();
