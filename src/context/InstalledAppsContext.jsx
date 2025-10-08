import React, { createContext, useContext, useEffect, useState } from "react";

const InstalledAppsContext = createContext();

export const InstalledAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState(() => {
    // Read from localStorage on initial load
    const apps = localStorage.getItem("installedApps");
    return apps ? JSON.parse(apps) : [];
  });

  // Update localStorage whenever installedApps changes
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  return (
    <InstalledAppsContext.Provider value={{ installedApps, setInstalledApps }}>
      {children}
    </InstalledAppsContext.Provider>
  );
};

export const useInstalledApps = () => useContext(InstalledAppsContext);
