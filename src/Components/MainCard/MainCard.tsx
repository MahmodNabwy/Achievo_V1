import React from "react";
import expandIcon from "./Assets/Icons/Bookmark.svg";
import "../MainCard/MainCard.css";
type MainCardProps = {
  title: string;
  icon: string;
  cardId: number;
  expanded: boolean;
};
export const MainCard = (props: MainCardProps) => {
  return (
    <div className={props.expanded === true ? "col-span-12" : "col-span-full"}>
      <div
        className={
          props.expanded === true
            ? "grid grid-cols-2 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4"
            : "grid grid-cols-2 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4"
        }
      >
        <div
          className={
            props.expanded === true
              ? "col-start-1 col-end-3 sm:col-start-1"
              : "col-start-1 col-end-1 sm:col-start-1"
          }
        >
          <div className="flex">
            <img src={props.icon} className="card-icon" alt="card-icon" />
            <span className="card-title card-title-xs sm:col-start-1">
              {props.title}
            </span>
          </div>
        </div>
        <div
          className={
            props.expanded === true
              ? "col-start-3 flex justify-end"
              : "col-start-2 flex justify-end"
          }
        >
          <span>
            <img className="expand-icon" src={expandIcon} alt="expand" />
          </span>
        </div>
      </div>
    </div>
  );
};
