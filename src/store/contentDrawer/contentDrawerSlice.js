import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  status: "idle",
  error: null,
};

const contentDrawerSlice = createSlice({
  name: "contentDrawer",
  initialState,
  reducers: {
    toggleContentDrawer: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggleContentDrawer } = contentDrawerSlice.actions;

export default contentDrawerSlice.reducer;
