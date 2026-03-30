// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet"; // <-- import Helmet
import "../styles/home.css";
import "../styles/global.css";
import coverimage from "../assets/home/images/coverphoto.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Premier Exterior Construction | Goldthwaite, TX</title>
        <meta
          name="description"
          content="Premier Exterior Construction provides carports, shops, barndominiums, roofing, siding, windows, welding, and fencing in Goldthwaite, TX, Austin, Fort Worth, Arlington, Killeen, Waco, Abilene, Round Rock, San Angelo, and Temple."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Premier Exterior Construction",
              "image": "https://yourdomain.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Goldthwaite",
                "addressRegion": "TX",
                "postalCode": "76844",
                "addressCountry": "US"
              },
              "telephone": "123-456-7890",
              "areaServed": [
                "Goldthwaite, TX",
                "Austin, TX",
                "Fort Worth, TX",
                "Arlington, TX",
                "Killeen, TX",
                "Waco, TX",
                "Abilene, TX",
                "Round Rock, TX",
                "San Angelo, TX",
                "Temple, TX"
              ],
              "url": "https://yourdomain.com",
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>

      {/* Page content */}
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






