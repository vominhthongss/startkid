import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import * as LOCAL_STORAGE from "../../utils/localStorage";
import * as URLS from "../../constants/url";

const initialState = {
  data: undefined,
  status: "idle",
  error: null,
};

export const changeAvatar = createAsyncThunk(
  "account/changeAvatar",
  async (data, thunkAPI) => {
    const userId = await LOCAL_STORAGE.getItem("userId");
    try {
      const response = await api.put(`${URLS.CHANGE_AVATAR}/${userId}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        return response.data;
      }
    } catch (error) {
      
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeAvatar.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(changeAvatar.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(changeAvatar.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export default accountSlice.reducer;
