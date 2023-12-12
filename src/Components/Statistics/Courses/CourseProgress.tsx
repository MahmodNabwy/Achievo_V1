import React, { useState, useEffect } from "react";
import coursesIcon from "../../../Components/MainCard/Assets/Icons/Coruses-icon.svg";
import ProgressLine from "./ProgressLine";
import { MainCard } from "../../MainCard/MainCard";
// import "../../MainCard/MainCard.css";
import "./Courses.scss";

type CourseProgressProps = {
  courseName: string;
  lineValue: number;
  isMinmized?: boolean;
  firstColumn?: { title: string; data: string[] };
  secondColumn?: {
    title: string;
    data: { title: string; percentage: number }[];
  };
  thirdColumn?: { title: string; score: number; total: number };
};

const CourseProgress = (props: CourseProgressProps) => {
  const [parentData, setParentData] = useState<number>(0);
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return props.isMinmized === true ? (
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 h-full courses-section">
        <MainCard
          icon={coursesIcon}
          title="Courses"
          cardId={1}
          expanded={false}
        />
        <div
          className="col-start-1 col-end-1 xs:col-start-1 sm:col-start-1 pr-4 pl-4"
          style={{ alignItems: "center", display: "flex", marginTop: "-25px" }}
        >
          <div className="flex course-status-min">Latest Course</div>
        </div>
        <div
          className="col-start-1  xs:col-start-1 sm:col-start-1  md:col-start-1 lg:flex lg:col-start-2  pr-4 pl-4  justify-end"
          style={{ alignItems: "center", display: "flex", marginTop: "-25px" }}
        >
          <div className="flex percentege-min">
            {props.lineValue} % Compeleted
          </div>
        </div>
        {/* If it minimized because of Another Card Has been expanded so make it col-span-2 else col-span-full */}
        <div className="col-span-2 pr-4 pl-4" style={{ marginTop: "-17px" }}>
          <ProgressLine value={props.lineValue} />
        </div>
        <div
          className="col-start-1 col-end-1 sm:col-start-1 pr-4 pl-4"
          style={{ display: "flex", marginTop: "-24px" }}
        >
          <span style={{ fontSize: "6.5px" }}>
            Course Name:
            <span className="course-name-min">{props.courseName}</span>
          </span>
        </div>
        <div
          className="col-start-1 xs:col-start-1 sm:col-start-1 lg:col-start-2 flex lg:justify-end  pr-4 pl-4"
          style={{ display: "flex", marginTop: "-24px" }}
        >
          <a href="#" className="resuming-min">
            Resume Course
          </a>
        </div>
      </div>
    </>
  ) : props.isMinmized === false ? (
    //Maximize Figure
    <>
      <div
        className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 h-full courses-section"
        style={{ gridTemplateRows: "auto auto auto auto" }}
      >
        <div className="col-span-12 row-span-1">
          <MainCard
            icon={coursesIcon}
            title="Courses"
            cardId={1}
            expanded={true}
          />
        </div>

        <div className="col-span-12 row-span-2 pt-10">
          <div
            className="grid  p-4 gap-4"
            style={{ gridTemplateRows: "auto auto" }}
          >
            <div className="col-span-full row-span-1">
              <div className="col-start-1 col-end-3 flex justify-between">
                <span className="status-max">Latest Course</span>
                <span className="percentage-max">
                  {props.lineValue} % Completed
                </span>
              </div>
            </div>
            {/* Progress Line */}
            <div
              className="col-span-full row-span-2"
              style={{ marginTop: "-10px" }}
            >
              <ProgressLine value={props.lineValue} />
            </div>
            {/* Course Name */}
            <div
              className="col-span-full row-span-3 flex justify-between"
              style={{ marginTop: "-25px" }}
            >
              <div className="flex">
                <span className="name-max">Course Name :</span>
                <span className="name-data">{props.courseName}</span>
              </div>
              <a href="#" className="resume-course-max">
                Resume Course
              </a>
            </div>
          </div>
        </div>
        {/* Three Tables ... */}
        <div className="col-span-12 row-span-3 pt-10">
          <div className="grid grid-cols-3 p-4 gap-10">
            {/* First Table */}
            <div className="col-span-1">
              <table className="table-auto">
                <thead className="table-head-max">
                  <tr style={{ display: "flow" }}>
                    <th className="table-title-mx">
                      {props.firstColumn?.title}
                    </th>
                    <div className="title-border"></div>
                  </tr>
                </thead>
                <tbody>
                  {props.firstColumn?.data.slice(0, 4).map((item) => {
                    return (
                      <tr className="tr-content">
                        <td className="flex" style={{ alignItems: "baseline" }}>
                          <input
                            type="checkbox"
                            className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-green "
                            checked
                          />

                          <span className="td-content-title">{item}</span>
                        </td>
                      </tr>
                    );
                  })}
                  {props.firstColumn?.data.length ?? 0 >= 4 ? (
                    <>
                      <tr className="tr-content">
                        <td className="flex" style={{ alignItems: "baseline" }}>
                          <a href="#" className="resume-course-max">
                            Read More
                          </a>
                        </td>
                      </tr>
                    </>
                  ) : null}
                </tbody>
              </table>
            </div>
            {/* Second Table */}
            <div className="col-span-1">
              <table className="table-auto w-full">
                <thead className="table-center-max">
                  <tr style={{ display: "flow" }}>
                    <th className="table-title-mx">
                      {props.secondColumn?.title}
                    </th>
                    <div className="title-border"></div>
                  </tr>
                </thead>
                <tbody>
                  {props.secondColumn?.data.slice(0, 4).map((item) => {
                    return (
                      <tr className="tr-content">
                        <td className="flex justify-between">
                          <div
                            className="flex"
                            style={{ alignItems: "baseline" }}
                          >
                            <input
                              type="checkbox"
                              className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-yellow "
                              checked
                            />

                            <span className="td-content-title">
                              {item.title}
                            </span>
                          </div>
                          <div>
                            <span className="percentage-max">
                              {item.percentage}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {props.secondColumn?.data.length ?? 0 >= 4 ? (
                    <>
                      <tr className="tr-content">
                        <td className="flex justify-between">
                          <a href="#" className="resume-course-max">
                            Read More
                          </a>
                        </td>
                      </tr>
                    </>
                  ) : null}
                </tbody>
              </table>
            </div>
            {/* Third Table */}
            <div className="col-span-1">
              <div className="row-span-1">
                <h3 className="rank pb-2">{props.thirdColumn?.title}</h3>
                <div className="title-border"></div>
              </div>
              <div
                className="row-span-1 mt-10 flex justify-center"
                style={{ alignItems: "center" }}
              >
                <div className="flex">
                  <div style={{ textAlign: "center" }}>
                    <div className="outer-circle">
                      <div className="divider-circle">
                        <div className="inner-circle">
                          <span className="number">
                            {props.thirdColumn?.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rank-total">
                    <span className="rank-number">
                      Of {props.thirdColumn?.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    //Normal Figure
    <>
      <div
        className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 courses-section"
        style={{ gridTemplateRows: "auto auto auto auto", height: "315px" }}
      >
        <div className="col-span-12 row-span-1">
          <MainCard
            icon={coursesIcon}
            title="Courses"
            cardId={1}
            expanded={true}
          />
        </div>
        <div className="col-span-12 row-span-2">
          <div
            className="grid  p-4 gap-4"
            style={{ gridTemplateRows: "auto auto" }}
          >
            <div className="col-span-full row-span-1">
              <div className="col-start-1 col-end-3 flex justify-between">
                <span className="status-normal">Latest Course</span>
                <span className="percentage-normal">
                  <strong>{props.lineValue} % Completed</strong>
                </span>
              </div>
            </div>
            {/* Progress Line */}
            <div
              className="col-span-full row-span-2"
              style={{ marginTop: "-10px" }}
            >
              <ProgressLine value={props.lineValue} />
            </div>
            {/* Course Name */}
            <div
              className="col-span-full row-span-3 flex justify-between"
              style={{ marginTop: "-25px" }}
            >
              <div className="flex">
                <span className="name-normal">Course Name :</span>
                <span className="name-data-normal">
                  <strong>{props.courseName}</strong>
                </span>
              </div>
              <a href="#" className="resume-course-max">
                Resume Course
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseProgress;
