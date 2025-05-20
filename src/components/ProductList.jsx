import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ id, item }) => {
  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      to={`/product/${id}`}
      className=" cursor-pointer border-2 border-green-700 shadow-lg rounded-lg overflow-hidden flex  justify-center items-center relative  "
    >
      <div className=" w-full h-full bg-white rounded-lg overflow-hidden">
        <p className="pt-3 pb-1 text-sm text-center font-bold text-orange-700">
          {item.name}
        </p>
        <div className="overflow-hidden flex justify-center ">
          <img
            src={item.imgUrl}
            width={200}
            height={200}
            alt=""
            className="hover:scale-110 transition ease-in-out   "
          />
        </div>

        <div className="flex justify-end items-center px-4 absolute right-0 bottom-1 ">
          <button
            // onClick={() => scrollTo(0, 0)}
            className="text-sm text-white px-2 py-1 rounded-lg bg-green-600 hover:bg-green-400 shadow-lg transition duration-300 ease-in-out cursor-pointer"
          >
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductList;
