import { createStaff, fetchAllStaffs } from "../../api/Staff";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  allStaffStatus: "idle",
  allStaffs: [],
  addStaffStatus:"idle"
};
export const getAllStaffs = createAsyncThunk(
  "staffs/getAllStaffs",
  async () => {
    try {
      const response = await fetchAllStaffs();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addStaff=createAsyncThunk("staffs/addStaff",async(staff)=>{
  try {
    const response= await createStaff(staff)
    return response.data
  } catch (error) {
    console.log(error);
  }
})
const staffSlice = createSlice({
  name: "staffs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // fetching all staff
    builder
      .addCase(getAllStaffs.pending, (state, action) => {
        state.allStaffStatus = "loading";
      })
      .addCase(getAllStaffs.fulfilled, (state, action) => {
        state.allStaffStatus = "succeeded";
        state.allStaffs = action.payload;
      })
      .addCase(getAllStaffs.rejected, (state, action) => {
        state.allStaffStatus = "failed";
      })
      .addCase(addStaff.pending, (state, action)=>{
        state.addStaffStatus="loading"
      })
      .addCase(addStaff.fulfilled, (state, action)=>{
        state.addStaffStatus="succeeded"
        state.allStaffStatus="idle"
      })
      .addCase(addStaff.rejected, (state, action)=>{
        state.addStaffStatus="failed"
      })
  },
});

export const allStaffStatus = (state) => state.staffs.allStaffStatus;
export const allStaffs = (state) => state.staffs.allStaffs;
export default staffSlice.reducer;
