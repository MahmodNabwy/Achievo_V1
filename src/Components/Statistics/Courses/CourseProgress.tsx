import React, { useState, useEffect } from "react";
import ProgressLine from "./ProgressLine";
interface StatisticsProgressProps {
  title: string;
  percentage: string;
  courseName: string;
  lineValue: number;
}
const StatisticsProgress: React.FC<StatisticsProgressProps> = ({
  title,
  percentage,
  courseName,
  lineValue,
}) => {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="statistics-progress-container">
      <div className="flex justify-between  course-header">
        <div className="order-last statistics-percentage">
          {percentage} completed
        </div>
        <div className="statistics-title">{title}</div>
      </div>
      <div className="statistics-progress">
        <ProgressLine value={lineValue} />
      </div>
      <div className="flex justify-between course-info">
        <div className="order-last resuming-section">
          <a href="#" className="resuming">
            Resume Course
          </a>
        </div>
        <div className="course-name">
          <span>Course Name:</span>
          <span> {courseName}</span>
        </div>
      </div>
    </div>
  );
};
export default StatisticsProgress;
