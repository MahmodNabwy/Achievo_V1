import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Just For Test
  name: "",
  email: "",
  //Assign Card card Status Here and Card Id
  type: 1, //Refer to expand type (1:normal,2:maximize,3:minimize)
  cardId: 1, //(1:courses,2:assessments,3:polices,4:innovation)
};

export const CardsSlice = createSlice({
  name: "maximize",
  initialState,
  reducers: {
    maximizeCourses: (state, action) => {
      state.type = action.payload.type;
    },
    minimizeCourses: (state, action) => {
      state.type = action.payload.type;
    },
    maximizeAssessments: (state, action) => {
      state.type = action.payload.type;
    },
    minimizeAssessments: (state, action) => {
      state.type = action.payload.type;
    },
    maximizePolicies: (state, action) => {
      state.type = action.payload.type;
    },
    minimizePolicies: (state, action) => {
      state.type = action.payload.type;
    },
    maximizeInnovation: (state, action) => {
      state.type = action.payload.type;
    },
    minimizeInnovation: (state, action) => {
      state.type = action.payload.type;
    },
  },
});

export const { maximizeCourses, minimizeCourses } = CardsSlice.actions;

export default CardsSlice.reducer;
