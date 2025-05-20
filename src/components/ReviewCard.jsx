import React from "react";

const ReviewCard = ({ name, rating, review }) => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6 ">
      {/* Customer Name & Stars */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        {/* Display Stars */}
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-xl">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600">{review}</p>
    </div>
  );
};

export default ReviewCard;
