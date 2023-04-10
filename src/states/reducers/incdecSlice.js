import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
  name: "incdec",
  initialState: 10,
  reducers: {
    increment: (state, action) => {
      return (state += action.payload);
    },
    decrement: (state, action) => {
      return (state -= 1);
    },
  },
});

export const { increment, decrement } = incdecSlice.actions;

export default incdecSlice.reducer;
