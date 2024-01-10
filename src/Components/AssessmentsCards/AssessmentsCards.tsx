import { CircularProgressbar } from "react-circular-progressbar";
import { DepartmentBadge } from "../DepartmentBadge/DepartmentBadge";
import "./AssessmentsCards.scss";
import badgeIcon from "./Assets/Icons/980659aa45c22d694c64401a140d43ad.png";
import { useNavigate } from "react-router-dom";
type AssessmentsCardsProps = {
  type: number;
};
export const AssessmentsCards = (props: AssessmentsCardsProps) => {
  const navigate = useNavigate();
  return (
    <div className="AssessmentsCards">
      {props.type === 1 ? (
        <>
          {/* Completed Type */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {/* Course Title */}
            <div className="col-span-full lg:pl-4 lg:pr-4">
              <h3 className="courseTitle">Security Awareness Test</h3>
            </div>
            {/* Created At */}
            <div className="sm:col-start-1 lg:col-start-1 pl-4 pr-4">
              <div className="grid gap-1">
                <span className="date">Created Date: 05-05-2023</span>
                <span className="date">Deadline: 15-05-2023</span>
                <DepartmentBadge title="Technical Team" />
              </div>
            </div>
            {/* Circle Progress */}
            <div className="sm:col-start-1 lg:col-start-2 flex justify-end pl-4 pr-4">
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
            {/* Course Status */}
            <div
              className="col-span-full"
              style={{
                backgroundColor: "#D4E5FF",
              }}
            >
              <div className="flex justify-between w-7/12">
                <img src={badgeIcon} alt="badge" className="badge pl-4" />

                <h3 className="status-txt  ">Done</h3>
              </div>
            </div>
          </div>
        </>
      ) : props.type === 3 ? (
        <>
          {/* Completed Type */}
          <div className="grid grid-cols-2 card">
            {/* Course Title */}
            <div className="col-span-full pl-4 pr-4">
              <h3 className="courseTitle">Security Awareness Test</h3>
            </div>
            {/* Created At */}
            <div className="col-start-1 pl-4 pr-4">
              <div className="grid gap-1">
                <span className="date">Created Date: 05-05-2023</span>
                <span className="date">Deadline: 15-05-2023</span>
                <DepartmentBadge title="HR" />
              </div>
            </div>
            {/* Circle Progress */}
            <div className="col-start-2 flex justify-end pl-4 pr-4">
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
            {/* Course Status */}
            <div
              className="col-span-full"
              style={{
                backgroundColor: "#D4E5FF",
              }}
            >
              <div className="flex justify-between w-7/12">
                <img src={badgeIcon} alt="badge" className="badge pl-4" />

                <h3 className="status-txt  ">Done</h3>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Continue Type */}
          <div className="grid grid-cols-2 card">
            {/* Course Title */}
            <div className="col-span-full pl-4 pr-4">
              <h3 className="courseTitle">Security Awareness Test</h3>
            </div>
            {/* Created At */}
            <div className="col-start-1 pl-4 pr-4">
              <div className="grid gap-1">
                <span className="date">Created Date: 05-05-2023</span>
                <span className="date">Deadline: 15-05-2023</span>
                <DepartmentBadge title="DA" />
              </div>
            </div>
            {/* Circle Progress */}
            <div className="col-start-2 flex justify-end pl-4 pr-4">
              <div style={{ width: "80px", height: "75px" }}>
                <CircularProgressbar
                  strokeWidth={14}
                  value={50}
                  text={`4 / 6`}
                  minValue={10}
                  styles={{
                    path: {
                      stroke: "#2dad1d",

                      height: "100%",
                    },
                    trail: {
                      stroke: "#EAEAEB",
                      fill: "red",
                    },
                    text: {
                      // Text color
                      fill: "#000",
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
            {/* Course Status */}
            <div
              className="col-span-full"
              style={{
                backgroundColor: "#D4E5FF",
              }}
            >
              <div className="flex justify-center">
                <h3 className="status-txt" onClick={() => navigate("1")}>
                  Continue
                </h3>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
