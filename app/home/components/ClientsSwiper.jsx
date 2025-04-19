'use client';

import React from 'react';
import './ClientsSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const logos = [
  '/logos/microsoft.png',
  '/logos/adp.png',
  '/logos/tata.png',
  '/logos/hindware.png',
  '/logos/philips.png',
  '/logos/pinelabs.png',
  '/logos/iifl.png',
  '/logos/lendingkart.png',
  '/logos/cashe.png',
  '/logos/rapipay.png',
  '/logos/chqbook.png',
  '/logos/techstars.png',
  '/logos/moglix.png',
  '/logos/boat.png',
  '/logos/deltek.png',
  '/logos/ccmr3.png',
  '/logos/vas.png',
  '/logos/ibot.png',
  '/logos/moonfrog.png',
  '/logos/merilytics.png',
];

const ClientsSwiper = () => {
  return (
    <section className="clients-section">
      <h2 className="clients-title">OUR CUSTOMERS</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className="client-swiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="client-logo-box">
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientsSwiper;
