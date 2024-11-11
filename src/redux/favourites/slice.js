import { createSlice } from '@reduxjs/toolkit';

const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: savedFavorites,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
    removeFavorite: (state, action) => {
      const newState = state.filter(truck => truck.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const selectFavorites = state => state.favorites;

export default favoritesSlice.reducer;
