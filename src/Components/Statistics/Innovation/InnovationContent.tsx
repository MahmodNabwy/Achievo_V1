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
        <MinTwoColumns />
      </div>
    </>
  ) : (
    <>
      <div className="col-span-12 h-full">
        <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-4 h-full card-section">
          <MainCard
            icon={innovationIcon}
            title={"Innovation Management"}
            cardId={4}
            expanded={true}
          />
          <MaxTwoColumns />
        </div>
      </div>
    </>
  );
};
export default InnovationContent;
