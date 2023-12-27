import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogged: false,
};

export const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload.isLogged;
    },
  },
});

export const { setIsLogged } = LoginSlice.actions;

export default LoginSlice.reducer;
