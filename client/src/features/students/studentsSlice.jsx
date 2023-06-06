import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllStudents,
  getStudent,
  updateStudent,
} from "../../api/Students";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await fetchAllStudents();
    return response.data;
  }
);
export const fetchStudent = createAsyncThunk(
  "students/fetchStudent",
  async (id) => {
    const respond = await getStudent(id);
    return respond.data;
  }
);
export const editStudent = createAsyncThunk(
  "students/editStudent",
  async ({id, data},{rejectWithValue}) => {
    console.log(data)
    try {
      const response = await updateStudent(id, {data});
      
      return response.data;
    } catch (error) {return rejectWithValue(error.response.data)}
  }
);

const initialState = {
  students: [],
  singleStudent: {},
  allStudentStatus: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  singleStudentStatus: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  updateStudentStatus: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
};
const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    studentUpdated(state, action){
      state.singleStudent.delete()
      state.singleStudent.push(action.payload)
    }
  },
  extraReducers(builder) {
    builder
      // students
      .addCase(fetchStudents.pending, (state, action) => {
        state.allStudentStatus = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.allStudentStatus = "succeeded";
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.allStudentStatus = "failed";
        state.error = action.error.message;
      })
      // single student
      .addCase(fetchStudent.pending, (state, action) => {
        state.singleStudentStatus = "loading";
      })
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.singleStudentStatus = "succeeded";
        state.singleStudent = action.payload;
      })
      .addCase(fetchStudent.rejected, (state, action) => {
        state.singleStudentStatus = "failed";
        state.error = action.error.message;
      })
      // updating student
      .addCase(editStudent.pending, (state, action) => {
        state.updateStudentStatus = "loading";
      })
      .addCase(editStudent.fulfilled, (state, action) => {
        state.updateStudentStatus = "succeeded";
        state.updatedStudent=action.payload
      })
      .addCase(editStudent.rejected, (state, action) => {
        state.updateStudentStatus = "failed";
        state.error = action.error.message;
      });
  },
});

// actions
export const {studentUpdated}=studentsSlice.actions
// states
export const allStudentStatus = (state) => state.students.allStudentStatus;
export const studentStatus = (state) => state.students.singleStudentStatus;
export const students = (state) => state.students.students;
export const updateStatus = (state) => state.students.updateStudentStatus;

export const singleStudent = (state) => state.students.singleStudent;
export const error = (state) => state.students.error;
export default studentsSlice.reducer;
