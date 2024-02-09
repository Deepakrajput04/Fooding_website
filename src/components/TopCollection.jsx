import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/menu1.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const TopCollection = () => {
  return (
    <>
      <div className="container-fluid TopCollections py-3 py-lg-0" id="Menu">
        <h1 className="main-heading text-center">
          <span>Top</span> Colletions
        </h1>
        <p className="text-center main_P">All our meals in one delicios snap</p>
        <div className="container py-md-5 Colletions1">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* ************************** */}
        <div className="container py-md-5 Colletions2">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="TopCollection" className="img-fluid" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* ************************** */}
      </div>
    </>
  );
};

export default TopCollection;
