import { Route, Routes } from "react-router-dom";
import { DashboardContainer } from "../../Pages/Dashboard-Container/DashboardContianer";
import { Login } from "../../Pages/Login/Login";
import { CoursesCards } from "../../Pages/Courses-Cards/CoursesCards";
import { useSelector } from "react-redux";

export const Views = () => {
  const stateFromLoginSlice = useSelector((state: any) => state.login);

  return (
    <Routes>
      {stateFromLoginSlice.isLogged === true ? (
        <>
          <Route path="/Home" element={<DashboardContainer />} />
          <Route path="/Courses" element={<CoursesCards />} />

          <Route path="*" element={<Login />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
    </Routes>
  );
};
