import { PathRouter } from "../../constants/path.router";
import { LayoutComponent } from "../../components";
import ListStudentComponent from "./list-student.component";
import CreateStudentComponent from "./create-student.component";
import DetailsComponent from "./tabstudent/details-studetn.component";
import TableResultStudentComponent from "./tabstudent/table-result-student.component";

export const routerStudent = [
  {
    path: PathRouter.student.list,
    element: (
      <LayoutComponent>
        <ListStudentComponent />
      </LayoutComponent>
    ),
  },
  {
    path: PathRouter.student.create,
    element: (
      <LayoutComponent>
        <CreateStudentComponent isUpdate={false} />
      </LayoutComponent>
    ),
  },
  {
    path: PathRouter.student.update,
    element: (
      <LayoutComponent>
        <CreateStudentComponent isUpdate={true} />
      </LayoutComponent>
    ),
  },
  {
    path: PathRouter.student.detail,
    element: (
      <LayoutComponent>
        <DetailsComponent />
      </LayoutComponent>
    ),
  },
  {
    path: PathRouter.student.result,
    element: (
      <LayoutComponent>
        <TableResultStudentComponent />
      </LayoutComponent>
    ),
  },
];
