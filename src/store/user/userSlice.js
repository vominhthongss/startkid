import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import * as URL from "../../constants/url";
import api from "../../services/api";
import * as LOCAL_STORAGE from "../../utils/localStorage";

const initialState = {
  user: undefined,
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const userId = await LOCAL_STORAGE.getItem("userId");
    if (userId) {
      const response = await api.get(`${URL.USER}/${userId}`);
      if (response.data) {
        return response.data.data;
      }
    }
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
