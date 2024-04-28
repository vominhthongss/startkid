import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

const initialState = {
  show: null,
  status: "idle",
  error: null,
};

const swipeUpDrawerSlice = createSlice({
  name: "swipeUpDrawer",
  initialState,
  reducers: {
    // toggleSwipeUpDrawer: (state) => {
    //   state.show = !state.show;
    // },
    turnOnSwipeUpDrawer: (state) => {
      state.show = true;
    },
    turnOffSwipeUpDrawer: (state) => {
      state.show = null;
    },
  },
});

export const { turnOnSwipeUpDrawer,turnOffSwipeUpDrawer } = swipeUpDrawerSlice.actions;

export default swipeUpDrawerSlice.reducer;
