import { IChildrenLayout } from "../../constants/children.layout";
import HeaderLayoutComponent from "./headers/header-layout.component";
import MainLayoutComponent from "./main-layout.component";
import NavbarLayoutComponent from "./navbar-layout.component";

const LayoutComponent = ({ children }: IChildrenLayout) => {
  return (
    <>
      <HeaderLayoutComponent />
      <div className="row mt-3 h-100">
        <NavbarLayoutComponent />
        <MainLayoutComponent>{children}</MainLayoutComponent>
      </div>
    </>
  );
};

export default LayoutComponent;
