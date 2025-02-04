// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../styles/global.css";
import "../styles/reviews.css";
import reviewimg from "../assets/reviews/images/reviewimg.jpg";
import facebook from "../assets/footer/images/footerfacebooklogo.png";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviews = [
    "Premier Exterior is HIGHLY recommended! Premier was great to deal with. They took the time to explain everything and then delivered on everything they said they would. Ricky was always available to answer questions or address concerns and did a great job letting us know when everything would be scheduled.",
    "Ricky and his crew are the best! Honest, hard-working, and most of all very personable, reliable, and affordable. I would highly recommend them. They do beautiful work. You will be very happy you chose them!!",
    "Great group of guys who have completed multiple projects for me in a professional, timely, and affordable manner! I highly recommend and am extremely grateful to have Ricky and his crew available in our area!!!",
    "Ricky Enriquez is the best! When I was on a road trip and my car broke down in Goldthwaite on a Saturday afternoon, a super-helpful lady at the Chamber of Commerce said 'Let me call this really nice guy I know, maybe he can help you out.' Ricky came to a stranger's aid, looked over my engine, and helped get me on my way. If I lived in town I'd use him for any construction I needed because he's just a solid, trustworthy guy!"
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + reviews.length) % reviews.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide
  });

  return (
    <div className="reviews" {...handlers}>
      <img className="review-image" src={reviewimg} alt="review Image" />
      <div className="review-intro">
        <h1>TAKE A LOOK FOR YOURSELF ON WHAT YOUR NEIGHBORS ARE SAYING ABOUT US.</h1>
        <p>REVIEWS</p>
        <a href="https://www.facebook.com/profile.php?id=100089862015650" target="_blank" rel="noopener noreferrer">
          <button className="reviewbtn">SEE ALL REVIEWS ⮕</button>
        </a>
      </div>
      <div className="review-slides">
        <button className="arrow left-arrow" onClick={prevSlide}>←</button>
        <div className="review-box">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>{reviews[currentSlide]}</p>
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>→</button>
      </div>
      <div className="leavereviewbox">
        <div className="review-container">
          <h2>Leave Us a Review</h2>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <div className="facebook-review">
            <a href="https://www.facebook.com/profile.php?id=100089862015650" target="_blank" rel="noopener noreferrer" className="facebook-link">
              <img src={facebook} alt="Facebook logo" className="reviewfacebook-logo" />
            </a>
            <div className="review-call-to-action">
              <a href="https://www.facebook.com/profile.php?id=100089862015650" target="_blank" rel="noopener noreferrer">
                <p>Leave Us a Review on Facebook</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;





