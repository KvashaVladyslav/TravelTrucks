import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllFiltredTrucks = createAsyncThunk(
  'filtredTrucks/getAllTrucks',
  async (filters = {}, thunkAPI) => {
    try {
      const params = {
        location: filters.location || '',
        form: filters.vehicleType || '',
      };

      if (filters.vehicleEquipment && filters.vehicleEquipment.length > 0) {
        filters.vehicleEquipment.forEach(equipment => {
          params[equipment] = true;
        });
      }

      const response = await axios.get('/campers', {
        params,
      });

      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
