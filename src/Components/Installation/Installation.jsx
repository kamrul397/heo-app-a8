import { useInstalledApps } from "../../context/InstalledAppsContext";

const Installation = () => {
  const { installedApps, setInstalledApps } = useInstalledApps();

  // Function to uninstall an app
  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
  };

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
          <div className="mt-2 flex gap-2">
            <span className="px-3 py-1 bg-green-600 text-white rounded">
              Installed
            </span>
            <button
              onClick={() => handleUninstall(app.id)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;
