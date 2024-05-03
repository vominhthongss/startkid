import { configureStore } from "@reduxjs/toolkit";
import contentDrawerReducer from "./contentDrawer/contentDrawerSlice";
import swipeUpDrawerReducer from "./swipeUpDrawer/swipeUpDrawerSlice";
import modalReducer from './modalSlice/modalSlice';
const store = configureStore({
  reducer: {
    contentDrawer: contentDrawerReducer,
    swipeUpDrawer: swipeUpDrawerReducer,
    modal: modalReducer
  },
});

export default store;
