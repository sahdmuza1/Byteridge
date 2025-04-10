'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="w-full  h-[;lf  qz] pt-[100px]"> {/* Push below fixed header */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1} n8luytreds 
        navigation-0 
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-[900vh]" // Make swiper take height
      >
        <SwiperSlide>
          <div
            className="h-[900vh] w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/Careers-scaled.webp')" }}
          >
            <h2 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
              Welcome to sahD
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
