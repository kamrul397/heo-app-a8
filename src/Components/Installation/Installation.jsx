import { useInstalledApps } from "../../context/InstalledAppsContext";
import { swalError } from "../../Utilities/SwAl";

const Installation = () => {
  const { installedApps, setInstalledApps } = useInstalledApps();

  // Function to uninstall an app
  const handleUninstall = (appId) => {
    // 1. ✨ FIX: Find the app details BEFORE updating the state
    const appToUninstall = installedApps.find((app) => app.id === appId);

    // Check if the app was found to prevent errors
    if (!appToUninstall) {
      console.error("Attempted to uninstall an app that doesn't exist.");
      return;
    }

    // 2. Update the context state (removes the app)
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    // 3. Show success alert with app name
    swalError("Uninstalled", `${appToUninstall.title} has been uninstalled.`);
  };
  if (installedApps.length === 0)
    return (
      <div className="text-center mt-12 p-8 bg-gray-50 border border-gray-200 rounded-xl shadow-lg mx-auto max-w-lg">
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
            {/* <span className="px-3 py-1 bg-green-600 text-white rounded">
              Installed
            </span> */}
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
