import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJson } from "../../Utilities/fetchData";
import { IoMdCloudDownload } from "react-icons/io";

const AppDetails = () => {
  const { id } = useParams();
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

  // 🧩 Destructure properties here
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
    <div className="p-8 flex flex-row mx-auto gap-15">
      <div>
        {/* img */}
        <img
          src={image}
          alt={title}
          className="w-full max-w-sm mx-auto mb-6 rounded-lg shadow-lg"
        />
      </div>
      {/* title & details */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-500 mb-4">By {companyName}</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 flex-col">
            <span>Downloads</span>
            <IoMdCloudDownload size={70} className="text-orange-500" />
            {downloads >= 1000000
              ? `${(downloads / 1000000).toFixed(1)}M+`
              : downloads.toLocaleString()}
          </div>

          <div className="flex items-center gap-1">⭐ {ratingAvg} Rating</div>
          <div className="text-gray-600 text-sm">App Size: {size} MB</div>
          <div className="text-gray-600 text-sm">
            {reviews.toLocaleString()} Reviews
          </div>
        </div>
      </div>

      {/* <div>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-6 items-center justify-center text-orange-500">
          <div className="flex items-center gap-1">
            <IoMdCloudDownload size={24} /> {downloads.toLocaleString()}{" "}
            Downloads
          </div>
          <div className="flex items-center gap-1">⭐ {ratingAvg} Rating</div>
          <div className="text-gray-600 text-sm">App Size: {size} MB</div>
          <div className="text-gray-600 text-sm">
            {reviews.toLocaleString()} Reviews
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AppDetails;
