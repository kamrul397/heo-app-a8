import React, { useEffect, useState } from "react";
import { FaGit, FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logoPNG from "../../assets/logo.png";
import { useInstalledApps } from "../../context/InstalledAppsContext";

const Navbar = () => {
  // const [installedAppsCount, setInstalledAppsCount] = useState(0);
  // useEffect(() => {
  //   // Read from localStorage when component mounts
  //   const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
  //   setInstalledAppsCount(apps.length);
  // }, []);
  const { installedApps } = useInstalledApps();
  const links = (
    <>
      <li>
        <NavLink to="/" end className="m-2 px-3 py-1 rounded hover:bg-gray-200">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/apps" className="m-2 px-3 py-1 rounded hover:bg-gray-200">
          Apps
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/installation"
          className="m-2 px-3 py-1 rounded hover:bg-gray-200"
        >
          Installed Apps {installedApps.length}
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost text-xl">
            <img src={logoPNG} alt="Logo" className="w-8 h-8" />
            <h3>HERO.IO</h3>
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-primary flex items-center gap-2"
          href="https://github.com/kamrul397"
        >
          <FaGithub className="text-xl" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
