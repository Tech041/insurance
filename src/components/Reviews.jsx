import React from "react";
import Container from "./Container";
import CustomerReviews from "./CustomerReviews";

const Reviews = () => {
  return (
    <section className=" mt-10 flex justify-center items-center">
      <Container>
        <div className="">
          <h1 className="text-center text-xl font-semibold py-4">
            Customers Reviews
          </h1>
          <CustomerReviews />
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
