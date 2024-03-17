import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload.toLowerCase());
    },
  },
});

export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;
export const selectNameFilter = state => state.filters;
