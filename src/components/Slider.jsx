import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Slider.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider({ sliderImages }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={`/img/${image}`} alt="project-screenshot" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
