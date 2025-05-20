import React from "react";

const ProductSlides = ({ src }) => {
  return (
    <div className="w-[90%] h-[80%]  rounded-3xl overflow-hidden">
      <img
        src={src}
        alt="product_images"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProductSlides;
