import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Booking } from "./components/booking";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Gallery data={landingPageData.Gallery} />
      <About data={landingPageData.About} />
      <Navigation />
      <Booking data={landingPageData.Booking} />
      <Contact data={landingPageData.Contact} />
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <div className="mb-2.5">
            <a href="https://www.instagram.com/rosiebabbra" target="_blank" rel="noreferrer" className="mx-5 text-gray-400 cursor-pointer">
              <i className="fab fa-instagram" style={{ fontSize: "3rem", color: "black" }}></i>
            </a>
          </div>
          <p style={{ color: "black", marginTop: "15px", marginBottom: "50px" }}>&copy; 2024 Rosie Babbra. All rights reserved.</p>
        </div>
      </footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </div>
  );
};

export default App;
