import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isVisible: false,
    title: null,
    content: null,
  },
  reducers: {
    openModal: (state, action) => {
      const { title, content } = action.payload;
      state.isVisible = true;
      state.title = title;
      state.content = content;
    },
    closeModal: (state) => {
      state.isVisible = false;
      state.title = null;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
