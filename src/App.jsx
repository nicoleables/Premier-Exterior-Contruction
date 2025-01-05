// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Header2 from "./components/Header2.jsx"; // Import Header2 for other pages
import Footer from "./components/Footer.jsx";
import Home from "./Layout/Home.jsx";
import About from "./Layout/About.jsx";
import Projects from "./Layout/Projects.jsx";
import Services from "./Layout/Services.jsx";
import Reviews from "./Layout/Reviews.jsx";
import Book from "./Layout/Book.jsx";
import Questions from "./Layout/Questions.jsx";
import CarportPage from "./pages/carportpage.jsx";
import BarnPage from "./pages/barnpag.jsx";
import FencePage from "./pages/fencpage.jsx";
import RoofPage from "./pages/roofingpage.jsx";
import ShopPage from "./pages/shoppage.jsx";
import SidingPage from "./pages/sidingpage.jsx";
import WeldingPage from "./pages/weldingpage.jsx";
import WindowPage from "./pages/windowpage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AllPhotos from "./pages/allphotos.jsx";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const bookRef = useRef(null);
  const projectsRef = useRef(null);
  const reviewsRef = useRef(null);
  const questionsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Ref is not assigned correctly");
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Switch>
          <Route exact path="/">
            <Header
              scrollToSection={scrollToSection}
              refs={{ homeRef, aboutRef, servicesRef, bookRef, projectsRef, reviewsRef, questionsRef, footerRef }}
            />
            <div className="layout">
              <main>
                <section ref={homeRef} id="home">
                  <Home />
                </section>
                <section ref={aboutRef} id="about">
                  <About />
                </section>
                <section ref={servicesRef} id="services">
                  <Services />
                </section>
                <section ref={bookRef} id="book">
                  <Book />
                </section>
                <section ref={projectsRef} id="projects">
                  <Projects />
                </section>
                <section ref={reviewsRef} id="reviews">
                  <Reviews />
                </section>
                <section ref={questionsRef} id="questions">
                  <Questions />
                </section>
                <section ref={footerRef} id="footer">
                </section>
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/windowpage">
            <Header2 />
            <WindowPage />
          </Route>
          <Route path="/carportpage">
            <Header2 />
            <CarportPage />
          </Route>
          <Route path="/barnpage">
            <Header2 />
            <BarnPage />
          </Route>
          <Route path="/weldingpage">
            <Header2 />
            <WeldingPage />
          </Route>
          <Route path="/roofpage">
            <Header2 />
            <RoofPage />
          </Route>
          <Route path="/sidingpage">
            <Header2 />
            <SidingPage />
          </Route>
          <Route path="/shoppage">
            <Header2 />
            <ShopPage />
          </Route>
          <Route path="/fencepage">
            <Header2 />
            <FencePage />
          </Route>
          <Route path="/allphotos">
            <Header2 />
            <AllPhotos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;









