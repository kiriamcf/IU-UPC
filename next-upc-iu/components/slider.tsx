import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot, RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

function Slider() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-screen-2xl h-[500px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      />
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] flex justify-between px-4 items-center bg-white w-1/4 h-12">
        <RxArrowLeft
          onClick={prevSlide}
          size={30}
          className="cursor-pointer text-primary"
        />
        <div className="flex">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              {(() => {
                if (slideIndex === currentIndex) {
                  return (
                    <RxDotFilled
                      size={30}
                      className=" cursor-pointer text-primary"
                    />
                  );
                } else {
                  return (
                    <RxDot
                      size={30}
                      className="cursor-pointer text-primary"
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                    />
                  );
                }
              })()}
            </div>
          ))}
        </div>
        <RxArrowRight
          onClick={nextSlide}
          size={30}
          className="cursor-pointer text-primary"
        />
      </div>
    </div>
  );
}

export default Slider;
