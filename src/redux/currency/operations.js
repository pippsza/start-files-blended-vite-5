import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';

export const getCurrency = createAsyncThunk(
  'currency/getCurrency',
  async (crd, thunkAPI) => {
    try {
      const userInfo = await getUserInfo(crd);
      const iso = userInfo.results[0].annotations.currency.iso_code;
      return iso;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      return !state.currency.baseCurrency;
    },
  },
);
