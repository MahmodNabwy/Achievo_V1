import * as React from "react";
import "./Innovation.scss";
import innovationIcon from "../../MainCard/Assets/Icons/Innovation.svg";
import { MainCard } from "../../MainCard/MainCard";
import { MinTwoColumns } from "../../Min-Two-Columns/MinTwoColumns";
import { MaxTwoColumns } from "../../Max-Two-Columns/MaxTwoColumns";
import { NormalTwoCoulmns } from "../../Normal-Two-Columns/NormalTwoCoulmns";
type InnovationContentProps = {
  approved: string[];
  reviewing: string[];
  isMinmized?: boolean;
};
const fillData = {
  firstColumnData: {
    title: "Reviewing innovation management",
    data: ["Awareness Campaigns", "Food Distributors", "Major Pharmaceuticals	"],
  },
  secondColumnData: {
    title: "Approved innovation management",
    data: ["Challenging games", "Motivation", "Rewards for collaboration"],
  },
};
const InnovationContent = (props: InnovationContentProps) => {
  return props.isMinmized === true ? (
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full innovation-content">
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
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  h-full  pb-4 policies-content">
        <MainCard
          cardId={3}
          expanded={true}
          icon={innovationIcon}
          title="Innovation Management"
        />
        <NormalTwoCoulmns
          firstColumn={fillData.firstColumnData}
          secondColumn={fillData.secondColumnData}
        />
      </div>
    </>
  );
};
export default InnovationContent;
