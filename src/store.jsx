import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
const store = configureStore({
  name: "slice",
  reducer: slice,
});

export default store;
