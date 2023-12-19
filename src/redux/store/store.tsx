import { configureStore } from "@reduxjs/toolkit";
import CardsSlice from "../Slices/CardsSlice";
import CoursesSlice from "../Slices/CoursesSlice";
const store = configureStore({
  reducer: {
    card: CardsSlice,
    courses: CoursesSlice,
  },
});
export default store;
