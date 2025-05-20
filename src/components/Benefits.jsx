import React from "react";
import Container from "./Container";

const Benefits = () => {
  return (
    <section className="pt-10 bg-yellow-100 pb-5" id="benefits">
      <Container>
        <h1 className="capitalize text-center font-semibold text-xl md:text-2xl text-green-800">
          Our products are 100% herbal.
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 ">
          {/* left */}
          <div className=" flex-1 flex justify-center items-center w-full h-full">
            <div className="w-[80%] h-[60%]">
              <img src="/herbs.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
          {/* right */}
          <div className="flex-1  font-semibold text-green-800 w-full h-full flex justify-center items-center ">
            <div className="">
              <h1 className="text-xl text-orange-700  text-center pb-2">
                Discover Our Range of Health Products.
              </h1>
              <p className="py-2">
                We offer a diverse selection of health solutions, including
                herbal medicine, traditional Chinese medicine, food supplements,
                malaria treatments, medical devices, and personal care products.
                Each of our products is carefully tested and proven effective in
                preventing ailments and enhancing overall well-being
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
