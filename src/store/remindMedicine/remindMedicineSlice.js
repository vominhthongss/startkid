import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";
import { remindMedicine } from "../../mock/remindMedicine";

const initialState = {
  remindMedicines: remindMedicine,
  status: "idle",
  error: null,
};

export const fetchRemindMedicines = createAsyncThunk(
  "remindMedicine/fetchRemindMedicines",
  async () => {
    try {
      const response = await api.get("/api/remindMedicines");
      if (response.data) {
        return response.data.data;
      }
    } catch (error) {
      throw error;
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
