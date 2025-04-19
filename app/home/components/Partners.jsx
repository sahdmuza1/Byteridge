'use client';

import React from 'react';
import './Partners.css';

const partners = [
  { name: 'CAST', logo: '/logos/cast.png' },
  { name: 'PubNub', logo: '/logos/pubnub.png' },
  { name: 'Allegis', logo: '/logos/allegis.png' },
  { name: 'Zededa', logo: '/logos/zededa.png' },
  { name: 'Neo4j', logo: '/logos/neo4j.png' },
  { name: 'Cloudanix', logo: '/logos/cloudanix.png' },
  { name: 'Confluent', logo: '/logos/confluent.png' },
];

const Partners = () => {
  return (
    <section className="partners-section">
      <h2 className="partners-heading">OUR PARTNERS</h2>
      <p className="partners-description">
        At Byteridge, we deeply value our collaborations with industry leaders who share our vision for excellence.
        Our partners are catalysts to our success, and we take pride in growing together. We unlock new possibilities
        and create meaningful impact in the ever-evolving technology landscape.
      </p>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div className="partner-logo-card" key={index}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
