import React, { useState, useEffect } from "react";
import ProgressLine from "./ProgressLine";
type CourseProgressProps = {
  title: string;
  percentage: string;
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
    <div className="grid grid-cols-6 p-4">
      <div className="col-start-1 col-end-3">
        <div className="flex">
          <span className="statistics-title">{props.title}</span>
        </div>
      </div>
      <div className="col-end-7 col-span-2">
        <div className="flex justify-end">
          <span className="statistics-percentage">
            {props.percentage} Completed
          </span>
        </div>
      </div>
      <div className="col-span-6">
        <ProgressLine value={props.lineValue} />
      </div>
      <div className="col-start-1 col-end-3">
        <div className="flex">
          <span className="course-name">Course Name :{props.courseName}</span>
        </div>
      </div>
      <div className="col-end-7 col-span-2">
        <div className="flex justify-end">
          <a href="#">Resume Course</a>
        </div>
      </div>
    </div>
  );
};
export default CourseProgress;
