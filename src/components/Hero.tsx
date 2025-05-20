import { useContext } from "react";
import Button from "./Button";
import Container from "./Container";
import OurCategories from "./OurCategories";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <section
      className="bg-[url('/insurance_hero.png')] bg-cover h-[600px] w-full pt-24 "
      id="home"
    >
      <Container>
        <div className="flex flex-col md:flex-row  gap-4 items-center h-full w-full ">
          {/* left */}
          <div className="flex-1 ">
            <div className="w-full h-full">
              <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold text-center md:text-start text-black">
                M'Whales Enterprise Resources
              </h1>
            </div>
            <div className="pt-4  ">
              <h1 className="text-center md:text-start text-blue-800 text-lg">
                Your Trusted Insurance Partner
              </h1>
              <div className="py-4  flex justify-center items-center md:justify-start">
                <Button>
                  <a href="https://wa.link/n8bjn5" className="">
                    Contact Us
                  </a>
                </Button>
              </div>{" "}
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex justify-center items-center w-full h-full  ">
            {/* images */}
            {/* slide */}

            <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden ">
              <img
                src="/ihero_image.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
