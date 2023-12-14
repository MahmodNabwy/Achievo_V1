import { configureStore } from "@reduxjs/toolkit";
import CardsSlice from "../Slices/CardsSlice";
const store = configureStore({
  reducer: {
    card: CardsSlice,
  },
});
export default store;
