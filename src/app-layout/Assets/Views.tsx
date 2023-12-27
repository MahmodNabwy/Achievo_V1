import { Route, Routes } from "react-router-dom";
import { DashboardContainer } from "../../Pages/Dashboard-Container/DashboardContianer";
import { Login } from "../../Pages/Login/Login";
import { CoursesCards } from "../../Pages/Courses-Cards/CoursesCards";
import { useSelector } from "react-redux";
import { AuthProvider, useAuth } from "../auth";
import { Layout } from "../Layout";

export const Views = () => {
  // const stateFromLoginSlice = useSelector((state: any) => state.login);
  const auth = useAuth();

  return (
    <AuthProvider>
      <Routes>
        {!auth?.user && <Route path="/login" element={<Login />} />}
        <Route path="/Home" element={<Layout type={1} />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};
