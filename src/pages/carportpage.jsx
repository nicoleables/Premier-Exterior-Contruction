/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Reviews from '../Layout/Reviews.jsx';
import Book from '../Layout/Book.jsx';
import Footer from '../components/Footer.jsx'; 
import '../styles/pages.css';
import '../styles/modal.css';
import '../styles/global.css';
import Carport from "../assets/services/images/carport.jpg";

const CarportPage = () => {
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
    <div>
      <main className="main-content2">
        <div className="image-container2">
          <img src={Carport} alt="Carport" className="page2img2" />
          <div className="overlay-text2">
            <h1>Services</h1>
            <h2>Carport Construction</h2>
            <p>Our Carport construction service provides homeowners with a sturdy and reliable solution to protect their vehicles from the elements. Our skilled team ensures that every carport is built with the highest quality materials and craftsmanship.</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>
        <div className="aboutp2" id="about2">
          <div className="paragrapgp2">
            <p>If you're looking for a practical and affordable way to protect your vehicles from the harsh weather, our carport construction service is the perfect solution. Our carports are designed to be durable, versatile, and customizable to suit your specific needs.</p>
            <p>Whether you need a single-car carport or a larger structure to accommodate multiple vehicles, we offer a variety of designs and materials to choose from. Our carports provide excellent protection from rain, snow, and sun, ensuring your vehicles remain in top condition year-round.</p>
            <p>In addition to vehicle protection, carports can also serve as a covered outdoor space for storage, workshops, or recreational areas. The open design allows for easy access and ventilation while providing shelter from the elements.</p>
            <p>Investing in a carport is a smart choice for homeowners looking to enhance the functionality and value of their property. Contact us today to learn more about our carport construction services and how we can help you find the perfect solution for your needs.</p>
          </div>
        </div>
        <div id="reviews"> 
          <Reviews /> 
        </div>
        <div id="book"> 
          <Book /> 
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
      </main>
      <div id="contact"> 
        <Footer /> 
      </div> 
    </div>
  );
};

export default CarportPage;

















