import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  if (installedApps.length === 0)
    return <p className="text-center mt-8">No apps installed yet.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {installedApps.map((app) => (
        <div
          key={app.id}
          className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
        >
          <img
            src={app.image}
            alt={app.title}
            className="w-32 h-32 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold">{app.title}</h2>
          <p className="text-gray-500">{app.companyName}</p>
          <span className="mt-2 px-3 py-1 bg-green-600 text-white rounded">
            Installed
          </span>
        </div>
      ))}
    </div>
  );
};

export default Installation;
