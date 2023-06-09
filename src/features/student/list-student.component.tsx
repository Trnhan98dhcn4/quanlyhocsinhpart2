import { useEffect } from "react";

import { TableComponent } from "../../components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  deleteThunkStudent,
  getAllThunkStudent,
} from "../../thunks/thunk.student";
import { PathRouter } from "../../constants/path.router";

const ListStudentComponent = () => {
  const students = useAppSelector((state) => state.student.students);
  const loading = useAppSelector((state) => state.student.loading);
  const error = useAppSelector((state) => state.student.error);
  const dispatch = useAppDispatch();

  const dataHeader = ["key", "MSSV", "Name", "Age", "Gender", "Date", "Action"];

  const PathRouterLink = PathRouter.student.list;
  //delete function
  const deleteStudent = (children: string) => {
    dispatch(deleteThunkStudent(children));
  };

  useEffect(() => {
    const data1 = dispatch(getAllThunkStudent());
    return () => {
      data1.abort();
    };
  }, [dispatch]);

  if (loading) {
    return <div style={{ position: "absolute" }}>Loading...</div>;
  }
  if (error) {
    return <div> Error: {error}</div>;
  }
  console.log(students);
  return (
    <TableComponent
      dataHeader={dataHeader}
      dataTbody={students}
      PathRouterLink={PathRouterLink}
      deleteTableData={deleteStudent}
    />
  );
};

export default ListStudentComponent;
