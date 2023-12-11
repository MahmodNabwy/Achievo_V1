import React from "react";
import AssessmentsContent from "../../Components/Statistics/Assessments/AssessmentsContent";
import PoliciesContent from "../../Components/Statistics/Policies/PoliciesContent";
import InnovationContent from "../../Components/Statistics/Innovation/InnovationContent";
import CourseProgress from "../../Components/Statistics/Courses/CourseProgress";
import { CardContent } from "../../Components/CardContent/CardContent";

export const Cards = () => {
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
          <AssessmentsContent
            completed={[""]}
            unCompleted={[""]}
            isMinmized={true}
          />
        </div>
        <div className="col-span-1 mt-16" style={{ height: "142px" }}>
          <PoliciesContent
            acknowledged={[""]}
            unread={[""]}
            isMinmized={true}
          />
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex-1">
        <InnovationContent
          approved={[
            "Challenging games",
            "Motivation",
            "Rewards for collaboration",
            "Rewards for collaboration",
            "Rewards for collaboration",
          ]}
          reviewing={["Awareness Campaigns"]}
          isMinmized={false}
        />
      </div>
    </div>
  );
};
