import React from "react";
import { Card, CardHeader, CardTitle } from "../../@/components/ui/card";
import expandIcon from "./Assets/Icons/Bookmark.svg";
import "../MainCard/MainCard.css";
import ProgressLine from "../Statistics/Courses/ProgressLine";
type MainCardProps = {
  title: string;
  icon: string;
  content: React.ReactNode[];
};
export const MainCard = (props: MainCardProps) => {
  return (
    <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 card-section">
      <div className="col-span-full lg:p-4">
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
            <span>
              <img className="expand-icon" src={expandIcon} alt="expand" />
            </span>
          </div>
        </div>
      </div>
      {/* <div className="col-start-1 col-end-1 xs:col-start-1 sm:col-start-1 lg:p-4">
        <div className="flex testt">Latest Course</div>
      </div>
      <div className="col-start-1 xs:col-start-1 sm:col-start-1  md:col-start-1 lg:flex lg:col-start-2 lg:p-4  justify-end ">
        <div className="percentege">20 % Compeleted</div>
      </div>
      <div className="col-span-full lg:p-4">
        <ProgressLine value={12} />
      </div>
      <div className="col-start-1 col-end-1 sm:col-start-1 lg:p-4">
        <span>Course Name: Password Cracking</span>
      </div>
      <div className="col-start-1 xs:col-start-1 sm:col-start-1 lg:col-start-2 flex lg:justify-end lg:p-4">
        <a href="#" className="resuming">
          Resume Course
        </a>
      </div> */}

      {/* Completed Assessments */}

      <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-1">
        <span className="assessment-text">Completed assessments</span>
        <div className="col-start-1 text-center border-completed border-completed-xs xs:col-start-1 sm:col-start-1 lg:col-start-1"></div>
        <ul>
          <li className="menu-item menu-item-xs">
            <input
              type="checkbox"
              className="checkbox-success checkbox checkbox-xs completed-box-xs"
              checked
            />

            <span
              className="assessments-element"
              style={{ marginRight: "-6px" }}
            >
              Security Awareness Test
            </span>
          </li>
          <li className="menu-item menu-item-xs">
            <input
              type="checkbox"
              className="checkbox-success checkbox checkbox-xs completed-box-xs"
              checked
            />

            <span className="assessments-element">Malicious emails</span>
          </li>
          <li className="menu-item menu-item-xs">
            <input
              type="checkbox"
              className="checkbox-success checkbox checkbox-xs completed-box-xs"
              checked
            />

            <span className="assessments-element">Spam</span>
          </li>
        </ul>
      </div>
      {/* Un Completed Assessments */}
      <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2">
        <span className="assessment-text">Uncompleted assessments</span>
        <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2 border-uncompleted border-uncompleted-xs"></div>
        <ul>
          <li className="menu-item menu-item-xs">
            <input
              type="checkbox"
              className="checkbox-warning checkbox checkbox-xs completed-box-xs"
              checked
            />

            <span className="assessments-element">Personality Test</span>
          </li>
          <li className="menu-item menu-item-xs">
            <input
              type="checkbox"
              className="checkbox-warning checkbox checkbox-xs completed-box-xs"
              checked
            />

            <span className="assessments-element">Working from Home</span>
          </li>
        </ul>
      </div>
      <div className="col-start-1 flex  xs:col-start-1 sm:col-start-1 lg:col-start-2 assess-btn-section assess-btn-section-xs">
        <button className="continue-assesments rounded-full p-1 continue-assesments-xs">
          Continue Next Assessment
        </button>
      </div>
    </div>
  );
};
