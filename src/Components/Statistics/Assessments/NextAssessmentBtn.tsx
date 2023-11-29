import * as React from "react";
import "../../MainCard/MainCard.css";

interface NextAssessmentBtnProps {
  title: string;
}

const NextAssessmentBtn: React.FC<NextAssessmentBtnProps> = ({ title }) => {
  return (
    <div className="flex flex-col md:flex-row p-3 rounded-md relative">
      <button className="bg-blue-500 text-white py-1 px-8  ml-auto mt-4 rounded-2xl continue-btn">
        {title}
      </button>
    </div>
  );
};
export default NextAssessmentBtn;
