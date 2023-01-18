import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMenu: true
};

const renderingSlice = createSlice({
  name: 'rendering',
  initialState,
  reducers: {
    toggleShowMenu: (state) => {
      state.showMenu = !state.showMenu;
    }
  }
});

export const {
  toggleShowMenu
} = renderingSlice.actions;

export const showMenuSelector = state => state.rendering.showMenu;

export default renderingSlice.reducer;