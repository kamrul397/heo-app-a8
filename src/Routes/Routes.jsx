import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Apps from "../Components/Apps/Apps";
import Installation from "../Components/Installation/Installation";
import TrendingApps from "../Components/TrendingApps/TrendingApps";
import { fetchJson } from "../Utilities/fetchData";
import AppDetails from "../Components/AppDetails.jsx/AppDetails";
import Footer from "../Components/Footer/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        loader: () => fetchJson("trendingApps.json"),
        element: <Apps />,
      },

      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/trendingapps",
        loader: () => fetchJson("trendingApps.json"),
        element: <TrendingApps />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      //   {
      //     path: "/footer",
      //     element: <Footer></Footer>,
      //   },
    ],
  },
]);
