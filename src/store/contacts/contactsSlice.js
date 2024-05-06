import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAILED, LOADING, SUCCEEDED } from "../../constants/store";
import api from "../../services/api";

const initialState = {
  contacts: undefined,
  status: "idle",
  error: null,
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const response = await api.get("/api/contacts");
      if (response.data) {
        const contacts = [];
        response.data.contacts.forEach((x) => {
          if (x.category && !contacts.some((c) => c.category === x.category)) {
            contacts.push({ category: x.category, contactItems: [] });
          }
        });
        contacts.forEach((x) => {
          response.data.contacts.forEach((y) => {
            if (x.category === y.category) {
              x.contactItems.push(y);
            }
          });
        });
        return contacts;
      }
    } catch (error) {
      throw error;
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      const { contacts } = action.payload;
      state.contacts = contacts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = FAILED;
      });
  },
});

export const { setContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
