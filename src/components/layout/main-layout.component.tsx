import { IChildrenLayout } from "../../constants/children.layout";

const MainLayoutComponent = ({ children }: IChildrenLayout) => {
  return <div className="col-9">{children}</div>;
};

export default MainLayoutComponent;
