import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import * as URL from "../../constants/url";
import api from "../../services/api";

const initialState = {
  notifications: undefined,
  status: "idle",
  error: null,
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    try {
      const response = await api.get(URL.NOTIFICATIONS);
      if (response.data) {
        return response.data.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      const { notifications } = action.payload;
      state.notifications = notifications;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;
