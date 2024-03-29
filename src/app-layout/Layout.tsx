import React from "react";
import { Circles } from "../Pages/Dashboard-Circles/Circles";
import { Cards } from "../Pages/Dashboard-Cards/Cards";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import WelcomeBanner from "../Components/WelcomeBanner/WelcomeBanner";
import { LineProgress } from "../Components/LineProgress/LineProgress";
import { CoursesCards } from "../Pages/Courses-Cards/CoursesCards";
import { MainHeader } from "../Components/MainHeader/MainHeader";
import { CoursesDetails } from "../Pages/Courses-Details/CoursesDetails";
import { CorusesWatch } from "../Pages/Courses-Watch/CorusesWatch";
import { Views } from "./Views";
import { DashboardContainer } from "../Pages/Dashboard-Container/DashboardContianer";
import { title } from "process";
import { CoursesContainer } from "../Pages/Courses-Container/CoursesContainer";
import { Footer } from "../Components/Footer/Footer";
import { Assessments } from "../Pages/Assessments/Assessments";
import { AssessmentDetails } from "../Components/Assessment-Details/AssessmentDetails";
import { ContinueAssessment } from "../Components/Continue-Assessment/ContinueAssessment";
import { AssessmentCompleted } from "../Components/Assessment-Completed/AssessmentCompleted";
import { PoliciesProcedures } from "../Pages/Policies&Procedures/Policies_Procedures";
import { InnovationManagement } from "../Pages/Innovation-Management/InnovationManagement";
import { Certificates } from "../Pages/Certificates/Certificates";
import { Announcements } from "../Pages/Announcements/Announcements";

type layoutProps = {
  type: number;
};
export const Layout = (props: layoutProps) => {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div className="flex w-full h-auto flex-col overflow-auto">
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
        <MainHeader
          title={
            props.type === 1
              ? "Dashboard"
              : props.type === 2
              ? "Courses"
              : props.type === 3
              ? "Courses"
              : props.type === 4
              ? "Courses"
              : props.type === 5 ||
                props.type === 6 ||
                props.type === 7 ||
                props.type === 8
              ? "Assessments"
              : props.type === 9
              ? "Policies & Procedures"
              : props.type === 10
              ? "Innovation Management"
              : props.type === 11
              ? "Certificates"
              : "Announcements"
          }
        />
        {props.type === 1 ? (
          <>
            <WelcomeBanner userName="Mohamed Mansour" />
            <DashboardContainer />
          </>
        ) : props.type === 2 ? (
          <>
            <CoursesContainer />
          </>
        ) : props.type === 3 ? (
          <CoursesDetails />
        ) : props.type === 4 ? (
          <CorusesWatch />
        ) : props.type === 5 ? (
          <Assessments />
        ) : props.type === 6 ? (
          <>
            <AssessmentDetails />
          </>
        ) : props.type === 7 ? (
          <ContinueAssessment />
        ) : props.type === 8 ? (
          <AssessmentCompleted />
        ) : props.type === 9 ? (
          <PoliciesProcedures />
        ) : props.type === 10 ? (
          <InnovationManagement />
        ) : props.type === 11 ? (
          <Certificates />
        ) : (
          <Announcements />
        )}
      </div>
    </div>
  );
};
