import { Route, Routes } from "react-router-dom";
import { DashboardContainer } from "../../Pages/Dashboard-Container/DashboardContianer";
import { Login } from "../../Pages/Login/Login";
import { CoursesCards } from "../../Pages/Courses-Cards/CoursesCards";
import { useSelector } from "react-redux";
import { AuthProvider, useAuth } from "../auth";
import { Layout } from "../Layout";
import { CoursesDetails } from "../../Pages/Courses-Details/CoursesDetails";

export const Views = () => {
  // const stateFromLoginSlice = useSelector((state: any) => state.login);
  const auth = useAuth();

  return (
    <AuthProvider>
      <Routes>
        {!auth?.user && <Route path="/login" element={<Login />} />}
        <Route path="/Home" element={<Layout type={1} />} />
        <Route path="/Courses" element={<Layout type={2} />}></Route>
        <Route path="/Courses/:courseId" element={<Layout type={3} />}></Route>
        <Route path="/Courses/:courseId/watch" element={<Layout type={4} />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};
