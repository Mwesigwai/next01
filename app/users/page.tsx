"use client";

import { useState, useEffect } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = ["/logo.svg", "/globe.svg", "/window.svg", "/vercel.svg"];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const autoplay = setInterval(() => {
        handleNext();
      }, 4000); // Slower autoplay: change every 5 seconds
      return () => clearInterval(autoplay); // Cleanup on unmount or dependency change
    }
  }, [currentIndex, isPaused]);

  return (
    <div
      className="min-w-48 sm:w-96 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

            {images.map((src, index) => (
            <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full flex-shrink-0"
            />
            ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
}