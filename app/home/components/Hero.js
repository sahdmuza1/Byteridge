'use client';

import React from 'react';
import './HeroSlider.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    heading: 'Building Excellence in Digital',
    paragraph: 'We partner with clients to build digital products, prioritizing excellence at every stage.',
    image: '/BG-1.webp',
    buttonText: 'Explore Our Services'
  },
  {
    heading: 'Application Modernisation for an Enterprise',
    paragraph: 'Explore how we aided an enterprise in their application modernisation journey',
    image: '/B webp G-3.webp',
    buttonText: 'Explore Now '
  },
  {
    heading: 'Our Impact for Fintech Clients',
    paragraph: 'Discover our innovative product development for a new-age fintech organization',
    image: '/BG-1.webp',
    buttonText: 'Read More'
  },
  {
    heading: 'Our Brand',
    paragraph: 'Learn about our transformed identity, vision, and journey to who we are today',
    image: '/BG5.webp',
    buttonText: 'Read More'
  }
];

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
        {slides.map((slide, i) => {
          let backgroundImage;

          if (slide.heading === 'Innovative Solutions, Trusted Delivery') {
            backgroundImage = `url('/B webp G-3.webp'), url('/BG-3-Overlay.webp')`;
          } else if (slide.heading === 'Empowering Your Digital Journey') {
            backgroundImage = `url('/BG-1.webp'), url('/BG-4.webp')`;
          } else {
            backgroundImage = `url(${slide.image})`;
          }

          return (
            <SwiperSlide key={i}>
              <div
                className="slide-content"
                style={{
                  backgroundImage,
                  backgroundSize: 'cover, cover',
                  backgroundPosition: 'center, center',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingLeft: '60px',
                }}
              >
                <div className="text-box">
                  <h1 className="heading">{slide.heading}</h1>
                  <p className="para">{slide.paragraph}</p>
                  <button className="cta-button">{slide.buttonText}</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
