import React from 'react';
import './IntroSection.css'; 

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <h2 className="highlight-title">
          <span className="highlight-bar"></span>
          ELEVATING DIGITAL EXPERIENCES
        </h2>
        <p className="intro-text">
          For over a decade, Byteridge has been a trusted partner to businesses across diverse industries,
          delivering bespoke software solutions that yield tangible outcomes. Leveraging our extensive experience,
          we empower clients to enhance efficiency, elevate user experiences, and achieve a competitive edge.
          Our proficiency extends from developing custom product solutions to application modernisation,
          mobile app development, and pioneering Gen AI technology.
        </p>
        <p className="intro-text">
          Recognized as a Great Place to Work®, we foster a collaborative and innovative environment that
          underpins our clients’ success. Our commitment to employee satisfaction translates directly into
          exceptional results for our partners.
        </p>
        <p className="intro-text">
          Explore our comprehensive suite of services and unlock your digital potential with Byteridge
          as your trusted partner.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
