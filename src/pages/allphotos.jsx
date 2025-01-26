// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Contact from '../Layout/Book.jsx';
import Footer from '../components/Footer.jsx'; 
import '../styles/pages.css';
import '../styles/modal.css';
import '../styles/allphotos.css';
import coverimage2 from "../assets/home/images/coverphoto.jpg";
import one from "../assets/reviews/images/reviewimg.jpg";
import two from "../assets/allphotos/images/2.webp";
import four from "../assets/allphotos/images/4.webp";
import five from "../assets/allphotos/images/5.webp";
import six from "../assets/services/images/roofing.jpg";
import seven from "../assets/services/images/fencing.jpg";
import eight from "../assets/allphotos/images/8.webp";
import nine from "../assets/allphotos/images/9.webp";
import ten from "../assets/book/images/appointmenthouse.png";
import a from "../assets/aboutus/images/aboutpic.webp";
import b from "../assets/allphotos/images/12.webp";
import c from "../assets/allphotos/images/13.webp";
import d from "../assets/questions/images/questionsimg.jpg";
import e from "../assets/services/images/windows.jpg";
import f from "../assets/projects/images/entrance.jpg";
import g from "../assets/allphotos/images/17.webp";
import h from "../assets/allphotos/images/18.webp";
import i from "../assets/services/images/barndominiums.jpg";
import j from "../assets/services/images/carport.jpg";
import l from "../assets/allphotos/images/22.webp";
import m from "../assets/allphotos/images/23.webp";
import n from "../assets/allphotos/images/24.webp";
import o from "../assets/services/images/shop.jpg";
import p from "../assets/allphotos/images/26.webp";
import q from "../assets/allphotos/images/27.webp";
import r from "../assets/allphotos/images/28.webp";

const AllPhotos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errMessage, setErrorMessage] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    one, two, four, five, six, seven, eight, nine, ten,
    a, b, c, d, e, f, g, h, i, j, l, m, n, o, p, q, r
  ];

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
  
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => setLightboxOpen(false);
  
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div>
      <main className="main-content2">
        <div className="image-container2">
          <img src={coverimage2} alt="Barndominiums" className="page2img2all" />
          <div className="overlay-text2">
            <h2>OUR BEST WORK</h2>
            <p>See for yourself why our customers love us</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>
        <div className="allphotos">
          <div className="photo-grid">
            {images.map((imgSrc, index) => (
              <img key={index} src={imgSrc} className="allpicons" alt={`work ${index + 1}`} onClick={() => openLightbox(index)} />
            ))}
          </div>
        </div>
        <Contact />
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
        {lightboxOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
              <button className="lightbox-prev" onClick={prevImage}>❮</button>
              <img src={images[currentImage]} className="lightbox-img" alt={`work ${currentImage + 1}`} />
              <button className="lightbox-next" onClick={nextImage}>❯</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AllPhotos;



