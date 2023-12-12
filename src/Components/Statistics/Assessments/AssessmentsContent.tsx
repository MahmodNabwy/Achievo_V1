import * as React from "react";
import "../../MainCard/MainCard.css";
import expandIcon from "../../../Components/MainCard/Assets/Icons/Bookmark.svg";
import assesmentIcon from "../../MainCard/Assets/Icons/Assessments-icon.svg";
import { MainCard } from "../../MainCard/MainCard";
import { MinTwoColumns } from "../../Min-Two-Columns/MinTwoColumns";
type AssessmentsContentProps = {
  completed: string[];
  unCompleted: string[];
  isMinmized?: boolean;
};
const fillData = {
  firstColumnData: {
    title: "Completed assessments",
    data: ["Security Awareness Test", "Malicious emails", "Spam"],
  },
  secondColumnData: {
    title: "Uncompleted assessments",
    data: ["Working from Home", "Personality Test"],
  },
};
const AssessmentsContent = (props: AssessmentsContentProps) => {
  return props.isMinmized === true ? (
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full card-section">
        <MainCard
          icon={assesmentIcon}
          title="Assessments"
          cardId={3}
          expanded={false}
        />
        <MinTwoColumns
          firstColumn={fillData.firstColumnData}
          secondColumn={fillData.secondColumnData}
        />
      </div>
    </>
  ) : props.isMinmized === false ? (
    //Maximize
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-4 card-section">
        <MainCard
          icon={assesmentIcon}
          title="Assessments"
          cardId={2}
          expanded={false}
        />

        {/* Completed Assessments */}

        <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-1">
          <span className="assessment-text">Completed assessments</span>
          <div className="col-start-1 text-center border-completed border-completed-xs xs:col-start-1 sm:col-start-1 lg:col-start-1"></div>
          <ul>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-success checkbox checkbox-xs completed-box-xs"
                checked
              />

              <span
                className="assessments-element"
                style={{ marginRight: "-6px" }}
              >
                Security Awareness Test
              </span>
            </li>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-success checkbox checkbox-xs completed-box-xs"
                checked
              />

              <span className="assessments-element">Malicious emails</span>
            </li>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-success checkbox checkbox-xs completed-box-xs"
                checked
              />

              <span className="assessments-element">Spam</span>
            </li>
          </ul>
        </div>
        {/* Un Completed Assessments */}
        <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2">
          <span className="assessment-text">Uncompleted assessments</span>
          <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2 border-uncompleted border-uncompleted-xs"></div>
          <ul>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                checked
              />

              <span className="assessments-element">Personality Test</span>
            </li>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                checked
              />
              <span className="assessments-element">Working from Home</span>
            </li>
          </ul>
        </div>
        <div className="col-start-1 flex  xs:col-start-1 sm:col-start-1 lg:col-start-2 assess-btn-section assess-btn-section-xs">
          <button className="continue-assesments rounded-full p-1 continue-assesments-xs">
            Continue Next Assessment
          </button>
        </div>
      </div>
    </>
  ) : (
    //Normal Figure
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full pb-4 card-section">
        <MainCard
          cardId={2}
          expanded={true}
          icon={assesmentIcon}
          title="Assessments"
        />
        {/* Completed Assessments */}

        <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-1">
          <span className="assessment-text">Completed assessments</span>
          <div className="col-start-1 text-center border-completed border-completed-xs xs:col-start-1 sm:col-start-1 lg:col-start-1"></div>
          <ul>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-success checkbox checkbox-xs completed-box-xs"
                checked
              />

              <span
                className="assessments-element"
                style={{ marginRight: "-6px" }}
              >
                Security Awareness Test
              </span>
            </li>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-success checkbox checkbox-xs completed-box-xs"
                checked
              />

              <span className="assessments-element">Malicious emails</span>
            </li>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-success checkbox checkbox-xs completed-box-xs"
                checked
              />

              <span className="assessments-element">Spam</span>
            </li>
          </ul>
        </div>
        {/* Un Completed Assessments */}
        <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2">
          <span className="assessment-text">Uncompleted assessments</span>
          <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2 border-uncompleted border-uncompleted-xs"></div>
          <ul>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                checked
              />

              <span className="assessments-element">Personality Test</span>
            </li>
            <li className="menu-item menu-item-xs">
              <input
                type="checkbox"
                className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                checked
              />
              <span className="assessments-element">Working from Home</span>
            </li>
          </ul>
        </div>
        <div className="col-start-1 flex  xs:col-start-1 sm:col-start-1 lg:col-start-2 assess-btn-section assess-btn-section-xs">
          <button className="continue-assesments rounded-full p-1 continue-assesments-xs">
            Continue Next Assessment
          </button>
        </div>
      </div>
    </>
  );
};
export default AssessmentsContent;
