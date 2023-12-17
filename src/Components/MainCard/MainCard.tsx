import React, { useState, useEffect } from "react";
import expandIcon from "./Assets/Icons/Bookmark.svg";
import "../MainCard/MainCard.css";
import { useDispatch, useSelector } from "react-redux";
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
type MainCardProps = {
  title: string;
  icon: string;
  upIcon?: string;
  cardId: number;
  expanded: boolean | null;
};
export const MainCard = (props: MainCardProps) => {
  const [type, setExpandType] = useState(2);
  const stateFromRedux = useSelector((state: any) => state.card);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Define your screen size breakpoints
      const smallScreenMaxWidth = 600;
      const mediumScreenMaxWidth = 1024;

      // Check if the screen is small
      if (screenWidth <= smallScreenMaxWidth) {
        setIsSmallScreen(true);
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
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleExpandBtn = (cardId: Number, type: number) => {
    //To Enable Expand Action only on large screens
    if (isSmallScreen === false && isMediumScreen === false) {
      switch (cardId) {
        case 1:
          if (type === 2) {
            //Check if Now Is Maximize and we return to normal figure
            if (stateFromRedux.maximizeCourse === true) {
              dispatch(resetCards({ type }));
            } else {
              //Maximize
              setExpandType(2);
              dispatch(maximizeCourses({ type }));
              //Set Type = 3 for minimize another cards
              type = 3;
              dispatch(minimizeAssessments({ type }));
              dispatch(minimizeInnovation({ type }));
              dispatch(minimizePolicies({ type }));
            }
          } else if (type === 1) {
            setExpandType(type);
            dispatch(minimizeCourses({ type }));
          }
          break;
        case 2:
          if (type === 2) {
            if (stateFromRedux.maximizeAssessments === true) {
              //Check if Now Is Maximize and we return to normal figure
              dispatch(resetCards({ type }));
            } else {
              setExpandType(2);
              dispatch(maximizeAssessments({ type }));
              //Set Type = 3 for minimize another cards
              type = 3;
              dispatch(minimizeInnovation({ type }));
              dispatch(minimizePolicies({ type }));
              dispatch(minimizeCourses({ type }));
            }
          } else if (type === 1) {
            setExpandType(2);
            dispatch(minimizeAssessments({ type }));
          }
          break;

        case 3:
          if (type === 2) {
            //Check if Now Is Maximize and we return to normal figure
            if (stateFromRedux.maximizePolicies === true) {
              dispatch(resetCards({ type }));
            } else {
              setExpandType(2);
              dispatch(maximizePolicies({ type }));
              //Set Type = 3 for minimize another cards
              type = 3;
              dispatch(minimizeInnovation({ type }));
              dispatch(minimizeAssessments({ type }));
              dispatch(minimizeCourses({ type }));
            }
          } else if (type === 1) {
            setExpandType(1);
            dispatch(minimizePolicies({ type }));
          }
          break;

        case 4:
          if (type === 2) {
            if (stateFromRedux.maximizeInnovation === true) {
              dispatch(resetCards({ type }));
            } else {
              setExpandType(2);
              dispatch(maximizeInnovation({ type }));
              //Set Type = 3 for minimize another cards
              type = 3;
              dispatch(minimizePolicies({ type }));
              dispatch(minimizeAssessments({ type }));
              dispatch(minimizeCourses({ type }));
            }
          } else if (type === 1) {
            setExpandType(1);
            dispatch(minimizeInnovation({ type }));
          }
          break;

        default:
          break;
      }
    }
  };

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);

  return (
    //Full Width For Normal Figures
    props.expanded === true ? (
      <>
        <div className="col-span-12 row-span-1">
          <div className="grid grid-cols-2 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
            <div className="col-start-1 col-end-3 sm:col-start-1">
              <div className="flex">
                <img src={props.icon} className="card-icon" alt="card-icon" />
                <span className="card-title card-title-xs sm:col-start-1">
                  {props.title}
                </span>
              </div>
            </div>
            <div className="col-start-3 flex justify-end">
              <span>
                <img
                  className="expand-icon"
                  src={props.upIcon != null ? props.upIcon : expandIcon}
                  alt="expand"
                  onClick={() => handleExpandBtn(props.cardId, 2)}
                />
              </span>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div
          className="col-span-2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              margin: " 0 auto",
            }}
          >
            <img src={props.icon} className="card-icon" alt="card-icon" />
            <span>{props.title}</span>
          </div>
          <img
            src={expandIcon}
            className="expand-icon"
            alt="expand-icon"
            onClick={() => handleExpandBtn(props.cardId, 2)}
          />
        </div>
      </>
    )
  );
};
