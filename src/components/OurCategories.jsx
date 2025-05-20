import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { useEffect } from "react";
import { useState } from "react";
import ProductSlides from "./ProductSlides";

const slides = [
  {
    id: 1,
    url: "/logo.png",
  },
  {
    id: 2,
    url: "/mag.jpg",
  },
  {
    id: 3,
    url: "/hero_image.jpg",
  },
  {
    id: 4,
    url: "/quin.jpg",
  },
  {
    id: 5,
    url: "/tea.jpg",
  },
  {
    id: 6,
    url: "/vca.jpg",
  },
  {
    id: 7,
    url: "/reishi.jpg",
  },
  {
    id: 8,
    url: "/zinc.jpg",
  },
  {
    id: 9,
    url: "/revive.jpg",
  },
  {
    id: 10,
    url: "/vigor.jpg",
  },
];

const OurCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [transition, setTransition] = useState(
    "transform duration-500 ease-in-out"
  ); // Normal sliding effect

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === slides.length - 1) {
        setTransition(""); // Remove transition briefly for seamless loop
        setCurrentIndex(0);
        setTimeout(
          () => setTransition("transform duration-500 ease-in-out"),
          50
        ); // Restore transition
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle manual navigation
  // const goToSlide = (index) => {
  //   setTransition("transform duration-500 ease-in-out");
  //   setCurrentIndex(index);
  // };

  return (
    <div className="flex items-center justify-center ">
      <div className="">
        <h1 className="text-center text-base lg:text-xl font-bold py-4 text-orange-600">
          The partner we can trust.
        </h1>
        <div className="relative w-full  overflow-hidden">
          {/* Slides */}
          <div
            className={`flex ${transition} w-full`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className=" w-full flex justify-center  flex-shrink-0"
              >
                <ProductSlides key={slide.id} src={slide.url} />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          {/* <button
          className="absolute top-1/2 left-[-10px] bg-white text-green p-2 rounded-full"
          onClick={() =>
            goToSlide((currentIndex - 1 + slides.length) % slides.length)
          }
        >
          <FaChevronLeft size={20} color=" black" />
        </button>

        {/* Right Arrow */}
          {/* <button
          className="absolute top-1/2 right-[-5px] bg-white text-green p-2 rounded-full"
          onClick={() => goToSlide((currentIndex + 1) % slides.length)}
        >
          <FaChevronRight size={20} color="black" />
        </button> */}

          {/* Dot Indicators */}
          {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-orange-600" : "bg-white"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurCategories;
