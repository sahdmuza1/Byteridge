/*

'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper styles
import 'swiper/css/navigation'; // optional: for arrows
import 'swiper/css/pagination'; // optional: for dots

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="w-full px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="bg-blue-500 text-white p-10 rounded-lg">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 text-white p-10 rounded-lg">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 text-white p-10 rounded-lg">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-500 text-white p-10 rounded-lg">Slide 4</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;*/


import React from 'react'

const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero