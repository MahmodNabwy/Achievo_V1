import React from "react";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Circles } from "./Pages/Dashboard-Circles/Circles";
import { Cards } from "./Pages/Dashboard-Cards/Cards";
import { Layout } from "./app-layout/Layout";
import { Login } from "./Pages/Login/Login";
const App = () => {
  return (
    <div>
      {/* <Layout /> */}
      <Login />
    </div>
  );
};

export default App;
