import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import * as URLS from "../../constants/url";

const initialState = {
  feedBacks: undefined,
  status: "idle",
  error: null,
};

export const fetchFeedBacks = createAsyncThunk(
  "feedBacks/fetchFeedBacks",
  async () => {
    try {
      const response = await api.get(URLS.FEEDBACK_ALL);
      if (response.data) {
        return response.data.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
export const addFeedBacks = createAsyncThunk(
  "feedBacks/addFeedBacks",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(URLS.FEEDBACK_ADD, data);
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
      .addCase(fetchFeedBacks.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchFeedBacks.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.feedBacks = action.payload;
      })
      .addCase(fetchFeedBacks.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setFeedBack } = feedBacksSlice.actions;

export default feedBacksSlice.reducer;
