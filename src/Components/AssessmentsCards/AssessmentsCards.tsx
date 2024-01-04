import { CircularProgressbar } from "react-circular-progressbar";
import { DepartmentBadge } from "../DepartmentBadge/DepartmentBadge";
import "./AssessmentsCards.scss";
import GradientSVG from "../CricularCard/Assets/GradientSVG";
export const AssessmentsCards = () => {
  const idCSS = "hello";

  return (
    <div className="AssessmentsCards">
      <div className="grid grid-cols-2 card">
        <div className="col-span-full">
          <h3 className="courseTitle">Security Awareness Test</h3>
        </div>
        <div className="col-start-1">
          <div className="grid gap-1">
            <span className="date">Created Date: 05-05-2023</span>
            <span className="date">Deadline: 15-05-2023</span>
            <DepartmentBadge />
          </div>
        </div>
        <div className="col-start-2 flex justify-end pr-4">
          <div style={{ width: "80px", height: "75px" }}>
            <CircularProgressbar
              strokeWidth={14}
              value={100}
              text={`6 / 6`}
              minValue={10}
              styles={{
                path: {
                  stroke: `rgb(184 221 160)`,
                  fill: "rgb(184 221 160)",
                  height: "100%",
                },
                trail: {
                  stroke: "#60B527",
                },
                text: {
                  // Text color
                  fill: "rgb(93 92 92 / 48%)",
                  // Text size
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  background: "red",
                },
              }}
            />
          </div>
        </div>
        <div className="col-start-1"></div>
      </div>
    </div>
  );
};
