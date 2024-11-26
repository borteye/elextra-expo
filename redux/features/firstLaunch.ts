import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isFirstLaunch: boolean;
}

const initialState: AppState = {
  isFirstLaunch: false,
};

export const firstLaunchSlice = createSlice({
  name: "firstLaunch",
  initialState,
  reducers: {
    SET_IS_FIRST_LAUNCH: (state, { payload }) => {
      console.log("payload: ", payload);
      state.isFirstLaunch = payload;
    },
  },
});

export const { SET_IS_FIRST_LAUNCH } = firstLaunchSlice.actions;

export const getIsFirstLaunch = (state: { firstLaunch: AppState }) =>
  state.firstLaunch.isFirstLaunch;

export default firstLaunchSlice.reducer;
