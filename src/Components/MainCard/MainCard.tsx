import React from "react";
import expandIcon from "./Assets/Icons/Bookmark.svg";
import "../MainCard/MainCard.css";
type MainCardProps = {
  title: string;
  icon: string;
  upIcon?: string;
  cardId: number;
  expanded: boolean | null;
  onCourseClick?: (value: boolean | null) => void; // Optional and nullable callback function
};
export const MainCard = (props: MainCardProps) => {
  const handleExpandBtn = (cardId: Number) => {
    switch (cardId) {
      case 1:
        sendPropsToCardCourses();
        break;

      default:
        break;
    }
  };
  const sendPropsToCardCourses = () => {
    if (props.onCourseClick) {
      props.onCourseClick(props.expanded);
    }
  };
  return (
    //Full Width For Normal Figures and Maximize Figures
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
                  onClick={() => handleExpandBtn(props.cardId)}
                />
              </span>
            </div>
          </div>
        </div>
      </>
    ) : (
      //Only For Minmized Figures
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
        <img src={expandIcon} className="expand-icon" alt="expand-icon" />
      </div>
    )
  );
};
