import img1 from "../assets/cheif1.png";
import img2 from "../assets/cheif2.png";
import img3 from "../assets/cheif3.png";
import img4 from "../assets/cheif4.png";

const Team = () => {
  return (
    <div>
      <div className="container-fluid Team py-3 py-lg-0" id="Facility">
      <div className="container">
        <div className="row pb-5 pd-mb-0 align-items-center">
          <div className="col-lg-10 col-6">
            <h1 className="main-heading">
              meet our<span> Chefs</span>
            </h1>
          </div>
          <div className="col-lg-2 col-6 text-end">
          <button className="btn1 btn_0 fs-lg-5 fs-5">
              See All <i class="fa-solid fa-arrow-right ps-2"></i>
            </button>
          </div>
        </div>
        <div className="row gx-0 py-5 text-center">
          <div
            className="col-lg-3"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <div className="team_col1">
              <img src={img1} alt="" />
              <h5>Jhon Deo</h5>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-down"
            data-aos-duration="1400"
            data-aos-easing="ease-in"
          >
            <div className="team_col1">
              <img src={img2} alt="" />
              <h5>Smith Deo</h5>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-down"
            data-aos-duration="1700"
            data-aos-easing="ease-in"
          >
            <div className="team_col1">
              <img src={img3} alt="" />
              <h5>Spit Deo</h5>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
          >
            <div className="team_col1">
              <img src={img4} alt="" />
              <h5>Main deo</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;
