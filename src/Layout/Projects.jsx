// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom';
import "../styles/projectCard.css";
import "../styles/global.css";  
import Roof2 from "../assets/projects/images/roof2.jpg";
import Screen from "../assets/projects/images/screen.jpg";
import Balcony from "../assets/projects/images/balcony.jpg";
import Entrance from "../assets/projects/images/entrance.jpg";
import Fence2 from "../assets/projects/images/fence2.jpg";
import Kitchen from "../assets/projects/images/kitchen.jpg";
import Ramp from "../assets/projects/images/ramp.jpg";
import Ramp2 from "../assets/projects/images/ramp2.jpg";

const Projects = () => {
  
  return (
    <div className="project">
      <div className="projects-intro">
      <h1>SEE WHY OUR CUSTOMERS LOVE US</h1>
      <p>OUR BEST WORK</p>
      <Link to="/allphotos">
          <button className="projectbtn">SEE ALL PHOTOS ⮕</button>
          </Link>
      </div>
      <div className="project-container">
      <ul>
        <li>
            <img src={Roof2} alt="Roof" className="projecticons"></img>
        </li>
        <li>
            <img src={Screen} alt="screen" className="projecticons"></img>
        </li>
        <li>
            <img src={Balcony} alt="Balcony" className="projecticons"></img>
        </li>
        <li>
            <img src={Entrance} alt="entrance" className="projecticons"></img>
        </li>
        <li>
            <img src={Fence2} alt="fence2" className="projecticons"></img>
        </li>
        <li>
            <img src={Kitchen} alt="kitchen" className="projecticons"></img>
        </li>
        <li>
            <img src={Ramp} alt="ramp" className="projecticons"></img>
        </li>
        <li>
            <img src={Ramp2} alt="ramp2" className="projecticons"></img>
        </li>
    </ul>
    </div>
    </div>
  );
};

export default Projects;