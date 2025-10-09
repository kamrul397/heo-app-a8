import React from "react";
import { SiGoogleplay } from "react-icons/si";
import heroImg from "../../assets/hero.png";
import TrendingApps from "../TrendingApps/TrendingApps";

const Home = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      {/* Hero Section */}
      <div className="flex flex-col w-full p-8 bg-gray-50 items-center">
        <h1 className="text-6xl font-extrabold text-gray-900 leading-none sm:text-7xl text-center">
          We Build <br />
          <span className="text-purple-600">Productive</span> Apps
        </h1>

        <p className="text-lg mt-6 text-gray-700 max-w-2xl text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://play.google.com/store/games?hl=en&gl=US"
            target="_blank"
            className="btn btn-primary flex items-center gap-2"
          >
            <SiGoogleplay />
            <span>Google Play</span>
          </a>
          <a
            href="https://www.apple.com/lae/app-store/"
            target="_blank"
            className="btn btn-info flex items-center gap-2"
          >
            <SiGoogleplay />
            <span>App Store</span>
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full">
        <img src={heroImg} alt="Hero banner" className="mx-auto w-8/12" />
      </div>

      {/* Trending Apps section */}
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
