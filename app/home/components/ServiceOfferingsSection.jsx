import React from 'react';
import './ServiceOfferingsSection.css';

const services = [
  {
    title: 'Product Studio',
    description:
      'Transforming ideas into impactful digital products. Our Product Studio offers end-to-end product development, from conceptualization to launch, tailored to your needs.',
    icon: '/icons/gear.svg', // replace with actual icon paths
  },
  {
    title: 'Application Modernisation',
    description:
      "Modernise applications for enhanced performance, improved user experience, and a competitive edge. Byteridge's expertise ensures a smooth transition to modern technologies.",
    icon: '/icons/modernization.svg',
  },
  {
    title: 'Mobile App Development',
    description:
      'Unlock the full potential of your digital presence with our tailored mobile app development solutions. Experience effortless connectivity and heightened user engagement like never before.',
    icon: '/icons/mobile.svg',
  },
  {
    title: 'Gen AI',
    description:
      "Leverage the power of AI to transform your business. Byteridge's Gen AI service delivers advanced AI solutions to streamline operations and accelerate growth.",
    icon: '/icons/ai.svg',
  },
];

const ServiceOfferingsSection = () => {
  return (
    <section className="services-section">
      <div className="services-wrapper">
        <h2 className="services-title">OUR SERVICE OFFERINGS</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferingsSection;
