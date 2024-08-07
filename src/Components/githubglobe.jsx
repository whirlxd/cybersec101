import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
const RotatingWords = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [words]);

  return (
    <div className="flex flex-wrap justify-center space-x-4">
      <AnimationOnScroll animateIn="fadeIn" animateOnce={true} delay={900}>
        {words.map((word, index) => (
          <span
            key={index}
            className={`transition-opacity duration-60 ${
              index === currentWordIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {word}
          </span>
        ))}
      </AnimationOnScroll>
    </div>
  );
};

export default RotatingWords;
