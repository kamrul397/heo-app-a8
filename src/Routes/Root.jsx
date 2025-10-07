import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import TrendingApps from "../Components/TrendingApps/TrendingApps";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
