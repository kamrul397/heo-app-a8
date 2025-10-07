import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJson } from "../../Utilities/fetchData";
import { IoMdCloudDownload } from "react-icons/io";

const AppDetails = () => {
  const { id } = useParams(); // get app id from URL
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetchJson("trendingApps.json")
      .then((data) => {
        const foundApp = data.find((item) => item.id === parseInt(id));
        setApp(foundApp);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!app) return <p className="text-center mt-8">Loading app details...</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
      <img
        src={app.image}
        alt={app.title}
        className="w-full max-w-sm mx-auto mb-4"
      />
      <p className="text-gray-600 mb-2">{app.description}</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-orange-500">
          <IoMdCloudDownload size={24} /> {app.reviews} Downloads
        </div>
        <div className="flex items-center gap-1 text-orange-500">
          ⭐ {app.ratingAvg} Rating
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
