import React from "react";
import { useEffect, useState } from "react";
import { fetchJson } from "../../Utilities/fetchData";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import loaderIcon from "../../assets/logo.png"; // Ensure you have a loader icon in assets

// You can use a simple Tailwind-styled spinner component
// Rotating Image Loader Component
const LoadingSpinner = () => (
  <div className="flex flex-col justify-center items-center bg-white/70 backdrop-blur-sm z-50">
    <img
      src={loaderIcon}
      alt="Loading..."
      className="w-20 h-20 animate-spin" // Tailwind rotation animation
    />
    <p className="mt-4 text-gray-700 text-lg font-medium animate-pulse">
      Loading...
    </p>
  </div>
);

const Apps = () => {
  const [sortOrder, setSortOrder] = useState("default"); // default, asc, desc
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // 1. Add loading state and initialize to true
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    // ⏳ Simulate a 5-second loading delay
    const timer = setTimeout(() => {
      fetchJson("trendingApps.json")
        .then((data) => {
          setApps(data);
        })
        .catch((err) => {
          console.error("Fetch Error:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 50);

    // Cleanup timer if component unmounts early
    return () => clearTimeout(timer);
  }, []);

  // Filter only by title
  const filteredApps = apps.filter((app) =>
    app.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting function
  const handleSort = (order) => {
    setSortOrder(order);

    let sortedApps = [...apps];

    if (order === "downloads-desc") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "downloads-asc") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }
    setApps(sortedApps);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-amber-100 via-blue-200 to-yellow-300">
      <h2 className="text-5xl text-center py-7 font-bold">All Apps</h2>
      <div className="flex justify-between items-center mb-4">
        {/* apps number */}
        <div>
          <h3 className="text-2xl bg-green-400 rounded-full px-5 py-3 text-white">
            Apps ({apps.length})
          </h3>
        </div>
        {/* sorting */}
        <div>
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="default">Sort By</option>
            <option value="downloads-desc">Downloads: High → Low</option>
            <option value="downloads-asc">Downloads: Low → High</option>
          </select>
        </div>
      </div>

      {/* Search bar is always visible, but the list content depends on loading/search */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search apps by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            // Optional: Disable input while loading initial data
            disabled={isLoading}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
            <GoSearch size={20} />
          </div>
        </div>
      </div>

      {/* 4. Conditional Rendering Logic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {isLoading ? (
          // SHOW SPINNER (if initial data is loading)
          <div className="col-span-full">
            <LoadingSpinner />
          </div>
        ) : filteredApps.length > 0 ? (
          // RENDER APPS (If loading is complete AND results are found)
          filteredApps.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/apps/${app.id}`)}
              className="border rounded-lg shadow hover:shadow-gray-300 transition hover:scale-110 p-4 flex flex-col items-center text-center md:w-full w-4/5 mx-auto cursor-pointer"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-50 h-50 object-contain mb-3"
              />
              <h3 className="font-semibold text-lg">{app.title}</h3>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-1 mt-2">
                  <IoMdCloudDownload size={24} />({app.reviews})
                </div>
                <div className="flex items-center gap-1 mt-2">
                  ⭐ {app.ratingAvg}
                </div>
              </div>
            </div>
          ))
        ) : (
          // 'NO APPS FOUND' FALLBACK (If loading is complete AND no results are found)
          <div className="col-span-full py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              🚫 No Apps Found
            </h2>
            <p className="text-gray-600 text-lg">
              We couldn't find any results matching your search or filters.
            </p>
            <p className="text-gray-500 mt-2">
              💡 **Idea:** Try adjusting your search keywords or clearing your
              filters to see more apps.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
