import React from "react";
import logoPNG from "../../assets/logo.png";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logoPNG} alt="Logo" className="w-8 h-8" />
          <h2 className="text-xl font-bold">HERO.IO</h2>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <h3 className="text-sm font-semibold">Follow Us</h3>
          <div className="flex gap-3 text-xl mt-1">
            <a href="#" className="hover:text-blue-300 transition-colors">
              <CiTwitter />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <CiFacebook />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 text-center border-t border-blue-800 pt-2">
        <p className="text-xs text-gray-300">
          © 2025 HERO.IO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
