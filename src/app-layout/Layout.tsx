import React from "react";

import { Sidebar } from "../Components/Sidebar/Sidebar";
import WelcomeBanner from "../Components/WelcomeBanner/WelcomeBanner";
import { Circles } from "../Pages/Dashboard-Circles/Circles";
import { Cards } from "../Pages/Dashboard-Cards/Cards";
export const Layout = () => {
  return (
    <div className="grid grid-cols-6">
      {/* Left Sidebar */}
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5 ml-10 mr-10">
        <div className="grid grid-cols-1">
          <WelcomeBanner userName="Mohamed Mansour" />
        </div>
        <Circles />

        <Cards />
      </div>
    </div>
  );
};
