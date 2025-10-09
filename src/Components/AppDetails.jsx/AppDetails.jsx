import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJson } from "../../Utilities/fetchData";
import { IoMdCloudDownload } from "react-icons/io";
import { BiSolidStar } from "react-icons/bi";
import { MdOutlineStorage, MdPreview } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import NotFound from "../../Pages/AppNotFound/AppNotFound";
import { useInstalledApps } from "../../context/InstalledAppsContext";
import { swalAlreadyInstalled, swalSuccess } from "../../Utilities/SwAl";

const AppDetails = () => {
  const { installedApps, setInstalledApps } = useInstalledApps();
  const { id } = useParams();

  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load the app data
  useEffect(() => {
    setLoading(true);
    fetchJson("trendingApps.json")
      .then((data) => {
        const foundApp = data.find((item) => item.id === parseInt(id));
        setApp(foundApp || null);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  // Determine if this app is already installed (from context)
  const isInstalled = app ? installedApps.some((a) => a.id === app.id) : false;

  const handleInstall = () => {
    if (app && !isInstalled) {
      setInstalledApps([...installedApps, app]);
      swalSuccess("App installed successfully!");
    }
    // Optional: added a message if user clicks the button but it's already installed
    else if (isInstalled) {
      swalAlreadyInstalled();
    }
  };
  if (loading)
    return <p className="text-center mt-8">Loading app details...</p>;
  if (!app)
    return (
      <>
        <NotFound />
      </>
    );

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    reviews,
    ratingAvg,
    size,
  } = app;

  return (
    <>
      <div className="py-8 px-4 flex flex-col md:flex-row mx-auto gap-10">
        <div>
          <img
            src={image}
            alt={title}
            className="w-full max-w-sm mx-auto mb-6 rounded-lg shadow-lg"
          />
          <button
            onClick={handleInstall}
            className={`px-6 py-3 rounded-md w-full h-2/12 text-white text-2xl ${
              isInstalled ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isInstalled ? "Installed" : "Install Now"}
          </button>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-500 mb-4">
            Developed By{" "}
            <a href="" className="link text-blue-500">
              {companyName}
            </a>
          </p>
          <div className="flex gap-4 flex-row">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:m-0 m-6">
              <div className="flex flex-col items-center gap-2 text-orange-500 border p-4 rounded-lg">
                <IoMdCloudDownload size={70} />
                <span className="text-gray-800 text-xl">Downloads</span>
                <span className="md:text-5xl text-4xl font-bold text-orange-600">
                  {downloads >= 1000000
                    ? `${(downloads / 1000000).toFixed(1)}M+`
                    : downloads.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-orange-500 border p-4 rounded-lg">
                <BiSolidStar size={70} />
                <span className="text-gray-800 text-xl">Average Rating</span>
                <span className="md:text-5xl text-4xl font-bold text-blue-600">
                  {ratingAvg}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-orange-500 border p-4 rounded-lg">
                <MdPreview size={70} />
                <span className="text-gray-800 text-xl">Total Reviews</span>
                <span className="md:text-5xl text-4xl font-bold text-green-600">
                  {reviews.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-orange-500 border p-4 rounded-lg">
                <MdOutlineStorage size={70} />
                <span className="text-gray-800 text-xl">App Size</span>
                <span className="md:text-5xl text-4xl font-bold text-green-600 text-center">
                  {size} MB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={app.ratings.slice().reverse()}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 40, bottom: 0 }}
            barCategoryGap="40%"
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#FFA500"
              barSize={40}
              radius={[0, 50, 50, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-semibold mb-5">Description</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

export default AppDetails;
