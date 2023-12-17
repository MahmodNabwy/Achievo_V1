import * as React from "react";
import "./Policies.scss";
import policiesIcon from "../../../Components/MainCard/Assets/Icons/Policies-icon.svg";
import { MainCard } from "../../MainCard/MainCard";
import { MinTwoColumns } from "../../Min-Two-Columns/MinTwoColumns";
import { NormalTwoCoulmns } from "../../Normal-Two-Columns/NormalTwoCoulmns";
import { ThreeColumns } from "../../ThreeColumnsContent/ThreeColumns";
import { useSelector } from "react-redux";
type PoliciesContentProps = {
  acknowledged: string[];
  unread: string[];
};
const fillData = {
  firstColumnData: {
    title: "Policies & Procedures Acknowledged",
    data: ["Company policy v1.0", "Attendance Policy", "Major Banks	"],
  },
  secondColumnData: {
    title: "Unread policies & procedures ",
    data: [
      "Sanctions list v1.0",
      "Company policy v1.1",
      "Attendance policy v1.2",
      "Zenhr Guide",
    ],
  },
  lastColumnData: {
    title: "Updated versions",
    data: [
      { text: "Company policy", value: 1 },
      { text: "Attendance policy", value: 2 },
      { text: "Parking Policy", value: 1 },
    ],
  },
};
const PoliciesContent = (props: PoliciesContentProps) => {
  const stateFromRedux = useSelector((state: any) => state.card);

  return stateFromRedux.minimizePolicies === true ? (
    /* Minimize Figure */
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full policies-content">
        <MainCard
          icon={policiesIcon}
          title="Policies & Procedures"
          cardId={3}
          expanded={false}
        />
        <MinTwoColumns
          firstColumn={fillData.firstColumnData}
          secondColumn={fillData.secondColumnData}
        />
      </div>
    </>
  ) : stateFromRedux.cardId === 3 &&
    stateFromRedux.maximizePolicies === true ? (
    /* Maximize Figure */
    <>
      <ThreeColumns
        cardIcon={policiesIcon}
        cardId={3}
        cardTitle="Policies & Procedures"
        firstSection={fillData.firstColumnData}
        middleSection={fillData.secondColumnData}
        lastSection={fillData.lastColumnData}
      />
    </>
  ) : (
    /* Normal Figure */
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  h-full  pb-4 policies-content">
        <MainCard
          cardId={3}
          expanded={true}
          icon={policiesIcon}
          title="Policies & Procedures"
        />
        <NormalTwoCoulmns
          firstColumn={fillData.firstColumnData}
          secondColumn={fillData.secondColumnData}
        />
      </div>
    </>
  );
};
export default PoliciesContent;
