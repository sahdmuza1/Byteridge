import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sachin Somaiya',
    position: 'Manager, Tata Strategic Management Group',
    location: 'Mumbai, India',
    company: 'TATA',
    logo: '🔷', // You can replace this with actual logo if needed
    text: 'Understanding majority of our requirements, providing alternative routes/ methods, fairly good quality, deliver on timelines (10 on 10 for that!).',
    image: '/images/sachin.jpg',
    color: '#000066',
  },
  {
    name: 'Juhee Ahmed',
    position: 'Sr. Manager, Microsoft India',
    company: 'Microsoft',
    logo: '🟦',
    text: 'Thanks to Byteridge for the high quality and time bound work delivered on many projects over the past 10 years...',
    image: '/images/juhee.jpg',
    color: '#0078d4',
  },
  {
    name: 'Ramnath Misra',
    position: 'Head Marketing & Strategy, Hindware India',
    company: 'Hindware',
    logo: '🔴',
    text: 'It was my first experience with app development, and Byteridge made sure everything went smoothly.',
    image: '/images/ramnath.jpg',
    color: '#e60000',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">HEAR IT FROM OUR CUSTOMERS</h2>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} className="testimonial-image" />
            <h3>{item.name}</h3>
            <p className="testimonial-position">{item.position}</p>
            <div className="testimonial-company" style={{ color: item.color }}>
              {item.company}
            </div>
            <p className="testimonial-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
