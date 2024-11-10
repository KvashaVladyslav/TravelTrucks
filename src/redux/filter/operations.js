import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

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

      const response = await axios.get('/campers', { params });

      toast.success('Trucks fetched successfully!');

      return response.data.items;
    } catch (error) {
      toast.error('There are no trucks on your request, try again');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
