import React, { useState, useEffect } from "react";
import coursesIcon from "../../../Components/MainCard/Assets/Icons/Coruses-icon.svg";
import ProgressLine from "./ProgressLine";
import { MainCard } from "../../MainCard/MainCard";
import "../../MainCard/MainCard.css";

type CourseProgressProps = {
  courseName: string;
  lineValue: number;
  isMinmized?: boolean;
};

const CourseProgress = (props: CourseProgressProps) => {
  const [parentData, setParentData] = useState<number>(0);
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderMinimizedFigure = () => {
    return (
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 h-full card-section">
        <MainCard
          icon={coursesIcon}
          title="Courses"
          cardId={1}
          expanded={false}
        />
        <div className="col-start-1 col-end-1 xs:col-start-1 sm:col-start-1 pr-4 pl-4">
          <div className="flex course-status">Latest Course</div>
        </div>
        <div className="col-start-1  xs:col-start-1 sm:col-start-1  md:col-start-1 lg:flex lg:col-start-2  pr-4 pl-4  justify-end ">
          <div className="flex percentege">{props.lineValue} % Compeleted</div>
        </div>
        {/* If it minimized because of Another Card Has been expanded so make it col-span-2 else col-span-full */}
        <div className="col-span-2 pr-4 pl-4">
          <ProgressLine value={props.lineValue} />
        </div>
        <div className="col-start-1 col-end-1 sm:col-start-1 pr-4 pl-4">
          <span>
            Course Name:
            <span className="course-name-min">{props.courseName}</span>
          </span>
        </div>
        <div className="col-start-1 xs:col-start-1 sm:col-start-1 lg:col-start-2 flex lg:justify-end  pr-4 pl-4">
          <a href="#" className="resuming">
            Resume Course
          </a>
        </div>
      </div>
    );
  };

  return props.isMinmized === true ? (
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 h-full card-section">
        <MainCard
          icon={coursesIcon}
          title="Courses"
          cardId={1}
          expanded={false}
        />
        <div
          className="col-start-1 col-end-1 xs:col-start-1 sm:col-start-1 pr-4 pl-4"
          style={{ alignItems: "center", display: "flex", marginTop: "-25px" }}
        >
          <div className="flex course-status-min">Latest Course</div>
        </div>
        <div
          className="col-start-1  xs:col-start-1 sm:col-start-1  md:col-start-1 lg:flex lg:col-start-2  pr-4 pl-4  justify-end"
          style={{ alignItems: "center", display: "flex", marginTop: "-25px" }}
        >
          <div className="flex percentege-min">
            {props.lineValue} % Compeleted
          </div>
        </div>
        {/* If it minimized because of Another Card Has been expanded so make it col-span-2 else col-span-full */}
        <div className="col-span-2 pr-4 pl-4" style={{ marginTop: "-17px" }}>
          <ProgressLine value={props.lineValue} />
        </div>
        <div
          className="col-start-1 col-end-1 sm:col-start-1 pr-4 pl-4"
          style={{ display: "flex", marginTop: "-24px" }}
        >
          <span style={{ fontSize: "6.5px" }}>
            Course Name:
            <span className="course-name-min">{props.courseName}</span>
          </span>
        </div>
        <div
          className="col-start-1 xs:col-start-1 sm:col-start-1 lg:col-start-2 flex lg:justify-end  pr-4 pl-4"
          style={{ display: "flex", marginTop: "-24px" }}
        >
          <a href="#" className="resuming-min">
            Resume Course
          </a>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 h-full card-section">
        <MainCard
          icon={coursesIcon}
          title="Courses"
          cardId={1}
          expanded={false}
        />
        <div className="col-start-1 col-end-1 xs:col-start-1 sm:col-start-1 pr-4 pl-4">
          <div className="flex course-status">Latest Course</div>
        </div>
        <div className="col-start-1  xs:col-start-1 sm:col-start-1  md:col-start-1 lg:flex lg:col-start-2  pr-4 pl-4  justify-end ">
          <div className="flex percentege">{props.lineValue} % Compeleted</div>
        </div>
        {/* If it minimized because of Another Card Has been expanded so make it col-span-2 else col-span-full */}
        <div className="col-span-2 pr-4 pl-4">
          <ProgressLine value={props.lineValue} />
        </div>
        <div className="col-start-1 col-end-1 sm:col-start-1 pr-4 pl-4">
          <span>
            Course Name: <span className="course-name">{props.courseName}</span>
          </span>
        </div>
        <div className="col-start-1 xs:col-start-1 sm:col-start-1 lg:col-start-2 flex lg:justify-end  pr-4 pl-4">
          <a href="#" className="resuming">
            Resume Course
          </a>
        </div>
      </div>
    </>
  );
};
export default CourseProgress;
