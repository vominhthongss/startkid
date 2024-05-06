import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice/modalSlice";
import postsSlice from "./posts/postsSlice";
import swipeUpDrawerSlice from "./swipeUpDrawer/swipeUpDrawerSlice";
import contentDrawerSlice from "./contentDrawer/contentDrawerSlice";
import contactsSlice from "./contacts/contactsSlice";
const store = configureStore({
  reducer: {
    modal: modalReducer,
    contentDrawer: contentDrawerSlice,
    swipeUpDrawer: swipeUpDrawerSlice,
    posts: postsSlice,
    contacts: contactsSlice,
  },
});

export default store;
