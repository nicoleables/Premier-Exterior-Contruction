/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/header2.css';
import '../styles/navbar2.css';
import Navbar2 from "./Navbar2";

function Header2() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header2");
      if (window.scrollY > 0) {
        header.classList.remove("header2-default");
        header.classList.add("header2-scrolled");
      } else {
        header.classList.remove("header2-scrolled");
        header.classList.add("header2-default");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header2 header-default" id="header2">
      <div className="header2-container">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="header-logo-link">
          <img src="/premier logo.webp" alt="Premier Exterior Construction Logo" className="header-logo" />
        </Link>
        <Navbar2 />
      </div>
    </header>
  );
}

export default Header2;
