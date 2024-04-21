import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "light",
  },
  reducers: {
    toggle: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle, setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;