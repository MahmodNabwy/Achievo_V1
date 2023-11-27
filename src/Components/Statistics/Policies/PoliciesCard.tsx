import * as React from "react";
import { Card, CardHeader, CardTitle } from "../../../@/components/ui/card";
import PoliciesContent from "./PoliciesContent";
import collapseIcon from "./Assets/images/Bookmark.svg";
import policiesIcon from "./Assets/images/Bag2.svg";
import "./Styles/Style.css";

interface PoliciesCardProps {
  title: string;
}

const PoliciesCard: React.FC<PoliciesCardProps> = ({ title }) => {
  return (
    <div>
      <Card className="policies-container">
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
                <img
                  src={policiesIcon}
                  className="policies-icon"
                  alt="policies-icon"
                />
                <span className="policies-title">{title}</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <PoliciesContent
          acknowledged={["Company policy v1.0"]}
          unread={[
            "Company policy v1.0",
            "Attendence Policy",
            "Zenhr Guide",
            "Zenhr Guide",
          ]}
        />
      </Card>
    </div>
  );
};
export default PoliciesCard;
