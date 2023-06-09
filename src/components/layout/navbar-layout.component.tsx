const NavbarLayoutComponent = () => {
  return (
    <div className="col-3">
      <ul className="nav flex-column navbar-light bg-light h-100">
        <li className="nav-item">
          <div className="nav-link active m-2">Trang chủ</div>
        </li>
        <li className="nav-item">
          <div className="nav-link m-2">Student</div>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLayoutComponent;
