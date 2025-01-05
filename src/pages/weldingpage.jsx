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
import Welding from "../assets/services/images/welding.jpg";

const WeldingPage = () => {
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
    const upload = formData.get("upload");

    if (!fullName || !phoneNumber || !email || !address || !preferredDate || !help) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Create a templateParams object for EmailJS
    const templateParams = {
      fullName,
      phoneNumber,
      email,
      address,
      preferredDate,
      services,
      help,
      upload: upload ? "Yes" : "No"
    };

    emailjs.send("service_uhczwkr", "template_02wul1o", templateParams, "RCz6_rVPS8yn6M2xP")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setErrorMessage("Failed to send message. Please try again.");
      });

    event.target.reset();
  };


  return (
    <div>
      <main className="main-content2">
        <div className="image-container2">
          <img src={Welding} alt="Welding" className="page2img2" />
          <div className="overlay-text2">
            <h1>Services</h1>
            <h2>Welding Services</h2>
            <p>Our welding services offer homeowners and businesses top-quality welding solutions for various applications, expertly delivered by our skilled team.</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>
        <div className="aboutp2" id="about2">
          <div className="paragrapgp2">
            <p>If you're in need of reliable and professional welding services, our team is here to help. We offer a wide range of welding solutions, from custom fabrication to repairs and maintenance.</p>
            <p>Our skilled welders use the latest techniques and equipment to deliver high-quality welds that meet your specific needs. Whether you require welding for construction projects, automotive repairs, or custom metalwork, we have the expertise to get the job done right.</p>
            <p>In addition to our welding services, we also provide metal cutting, bending, and assembly to ensure your project is completed to the highest standards. Our attention to detail and commitment to excellence set us apart in the industry.</p>
            <p>Investing in professional welding services is a smart choice for those looking to ensure the durability and longevity of their metal structures and components. Contact us today to learn more about our welding services and how we can assist with your next project.</p>
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
                <div className="form-row full-width">
                  <label htmlFor="upload">Upload a photo:</label>
                  <input type="file" id="upload" name="upload" />
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

export default WeldingPage;












