import { createSlice } from '@reduxjs/toolkit';
import { getAllTrucks, getTruckById } from './operations';

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllTrucks.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getAllTrucks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllTrucks.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getTruckById.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getTruckById.fulfilled, (state, action) => {
        state.items = action.payload.id;
        state.loading = false;
        state.error = false;
      })
      .addCase(getTruckById.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default trucksSlice.reducer;
