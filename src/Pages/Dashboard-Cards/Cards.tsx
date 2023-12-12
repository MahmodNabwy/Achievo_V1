import React, { useState } from "react";
import AssessmentsContent from "../../Components/Statistics/Assessments/AssessmentsContent";
import PoliciesContent from "../../Components/Statistics/Policies/PoliciesContent";
import InnovationContent from "../../Components/Statistics/Innovation/InnovationContent";
import CourseProgress from "../../Components/Statistics/Courses/CourseProgress";
import "./Cards.scss";
export const Cards = () => {
  const CoursesMaximizeData = {
    firstColumn: {
      title: "Completed courses",
      data: [
        "Security Awareness Training",
        "Mailcious emails",
        "Spam",
        "Phishing attacks",
        "API Security",
      ],
    },
    secondColumn: {
      title: "In progress courses",
      data: [
        {
          title: "Password Cracking",
          percentage: 20,
        },
        {
          title: "IOT",
          percentage: 60,
        },
        {
          title: "Physical security",
          percentage: 1,
        },
        {
          title: "Mobile device security",
          percentage: 15,
        },
        {
          title: "Communication skills",
          percentage: 72,
        },
      ],
    },
    thirdColumn: {
      title: "Your Rank",
      score: 4,
      total: 15,
    },
  };
  const [courseExpand, setCourseExpand] = useState(false);
  const [displayVal, setDisplayVal] = useState("unset");
  const handleExpandedCards = (id: number) => {
    switch (id) {
      case 1:
        setCourseExpand(true);
        setDisplayVal("none");
        break;

      default:
        break;
    }
  };
  return courseExpand === true ? (
    <>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-1 animate__animated animate__fadeIn sm:col-span-1 lg:col-span-3 flex-1">
          <CourseProgress
            courseName="Password Cracking"
            lineValue={20}
            isMinmized={false}
            firstColumn={CoursesMaximizeData.firstColumn}
            secondColumn={CoursesMaximizeData.secondColumn}
            thirdColumn={CoursesMaximizeData.thirdColumn}
          />
        </div>
        <div>
          {/* Is Minimized === true then add height 142px else remove this height */}
          <div
            className="col-span-1 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <AssessmentsContent
              completed={[""]}
              unCompleted={[""]}
              isMinmized={true}
            />
          </div>
          <div
            className="col-span-1 animate__animated animate__fadeIn mt-10"
            style={{ height: "142px" }}
          >
            <InnovationContent
              approved={[""]}
              reviewing={[""]}
              isMinmized={true}
            />
          </div>
          <div
            className="col-span-1 animate__animated animate__fadeIn mt-16"
            style={{ height: "142px" }}
          >
            <PoliciesContent
              acknowledged={[""]}
              unread={[""]}
              isMinmized={true}
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          className="col-span-1"
          style={{ display: displayVal }}
          onClick={() => handleExpandedCards(1)}
        >
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
    </>
  );
};
