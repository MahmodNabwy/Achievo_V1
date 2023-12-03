import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Gradient from "./Assets/GradientSVG";
import "react-circular-progressbar/dist/styles.css";
import "./Cards.css";

type ProgressCircleProps = {
  progress: number;
  score: string;
  TextOne: string;
  TextTwo: string;
};

const ProgressCircle = (props: ProgressCircleProps) => {
  const idCSS = "hello";

  const percentage = 66;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      <div className="col-span-1 rounded-md p-4">
        {/* Define linearGradient and conicGradient */}
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

      <div className="col-span-1 card-content">
        <span className="score">{props.score}</span>
        <p className="content-txt">{props.TextOne}</p>
        <p className="content-txt">{props.TextTwo}</p>
      </div>
    </div>
  );
};

export default ProgressCircle;
