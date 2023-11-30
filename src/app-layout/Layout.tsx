import React from "react";
import { Circles } from "../Pages/Dashboard-Circles/Circles";
import { Cards } from "../Pages/Dashboard-Cards/Cards";
import { Sidebar } from "../Components/Sidebar/Sidebar";

export const Layout = () => {
  return (
    <div className="flex flex-row sm:gap-10">
      <Sidebar />

      <div className="flex w-full flex-col p-4">
        {/* Expand Button */}
        <div
          className="w-fit"
          style={{ backgroundColor: "#EBEAEA", borderRadius: "10px" }}
        >
          <label
            htmlFor="sidebar-mobile-fixed"
            className="btn-primary btn sm:hidden"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </label>
        </div>

        <Circles />
        <Cards />
      </div>
    </div>
  );
};
