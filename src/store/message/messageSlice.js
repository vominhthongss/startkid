import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import * as URLS from "../../constants/url";

const initialState = {
  messages: undefined,
  status: "idle",
  error: null,
};

export const fetchMessages = createAsyncThunk(
  "leaveRequest/fetchMessages",
  async () => {
    try {
      const response = await api.get(URLS.MESSAGES_ALL);
      if (response.data) {
        return response.data.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
export const addMessages = createAsyncThunk(
  "leaveRequest/addMessages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(URLS.MESSAGES_ADD, data);
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

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      const { messages } = action.payload;
      state.messages = messages;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
