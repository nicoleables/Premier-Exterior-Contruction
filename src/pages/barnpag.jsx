/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Reviews from '../Layout/Reviews.jsx';
import Book from '../Layout/Book.jsx';
import Footer from '../components/Footer.jsx'; 
import '../styles/pages.css';
import '../styles/modal.css';
import '../styles/global.css';
import Barn from "../assets/services/images/barndominiums.jpg";

const BarnPage = () => {
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
    setErrorMessage("");       // ✅ clear previous errors
    setFormSubmitted(false);   // ✅ reset submission state

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
          <img className="page2img2" src={Barn} alt="Barndominiums" />
          <div className="overlay-text2">
            <h1>Services</h1>
            <h2>Barndominium Construction</h2>
            <p>Our Barndominium construction service offers homeowners the opportunity to create a unique living space combining a traditional barn aesthetic with modern comfort, expertly crafted by our skilled welders.</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>

        {/* About Section */}
        <div className="aboutp2" id="about2">
          <div className="paragrapgp2">
            <p>If you're considering building a new home in the countryside, a barndominium could be the perfect choice for you. These unique and versatile structures combine the rustic charm of a barn with all the comforts of a modern home.</p>
            <p>When you book a barndominium construction service, you are investing in a one-of-a-kind living space that can be customized to suit your needs and style. With their open floor plans and high ceilings, barndominiums offer ample space for living, dining, and entertaining. Additionally, we often feature large windows that provide stunning views of the surrounding landscape.</p>
            <p>Not only are barndominiums aesthetically pleasing, but we are also durable and energy-efficient. Constructed with sturdy materials such as metal siding and roofing, these homes require minimal maintenance and can withstand harsh weather conditions.</p>
            <p>Overall, booking a barndominium construction service is an excellent choice for those seeking a unique and practical housing solution in rural areas.</p>
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

export default BarnPage;
