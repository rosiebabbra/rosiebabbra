import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const images = require.context('../../public/img/portfolio', true);
const imageList = images.keys().map(image => images(image));

const PaginationDots = ({ total, current }) => {
  const visibleDots = 5; // Number of dots to show at a time
  let start = Math.max(0, current - Math.floor(visibleDots / 2));
  let end = start + visibleDots;

  if (end > total) {
    end = total;
    start = total - visibleDots;
    if (start < 0) start = 0;
  }

  return (
    <div className="pagination-dots">
      <div className="dots-container" style={{ transform: `translateX(-${start * 20}px)` }}>
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageList.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="gallery" className="image-gallery">
      <div className="image-container">
        <img src={imageList[currentIndex].default} alt={`Slide ${currentIndex + 1}`} className="image" />
        <div className="nav-container">
          <PaginationDots class="pagination-dots" total={imageList.length} current={currentIndex} />
          <div className="nav-buttons">
            <button onClick={handlePrevious} className="nav-button"><IoIosArrowBack /></button>
            <button onClick={handleNext} className="nav-button"><IoIosArrowForward /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
