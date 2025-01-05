// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom';

import "../styles/services.css";
import "../styles/global.css";  
import Carport from "../assets/services/images/carport.jpg";
import Barn from "../assets/services/images/barndominiums.jpg";
import Fence from "../assets/services/images/fencing.jpg";
import Roof from "../assets/services/images/roofing.jpg";
import Shop from "../assets/services/images/shop.jpg";
import Siding from "../assets/services/images/siding.jpg";
import Welding from "../assets/services/images/welding.jpg";
import Window from "../assets/services/images/windows.jpg";

const Services = () => {
  return (
    <div className="service">
      <h1>WHAT WE ARE BEST AT</h1>
      <p>OUR SERVICES</p>
      <ul className="serviceicons">
        <li>
        <Link to="/carportpage" className="icons">
          <img src={Carport} alt="Carport Icon" className="icons" />
          <h2>Carports</h2>
          </Link>
        </li>
        <li>
        <Link to="/shoppage" className="icons">
          <img src={Shop} alt="Shop Icon" className="icons" />
          <h2>Shops</h2>
          </Link>
        </li>
        <li>
        <Link to="../barnpage" className="icons">
            <img src={Barn} alt="Barn Icon" className="icons" />
            <h2>Barndominiums</h2>
          </Link>
        </li>
        <li>
        <Link to="/roofpage" className="icons">
          <img src={Roof} alt="Roof Icon" className="icons" />
          <h2>Roofing</h2>
          </Link>
        </li>
        <li>
        <Link to="/sidingpage" className="icons">
          <img src={Siding} alt="Siding Icon" className="icons" />
          <h2>Siding</h2>
          </Link>
        </li>
        <li>
        <Link to="/windowpage" className="icons">
          <img src={Window} alt="Window Icon" className="icons" />
          <h2>Windows</h2>
          </Link>
        </li>
        <li>
        <Link to="/weldingpage" className="icons">
          <img src={Welding} alt="Welding Icon" className="icons" />
          <h2>Welding</h2>
          </Link>
        </li>
        <li>
        <Link to="/fencepage" className="icons">
          <img src={Fence} alt="Fence Icon" className="icons" />
          <h2>Fencing</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Services;




