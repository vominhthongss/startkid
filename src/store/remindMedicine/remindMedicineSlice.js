import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import * as URLS from "../../constants/url";

const initialState = {
  remindMedicines: undefined,
  status: "idle",
  error: null,
};

export const fetchRemindMedicines = createAsyncThunk(
  "remindMedicines/fetchRemindMedicines",
  async () => {
    try {
      const response = await api.get(URLS.REMIND_MEDICINE_ALL);
      if (response.data) {
        return response.data.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
export const addRemindMedicines = createAsyncThunk(
  "remindMedicines/addRemindMedicines",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(URLS.REMIND_MEDICINE_ADD, data);
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

const remindMedicinesSlice = createSlice({
  name: "remindMedicines",
  initialState,
  reducers: {
    setRemindMedicines: (state, action) => {
      const { remindMedicines } = action.payload;
      state.remindMedicines = remindMedicines;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRemindMedicines.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchRemindMedicines.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.remindMedicines = action.payload;
      })
      .addCase(fetchRemindMedicines.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setRemindMedicines } = remindMedicinesSlice.actions;

export default remindMedicinesSlice.reducer;
