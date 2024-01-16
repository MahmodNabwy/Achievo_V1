import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  businessContent: "",
  stackHolderContent: "",
  currentConditionContent: "",
  AnalysisContent: "",
};

export const InnovationSlice = createSlice({
  name: "Innovation",
  initialState,
  reducers: {
    setBusinessContent: (state, action) => {
      state.businessContent = action.payload.content;
    },
    setStackHolderContent: (state, action) => {
      state.stackHolderContent = action.payload.content;
    },
    setCurrentConditionContent: (state, action) => {
      state.currentConditionContent = action.payload.content;
    },
    setAnalysisContent: (state, action) => {
      state.AnalysisContent = action.payload.content;
    },
  },
});

export const {
  setBusinessContent,
  setStackHolderContent,
  setCurrentConditionContent,
  setAnalysisContent,
} = InnovationSlice.actions;

export default InnovationSlice.reducer;
