import React, { useState, useEffect } from "react";
import coursesIcon from "../../../Components/MainCard/Assets/Icons/Coruses-icon.svg";
import expandIcon from "../../../Components/MainCard/Assets/Icons/Bookmark.svg";
import ProgressLine from "./ProgressLine";
import { MainCard } from "../../MainCard/MainCard";
type CourseProgressProps = {
  courseName: string;
  lineValue: number;
};

const CourseProgress = (props: CourseProgressProps) => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 card-section">
      <MainCard icon={coursesIcon} title="Courses" />
      <div className="col-start-1 col-end-1 xs:col-start-1 sm:col-start-1 lg:p-4">
        <div className="flex testt">Latest Course</div>
      </div>
      <div className="col-start-1 xs:col-start-1 sm:col-start-1  md:col-start-1 lg:flex lg:col-start-2 lg:p-4  justify-end ">
        <div className="percentege">{props.lineValue} % Compeleted</div>
      </div>
      <div className="col-span-full lg:p-4">
        <ProgressLine value={props.lineValue} />
      </div>
      <div className="col-start-1 col-end-1 sm:col-start-1 lg:p-4">
        <span>Course Name: {props.courseName}</span>
      </div>
      <div className="col-start-1 xs:col-start-1 sm:col-start-1 lg:col-start-2 flex lg:justify-end lg:p-4">
        <a href="#" className="resuming">
          Resume Course
        </a>
      </div>
    </div>
  );
};
export default CourseProgress;
