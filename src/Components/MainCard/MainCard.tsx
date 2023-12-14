import React, { useState } from "react";
import expandIcon from "./Assets/Icons/Bookmark.svg";
import "../MainCard/MainCard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  maximizeCourses,
  minimizeCourses,
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

  const handleExpandBtn = (cardId: Number, type: number) => {
    switch (cardId) {
      case 1:
        if (type === 2) {
          //Maximize
          setExpandType(2);
          dispatch(maximizeCourses({ type }));
        } else if (type === 1) {
          setExpandType(type);
          dispatch(minimizeCourses({ type }));
        }
        break;

      default:
        break;
    }
  };

  return (
    //Full Width For Normal Figures
    stateFromRedux.type === 1 ? (
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
    ) : //Full Width For Maximize Figures
    stateFromRedux.type === 2 ? (
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
                  onClick={() => handleExpandBtn(props.cardId, 1)}
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
          <img src={expandIcon} className="expand-icon" alt="expand-icon" />
        </div>
      </>
    )
  );
};
