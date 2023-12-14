import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Just For Test
  name: "",
  email: "",
  //Assign Card card Status Here and Card Id
};

export const CardsSlice = createSlice({
  name: "maximize",
  initialState,
  reducers: {
    maximizeCourses: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    minimizeCourses: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    maximizeAssessments: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    minimizeAssessments: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    maximizePolicies: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    minimizePolicies: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    maximizeInnovation: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    minimizeInnovation: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { maximizeCourses, minimizeCourses } = CardsSlice.actions;

export default CardsSlice.reducer;
