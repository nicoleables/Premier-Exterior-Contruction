// src/components/Navbar2.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar2() {
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  // Check if we're on the AllPhotos page
  const isAllPhotos = location.pathname === '/allphotos';

  return (
    <nav className="navbar2">
      <ul>
        <li className="nav-item2">
          <Link className="nav-link2" to="/">Home</Link>
        </li>

        {isAllPhotos ? (
          <li className="nav-item2">
            <a className="nav-link2" onClick={() => scrollToSection('photos')}>Photos</a>
          </li>
        ) : (
          <>
            <li className="nav-item2">
              <a className="nav-link2" onClick={() => scrollToSection('about2')}>About</a>
            </li>
            <li className="nav-item2">
              <a className="nav-link2" onClick={() => scrollToSection('reviews')}>Reviews</a>
            </li>
          </>
        )}

        <li className="nav-item2">
          <a className="nav-link2" onClick={() => scrollToSection('book')}>Book</a>
        </li>
        <li className="nav-item2">
          <a className="nav-link2" onClick={() => scrollToSection('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar2;
