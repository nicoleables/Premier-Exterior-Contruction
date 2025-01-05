// Navbar2.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar2() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Adjust for the height of the header
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar2">
      <ul>
        <li className="nav-item2">
          <Link className="nav-link2" to="/">Home</Link>
        </li>
        <li className="nav-item2">
          <a className="nav-link2" onClick={() => scrollToSection('about2')}>About</a>
        </li>
        <li className="nav-item2">
          <a className="nav-link2" onClick={() => scrollToSection('reviews')}>Reviews</a>
        </li>
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


