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
};

const CourseProgress = (props: CourseProgressProps) => {
  const [parentData, setParentData] = useState<number>(0);
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderMinimizedFigure = () => {
    return (
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 h-full card-section">
        <MainCard
          icon={coursesIcon}
          title="Courses"
          cardId={1}
          expanded={false}
        />
        <div className="col-start-1 col-end-1 xs:col-start-1 sm:col-start-1 pr-4 pl-4">
          <div className="flex course-status">Latest Course</div>
        </div>
        <div className="col-start-1  xs:col-start-1 sm:col-start-1  md:col-start-1 lg:flex lg:col-start-2  pr-4 pl-4  justify-end ">
          <div className="flex percentege">{props.lineValue} % Compeleted</div>
        </div>
        {/* If it minimized because of Another Card Has been expanded so make it col-span-2 else col-span-full */}
        <div className="col-span-2 pr-4 pl-4">
          <ProgressLine value={props.lineValue} />
        </div>
        <div className="col-start-1 col-end-1 sm:col-start-1 pr-4 pl-4">
          <span>
            Course Name:
            <span className="course-name-min">{props.courseName}</span>
          </span>
        </div>
        <div className="col-start-1 xs:col-start-1 sm:col-start-1 lg:col-start-2 flex lg:justify-end  pr-4 pl-4">
          <a href="#" className="resuming">
            Resume Course
          </a>
        </div>
      </div>
    );
  };

  return props.isMinmized === true ? (
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 h-full card-section">
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
  ) : (
    //Maximize Figure
    <>
      <div
        className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 h-full courses-section"
        // style={{ gridTemplateRows: "auto 1fr" }}
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
                <span className="name-data">Password Cracking</span>
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
                  <tr>
                    <th className="table-title-mx">Completed Courses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-content">
                    <td className="flex" style={{ alignItems: "baseline" }}>
                      <input
                        type="checkbox"
                        className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-green "
                        checked
                      />

                      <span className="td-content-title">
                        Security Awareness Training
                      </span>
                    </td>
                  </tr>
                  <tr className="tr-content">
                    <td className="flex" style={{ alignItems: "baseline" }}>
                      <input
                        type="checkbox"
                        className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-green "
                        checked
                      />

                      <span className="td-content-title">Malicious emails</span>
                    </td>
                  </tr>
                  <tr className="tr-content">
                    <td className="flex" style={{ alignItems: "baseline" }}>
                      <input
                        type="checkbox"
                        className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-green "
                        checked
                      />

                      <span className="td-content-title">Spam</span>
                    </td>
                  </tr>
                  <tr className="tr-content">
                    <td className="flex" style={{ alignItems: "baseline" }}>
                      <input
                        type="checkbox"
                        className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-green "
                        checked
                      />

                      <span className="td-content-title">Phishing attacks</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Second Table */}
            <div className="col-span-1">
              <table className="table-auto w-full">
                <thead className="table-center-max">
                  <tr>
                    <th className="table-title-mx">In progress courses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-content">
                    <td className="flex justify-between">
                      <div className="flex" style={{ alignItems: "baseline" }}>
                        <input
                          type="checkbox"
                          className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-yellow "
                          checked
                        />

                        <span className="td-content-title">
                          Password Cracking
                        </span>
                      </div>
                      <div>
                        <span className="percentage-max">20%</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="tr-content">
                    <td className="flex justify-between">
                      <div className="flex" style={{ alignItems: "baseline" }}>
                        <input
                          type="checkbox"
                          className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-yellow "
                          checked
                        />

                        <span className="td-content-title">IOT</span>
                      </div>
                      <div>
                        <span className="percentage-max">60%</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="tr-content">
                    <td className="flex justify-between">
                      <div className="flex" style={{ alignItems: "baseline" }}>
                        <input
                          type="checkbox"
                          className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-yellow "
                          checked
                        />

                        <span className="td-content-title">
                          Physical security
                        </span>
                      </div>
                      <div>
                        <span className="percentage-max">1%</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="tr-content">
                    <td className="flex justify-between">
                      <div className="flex" style={{ alignItems: "baseline" }}>
                        <input
                          type="checkbox"
                          className="checkbox-success checkbox checkbox-xs completed-box-xs checkbox-yellow "
                          checked
                        />

                        <span className="td-content-title">
                          Mobile device security
                        </span>
                      </div>
                      <div>
                        <span className="percentage-max">15%</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Third Table */}
            <div className="col-span-1">
              <div className="row-span-1">
                <h3 className="rank">Your Rank</h3>
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
                          <span className="number">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rank-total">
                    <span className="rank-number">Of 8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseProgress;
