import React from "react";
import { Link } from "react-router-dom";

function Card({ image, title, description }) {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-900 p-2 rounded-lg max-w-xs mx-auto max-h-full">
      <div className="relative my-1">
        <img
          className="w-full h-64 rounded-xl"
          src={image}
          alt="Product Image"
        />
      </div>
      <div className="p-2  shadow-xl bg-gray-900 bg-opacity-35 flex justify-center  ">
        <h3 className="text-xl  text-white font-bold">{title}</h3>
      </div>
      <div className="flex flex-col p-4 items-center">
        <p className="text-gray-200 mb-4 ">{description}</p>
        <Link
          to={"/home"}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:shadow-md w-fit "
        >
          Get Started!
        </Link>
      </div>
    </div>
  );
}

export default Card;
