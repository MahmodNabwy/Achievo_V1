import React from "react";
import { MainCard } from "../../Components/MainCard/MainCard";
import courseIcon from "./Icons/TwoUsers.svg";
import StatisticsProgress from "../../Components/Statistics/Courses/CourseProgress";
import AssessmentsContent from "../../Components/Statistics/Assessments/AssessmentsContent";
import NextAssessmentBtn from "../../Components/Statistics/Assessments/NextAssessmentBtn";
import PoliciesContent from "../../Components/Statistics/Policies/PoliciesContent";
import policiesIcon from "./Icons/Policies.svg";
import InnovationContent from "../../Components/Statistics/Innovation/InnovationContent";
import innovationIcon from "../Dashboard-Cards/Icons/Innovation.svg";

export const Cards = () => {
  const CoursesChildren = [
    <StatisticsProgress
      percentage="20%"
      title="Latest Course"
      courseName="Password Cracking"
      lineValue={20}
    />,
  ];
  const AssessmentChildren = [
    <AssessmentsContent
      completed={["Security Awareness Test", "Malicious emails", "Spam"]}
      unCompleted={["Personality Test", "Working From Home"]}
    />,
    <NextAssessmentBtn title={"Continue Next Assessment"} />,
  ];
  const PoliciesChildren = [
    <PoliciesContent
      acknowledged={["Company policy v1.0"]}
      unread={[
        "Company policy v1.0",
        "Attendence Policy",
        "Zenhr Guide",
        "Zenhr Guide",
      ]}
    />,
  ];
  const InnovationChildren = [
    <InnovationContent
      reviewing={["Awareness Campaigns"]}
      approved={[
        "Challenging games",
        "Motivation",
        "Rewards for collaboration",
        "Rewards for collaboration",
        "Rewards for collaboration",
      ]}
    />,
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
        <MainCard
          content={PoliciesChildren}
          icon={policiesIcon}
          title="Policies & Procedures"
        />
        <MainCard
          content={InnovationChildren}
          icon={innovationIcon}
          title="Innovation Management"
        />
      </div>
    </div>
  );
};
