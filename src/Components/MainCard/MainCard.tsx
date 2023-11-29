import React from "react";
import { Card, CardHeader, CardTitle } from "../../@/components/ui/card";
import expandIcon from "./Assets/Icons/Bookmark.svg";
import "../MainCard/MainCard.css";
type MainCardProps = {
  title: string;
  icon: string;
  content: React.ReactNode[];
};
export const MainCard = (props: MainCardProps) => {
  return (
    <Card className="main-container">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="order-last">
              <img className="expand-icon" src={expandIcon} alt="expand" />
            </div>
            <div className="flex items-center">
              <img src={props.icon} className="card-icon" alt="card-icon" />
              <span className="card-title">{props.title}</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <div>{props.content}</div>
    </Card>
  );
};
