// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/book.css';
import '../styles/global.css';
import appointmenthouse from "../assets/book/images/appointmenthouse.png";
import '../styles/modal.css';

const Book = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
  
    console.log('Form data being sent:', formObject);
  
    try {
      const response = await fetch('http://localhost:8888/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Response:', result);
  
      if (response.ok) {
        alert("Email sent successfully!");
        closeModal();
      } else {
        alert(`Failed to send email: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
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
        <div className="modal book-modal" onClick={closeModal}>
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
              <div className="form-row full-width">
                <label htmlFor="upload">Upload a photo:</label>
                <input type="file" id="upload" name="upload" />
              </div>
              <div className="form-row">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;










  