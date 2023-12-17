import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Just For Test
  name: "",
  email: "",
  //Assign Card card Status Here and Card Id
  type: 1, //Refer to expand type (1:normal,2:maximize,3:minimize)
  cardId: 1, //(1:courses,2:assessments,3:polices,4:innovation)

  maximizeCourse: false,
  maximizePolicies: false,
  maximizeInnovation: false,
  minimizeCourse: false,
  minimizeAssessments: false,
  minimizePolicies: false,
  minimizeInnovation: false,
  maximizeAssessments: false,
};

export const CardsSlice = createSlice({
  name: "maximize",
  initialState,
  reducers: {
    resetCards: (state, action) => {
      state.type = 1;
      state.cardId = 1;
      state.maximizeCourse = false;
      state.minimizeCourse = false;
      state.minimizeAssessments = false;
      state.minimizePolicies = false;
      state.minimizeInnovation = false;
      state.maximizeAssessments = false;
      state.maximizePolicies = false;
      state.maximizeInnovation = false;
    },
    maximizeCourses: (state, action) => {
      state.type = action.payload.type;
      state.cardId = 1;
      state.maximizeCourse = true;
      state.minimizeCourse = false;
      state.minimizeAssessments = true;
      state.minimizePolicies = true;
      state.minimizeInnovation = true;
    },
    minimizeCourses: (state, action) => {
      state.type = action.payload.type;
      state.minimizeCourse = true;
      state.maximizeCourse = false;
    },
    maximizeAssessments: (state, action) => {
      state.type = action.payload.type;
      state.cardId = 2;
      state.maximizeAssessments = true;
      state.minimizeAssessments = false;
      state.minimizeCourse = true;
      state.minimizePolicies = true;
      state.minimizeInnovation = true;
    },
    minimizeAssessments: (state, action) => {
      state.type = action.payload.type;
      state.minimizeAssessments = true;
      state.maximizeAssessments = false;
    },
    maximizePolicies: (state, action) => {
      state.type = action.payload.type;
      state.cardId = 3;
      state.maximizePolicies = true;
      state.minimizePolicies = false;
      state.minimizeCourse = true;
      state.minimizeInnovation = true;
      state.minimizeAssessments = true;
    },
    minimizePolicies: (state, action) => {
      state.type = action.payload.type;
      state.minimizePolicies = true;
      state.maximizePolicies = false;
    },
    maximizeInnovation: (state, action) => {
      state.type = action.payload.type;
      state.cardId = 4;
      state.maximizeInnovation = true;
      state.minimizeInnovation = false;
      state.minimizeAssessments = true;
      state.minimizeCourse = true;
      state.minimizePolicies = true;
    },
    minimizeInnovation: (state, action) => {
      state.type = action.payload.type;
      state.minimizeInnovation = true;
      state.maximizeInnovation = false;
    },
  },
});

export const {
  resetCards,
  maximizeCourses,
  minimizeCourses,
  maximizeAssessments,
  minimizeAssessments,
  maximizePolicies,
  minimizePolicies,
  maximizeInnovation,
  minimizeInnovation,
} = CardsSlice.actions;

export default CardsSlice.reducer;
