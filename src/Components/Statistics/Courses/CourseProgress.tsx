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
    <div className="statistics-progress-container">
      <div className="flex justify-between  course-header">
        <div className="order-last statistics-percentage">
          {props.percentage} completed
        </div>
        <div className="statistics-title">{props.title}</div>
      </div>
      <div className="statistics-progress">
        <ProgressLine value={props.lineValue} />
      </div>
      <div className="flex justify-between course-info">
        <div className="order-last resuming-section">
          <a href="#" className="resuming">
            Resume Course
          </a>
        </div>
        <div className="course-name">
          <span>Course Name:</span>
          <span> {props.courseName}</span>
        </div>
      </div>
    </div>
  );
};
export default CourseProgress;
