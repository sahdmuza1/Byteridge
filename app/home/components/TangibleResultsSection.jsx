'use client';
import React from 'react';
import './TangibleResultsSection.css'

const TangibleResultsSection = () => {
  return (
    <section className="results-section">
      <div className="container results-container">
        <div className="results-left">
          <div className="highlight-title">
            <div className="highlight-bar"></div>
            <span>DRIVING TANGIBLE RESULTS</span>
          </div>
          <p className="intro-text">
            Our solutions have consistently delivered measurable outcomes, and our metrics speak to our commitment to driving tangible results and client satisfaction.
          </p>

          <div className="stats-grid">
            <div className="stat-box">
              <h2>150+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <h2>130</h2>
              <p>Products & Solutions</p>
            </div>
            <div className="stat-box">
              <h2>15+</h2>
              <p>Years of Proven Excellence</p>
            </div>
            <div className="stat-box">
              <h2>4.8/5</h2>
              <p>Net Promoter Score</p>
            </div>
          </div>
        </div>

        <div className="results-right">
          <div className="review-card">
            <img src="/goodfirms-1.webp" alt="GoodFirms" />
            <p>5.0 ⭐</p>
          </div>
          <div className="review-card">
            <img src="/clutch.webp" alt="Clutch" />
            <p>4.9 ⭐</p>
          </div>
          <div className="review-card">
            <img src="/glassdoor-1.webp" alt="Glassdoor" />
            <p>4.7 ⭐</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TangibleResultsSection;
