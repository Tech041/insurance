import React from "react";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ReviewCard
        name="Mrs Ogwaraonye"
        rating={4}
        review="Breast cancer healed with Kedi products.In 2008, I had a lump-like mass under my breast. In 2010, it regenereated  into tumor. In 2012, I used REISHI and Golden Hypha; and in few months, I was healed. Am still on those drugs to ensure the cancer cells are controlled permanently"
      />
      <ReviewCard
        name="Dr Paul"
        rating={4}
        review="As a physician , I recommed Kedi products for my patients because it has proven medically, to be safe and efficacious."
      />
      <ReviewCard
        name="Mr Godffery"
        rating={4}
        review="Kedi Refresh tea did wonders to my sight. I can now see both far and near ever since I started using the Refresh tea.It is so amazing."
      />{" "}
      <ReviewCard
        name="Mrs Adeboye"
        rating={4}
        review="My knee joint was restored to normal with Jointeez. After years of stroke ,I could not move nor speak. I used Jointeez and everything is now past tense."
      />
    </div>
  );
};

export default CustomerReviews;
