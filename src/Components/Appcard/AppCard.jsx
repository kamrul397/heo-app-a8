import { useNavigate } from "react-router-dom";
import { IoMdCloudDownload } from "react-icons/io";

const AppCard = ({ app, color = "orange" }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
      onClick={() => navigate(`/apps/${app.id}`)}
    >
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-32 object-contain mb-2"
      />
      <h3 className="font-semibold text-lg">{app.title}</h3>
      <div
        className={`flex justify-between items-center mt-2 text-${color}-500`}
      >
        <div className="flex items-center gap-1">
          <IoMdCloudDownload size={20} />
          <span>{app.reviews}</span>
        </div>
        <div className="flex items-center gap-1">⭐ {app.ratingAvg}</div>
      </div>
    </div>
  );
};

export default AppCard;
