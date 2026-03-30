/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Reviews from '../Layout/Reviews.jsx';
import Book from '../Layout/Book.jsx';
import Footer from '../components/Footer.jsx'; 
import '../styles/pages.css';
import '../styles/modal.css';
import '../styles/global.css';
import Window from "../assets/services/images/windows.jpg";

const WindowPage = () => {
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
          <img src={Window} alt="Window" className="page2img2" />
          <div className="overlay-text2">
            <h1>Services</h1>
            <h2>Window Installation</h2>
            <p>Our window installation service offers homeowners the opportunity to enhance their homes with high-quality windows that are both energy-efficient and aesthetically pleasing, expertly installed by our skilled team.</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>

        {/* About Section */}
        <div className="aboutp2" id="about2">
          <div className="paragrapgp2">
            <p>If you're looking to improve the energy efficiency and appearance of your home, our window installation service is the perfect solution. We offer a variety of window styles and materials to match the architectural design of your home.</p>
            <p>Our windows provide excellent insulation, helping to reduce energy costs and improve comfort. They are designed to be durable and low-maintenance, ensuring your home remains beautiful and functional for years to come.</p>
            <p>In addition to new window installations, we also provide repair and replacement services to keep your existing windows in top condition. Our skilled team ensures each installation is done to the highest standards, giving your home a fresh, updated look.</p>
            <p>Investing in new windows is a smart choice for homeowners looking to enhance their property's value and curb appeal. Contact us today to learn more about our window installation services and how we can help you achieve the perfect look for your home.</p>
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

export default WindowPage;











