import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: [],
  reducers: {
    addShortURL: function (state, action) {
      return [...state, action.payload];
    },
  },
});
export const { addShortURL } = slice.actions;
export default slice.reducer;
