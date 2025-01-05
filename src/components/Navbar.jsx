/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prop-types
function Navbar({ scrollToSection, refs }) {
  const location = useLocation();

  const handleClick = (scrollRef) => {
    if (location.pathname === "/") {
      scrollToSection(scrollRef);
    } else {
      window.location.href = "/"; // Navigate to home page and then scroll
      setTimeout(() => {
        scrollToSection(scrollRef);
      }, 0);
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleClick(refs.aboutRef)}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleClick(refs.servicesRef)}>Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleClick(refs.bookRef)}>Book</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleClick(refs.projectsRef)}>Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleClick(refs.reviewsRef)}>Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleClick(refs.questionsRef)}>Questions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleClick(refs.footerRef)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;







