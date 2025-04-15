'use client';

import React from 'react';
import './HeroSlider.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const HeroSlider = () => {
  return (
    <div className="hero-slider-wrapper">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        {[1, 2, 3].map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="slide-content">
              <h1>Our Brand</h1>
              <p>
                Learn about our transformed identity, vision, and journey to who we are today.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
