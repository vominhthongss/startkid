import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import * as URLS from "../../constants/url";
import * as LOCAL_STORAGE from "../../../src/utils/localStorage";

const initialState = {
  pickDrops: undefined,
  status: "idle",
  error: null,
};

export const fetchPickDrops = createAsyncThunk(
  "pickDrops/fetchPickDrops",
  async () => {
    try {
      const response = await api.get(URLS.PICK_DROP);
      const userId = await LOCAL_STORAGE.getItem("userId");

      if (response.data && userId) {
        return response.data.data.filter(
          (x) => x.userId.toString() === userId.toString()
        );
      }
    } catch (error) {
      throw error;
    }
  }
);
export const addPickDrops = createAsyncThunk(
  "pickDrops/addPickDrops",
  async (data, { rejectWithValue }) => {
    try {
      const userId = await LOCAL_STORAGE.getItem("userId");
      if (userId) {
        data.userId = userId;
        const response = await api.post(URLS.PICK_DROP, data);
        return response.data;
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
const pickDropsSlice = createSlice({
  name: "pickDrops",
  initialState,
  reducers: {
    setFeedBack: (state, action) => {
      const { pickDrops } = action.payload;
      state.pickDrops = pickDrops;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPickDrops.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchPickDrops.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.pickDrops = action.payload;
      })
      .addCase(fetchPickDrops.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setFeedBack } = pickDropsSlice.actions;

export default pickDropsSlice.reducer;
