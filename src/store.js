import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./JS/Reducers/reducers";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
