import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLi: 1,
};

export const AssessmentsSlice = createSlice({
  name: "Assessments",
  initialState,
  reducers: {
    change_Li_Status: (state, action) => {
      state.activeLi = action.payload.activeLi;
    },
  },
});

export const { change_Li_Status } = AssessmentsSlice.actions;

export default AssessmentsSlice.reducer;
