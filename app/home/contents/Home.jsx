'use client';

import React from 'react'
import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection';
import TangibleResultsSection from '../components/TangibleResultsSection';
import ServiceOfferingsSection from '../components/ServiceOfferingsSection';
import ClientsSwiper from '../components/ClientsSwiper';
import WhyPartner from '../components/WhyPartner';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import SuccessStories from '../components/SuccessStories';
import ContactForm from '../components/ContactForm';




const Home = () => {
  return (
    <div>
    
        <Hero/>
         <IntroSection/>
         <TangibleResultsSection/>
         <ServiceOfferingsSection/>
         <ClientsSwiper/>
        <WhyPartner/>
        <Testimonials/>
        <Partners/>
        <SuccessStories/>
        <ContactForm/>
         
        </div>
  )
}

export default Home