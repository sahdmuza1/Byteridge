import React from 'react';
import './WhyPartner.css';

const data = [
  {
    title: 'Unmatched Expertise',
    desc: "Leverage our team's wealth of experience and expertise in crafting scalable, bespoke solutions that provide enduring value over the long haul, ensuring continued success.",
    icon: '💻',
  },
  {
    title: 'Strategic Approach',
    desc: 'We believe in technology that drives results. Our agile approach ensures we adapt to market changes and your evolving needs, maximizing opportunities for growth.',
    icon: '🔄',
  },
  {
    title: 'Client-Centric Focus',
    desc: 'Your success is our priority. We collaborate closely with you to understand your goals, ensuring our solutions not only exceed your expectations but also deliver measurable results.',
    icon: '🎯',
  },
  {
    title: 'Continuous Innovation',
    desc: 'Stay ahead of the curve with our deep industry knowledge and technological expertise. We embrace emerging technologies like AI and ML to future-proof your digital initiatives.',
    icon: '🚀',
  },
];

const WhyPartner = () => {
  return (
    <section className="why-partner-section">
      <h2 className="why-title">WHY PARTNER WITH BYTERIDGE?</h2>
      <div className="why-grid">
        {data.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPartner;
