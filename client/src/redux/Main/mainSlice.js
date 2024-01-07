import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  category: "Electronics",
};
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const { changeCategory } = mainSlice.actions;
export default mainSlice.reducer;
