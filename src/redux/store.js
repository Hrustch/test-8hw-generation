import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './contactSlice';


export const store = configureStore({
  reducer: phoneBookReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})
