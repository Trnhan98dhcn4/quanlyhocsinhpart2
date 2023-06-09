import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteStudent,
  getAllStudent,
  getResultStudent,
  getStudent,
  postStudent,
  putStudent,
} from "../api/api.student";

export const getAllThunkStudent = createAsyncThunk(
  "data/getAllThunkStudent",
  getAllStudent
);

export const getDetailThunkStudent = createAsyncThunk(
  "data/getDetailThunkStudent",
  getStudent
);

export const getResultThunkStudent = createAsyncThunk(
  "data/getResultThunkStudent",
  getResultStudent
);

export const postThunkStudent = createAsyncThunk(
  "data/postThunkStudent",
  postStudent
);

export const putThunkStudent = createAsyncThunk(
  "data/putThunkStudent",
  putStudent
);

export const deleteThunkStudent = createAsyncThunk(
  "data/deleteThunkStudent",
  deleteStudent
);

// export const searchThunkStudent = createAsyncThunk(
//   "data/searchThunkStudent",
//   getSearchApi
// );
