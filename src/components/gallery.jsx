import React, { useEffect, useMemo, useRef, useState } from "react";

const images = require.context("../../public/img/portfolio", true);
const imageList = images.keys().map((image) => {
  const importedImage = images(image);
  return importedImage.default ? importedImage.default : importedImage;
});

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const Gallery = () => {
  const scrambledImageList = useMemo(() => shuffle(imageList), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const tickTimeoutRef = useRef(null);
  const fadeTimeoutRef = useRef(null);

  useEffect(() => {
    const DISPLAY_MS = 3000;
    const FADE_OUT_MS = 400;

    const scheduleNext = () => {
      // show current image for a bit
      tickTimeoutRef.current = window.setTimeout(() => {
        setIsTransitioning(true); // start fade-out

        // after fade-out, switch image + fade back in
        fadeTimeoutRef.current = window.setTimeout(() => {
          setCurrentIndex((prev) =>
            prev === scrambledImageList.length - 1 ? 0 : prev + 1
          );
          setIsTransitioning(false); // fade-in
          scheduleNext(); // loop
        }, FADE_OUT_MS);
      }, DISPLAY_MS);
    };

    scheduleNext();

    return () => {
      if (tickTimeoutRef.current) window.clearTimeout(tickTimeoutRef.current);
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    };
  }, [scrambledImageList.length]);

  // Optional: preload next image to reduce flicker
  useEffect(() => {
    if (!scrambledImageList.length) return;

    const nextIndex =
      currentIndex === scrambledImageList.length - 1 ? 0 : currentIndex + 1;

    const img = new Image();
    img.src = scrambledImageList[nextIndex];
    // img.decode && img.decode().catch(() => {});
  }, [currentIndex, scrambledImageList]);

  if (!scrambledImageList.length) return null;

  return (
    <div id="gallery" className="image-gallery">
      <div className="image-container">
        <img
          src={scrambledImageList[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`image ${isTransitioning ? "fade-out" : "fade-in"}`}
          draggable={false}
        />
      </div>
    </div>
  );
};
