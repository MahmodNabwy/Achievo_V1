import React from "react";
import ProgressCircle from "./ProgressCircle";
import { Card, CardHeader, CardTitle } from "../../@/components/ui/card";
import "./Cards.css";
type CardWithProgressProps = {
  progress: number;
  score: string;
  TextOne: string;
  TextTwo: string;
};
const CardWithProgress = (props: CardWithProgressProps) => {
  return (
    <Card className="card-container">
      <CardHeader>
        <CardTitle>
          <ProgressCircle
            progress={props.progress}
            score={props.score}
            TextOne={props.TextOne}
            TextTwo={props.TextTwo}
          />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
export default CardWithProgress;
