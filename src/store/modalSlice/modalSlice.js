import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isVisible: false,
    modalType: null,
    params: {}
  },
  reducers: {
    openModal: (state, action) => {
      const { modalType, params } = action.payload;
      state.isVisible = true;
      state.modalType = modalType;
      state.params = params;
    },
    closeModal: (state) => {
      state.isVisible = false;
      state.modalType = null;
      state.params = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
