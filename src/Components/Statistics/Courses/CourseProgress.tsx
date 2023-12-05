import React, { useState, useEffect } from "react";
import coursesIcon from "../../../Components/MainCard/Assets/Icons/Coruses-icon.svg";
import ProgressLine from "./ProgressLine";
import { MainCard } from "../../MainCard/MainCard";
import "../../MainCard/MainCard.css";

type CourseProgressProps = {
  courseName: string;
  lineValue: number;
};

const CourseProgress = (props: CourseProgressProps) => {
  const [parentData, setParentData] = useState<number>(0);
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full card-section">
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
      <div className="col-span-full pr-4 pl-4">
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
  );
};
export default CourseProgress;
