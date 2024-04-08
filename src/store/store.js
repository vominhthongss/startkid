import { configureStore } from "@reduxjs/toolkit";
import contentDrawerReducer from "./contentDrawer/contentDrawerSlice";
const store = configureStore({
  reducer: {
    contentDrawer: contentDrawerReducer,
  },
});

export default store;
