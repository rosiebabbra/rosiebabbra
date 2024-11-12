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
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [scrambledImageList, setScrambledImageList] = useState([]);

  useEffect(() => {
    // Shuffle images once when the component mounts
    const shuffled = shuffle(imageList);
    setScrambledImageList(shuffled);
  }, []);

  useEffect(() => {
    if (scrambledImageList.length > 0) {
      // Set up the interval to change slides every 3 seconds
      const intervalId = setInterval(() => {
        setIsFadingOut(true); // Start fading out the current image

        setTimeout(() => {
          // After fading out, update the index and start fading in
          setCurrentIndex((prevIndex) => (prevIndex === scrambledImageList.length - 1 ? 0 : prevIndex + 1));
          setIsFadingOut(false);
        }, 400); // Match this to the fade-out duration
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

  return (
    <div id="gallery" className="image-gallery">
      <div className="image-container">
        <img
          src={scrambledImageList[currentIndex] || '/path/to/default/image.jpg'}
          alt={`Slide ${currentIndex + 1}`}
          className={`image ${isFadingOut ? 'fade-out' : 'fade-in'}`}
        />
        <div className="nav-container">
          {/* Navigation buttons */}
        </div>
      </div>
    </div>
  );
};
