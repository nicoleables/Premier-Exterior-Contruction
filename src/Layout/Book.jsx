// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/book.css';
import '../styles/global.css';
import appointmenthouse from "../assets/book/images/appointmenthouse.png";
import '../styles/modal.css';

const Book = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errMessage, setErrMessage] = useState(""); // <-- added this

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setFormSubmitted(false);
    setErrMessage(""); // reset error message on close
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrMessage("");       // clear previous errors
    setFormSubmitted(false); // reset submission state

    const formData = new FormData(event.target);

    // Basic validation for required fields
    const fullName = formData.get("fullName")?.trim();
    const phoneNumber = formData.get("phoneNumber")?.trim();

    if (!fullName || !phoneNumber) {
      setErrMessage("Please enter your name and phone number.");
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
        setErrMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setErrMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="book">
      <img className="book-image" src={appointmenthouse} alt="book Image" />
      <div className="booktext">
        <div className="book-text-container">
          <div className="book-text">
            <h1>READY TO GET STARTED? BOOK AN APPOINTMENT TODAY.</h1>
          </div>
          <div className="bookquote">
            <button className="textbtn" onClick={openModal}>GET A FREE QUOTE</button>
          </div>
        </div>
      </div>

      <div className="quote-section">
        <h2>GET A QUOTE</h2>
        <p>Receiving a quote is easy and only takes three simple steps</p>
        <div className="quote-box-container">
          <div className="quote-box red-box">
            <span className="quotebtn">SEND US A TEXT</span>
            <button className="textbtn" onClick={openModal}>TEXT US</button>
          </div>
          <div className="quote-box white-box">
            <span>CHAT ON THE PHONE</span>
          </div>
          <div className="quote-box white-box">
            <span>RECEIVE A QUOTE</span>
          </div>
        </div>
      </div>

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
    </div>
  );
}

export default Book;
