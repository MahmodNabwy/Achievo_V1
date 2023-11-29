import React from "react";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Circles } from "./Pages/Dashboard-Circles/Circles";
import { Cards } from "./Pages/Dashboard-Cards/Cards";
import { Layout } from "./app-layout/Layout";
const App = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
