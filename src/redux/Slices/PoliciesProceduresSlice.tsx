import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  property1: "",
  currentCard: 1,
};

export const PoliciesProceduresSlice = createSlice({
  name: "PoliciesProcedures",
  initialState,
  reducers: {
    mouse_enter: (state, action) => {
      state.property1 = "variant-2";
      state.currentCard = action.payload.currentCard;
    },
    mouse_leave: (state, action) => {
      state.property1 = "default";
      state.currentCard = action.payload.currentCard;
    },
  },
});

export const { mouse_enter, mouse_leave } = PoliciesProceduresSlice.actions;

export default PoliciesProceduresSlice.reducer;
