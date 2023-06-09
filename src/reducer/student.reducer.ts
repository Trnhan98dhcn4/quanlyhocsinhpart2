import { createSlice } from "@reduxjs/toolkit";
import { IStudentState } from "../model/student.model";
import {
  deleteThunkStudent,
  getAllThunkStudent,
  postThunkStudent,
  putThunkStudent,
} from "../thunks/thunk.student";

const initialState: IStudentState = {
  students: [],
  loading: true,
  error: "",
  searchState: "",
};

const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllThunkStudent.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAllThunkStudent.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(deleteThunkStudent.fulfilled, (state, action) => {
        const _student = action.payload;
        const index = state.students.findIndex((f) => f._id === _student._id);
        if (index !== -1) {
          state.students.splice(index, 1);
        }
      })
      .addCase(putThunkStudent.fulfilled, (state, action) => {
        const _student = action.payload;
        const index = state.students.findIndex((f) => f._id === _student._id);
        state.students[index] = _student;
      })
      .addCase(postThunkStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(getAllThunkStudent.rejected, (state) => {
        state.loading = false;
        state.error = "Invalid Error!!";
      });
  },
});

const { reducer } = StudentSlice;
export default reducer;
