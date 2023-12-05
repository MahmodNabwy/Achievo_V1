import * as React from "react";
import "../../MainCard/MainCard.css";
import expandIcon from "../../../Components/MainCard/Assets/Icons/Bookmark.svg";
import assesmentIcon from "../../MainCard/Assets/Icons/Assessments-icon.svg";
import { MainCard } from "../../MainCard/MainCard";
type AssessmentsContentProps = {
  completed: string[];
  unCompleted: string[];
};
const AssessmentsContent = (props: AssessmentsContentProps) => {
  return (
    <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-4 card-section">
      <MainCard
        icon={assesmentIcon}
        title="Assessments"
        onDataReceived={() => 2}
        cardId={2}
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
  );
};
export default AssessmentsContent;
