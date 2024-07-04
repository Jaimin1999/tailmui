import { configureStore } from "@reduxjs/toolkit";
import stateCounter from "./stateReducer";

export const store = configureStore({
  reducer: { stateCounter },
});
