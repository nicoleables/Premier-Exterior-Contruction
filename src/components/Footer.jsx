// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/footer.css";
import "../styles/global.css";
import facebook from "../assets/footer/images/footerfacebooklogo.png";
import '../styles/modal.css';

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [errMessage, setErrorMessage] = useState(""); // ✅ added
  const [formSubmitted, setFormSubmitted] = useState(false); // ✅ added

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setErrorMessage("");
    setFormSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");       // clear previous errors
    setFormSubmitted(false);   // reset submission state

    const formData = new FormData(event.target);
    const fullName = formData.get("fullName").trim();
    const phoneNumber = formData.get("phoneNumber").trim();

    if (!fullName || !phoneNumber) {
      setErrorMessage("Please enter your name and phone number.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xnjopeqk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setFormSubmitted(true);
        event.target.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <footer className="footer">
      <div className="footerintro">
        <div className="logo-name">
          <picture className="flex pr-6">
            <source type="image/webp" srcSet="https://d3p2r6ofnvoe67.cloudfront.net/fit-in/190x190/filters:strip_e/filters:format(webp)/media/a81edb72-58d9-4975-8f1e-0aa7d1867c04.png, https://d3p2r6ofnvoe67.cloudfront.net/fit-in/380x380/filters:strip_e/filters:format(webp)/media/a81edb72-58d9-4975-8f1e-0aa7d1867c04.png 2x" alt="Footer logo" />
            <img className="logo-img" src="https://d3p2r6ofnvoe67.cloudfront.net/fit-in/190x190/filters:strip_e/filters:no_upscale()/media/a81edb72-58d9-4975-8f1e-0aa7d1867c04.png" width="80" height="80" alt="Footer logo" loading="lazy" />
          </picture>
          <div className="footerheading">
            <h1>Premier Exterior Construction</h1>
            <p>Goldthwaite, Texas, US</p>
          </div>
        </div>
        <div className="footer-box-container">
          <div className="contact-box">
            <span className="footerboxtx">CONTACT US</span>
            <button className="footerbtn" onClick={openModal}>BOOK NOW</button>
          </div>
        </div>
        <div className="facebook-logofooter">
          <a href="https://www.facebook.com/profile.php?id=100089862015650" target="_blank" rel="noopener noreferrer" className="facebook-link">
            <img src={facebook} alt="Facebook logo" className="facebooklogofooter" />
          </a>
        </div>
      </div>

      {/* Footer info */}
      <div className="footerinfo">
        <div className="company">
          <h2>COMPANY</h2>
          <span>Home</span>
          <span>Galleries</span>
          <span>Reviews</span>
        </div>
        <div className="services">
          <h2>SERVICES</h2>
          <span>Carports</span>
          <span>Shops</span>
          <span>Barndominiums</span>
          <span>Roofing</span>
          <span>Siding</span>
          <span>Windows</span>
          <span>Welding</span>
          <span>Fencing</span>
        </div>
        <div className="areas">
          <h2>SERVICE AREAS</h2>
          <span>Goldthwaite, TX</span>
          <span>Austin, TX</span>
          <span>Fort Worth, TX</span>
          <span>Arlington, TX</span>
          <span>Killeen, TX</span>
          <span>Waco, TX</span>
          <span>Abilene, TX</span>
          <span>Round Rock, TX</span>
          <span>San Angelo, TX</span>
          <span>Temple, TX</span>
        </div>
        <div className="hours">
          <h2>HOURS</h2>
          <span>Open Every Day 8am-8pm</span>
        </div>
      </div>

      <div className="red-line"></div>
      <div className="footer-bottom">
        <p>© 2024 Premier Exterior Construction. All Rights Reserved.</p>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Send us a message</h2>
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" id="phoneNumber" name="phoneNumber" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" />
                </div>
              </div>
              <div className="form-row full-width">
                <label htmlFor="preferredDate">Preferred Date of Service</label>
                <input type="date" id="preferredDate" name="preferredDate" />
              </div>
              <div className="form-row full-width">
                <label>Services:</label>
                <div className="checkbox-group">
                  {["Carports","Shops","Barndominiums","Roofing","Siding","Windows","Welding","Fencing"].map((service, i) => (
                    <div className="checkbox" key={i}>
                      <label htmlFor={`service${i+1}`}>{service}</label>
                      <input type="checkbox" id={`service${i+1}`} name={`service${i+1}`} value={service} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-row full-width">
                <label htmlFor="help">Tell us about your project / questions:</label>
                <textarea id="help" name="help" rows="4"></textarea>
              </div>
              <div className="form-row">
                <button type="submit">Send</button>
              </div>
              {errMessage && <div className="error-text">{errMessage}</div>}
              {formSubmitted && <div className="success-text">Message sent successfully!</div>}
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;


