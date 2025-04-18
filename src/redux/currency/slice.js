import { createSlice } from '@reduxjs/toolkit';
import { getCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '' },
  extraReducers: builder =>
    builder.addCase(getCurrency.fulfilled, (state, { payload }) => {
      state.baseCurrency = payload;
    }),
  reducers: {
    setDefaultCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
});

export const { setDefaultCurrency } = currencySlice.actions;

export default currencySlice.reducer;
