import React from "react";
import "./LineProgress.scss";
type LineProgressProps = {
  value: number;
};

export const LineProgress = (props: LineProgressProps) => {
  return (
    <div className="lineProgress">
      <progress
        className="progress progress-success customize"
        value={props.value}
        max="100"
      ></progress>
    </div>
  );
};
