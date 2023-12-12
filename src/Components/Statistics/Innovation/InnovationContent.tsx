import * as React from "react";
import "../../MainCard/MainCard.css";
import innovationIcon from "../../MainCard/Assets/Icons/Innovation.svg";
import { MainCard } from "../../MainCard/MainCard";
import { MinTwoColumns } from "../../Min-Two-Columns/MinTwoColumns";
import { MaxTwoColumns } from "../../Max-Two-Columns/MaxTwoColumns";
type InnovationContentProps = {
  approved: string[];
  reviewing: string[];
  isMinmized?: boolean;
};
const fillData = {
  firstColumnData: {
    title: "Reviewing innovation management",
    data: ["Awareness Campaigns"],
  },
  secondColumnData: {
    title: "Approved innovation management",
    data: ["Challenging games", "Motivation", "Rewards for collaboration"],
  },
};
const InnovationContent = (props: InnovationContentProps) => {
  return props.isMinmized === true ? (
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full card-section">
        <MainCard
          icon={innovationIcon}
          title="Innovation Management"
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
    <>
      <div className="col-span-12 h-full">
        <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-4 h-full card-section">
          <MainCard
            icon={innovationIcon}
            title={"Innovation Management"}
            cardId={4}
            expanded={true}
          />
          <MaxTwoColumns
            firstColumn={fillData.firstColumnData}
            secondColumn={fillData.secondColumnData}
          />
        </div>
      </div>
    </>
  ) : (
    //Normal Figure
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full pb-4 card-section">
        <MainCard
          icon={innovationIcon}
          title={"Innovation Management"}
          cardId={4}
          expanded={true}
        />

        {/* Reviewing innovation management */}

        <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-1 innovation-header-xs">
          <span className="innovation-text">
            Reviewing innovation management
          </span>
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
          <span className="innovation-text">
            Approved innovation management
          </span>
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
    </>
  );
};
export default InnovationContent;
