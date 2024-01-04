import React from "react";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Circles } from "./Pages/Dashboard-Circles/Circles";
import { Cards } from "./Pages/Dashboard-Cards/Cards";
import { Layout } from "./app-layout/Layout";
import { Login } from "./Pages/Login/Login";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { DashboardContainer } from "./Pages/Dashboard-Container/DashboardContianer";
import { Views } from "./app-layout/Views";
import { Footer } from "./Components/Footer/Footer";

const App = () => {
  // const stateFromLoginSlice = useSelector((state: any) => state.login);

  return (
    <>
      <Views />
      <Footer />
    </>
  );
};

export default App;
