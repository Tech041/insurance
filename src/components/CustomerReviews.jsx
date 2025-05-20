import React from "react";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ReviewCard
        name="Mrs Ogwaraonye"
        rating={4}
        review="Exceptional service and professionalism. The team was responsive, knowledgeable, and made the entire process seamless. Highly recommended!"
      />
      <ReviewCard
        name="Engr Paul"
        rating={4}
        review="Highly impressed with the quality and efficiency. Fantastic experience!"
      />
      <ReviewCard
        name="Mr Godffery"
        rating={4}
        review="Trustworthy and hassle-free service. I highly recommend them!."
      />{" "}
      <ReviewCard
        name="Hon Adeboye"
        rating={4}
        review="Reliable, professional, and exceeded my expectations."
      />
    </div>
  );
};

export default CustomerReviews;
