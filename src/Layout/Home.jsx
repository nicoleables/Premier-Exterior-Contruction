// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/home.css";
import "../styles/global.css";
import coverimage from "../assets/home/images/coverphoto.jpg";

const Home = () => {
  return (
    <div className="home">
        <img className="background-image" src={coverimage} alt="Background Image" />
        <div className="overlay">
        <div className="overlay-text-container">
        <div className="overlay-text">
            <span>PREMIER</span>
            <span>EXTERIOR</span>
            <span>CONSTRUCTION</span>
          </div>
          <p className="overlay-paragraph">
            Based in Goldthwaite, Premier Exterior Construction 
            offers top-notch welding services to clients in the 
            surrounding areas. Trust us for all your metal fabrication 
            needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;






