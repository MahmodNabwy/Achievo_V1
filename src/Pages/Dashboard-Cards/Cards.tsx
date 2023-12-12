import React from "react";
import AssessmentsContent from "../../Components/Statistics/Assessments/AssessmentsContent";
import PoliciesContent from "../../Components/Statistics/Policies/PoliciesContent";
import InnovationContent from "../../Components/Statistics/Innovation/InnovationContent";
import CourseProgress from "../../Components/Statistics/Courses/CourseProgress";

export const Cards = () => {
  return (
    <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="col-span-1">
        <CourseProgress courseName="Password Cracking" lineValue={12} />
      </div>
      <div className="col-span-1">
        <AssessmentsContent
          completed={["Security Awareness Test", "Malicious emails", "Spam"]}
          unCompleted={["Personality Test", "Working From Home"]}
        />
      </div>
      <div className="col-span-1">
        <PoliciesContent
          acknowledged={["Company policy v1.0"]}
          unread={[
            "Company policy v1.0",
            "Attendence Policy",
            "Zenhr Guide",
            "Zenhr Guide",
          ]}
        />
      </div>
      <div className="col-span-1">
        <InnovationContent
          approved={[
            "Challenging games",
            "Motivation",
            "Rewards for collaboration",
            "Rewards for collaboration",
            "Rewards for collaboration",
          ]}
          reviewing={["Awareness Campaigns"]}
        />
      </div>
    </div>
  );
};
