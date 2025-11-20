// src/pages/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-container">
        <h1>About Us</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Welcome to Our Journey</h2>
            <p>
              We are a passionate team of computer science students from Kalvium, dedicated to
              innovation, collaboration, and excellence in technology. Our journey began with a
              shared vision to create meaningful solutions and push the boundaries of what's possible.
            </p>
            <h3>Our Mission</h3>
            <p>
              To empower individuals and organizations through cutting-edge technology solutions while
              fostering a culture of continuous learning and growth.
            </p>
            <h3>Our Values</h3>
            <ul className="values-list">
              <li>Innovation through collaboration</li>
              <li>Excellence in execution</li>
              <li>Continuous learning and growth</li>
              <li>Integrity in all we do</li>
              <li>Creating meaningful impact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;