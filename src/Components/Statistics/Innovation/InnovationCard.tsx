import * as React from "react";
import { Card, CardHeader, CardTitle } from "../../../@/components/ui/card";
import InnovationContent from "./InnovationContent";
import collapseIcon from "./Assets/images/Bookmark.svg";
import InnovationIcon from "./Assets/images/Chart.svg";
import "./Styles/Style.css";

interface InnovationCardProps {
  title: string;
}

const InnovationCard: React.FC<InnovationCardProps> = ({ title }) => {
  return (
    <div>
      <Card className="w-[600px] h-[230px] innovation-container">
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
                  src={InnovationIcon}
                  className="innovation-icon"
                  alt="innovation-icon"
                />
                <span className="innovation-title">{title}</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <InnovationContent
          reviewing={["Awareness Campaigns"]}
          approved={[
            "Challenging games",
            "Motivation",
            "Rewards for collaboration",
          ]}
        />
      </Card>
    </div>
  );
};
export default InnovationCard;
