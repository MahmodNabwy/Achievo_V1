import * as React from "react";
import "../../MainCard/MainCard.css";
import innovationIcon from "../../MainCard/Assets/Icons/Innovation.svg";
import { MainCard } from "../../MainCard/MainCard";
type InnovationContentProps = {
  approved: string[];
  reviewing: string[];
};
const InnovationContent = (props: InnovationContentProps) => {
  return (
    <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full pb-4 card-section">
      <MainCard
        icon={innovationIcon}
        title="Innovation Management"
        onDataReceived={() => 4}
        cardId={4}
      />

      {/* Reviewing innovation management */}

      <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-1 innovation-header-xs">
        <span className="innovation-text">Reviewing innovation management</span>
        <div className="col-start-1 text-center border-reviewing border-reviewing-xs xs:col-start-1 sm:col-start-1 lg:col-start-1"></div>
        <ul>
          {props.reviewing.map((title) => {
            return (
              <li className="reviewed-items reviewed-items-xs">
                <input
                  type="checkbox"
                  className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                  checked
                />

                <span className="innovation-element">{title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Approved innovation management */}
      <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2">
        <span className="innovation-text">Approved innovation management</span>
        <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2 border-approved border-approved-xs"></div>
        <ul>
          {props.approved.map((title) => {
            return (
              <li className="Approved-items Approved-items-xs">
                <input
                  type="checkbox"
                  className="checkbox-success checkbox checkbox-xs approved-box-xs"
                  checked
                />

                <span className="innovation-element">{title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default InnovationContent;
