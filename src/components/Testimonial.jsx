import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
const Testimonial = () => {
  return (
    <>
      <div className="container-fluid Testimonial py-2" id="Facility">
        <h1 className="main-heading text-center pb-4 pb-lg-0">
          what's Our<span> Client Say</span>
        </h1>
        {/* <p className="text-center main_P">All our meals in one delicios snap</p> */}
        <div className="container py-md-5 my-lg-5 Testimonial1">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src="https://img.freepik.com/free-photo/young-handsome-business-man-choosing-car-car-showroom_1303-17901.jpg?w=740&t=st=1707124313~exp=1707124913~hmac=db1dcc6c400d09157455e3d2800e582ea01725c747d915530d1691e9ab93331b"
                      alt="TopCollection"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col1">
                    <h2>Jhon Smith</h2>
                    <p className="mean_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      porro quas assumenda voluptate sed quam od placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?w=740&t=st=1707124189~exp=1707124789~hmac=8cabec9fef35ebac560deb8a9833ed837f368dfc2d5ae1da31bf6dcb04781e08"
                      alt="TopCollection"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col1">
                    <h2>Jhon Smith</h2>
                    <p className="mean_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      porro quas assumenda voluptate sed quam od placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393647.jpg?w=740&t=st=1707124266~exp=1707124866~hmac=3afb9c299c834fb9a0d7ecfa29a4fd7612b02dca929e7296728f1d38871ebff5"
                      alt="TopCollection"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col1">
                    <h2>Jhon Smith</h2>
                    <p className="mean_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      porro quas assumenda voluptate sed quam od placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src="https://img.freepik.com/free-photo/handsome-young-man-white-t-shirt-cross-arms-chest-smiling-pleased_176420-21607.jpg"
                      alt="TopCollection"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col1">
                    <h2>Jhon Smith</h2>
                    <p className="mean_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      porro quas assumenda voluptate sed quam od placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* ******************** */}
        <div className="container py-md-5 my-lg-5 Testimonial2">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src="https://img.freepik.com/free-photo/young-handsome-business-man-choosing-car-car-showroom_1303-17901.jpg?w=740&t=st=1707124313~exp=1707124913~hmac=db1dcc6c400d09157455e3d2800e582ea01725c747d915530d1691e9ab93331b"
                      alt="TopCollection"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col2">
                    <h2>Jhon Smith</h2>
                    <p className="mean_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      porro quas assumenda voluptate sed quam od placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?w=740&t=st=1707124189~exp=1707124789~hmac=8cabec9fef35ebac560deb8a9833ed837f368dfc2d5ae1da31bf6dcb04781e08"
                      alt="TopCollection"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col2">
                    <h2>Jhon Smith</h2>
                    <p className="mean_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      porro quas assumenda voluptate sed quam od placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393647.jpg?w=740&t=st=1707124266~exp=1707124866~hmac=3afb9c299c834fb9a0d7ecfa29a4fd7612b02dca929e7296728f1d38871ebff5"
                      alt="TopCollection"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col2">
                    <h2>Jhon Smith</h2>
                    <p className="mean_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      porro quas assumenda voluptate sed quam od placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src="https://img.freepik.com/free-photo/handsome-young-man-white-t-shirt-cross-arms-chest-smiling-pleased_176420-21607.jpg"
                      alt="TopCollection"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col2">
                    <h2>Jhon Smith</h2>
                    <p className="mean_p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      porro quas assumenda voluptate sed quam od placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* ******************** */}
      </div>
    </>
  );
};

export default Testimonial;
