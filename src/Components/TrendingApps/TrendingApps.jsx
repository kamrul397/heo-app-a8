import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchJson } from "../../Utilities/fetchData";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate(); // <-- add this
  useEffect(() => {
    fetchJson("trendingApps.json")
      .then((data) => setApps(data.slice(0, 8))) // Show first 16 apps
      .catch((err) => console.error(err));
  }, []);

  if (!apps.length) return <p className="text-center mt-8">Loading apps...</p>;

  return (
    <div className="p-8">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Trending Apps</h2>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            onClick={() => navigate(`/apps/${app.id}`)} // <-- navigation on click
            className="border rounded-lg shadow hover:shadow-gray-300 transition hover:scale-110 p-4 flex flex-col items-center text-center"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-50 h-50 object-contain mb-3"
            />
            <h3 className="font-semibold text-lg">{app.title}</h3>
            {/* <p className="text-gray-500 text-sm">{app.companyName}</p> */}
            {/* <p className="text-gray-600 text-sm mt-2">
              {app.description.length > 60
                ? app.description.slice(0, 60) + "..."
                : app.description}
            </p> */}
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-1 mt-2">
                <IoMdCloudDownload size={24} />({app.reviews})
              </div>
              <div className="flex items-center gap-1 mt-2">
                ⭐ {app.ratingAvg}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-6 text-center">
        <Link
          to="/apps"
          className="btn btn-primary rounded hover:bg-purple-700 transition"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
