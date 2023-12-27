import { configureStore } from "@reduxjs/toolkit";
import CardsSlice from "../Slices/CardsSlice";
import CoursesSlice from "../Slices/CoursesSlice";
import LoginSlice from "../Slices/LoginSlice";
const store = configureStore({
  reducer: {
    card: CardsSlice,
    courses: CoursesSlice,
    login: LoginSlice,
  },
});
export default store;
