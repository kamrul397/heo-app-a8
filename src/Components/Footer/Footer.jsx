import React from "react";
// We'll use more modern/solid icons from the Font Awesome set (Fa)
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// We'll use a solid app icon for the logo placeholder
import { FiGrid } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-blue-600">
      <div className="max-w-7xl mx-auto py-5 px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Column 1: Logo & Mission */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white">
              {/* Replace logoPNG with a sleek icon or your actual logo */}
              <FiGrid className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-extrabold tracking-wider mt-5">
                AppsBazar
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              Your curated marketplace for the best productivity and utility
              applications, built for a modern workflow.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-1">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/apps"
                  className="hover:text-blue-400 transition-colors"
                >
                  Browse Apps
                </a>
              </li>
              <li>
                <a
                  href="/installation"
                  className="hover:text-blue-400 transition-colors"
                >
                  My Installations
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-1">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/support"
                  className="hover:text-blue-400 transition-colors"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/developers"
                  className="hover:text-blue-400 transition-colors"
                >
                  Developer API
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links & Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-1">
              Connect
            </h3>
            <div className="flex gap-4 text-2xl">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Copyright Bar --- */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            © 2025 AppsBazar. All rights reserved. |{" "}
            <a href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:text-blue-400">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
