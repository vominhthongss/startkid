import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import { messages } from "../../mock/messages";

const initialState = {
  messages: messages,
  status: "idle",
  error: null,
};

export const fetchMessages = createAsyncThunk(
  "message/fetchMessages",
  async () => {
    try {
      const response = await api.get("/api/messages");
      if (response.data) {
        return response.data.data;
      }
    } catch (error) {
      throw error;
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
