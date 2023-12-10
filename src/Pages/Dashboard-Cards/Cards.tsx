import React, { useState } from "react";
import AssessmentsContent from "../../Components/Statistics/Assessments/AssessmentsContent";
import PoliciesContent from "../../Components/Statistics/Policies/PoliciesContent";
import InnovationContent from "../../Components/Statistics/Innovation/InnovationContent";
import CourseProgress from "../../Components/Statistics/Courses/CourseProgress";
import { CardContent } from "../../Components/CardContent/CardContent";
import coursesIcon from "./Icons/TwoUsers.svg";
import assessmentIcon from "./Icons/Assessments.svg";

export const Cards = () => {
  const AssessmentsFirstSection = {
    title: "Completed assessments",
    data: [
      "Security Awareness Test",
      "Malicious emails",
      "Spam",
      "test",
      "Test",
      "Test",
    ],
  };
  const AssessmentsMiddleSection = {
    title: "Uncompleted assessments",
    data: ["Personality Test", "Working From Home"],
  };
  const AssessmentsLastSection = {
    title: "Deadline",
    data: ["30/07/2023", "No Deadline"],
  };
  return (
    <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
      <div>
        {/* Is Minimized === true then add height 142px else remove this height */}
        <div className="col-span-1" style={{ height: "142px" }}>
          <CourseProgress
            courseName="Password Cracking"
            isMinmized={true}
            lineValue={12}
          />
        </div>
        <div className="col-span-1 mt-10" style={{ height: "142px" }}>
          <PoliciesContent
            acknowledged={[""]}
            unread={[""]}
            isMinmized={true}
            // lineValue={12}
          />
        </div>
        <div className="col-span-1 mt-16" style={{ height: "142px" }}>
          <CourseProgress
            courseName="Password Cracking"
            isMinmized={true}
            lineValue={12}
          />
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex-1">
        <CardContent
          cardTitle="Assessments"
          cardId={2}
          cardIcon={assessmentIcon}
          hasThirdColumn={true}
          middleColumnWithOption={false}
          firstSection={AssessmentsFirstSection}
          middleSection={AssessmentsMiddleSection}
          lastSection={AssessmentsLastSection}
        />

        {/* <CourseProgress courseName="Password Cracking" lineValue={12} /> */}
      </div>
    </div>
  );
};
