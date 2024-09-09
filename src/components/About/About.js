import React, { useState } from 'react';
import CommonNinjaWidget from '../Widgets/Widgets';
import './About.css'; // Assuming you have a CSS file for styling

function AboutUs() {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showObjectives, setShowObjectives] = useState(false);
  const [showOurVision, setShowOurVision] = useState(false);

  const toggleAboutUs = () => {
    setShowAboutUs(!showAboutUs);
  };

  const toggleObjectives = () => {
    setShowObjectives(!showObjectives);
  };

  const toggleOurVision = () => {
    setShowOurVision(!showOurVision);
  };

  return (
    <div className="about-page">
      <CommonNinjaWidget />
      <div className="about-container">
        <div className="section">
          <h2 className="section-heading" onClick={toggleAboutUs}>About Us</h2>
          {showAboutUs && (
            <div className="about-content">
              
              <p>Krithomedh, from the department of CSE-AIML&IoT, a focused technical club, aims to foster a vibrant community of innovators and tech enthusiasts.</p>
              <p>We organize a variety of events including coding contests, hackathons, seminars, and workshops to equip members with cutting-edge skills and hands-on experience.</p>
              <p>Our mission is to create an engaging platform where students can explore their skills, collaborate on projects, and prepare for successful careers in technology.</p>
              <p>Established: 2022</p>
              <p>Total number of members: 105</p>
            </div>
          )}
        </div>

        <div className="section">
          <h2 className="section-heading" onClick={toggleObjectives}>Objectives</h2>
          {showObjectives && (
            <div className="about-content">
              <p>
                Our mission is to empower individuals and organizations through data-driven insights and innovations. We aim to foster collaboration, provide cutting-edge solutions, and drive positive change in the industry.
              </p>
            </div>
          )}
        </div>

        <div className="section">
          <h2 className="section-heading" onClick={toggleOurVision}>Our Vision</h2>
          {showOurVision && (
            <div className="about-content">
              <p>
                Krithomedh, a dynamic technical club within the Department of CSE-AIML&IoT, envisions fostering a vibrant community of innovators and tech enthusiasts. Our mission is to create an engaging platform where students can explore cutting-edge skills, collaborate on projects, and prepare for successful careers in technology. Through coding contests, hackathons, seminars, and workshops, we aim to equip our members with hands-on experience and empower them to shape the future of AI and machine learning.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="social-icons">
        <p>Follow us on social media:</p>
        <a href="https://www.instagram.com/krithomedh_vnrvjiet/" target="_blank" rel="noopener noreferrer">
          
          <img src="data:image/jpeg;base64,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" alt='Instagram'/>
        </a>
        <a href="https://in.linkedin.com/in/krithomedh-aiml-and-iot-9604912a0" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,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" alt="LinkedIn" />
        </a>
        {/* Add more social media links as needed */}
      </div>
    </div>
  );
}

export default AboutUs;