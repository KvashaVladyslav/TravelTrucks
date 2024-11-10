import { createSlice } from '@reduxjs/toolkit';
import { getAllFiltredTrucks } from './operations';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    vehicleType: '',
    vehicleEquipment: [],
    filteredTrucks: [],
    loading: false,
    error: false,
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    setVehicleEquipment: (state, action) => {
      state.vehicleEquipment = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllFiltredTrucks.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllFiltredTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredTrucks = action.payload;
        state.error = false;
      })
      .addCase(getAllFiltredTrucks.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setLocation, setVehicleType, setVehicleEquipment } =
  filterSlice.actions;

export default filterSlice.reducer;
