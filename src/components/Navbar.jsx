import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav_main container-fluid">
        <div className="container gx-0">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          
            <i className="fa-solid fa-bars-staggered navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse py-3 px-3 py-md-0 px-md-0" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="Menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="About">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="Facility">
                  Facility
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center" role="search">
              <div className="icons">
              <i class="fa-solid fa-magnifying-glass"></i>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/891/891407.png "
                  width="26"
                  height="26"
                  className="img-small mx-3"
                />{""}
              </div>
              <button className="btn1 ms-lg-2" type="button">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
