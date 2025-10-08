import React from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/App-Error.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-3">
      <div>
        <img src={errorImage} alt="" className="max-w-8/12 mx-auto mt-4" />
      </div>
      <h1 className="text-6xl font-bold text-red-500 mb-4">OPPS!</h1>
      <h2 className="text-3xl font-semibold mb-6">App Not Found</h2>
      <p className="text-gray-600 mb-6">
        The app you are looking for does not exist or the ID is invalid.
      </p>
      <button
        onClick={() => navigate("/apps")}
        className="px-6 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Back to Apps
      </button>
    </div>
  );
};

export default NotFound;
