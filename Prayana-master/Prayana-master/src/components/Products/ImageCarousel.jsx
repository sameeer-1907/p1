import React, { useState, useEffect } from 'react';
import '../Products/ImageCarousel.css';

import sl1 from '../../assets/images/sl1.png';
import sl2 from '../../assets/images/sl2.png';
import sl3 from '../../assets/images/sl3.png';

const images = [
  sl1,
  sl2,
  sl3 , 
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={handlePrev}>
        &lt;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button className="carousel-button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
