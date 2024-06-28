import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice/modalSlice";
import postsSlice from "./posts/postsSlice";
import swipeUpDrawerSlice from "./swipeUpDrawer/swipeUpDrawerSlice";
import contentDrawerSlice from "./contentDrawer/contentDrawerSlice";
import contactsSlice from "./contacts/contactsSlice";
import notificationsSlice from "./notifications/notificationsSlice";
import leaveRequestSlice from "./leaveRequest/leaveRequestSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";
const store = configureStore({
  reducer: {
    modal: modalReducer,
    contentDrawer: contentDrawerSlice,
    swipeUpDrawer: swipeUpDrawerSlice,
    posts: postsSlice,
    contacts: contactsSlice,
    notifications: notificationsSlice,
    leaveRequests: leaveRequestSlice,
    authentication: authSlice,
    user: userSlice,
  },
});

export default store;
