import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-100 text-gray-800 text-center p-4">
      <img src={errorImg} alt="" className="w-40 md:w-60 lg:w-80" />

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
