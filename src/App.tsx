import React from "react";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Circles } from "./Pages/Dashboard-Circles/Circles";
import { Cards } from "./Pages/Dashboard-Cards/Cards";
import { Layout } from "./app-layout/Layout";
import { Login } from "./Pages/Login/Login";
import { useSelector } from "react-redux";
const App = () => {
  const stateFromLoginSlice = useSelector((state: any) => state.login);
  return (
    <div>{stateFromLoginSlice.isLogged === false ? <Login /> : <Layout />}</div>
  );
};

export default App;
