import React, { useState, useEffect } from "react";
import AssessmentsContent from "../../Components/Statistics/Assessments/AssessmentsContent";
import PoliciesContent from "../../Components/Statistics/Policies/PoliciesContent";
import InnovationContent from "../../Components/Statistics/Innovation/InnovationContent";
import CourseProgress from "../../Components/Statistics/Courses/CourseProgress";
import { CardContent } from "../../Components/CardContent/CardContent";
import assessmentIcon from "./Icons/Assessments.svg";

import "./Cards.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  maximizeAssessments,
  maximizeCourses,
  maximizeInnovation,
  maximizePolicies,
  minimizeAssessments,
  minimizeCourses,
  minimizeInnovation,
  minimizePolicies,
  resetCards,
} from "../../redux/Slices/CardsSlice";
export const Cards = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);
  const dispatch = useDispatch();

  /*
   * In SM,MD Screens We Disable Expand Cards
   */
  const handleResize = () => {
    const screenWidth = window.innerWidth;

    // Define your screen size breakpoints
    const smallScreenMaxWidth = 600;
    const mediumScreenMaxWidth = 1024;

    // Check if the screen is small
    if (screenWidth <= smallScreenMaxWidth) {
      setIsSmallScreen(true);
      let type = 2;
      dispatch(resetCards({ type }));
    }
    // Check if the screen is medium
    else if (
      screenWidth > smallScreenMaxWidth &&
      screenWidth <= mediumScreenMaxWidth
    ) {
      setIsMediumScreen(true);
    } else {
      setIsSmallScreen(false);
      setIsMediumScreen(false);

      let currentExpandedCard = stateFromRedux.cardId;
      let type = 2;
      if (stateFromRedux.type !== 1) {
        //Check if any card is expanded

        switch (currentExpandedCard) {
          case 1:
            dispatch(maximizeCourses({ type }));
            //Set Type = 3 for minimize another cards
            type = 3;
            dispatch(minimizeAssessments({ type }));
            dispatch(minimizeInnovation({ type }));
            dispatch(minimizePolicies({ type }));
            break;
          case 2:
            dispatch(maximizeAssessments({ type }));
            //Set Type = 3 for minimize another cards
            type = 3;
            dispatch(minimizeInnovation({ type }));
            dispatch(minimizePolicies({ type }));
            dispatch(minimizeCourses({ type }));
            break;
          case 3:
            dispatch(maximizePolicies({ type }));
            type = 3;
            dispatch(minimizeInnovation({ type }));
            dispatch(minimizeAssessments({ type }));
            dispatch(minimizeCourses({ type }));
            break;
          case 4:
            dispatch(maximizeInnovation({ type }));
            //Set Type = 3 for minimize another cards
            type = 3;
            dispatch(minimizePolicies({ type }));
            dispatch(minimizeAssessments({ type }));
            dispatch(minimizeCourses({ type }));
            break;
          default:
            break;
        }
      }
    }
  };
  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
  const AssessmentsLastSection = {
    title: "Deadline",
    data: ["30/07/2023", "No Deadline"],
  };

  const stateFromRedux = useSelector((state: any) => state.card);

  return stateFromRedux.cardId === 1 &&
    stateFromRedux.maximizeCourse === true &&
    isSmallScreen === false &&
    isMediumScreen === false ? ( //Maximize Course Figure
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
    stateFromRedux.maximizeAssessments === true &&
    isSmallScreen === false &&
    isMediumScreen === false ? ( //Maximize Assessments Figure
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
    stateFromRedux.maximizePolicies === true &&
    isSmallScreen === false &&
    isMediumScreen === false ? ( //Maximize Policies Figure
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
    stateFromRedux.maximizeInnovation === true &&
    isSmallScreen === false &&
    isMediumScreen === false ? ( //Maximize Innovation Figure
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
