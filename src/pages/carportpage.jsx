/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");       // clear previous errors
    setFormSubmitted(false);   // reset submission state
  
    const formData = new FormData(event.target);

    // Basic validation for required fields
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
        event.target.reset(); // clear form
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
    <div>
      <main className="main-content2">
        {/* Cover Section */}
        <div className="image-container2">
          <img src={Carport} alt="Carport" className="page2img2" />
          <div className="overlay-text2">
            <h1>Services</h1>
            <h2>Carport Construction</h2>
            <p>Our Carport construction service provides homeowners with a sturdy and reliable solution to protect their vehicles from the elements. Our skilled team ensures that every carport is built with the highest quality materials and craftsmanship.</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>

        {/* About Section */}
        <div className="aboutp2" id="about2">
          <div className="paragrapgp2">
            <p>If you're looking for a practical and affordable way to protect your vehicles from the harsh weather, our carport construction service is the perfect solution. Our carports are designed to be durable, versatile, and customizable to suit your specific needs.</p>
            <p>Whether you need a single-car carport or a larger structure to accommodate multiple vehicles, we offer a variety of designs and materials to choose from. Our carports provide excellent protection from rain, snow, and sun, ensuring your vehicles remain in top condition year-round.</p>
            <p>In addition to vehicle protection, carports can also serve as a covered outdoor space for storage, workshops, or recreational areas. The open design allows for easy access and ventilation while providing shelter from the elements.</p>
            <p>Investing in a carport is a smart choice for homeowners looking to enhance the functionality and value of their property. Contact us today to learn more about our carport construction services and how we can help you find the perfect solution for your needs.</p>
          </div>
        </div>

        {/* Reviews and Booking */}
        <div id="reviews"><Reviews /></div>
        <div id="book"><Book /></div>

        {/* Modal Form */}
        {modalOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Send us a message</h2>
              <form className="quote-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number *</label>
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
                    {["Carports","Shops","Barndominiums","Roofing","Siding","Windows","Welding","Fencing"].map((service, i) => (
                      <div className="checkbox" key={i}>
                        <label htmlFor={`service${i+1}`}>{service}</label>
                        <input type="checkbox" id={`service${i+1}`} name={`service${i+1}`} value={service} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-row full-width">
                  <label htmlFor="help">How can we help?</label>
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
      </main>

      <div id="contact"><Footer /></div>
    </div>
  );
};

export default CarportPage;
