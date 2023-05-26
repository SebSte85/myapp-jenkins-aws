import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: { page: "Getting Started" },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    navbar: navbarSlice.reducer,
  },
});

export const { changePage } = navbarSlice.actions;
