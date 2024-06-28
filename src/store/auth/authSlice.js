import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import * as LOCAL_STORAGE from "../../utils/localStorage";
import * as URLS from "../../constants/url";

const initialState = {
  userInfo: undefined,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await api.post(URLS.SIGN_IN, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const {token, userId} = response.data.data;
      await LOCAL_STORAGE.setItem("token", token);
      await LOCAL_STORAGE.setItem("userId", userId.toString());
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      AsyncStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
