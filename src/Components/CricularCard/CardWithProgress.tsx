import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Gradient from "./Assets/GradientSVG";
import "react-circular-progressbar/dist/styles.css";
import "./Cards.scss";
type CardWithProgressProps = {
  progress: number;
  score: string;
  TextOne: string;
  TextTwo: string;
};
const CardWithProgress = (props: CardWithProgressProps) => {
  const idCSS = "hello";

  return (
    <div className="cricular-card p-4 flex" style={{ alignItems: "center" }}>
      <div className="flex">
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "80px", height: "75px" }}>
            <Gradient />
            <CircularProgressbar
              strokeWidth={14}
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
        <div style={{ marginLeft: "15px", textAlign: "justify" }}>
          <span className="score">
            <strong>{props.score}</strong>
          </span>
          <p className="content-txt">{props.TextOne}</p>
          <p className="content-txt">{props.TextTwo}</p>
        </div>
      </div>
    </div>
  );
};
export default CardWithProgress;
