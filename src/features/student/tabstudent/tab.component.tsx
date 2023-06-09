import { PathRouter } from "../../../constants/path.router";
import { Link } from "react-router-dom";
const TabComponent = (props: { detail: string | undefined }) => {
  const { detail } = props;
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to={PathRouter.student.list} className="nav-link active">
          Quay lai
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={PathRouter.student.list + "/" + detail + "/detail"}
          className="nav-link active"
        >
          Học Sinh
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={PathRouter.student.list + "/" + detail + "/result"}
          className="nav-link"
        >
          Bảng Điểm
        </Link>
      </li>
    </ul>
  );
};

export default TabComponent;
