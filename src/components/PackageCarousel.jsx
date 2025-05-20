import { useState, useEffect, useRef } from "react";
import CarouselCard from "./CarouselCard";

const images = [
  {
    name: "Agriculture Insurance",
    src: "/agric_insurance.jpg",
    desc: "Agricultural insurance helps farmers protect their crops, livestock, and equipment from risks like natural disasters, pests, and market fluctuations. It provides financial security by covering losses due to unpredictable events, ensuring farmers can continue their operations without major setbacks",
  },
  {
    name: "Professional Indemnity Insurance",
    src: "/indemnity_insurance.jpg",
    desc: "Professional indemnity insurance protects businesses and professionals from financial losses due to claims of negligence, errors, or omissions in their services. It covers legal costs and compensation if a client suffers harm due to professional advice or actions. This type of insurance is essential for consultants, lawyers, architects, and other service providers who offer expert guidance",
  },
  {
    name: "Life Insurance",
    src: "/life_insurance.jpg",
    desc: "Life insurance provides financial protection to beneficiaries in case of the insured person's death. It helps cover funeral expenses, outstanding debts, and lost income, ensuring financial security for loved ones. There are different types, including term life insurance, which offers coverage for a specific period, and permanent life insurance, which provides lifelong protection.",
  },
  {
    name: "Vehicle Insurance",
    src: "/vehicle_insurance.jpg",
    desc: "Vehicle insurance provides financial protection against losses due to accidents, theft, or damage to a vehicle. It covers repair costs, medical expenses, and liability for damages caused to others. Policies vary, including third-party liability, comprehensive coverage, and collision insurance, ensuring drivers are safeguarded from unexpected expenses.",
  },
  {
    name: "Burglary Insurance",
    src: "/burglary_insurance.jpg",
    desc: "Burglary insurance provides financial protection against losses or damages caused by forced entry into a property. It covers stolen valuables, property damage from break-ins, and sometimes attempted burglary. This type of insurance is essential for businesses and homeowners looking to safeguard their assets against theft",
  },
  {
    name: "Fire Insurance",
    src: "/fire_insurance.jpg",
    desc: "Fire insurance provides financial protection against losses or damages caused by fire. It covers the cost of repairing, rebuilding, or replacing property affected by fire-related incidents, including electrical faults, gas explosions, and natural disasters. Homeowners and businesses often use fire insurance to safeguard their assets and minimize financial risks",
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
    }, 60000);

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
