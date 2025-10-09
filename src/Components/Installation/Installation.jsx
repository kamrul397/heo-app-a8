import { useNavigate } from "react-router-dom";
import { useInstalledApps } from "../../context/InstalledAppsContext";
import { swalError } from "../../Utilities/SwAl";
import { useState, useEffect } from "react";

const Installation = () => {
  const { installedApps, setInstalledApps } = useInstalledApps();
  const [sortedApps, setSortedApps] = useState([]);
  const navigate = useNavigate();

  // Sync local sortedApps state with context whenever installedApps changes
  useEffect(() => {
    setSortedApps(installedApps);
  }, [installedApps]);

  // Function to uninstall an app
  const handleUninstall = (appId) => {
    const appToUninstall = installedApps.find((app) => app.id === appId);
    if (!appToUninstall) return;

    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    swalError("Uninstalled", `${appToUninstall.title} has been uninstalled.`);
  };

  // Sorting function
  const handleSort = (order) => {
    let appsCopy = [...installedApps];

    if (order === "downloads-desc") {
      appsCopy.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "downloads-asc") {
      appsCopy.sort((a, b) => a.downloads - b.downloads);
    }
    setSortedApps(appsCopy);
  };

  // Empty state
  if (installedApps.length === 0)
    return (
      <div className="text-center m-12 p-8 bg-gray-50 border border-gray-200 rounded-xl shadow-lg mx-auto max-w-lg">
        <p className="text-4xl mb-4" role="img" aria-label="package-box">
          📦
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Nothing here yet!
        </h3>
        <p className="text-gray-600">
          You haven't installed any apps. Head over to the **App Store** to
          start exploring and adding new tools!
        </p>
      </div>
    );

  return (
    <div className="p-4">
      {/* Header with count and sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Installed Apps ({installedApps.length})
        </h1>

        <div>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Sort By Downloads</option>
            <option value="downloads-desc">High → Low</option>
            <option value="downloads-asc">Low → High</option>
          </select>
        </div>
      </div>

      {/* Installed apps list */}
      <div className="flex flex-col gap-4">
        {sortedApps.map((app, index) => (
          <div
            key={app.id}
            className={`p-4 rounded-xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4
        ${
          index % 2 === 0
            ? "bg-gradient-to-r from-blue-100 to-blue-50"
            : "bg-gradient-to-r from-green-100 to-green-50"
        }`}
          >
            {/* App info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-md"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                  {app.title}
                </h2>
                <p className="text-gray-600 italic text-sm sm:text-base">
                  {app.companyName}
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Downloads: {app.downloads.toLocaleString()}
                </p>
                {/* Rating stars */}
                <p className="flex items-center gap-1 text-yellow-500 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < Math.round(app.ratingAvg) ? "★" : "☆"}
                    </span>
                  ))}
                  <span className="text-gray-700 ml-2 text-sm sm:text-base">
                    ({app.ratingAvg.toFixed(1)})
                  </span>
                </p>
                {app.description && (
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    {app.description.slice(0, 80)}...
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
              <button
                onClick={() => handleUninstall(app.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md transition text-sm sm:text-base"
              >
                Uninstall
              </button>
              <button
                onClick={() => navigate(`/apps/${app.id}`)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition text-sm sm:text-base"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
