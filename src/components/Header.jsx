/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/header.css';
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
function Header({ scrollToSection, refs }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 0) {
        header.classList.remove("header-default");
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
        header.classList.add("header-default");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header header-default" id="header">
      <div className="header-container">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="header-logo-link">
          <img src="/premier logo.webp" alt="Premier Exterior Construction Logo" className="header-logo" />
        </Link>
        <Navbar className="navbar" scrollToSection={scrollToSection} refs={refs} />
      </div>
    </header>
  );
}

export default Header;













