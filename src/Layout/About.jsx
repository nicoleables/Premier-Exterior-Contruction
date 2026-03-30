// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/about.css";
import "../styles/global.css";
import image from "../assets/aboutus/images/aboutpic.jpg";
import facebook from "../assets/aboutus/images/facebook.png";
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
          At Premier Exterior Construction, we are a skilled and experienced construction team proudly serving Goldthwaite, Texas, 
          and the surrounding areas. We specialize in a wide range of exterior construction services for both residential and commercial 
          properties — from doors and windows to decks, patios, roofing repairs, and more.

          Our team is committed to quality craftsmanship, clear communication, and dependable service on every project, no matter the size. We take pride in our attention to detail and our dedication to customer satisfaction, delivering durable, functional, and visually appealing results you can trust.
          </p>
          <div className="facebook-logo">
            <a href="https://www.facebook.com/profile.php?id=100089862015650" target="_blank" rel="noopener noreferrer" className="facebook-link">
              <img src={facebook} alt="logo" className="facebooklogo" />
            </a>
          </div>
        </div>
        <div className="about-pic">
          <img src={image} alt="about pic" className="aboutpic" />
        </div>
      </div>
    </div>
  );
}

export default About;
