import React from "react";
import expandIcon from "./Assets/Icons/Bookmark.svg";
import "../MainCard/MainCard.css";
type MainCardProps = {
  title: string;
  icon: string;
  cardId: number;
  onDataReceived: (data: number) => void;
};
export const MainCard = (props: MainCardProps) => {
  const sendDataToParent = (e: number) => {
    props.onDataReceived(e);
  };

  return (
    <div className="col-span-full">
      <div className="grid grid-cols-2 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4">
        <div className="col-start-1 col-end-1 sm:col-start-1">
          <div className="flex">
            <img src={props.icon} className="card-icon" alt="card-icon" />
            <span className="card-title card-title-xs sm:col-start-1">
              {props.title}
            </span>
          </div>
        </div>
        <div className="col-start-2 flex justify-end">
          <span onClick={() => sendDataToParent(props.cardId)}>
            <img className="expand-icon" src={expandIcon} alt="expand" />
          </span>
        </div>
      </div>
    </div>
  );
};
