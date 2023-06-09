import SearchHeaderComponent from "./search-header.component";

const HeaderLayoutComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="col">
        <div className="navbar-brand ">Trang Chủ</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <SearchHeaderComponent />

      <div className="col d-flex flex-row-reverse">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <button className="nav-link btn-info btn">
              Đăng Nhập <span className="sr-only">(current)</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderLayoutComponent;
