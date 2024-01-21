import { Route, Routes } from "react-router-dom";
import { DashboardContainer } from "../Pages/Dashboard-Container/DashboardContianer";
import { Login } from "../Pages/Login/Login";
import { CoursesCards } from "../Pages/Courses-Cards/CoursesCards";
import { useSelector } from "react-redux";
import { AuthProvider, useAuth } from "./auth";
import { Layout } from "./Layout";
import { CoursesDetails } from "../Pages/Courses-Details/CoursesDetails";

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
        <Route path="/Assessments" element={<Layout type={5} />}></Route>
        <Route
          path="/Assessments/:AssessmentId"
          element={<Layout type={6} />}
        ></Route>
        <Route
          path="/Assessments/:AssessmentId/Continue"
          element={<Layout type={7} />}
        />
        <Route
          path="/Assessments/:AssessmentId/Continue/AssessmentFinished"
          element={<Layout type={8} />}
        />
        <Route
          path="/Policies&Procedures"
          element={<Layout type={9} />}
        ></Route>
        <Route
          path="/InnovationManagement"
          element={<Layout type={10} />}
        ></Route>
        <Route path="/Certificates" element={<Layout type={11} />}></Route>
        <Route path="/Announcements" element={<Layout type={12} />}></Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};
