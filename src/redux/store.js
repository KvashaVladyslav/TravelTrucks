import { configureStore } from '@reduxjs/toolkit';
import trucksReducer from './trucks/slice';
import filterReducer from './filter/slice';

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filters: filterReducer,
  },
});
