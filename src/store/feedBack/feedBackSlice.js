import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import { feedBacks } from "../../mock/feedBacks";

const initialState = {
  feedBacks: feedBacks,
  status: "idle",
  error: null,
};

export const fetchFeedBack = createAsyncThunk(
  "feedBack/fetchFeedBack",
  async () => {
    try {
      const response = await api.get("/api/feedBacks");
      if (response.data) {
        return response.data.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

const feedBacksSlice = createSlice({
  name: "feedBacks",
  initialState,
  reducers: {
    setFeedBack: (state, action) => {
      const { feedBacks } = action.payload;
      state.feedBacks = feedBacks;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedBack.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchFeedBack.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.feedBacks = action.payload;
      })
      .addCase(fetchFeedBack.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setFeedBack } = feedBacksSlice.actions;

export default feedBacksSlice.reducer;
