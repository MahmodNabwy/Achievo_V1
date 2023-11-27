import * as React from "react";
import StatisticsProgress from "./CourseProgress";
import { Card, CardHeader, CardTitle } from "../../../@/components/ui/card";
import courseIcon from "./Assets/Images/TwoUsers.svg";
import collapseIcon from "./Assets/Images/Bookmark.svg";
import "./Styles/Styles.css";

interface StatisticsProps {
  title: string;
}
const Statistics: React.FC<StatisticsProps> = ({ title }) => {
  return (
    <Card className="course-container">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="order-last">
              <img
                className="collapse-icon"
                src={collapseIcon}
                alt="collapse"
              />
            </div>
            <div className="flex items-center">
              <img src={courseIcon} className="course-icon" alt="course-icon" />
              <span className="course-title">{title}</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <div>
        <StatisticsProgress
          percentage="20%"
          title="Latest Course"
          courseName="Password Cracking"
        />
      </div>
    </Card>
  );
};
export default Statistics;
