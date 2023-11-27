import React from "react";
import ProgressCircle from "./ProgressCircle";
import { Card, CardHeader, CardTitle } from "../../@/components/ui/card";
import "./Styles/Style.css";
interface CardWithProgressProps {
  progress: number;
  score: string;
  TextOne: string;
  TextTwo: string;
}

const CardWithProgress: React.FC<CardWithProgressProps> = ({
  progress,

  score,
  TextOne,
  TextTwo,
}) => {
  return (
    <Card className="w-[350px] card-container">
      <CardHeader>
        <CardTitle>
          <ProgressCircle
            progress={progress}
            score={score}
            TextOne={TextOne}
            TextTwo={TextTwo}
          />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
export default CardWithProgress;
