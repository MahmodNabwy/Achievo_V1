import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: 1,
  activeLi: 1,
};

export const CoursesSlice = createSlice({
  name: "Courses",
  initialState,
  reducers: {
    rectangleFigure: (state, action) => {
      state.type = 1;
    },

    squareFigure: (state, action) => {
      state.type = 2;
    },
    change_Li_Status: (state, action) => {
      state.activeLi = action.payload.activeLi;
    },
  },
});

export const { rectangleFigure, squareFigure, change_Li_Status } =
  CoursesSlice.actions;

export default CoursesSlice.reducer;
