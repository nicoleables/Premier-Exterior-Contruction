// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/about.css";
import "../styles/global.css";
import aboutpic from '../assets/aboutus/images/aboutpic.webp';
import facebook from '../assets/aboutus/images/facebook.png';
import insured from "../assets/aboutus/images/insuredpic.png";
import hands from "../assets/aboutus/images/handspic.png";
import local from "../assets/aboutus/images/localpic.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-symbols">
        <div className="symbol-item">
          <img src={insured} alt="insured" className="symbol-image" />
          <span className="symbol-text">Insured</span>
        </div>
        <div className="symbol-item">
          <img src={hands} alt="hands" className="symbol-image" />
          <span className="symbol-text">Family Owned</span>
        </div>
        <div className="symbol-item">
          <img src={local} alt="local" className="symbol-image" />
          <span className="symbol-text">Locally Owned</span>
        </div>
      </div>
      <div className="content-container">
        <div className="about-content">
          <h1>ABOUT US</h1>
          <p>
            At Premier Exterior Construction, we are a team of skilled welders serving Goldthwaite, Texas, and surrounding areas. With our expertise in welding, we are dedicated to providing top-quality exterior construction services for residential and commercial projects. Our commitment to customer satisfaction and attention to detail sets us apart in the industry.
          </p>
          <div className="facebook-logo">
            <a href="https://www.facebook.com/profile.php?id=100089862015650" target="_blank" rel="noopener noreferrer" className="facebook-link">
              <img src={facebook} alt="logo" className="aboutfacebooklogo" />
            </a>
          </div>
        </div>
        <div className="about-pic">
          <img src={aboutpic} alt="about pic" className="aboutpic" />
        </div>
      </div>
    </div>
  );
}

export default About;


