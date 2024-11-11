import React, { useState, useEffect } from 'react';

const images = require.context('../../public/img/portfolio', true);
const imageList = images.keys().map(image => {
  const importedImage = images(image);
  return importedImage.default ? importedImage.default : importedImage;
});

function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [scrambledImageList, setScrambledImageList] = useState([]);

  useEffect(() => {
    // Shuffle images once when the component mounts
    const shuffled = shuffle(imageList);
    console.log('Shuffled Image List:', shuffled);  // Debugging log
    setScrambledImageList(shuffled);
  }, []);

  const initiateTransition = (callback) => {
    setIsFading(true);
    setTimeout(() => {
      callback();
      setIsFading(false);
    }, 400); // Match this to the fade-out duration
  };

  useEffect(() => {
    if (scrambledImageList.length > 0) {
      // Set up the interval to change slides every 3 seconds
      const intervalId = setInterval(() => {
        initiateTransition(() => {
          setCurrentIndex((prevIndex) => (prevIndex === scrambledImageList.length - 1 ? 0 : prevIndex + 1));
        });
      }, 2000);

      // Clear the interval when the component unmounts
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [scrambledImageList]);

  if (!scrambledImageList || scrambledImageList.length === 0) {
    return null; // Or a loading indicator if desired
  }

  console.log('Current Image:', scrambledImageList[currentIndex]);  // Debugging log

  return (
    <div id="gallery" className="image-gallery">
      <div className="image-container">
        <img
          src={scrambledImageList[currentIndex] || '/path/to/default/image.jpg'}
          alt={`Slide ${currentIndex + 1}`}
          className={`image ${isFading ? 'fade-out' : 'fade-in'}`}
        />
        <div className="nav-container">
          {/* Navigation buttons */}
        </div>
      </div>
    </div>
  );
};
