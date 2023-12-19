import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: 1,
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
  },
});

export const { rectangleFigure, squareFigure } = CoursesSlice.actions;

export default CoursesSlice.reducer;
