import * as React from "react";
import { Card, CardHeader, CardTitle } from "../../../@/components/ui/card";
import AssessmentsContent from "./AssessmentsContent";
import NextAssessmentBtn from "./NextAssessmentBtn";
import collapseIcon from "../Assessments/Assets/images/Bookmark.svg";
import AssessmentIcon from "../Assessments/Assets/images/TimeSquare.svg";
import "./Styles/Style.css";

interface AssessmentsProps {
  title: string;
}
const AssessmentsCard: React.FC<AssessmentsProps> = ({ title }) => {
  return (
    <div>
      <Card className="assessments-container">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <div className="order-last">
                <img
                  src={collapseIcon}
                  alt="collapse"
                  className="collapse-icon"
                />
              </div>
              <div className="flex items-center">
                <img
                  src={AssessmentIcon}
                  className="assessment-icon"
                  alt="assessment-icon"
                />
                <span className="assessment-title">{title}</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <AssessmentsContent
          completed={["Security Awareness Test", "Malicious emails", "Spam"]}
          unCompleted={["Personality Test", "Working From Home"]}
        />
        {/* Button */}
        <NextAssessmentBtn title={"Continue Next Assessment"} />
      </Card>
    </div>
  );
};
export default AssessmentsCard;
