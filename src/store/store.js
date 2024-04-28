import { configureStore } from "@reduxjs/toolkit";
import contentDrawerReducer from "./contentDrawer/contentDrawerSlice";
import swipeUpDrawerReducer from "./swipeUpDrawer/swipeUpDrawerSlice";
const store = configureStore({
  reducer: {
    contentDrawer: contentDrawerReducer,
    swipeUpDrawer: swipeUpDrawerReducer,
  },
});

export default store;
