import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Booking } from "./components/booking";
import { Testimonials } from "./components/testimonials";
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
      <Navigation />
      {/* <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Booking data={landingPageData.Booking} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
