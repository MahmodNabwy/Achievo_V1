import React, { useState } from "react";
import AssessmentsContent from "../../Components/Statistics/Assessments/AssessmentsContent";
import PoliciesContent from "../../Components/Statistics/Policies/PoliciesContent";
import InnovationContent from "../../Components/Statistics/Innovation/InnovationContent";
import CourseProgress from "../../Components/Statistics/Courses/CourseProgress";
import { CardContent } from "../../Components/CardContent/CardContent";
import assessmentIcon from "./Icons/Assessments.svg";

import "./Cards.scss";
import { useSelector } from "react-redux";
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

  const policiesLastSection = {
    title: "Deadline",
    data: [
      {
        text: "Test",
        value: 1,
      },
    ],
  };

  const AssessmentsLastSection = {
    title: "Deadline",
    data: ["30/07/2023", "No Deadline"],
  };

  const stateFromRedux = useSelector((state: any) => state.card);

  return stateFromRedux.cardId === 1 &&
    stateFromRedux.maximizeCourse === true ? ( //Maximize Course Figure
    <>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-1 animate__animated animate__fadeIn sm:col-span-1 lg:col-span-3 flex-1">
          <CourseProgress
            courseName="Password Cracking"
            lineValue={20}
            firstColumn={CoursesMaximizeData.firstColumn}
            secondColumn={CoursesMaximizeData.secondColumn}
            thirdColumn={CoursesMaximizeData.thirdColumn}
          />
        </div>
        <div>
          <div
            className="col-span-1 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <AssessmentsContent completed={[""]} unCompleted={[""]} />
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
            <PoliciesContent acknowledged={[""]} unread={[""]} />
          </div>
        </div>
      </div>
    </>
  ) : stateFromRedux.cardId === 2 &&
    stateFromRedux.maximizeAssessments === true ? ( //Maximize Assessments Figure
    <>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        <div>
          <div
            className="col-span-1 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <CourseProgress courseName="Password Cracking" lineValue={12} />
          </div>
          <div
            className="col-span-1 mt-10 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <PoliciesContent acknowledged={[""]} unread={[""]} />
          </div>
          <div
            className="col-span-1 mt-16 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <InnovationContent
              approved={[""]}
              reviewing={[""]}
              isMinmized={true}
            />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex-1 animate__animated animate__fadeIn">
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
        </div>
      </div>
    </>
  ) : stateFromRedux.cardId === 3 &&
    stateFromRedux.maximizePolicies === true ? ( //Maximize Policies Figure
    <>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-1 animate__animated animate__fadeIn sm:col-span-1 lg:col-span-3 flex-1">
          <PoliciesContent acknowledged={[""]} unread={[""]} />
        </div>
        <div>
          <div
            className="col-span-1 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <CourseProgress courseName="Password Cracking" lineValue={12} />
          </div>
          <div
            className="col-span-1 mt-10 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <AssessmentsContent
              completed={[
                "Security Awareness Test",
                "Malicious emails",
                "Spam",
              ]}
              unCompleted={["Personality Test", "Working From Home"]}
            />
          </div>
          <div
            className="col-span-1 mt-16 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <InnovationContent
              approved={[""]}
              reviewing={[""]}
              isMinmized={true}
            />
          </div>
        </div>
      </div>
    </>
  ) : stateFromRedux.cardId === 4 &&
    stateFromRedux.maximizeInnovation === true ? ( //Maximize Innovation Figure
    <>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        <div>
          {/* Is Minimized === true then add height 142px else remove this height */}
          <div
            className="col-span-1 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <CourseProgress courseName="Password Cracking" lineValue={12} />
          </div>
          <div
            className="col-span-1 mt-10 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <AssessmentsContent completed={[""]} unCompleted={[""]} />
          </div>
          <div
            className="col-span-1 mt-16 animate__animated animate__fadeIn"
            style={{ height: "142px" }}
          >
            <PoliciesContent acknowledged={[""]} unread={[""]} />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex-1 animate__animated animate__fadeIn">
          <InnovationContent
            approved={[""]}
            reviewing={[""]}
            isMinmized={false}
          />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1 animate__animated animate__fadeIn">
          <CourseProgress courseName="Password Cracking" lineValue={1} />
        </div>
        <div className="col-span-1 animate__animated animate__fadeIn">
          <AssessmentsContent
            completed={["Security Awareness Test", "Malicious emails", "Spam"]}
            unCompleted={["Personality Test", "Working From Home"]}
          />
        </div>
        <div className="col-span-1 animate__animated animate__fadeIn">
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
        <div className="col-span-1 animate__animated animate__fadeIn">
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
