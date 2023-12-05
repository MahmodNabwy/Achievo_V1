import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Gradient from "./Assets/GradientSVG";
import "react-circular-progressbar/dist/styles.css";
import "./Cards.css";
type CardWithProgressProps = {
  progress: number;
  score: string;
  TextOne: string;
  TextTwo: string;
};
const CardWithProgress = (props: CardWithProgressProps) => {
  const idCSS = "hello";

  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4 cricular-card">
      <div className="col-start-1">
        <div style={{ width: "77px", height: "50px" }}>
          <Gradient />
          <CircularProgressbar
            strokeWidth={8}
            value={props.progress}
            text={`${props.progress}%`}
            minValue={10}
            styles={{
              path: { stroke: `url(#${idCSS})`, height: "100%" },
              trail: {
                stroke: "#EAEAEB",
              },
              text: {
                // Text color
                fill: "#000",
                // Text size
                fontSize: "1.5rem",
                fontWeight: "700",
                fontStyle: "normal",
                lineHeight: "normal",
              },
            }}
          />
        </div>
      </div>
      <div className="col-start-2">
        <div>
          <span className="score">{props.score}</span>
          <p className="content-txt">{props.TextOne}</p>
          <p className="content-txt">{props.TextTwo}</p>
        </div>
      </div>
    </div>
  );
};
export default CardWithProgress;
