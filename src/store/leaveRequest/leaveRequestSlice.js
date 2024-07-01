import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import * as URLS from "../../constants/url";

const initialState = {
  leaveRequests: undefined,
  status: "idle",
  error: null,
};

export const fetchLeaveRquests = createAsyncThunk(
  "leaveRequest/fetchLeaveRquests",
  async () => {
    try {
      const response = await api.get(URLS.LEAVE_REQUESTS_ALL);
      if (response.data) {
        return response.data.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
export const addLeaveRquests = createAsyncThunk(
  "leaveRequest/addLeaveRquests",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(URLS.LEAVE_REQUESTS_ADD, data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const leaveRequestsSlice = createSlice({
  name: "leaveRequests",
  initialState,
  reducers: {
    setLeaveRequests: (state, action) => {
      const { leaveRequests } = action.payload;
      state.leaveRequests = leaveRequests;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaveRquests.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchLeaveRquests.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.leaveRequests = action.payload;
      })
      .addCase(fetchLeaveRquests.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setLeaveRequests } = leaveRequestsSlice.actions;

export default leaveRequestsSlice.reducer;
