import logo from "../assets/logo.png";


const Footer = () => {
  return (
    <>
     <div className="container-fluid Footer py-3">
        <div className="container">
            <div className="row gx-0 align-items-center">
                <div className="col-md-3">
                    <img src={logo} alt="" />
                </div>
                <div className="col-md-6 py-4 py-md-0">
                <ul className="Footer_nav mx-auto d-lg-flex mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Facility
                </a>
              </li>
            </ul>
                </div>
                <div className="col-md-3">
                    <div className="Footer_icons text-md-end">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <hr  className="text-white"/>
        </div>
     </div>
    </>
  )
}

export default Footer