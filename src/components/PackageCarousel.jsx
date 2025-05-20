import { useState, useEffect, useRef } from "react";
import CarouselCard from "./CarouselCard";

const images = [
  {
    name: "Agriculture Insurance",
    src: "/agric_insurance.jpg",
  },
  {
    name: "Professional Indemnity Insurance",
    src: "/indemnity_insurance.jpg",
  },
  {
    name: "Life Insurance",
    src: "/life_insurance.jpg",
  },
  {
    name: "Motor Insurance",
    src: "/vehicle_insurance.jpg",
  },
  {
    name: "Burglary Insurance",
    src: "/burglary_insurance.jpg",
  },
  {
    name: "Fire Insurance",
    src: "/fire_insurance.jpg",
  },
  {
    name: "Marine Insurance",
    src: "/marine.jpg",
  },
  {
    name: "Public Liability Insurance",
    src: "/public_liability.jpg",
  },
  {
    name: "House Owner Insurance",
    src: "/houseowner.jpg",
  },
];

// Duplicate images for smooth looping
const extendedImages = [...images, ...images];

const PackageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= images.length) {
        setTransitioning(false); // Temporarily disable transition
        setIndex(0); // Reset index invisibly
        setTimeout(() => setTransitioning(true), 50); // Restore transition
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="bg-gray-100 py-4" id="coverage">
      <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden ">
        <h1 className="text-center text-xl md:text-2xl font-bold text-blue-800">
          Our Insurance Coverage
        </h1>
        <div
          ref={carouselRef}
          className={`flex ${
            transitioning ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {extendedImages.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <CarouselCard
                name={img.name}
                image={img.src}
                description={img.desc}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 t text-black text-2xl font-extrabold "
        >
          ❮
        </button>

        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2  text-black text-2xl font-extrabold "
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default PackageCarousel;
