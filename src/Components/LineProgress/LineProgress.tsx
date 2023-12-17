import React from "react";
import "./LineProgress.scss";
type LineProgressProps = {};

export const LineProgress = (props: LineProgressProps) => {
  return (
    <div className="lineProgress">
      <progress
        className="progress progress-success"
        value="10"
        max="100"
      ></progress>
    </div>
  );
};
