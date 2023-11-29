import React from "react";
import { MainCard } from "../../Components/MainCard/MainCard";
import courseIcon from "./Icons/TwoUsers.svg";
import PoliciesCard from "../../Components/Statistics/Policies/PoliciesCard";
import InnovationCard from "../../Components/Statistics/Innovation/InnovationCard";
import StatisticsProgress from "../../Components/Statistics/Courses/CourseProgress";
import AssessmentsContent from "../../Components/Statistics/Assessments/AssessmentsContent";
import NextAssessmentBtn from "../../Components/Statistics/Assessments/NextAssessmentBtn";
export const Cards = () => {
  const CoursesChildren = [
    <StatisticsProgress
      percentage="20%"
      title="Latest Course"
      courseName="Password Cracking"
    />,
  ];
  const AssessmentChildren = [
    <AssessmentsContent
      completed={["Security Awareness Test", "Malicious emails", "Spam"]}
      unCompleted={["Personality Test", "Working From Home"]}
    />,
    <NextAssessmentBtn title={"Continue Next Assessment"} />,
  ];
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-20 ">
        <MainCard content={CoursesChildren} icon={courseIcon} title="Courses" />
        <MainCard
          content={AssessmentChildren}
          icon={courseIcon}
          title="Assessments"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-20 ">
        <PoliciesCard title="Policies & Procedures" />
        <InnovationCard title="Innovation Management" />
      </div>
    </div>
  );
};
