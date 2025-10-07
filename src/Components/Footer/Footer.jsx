import React from "react";
import logoPNG from "../../assets/logo.png";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <div className=" py-10 px-5 bg-blue-900 flex flex-col gap-6 justify-center items-center mt-10">
      <div className=" text-white rounded mt-10 flex justify-between flex-col md:flex-row items-center w-full ">
        <div>
          <a className="btn btn-ghost text-xl">
            <img src={logoPNG} alt="Logo" className="w-8 h-8" />
            <h3>HERO.IO</h3>
          </a>
        </div>
        {/* right div */}
        <div className="">
          <h1>Social Links</h1>
          <div className="flex gap-4 text-2xl mt-2">
            <CiTwitter />
            <CiFacebook />
            <CiLinkedin />
          </div>
        </div>
      </div>

      <div>
        <p className="text-white">Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
