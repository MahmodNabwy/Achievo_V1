import React from "react";
import AssessmentsContent from "../../Components/Statistics/Assessments/AssessmentsContent";
import PoliciesContent from "../../Components/Statistics/Policies/PoliciesContent";
import InnovationContent from "../../Components/Statistics/Innovation/InnovationContent";
import CourseProgress from "../../Components/Statistics/Courses/CourseProgress";
import { CardContent } from "../../Components/CardContent/CardContent";
import policiesIcon from "./Icons/Policies.svg";
import { ThreeColumns } from "../../Components/ThreeColumnsContent/ThreeColumns";

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
      <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex-1">
        <CourseProgress
          courseName="Password Cracking"
          lineValue={20}
          isMinmized={false}
        />
      </div>
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
          <AssessmentsContent
            completed={[""]}
            unCompleted={[""]}
            isMinmized={true}
          />
        </div>
        <div className="col-span-1 mt-16" style={{ height: "142px" }}>
          <InnovationContent
            approved={[""]}
            reviewing={[""]}
            isMinmized={true}
          />
        </div>
      </div>
    </div>
  );
};
