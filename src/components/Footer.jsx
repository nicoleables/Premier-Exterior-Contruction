// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "../styles/footer.css";
import "../styles/global.css";
import facebook from "../assets/footer/images/footerfacebooklogo.png";
import '../styles/modal.css';

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errMessage, setErrorMessage] = useState("");

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setFormSubmitted(false);
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    // Extract individual values from the form data
    const fullName = formData.get("fullName");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const address = formData.get("address");
    const preferredDate = formData.get("preferredDate");
    const services = Array.from(formData.entries())
      .filter(([key, value]) => key.startsWith("service") && value)
      .map(([, value]) => value)
      .join(", ");
    const help = formData.get("help");
  
    if (!fullName || !phoneNumber || !email || !address || !preferredDate || !help) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
  
    // Ensure the date is valid before formatting
    if (preferredDate) {
      const date = new Date(preferredDate);
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  
      // Create a templateParams object for EmailJS
      const templateParams = {
        fullName,
        phoneNumber,
        email,
        address,
        preferredDate: formattedDate, // Use the formatted date here
        services,
        help,
      };
  
      // Log the template parameters to ensure they are correct
      console.log('Sending templateParams:', templateParams);
  
      emailjs.send("service_vaqr1un", "template_4yrub3r", templateParams, "KMzz-w9adu3bolNiq")
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormSubmitted(true);
        })
        .catch((error) => {
          console.error('FAILED...', error); // Log the error details
          setErrorMessage("Failed to send message. Please try again.");
        });
  
      event.target.reset();
    } else {
      setErrorMessage("Invalid date provided.");
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
          <span>Sunday: 8:00am - 10:00pm</span>
          <span>Monday: 8:00am - 10:00pm</span>
          <span>Tuesday: 8:00am - 10:00pm</span>
          <span>Wednesday: 8:00am - 10:00pm</span>
          <span>Thursday: 8:00am - 10:00pm</span>
          <span>Friday: 8:00am - 10:00pm</span>
          <span>Saturday: 8:00am - 10:00pm</span>
        </div>
          </div>
         <div className="red-line"></div>
      <div className="footer-bottom">
        <p>© 2024 Premier Exterior Construction. All Rights Reserved.</p>
      </div>
    
      
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Send us a text</h2>
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" id="phoneNumber" name="phoneNumber" />
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
                  <div className="checkbox">
                    <label htmlFor="service1">Carports</label>
                    <input type="checkbox" id="service1" name="service1" value="Carports" />
                  </div>
                  <div className="checkbox">
                    <label htmlFor="service2">Shops</label>
                    <input type="checkbox" id="service2" name="service2" value="Shops" />
                  </div>
                  <div className="checkbox">
                    <label htmlFor="service3">Barndominiums</label>
                    <input type="checkbox" id="service3" name="service3" value="Barndominiums" />
                  </div>
                  <div className="checkbox">
                    <label htmlFor="service4">Roofing</label>
                    <input type="checkbox" id="service4" name="service4" value="Roofing" />
                  </div>
                  <div className="checkbox">
                    <label htmlFor="service5">Siding</label>
                    <input type="checkbox" id="service5" name="service5" value="Siding" />
                  </div>
                  <div className="checkbox">
                    <label htmlFor="service6">Windows</label>
                    <input type="checkbox" id="service6" name="service6" value="Windows" />
                  </div>
                  <div className="checkbox">
                    <label htmlFor="service7">Welding</label>
                    <input type="checkbox" id="service7" name="service7" value="Welding" />
                  </div>
                  <div className="checkbox">
                    <label htmlFor="service8">Fencing</label>
                    <input type="checkbox" id="service8" name="service8" value="Fencing" />
                  </div>
                </div>
              </div>
              <div className="form-row full-width">
                <label htmlFor="help">How can we help?</label>
                <textarea id="help" name="help" rows="4"></textarea>
              </div>
              <div className="form-row">
                <button type="submit">Send</button>
              </div>
            </form>
            {errMessage && (
                <div className="error-text">{errMessage}</div>
              )}
              {formSubmitted && (
                <div className="success-text">Message sent successfully!</div>
              )}
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;

export default Footer;

