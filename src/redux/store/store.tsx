import { configureStore } from "@reduxjs/toolkit";
import CardsSlice from "../Slices/CardsSlice";
import CoursesSlice from "../Slices/CoursesSlice";
import LoginSlice from "../Slices/LoginSlice";
import AssessmentsSlice from "../Slices/AssessmentsSlice";
import PoliciesProceduresSlice from "../Slices/PoliciesProceduresSlice";
const store = configureStore({
  reducer: {
    card: CardsSlice,
    courses: CoursesSlice,
    login: LoginSlice,
    assessments: AssessmentsSlice,
    policiesProcedures: PoliciesProceduresSlice,
  },
});
export default store;
