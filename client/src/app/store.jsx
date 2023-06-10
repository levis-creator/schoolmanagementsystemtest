import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/students/studentsSlice";
import staffReducer from "../features/staff/staffSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
    staffs: staffReducer,
  },
});
