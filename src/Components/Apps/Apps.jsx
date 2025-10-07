import React from "react";
import { useEffect, useState } from "react";
import { fetchJson } from "../../Utilities/fetchData";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate(); // <-- add this
  useEffect(() => {
    fetchJson("trendingApps.json")
      .then((data) => setApps(data)) // Fetch all apps
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-5xl text-center py-7 font-bold">All Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            onClick={() => navigate(`/apps/${app.id}`)} // <-- navigation on click
            className="border rounded-lg shadow hover:shadow-gray-300 transition hover:scale-110 p-4 flex flex-col items-center text-center md:w-full w-4/5 mx-auto cursor-pointer"
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
    </div>
  );
};

export default Apps;
