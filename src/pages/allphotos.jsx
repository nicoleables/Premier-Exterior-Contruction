// src/pages/AllPhotos.jsx
import React, { useState, useEffect } from 'react';
import Contact from '../Layout/Book.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/pages.css';
import '../styles/modal.css';
import '../styles/allphotos.css';
import coverimage2 from "../assets/home/images/coverphoto.jpg";
import { fetchAllPhotos } from "../supabase"; // <-- import fetchAllPhotos

const AllPhotos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errMessage, setErrorMessage] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  // Fetch images from Supabase
  useEffect(() => {
    const loadImages = async () => {
      const urls = await fetchAllPhotos();
      console.log("Fetched URLs:", urls);
      setImages(urls);
    };
    loadImages();
  }, []);

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

        {/* Cover Section */}
        <div className="image-container2">
          <img src={coverimage2} alt="Barndominiums" className="page2img2all" />
          <div className="overlay-text2">
            <h2>OUR BEST WORK</h2>
            <p>See for yourself why our customers love us</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>

        {/* Gallery */}
        <div id="photos" className="allphotos">
          <div className="photo-grid">
            {images.length === 0
              ? <p>Loading photos...</p>
              : images.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    className="allpicons"
                    alt={`work ${index + 1}`}
                    onClick={() => openLightbox(index)}
                  />
                ))
            }
          </div>
        </div>

        {/* Book Section */}
        <div id="book">
          <Contact />
        </div>

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

        {/* Lightbox */}
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

      {/* Footer */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default AllPhotos;



