
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screen: 1, 
  selectedGame: null 
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.screen = action.payload; 
    },
    setSelected: (state, action) => {
      state.selectedGame = action.payload; 
    },
  },
});

export const { setScreen, setSelected } = uiSlice.actions;
export default uiSlice.reducer;
