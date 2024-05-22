import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";

const initialState = {
  leaveRequests: undefined,
  status: "idle",
  error: null,
};

export const fetchLeaveRquests = createAsyncThunk(
  "leaveRequest/fetchLeaveRquests",
  async () => {
    try {
      const response = await api.get("/api/leave-requests");
      if (response.data) {
        return response.data.leaveRequests;
      }
    } catch (error) {
      throw error;
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
