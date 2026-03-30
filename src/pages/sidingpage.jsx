/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Reviews from '../Layout/Reviews.jsx';
import Book from '../Layout/Book.jsx';
import Footer from '../components/Footer.jsx'; 
import '../styles/pages.css';
import '../styles/modal.css';
import '../styles/global.css';
import Siding from "../assets/services/images/siding.jpg";

const SidingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errMessage, setErrorMessage] = useState(""); // ✅ correct setter

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setFormSubmitted(false);
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");       // ✅ clear previous errors
    setFormSubmitted(false);   // ✅ reset submission state

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
    <div>
      <main className="main-content2">
        {/* Cover Section */}
        <div className="image-container2">
          <img src={Siding} alt="Siding" className="page2img2" />
          <div className="overlay-text2">
            <h1>Services</h1>
            <h2>Siding Installation</h2>
            <p>Our siding installation service offers homeowners the opportunity to enhance their homes with high-quality siding that is both durable and aesthetically pleasing, expertly installed by our skilled team.</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>

        {/* About Section */}
        <div className="aboutp2" id="about2">
          <div className="paragrapgp2">
            <p>If you're looking to improve the appearance and durability of your home, our siding installation service is the perfect solution. We offer a variety of siding materials and styles to match the architectural design of your home.</p>
            <p>Our siding options provide excellent protection against the elements, helping to insulate your home and reduce energy costs. Our skilled team ensures that each installation is done to the highest standards, giving your home a fresh, updated look.</p>
            <p>In addition to enhancing curb appeal, new siding can also increase your home's value. We offer a range of colors and textures to choose from, allowing you to customize the look of your home to suit your personal style.</p>
            <p>Investing in new siding is a smart choice for homeowners looking to protect their property and improve its aesthetic appeal. Contact us today to learn more about our siding installation services and how we can help you achieve the perfect look for your home.</p>
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
              <h2>Send us a text</h2>
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

export default SidingPage;
