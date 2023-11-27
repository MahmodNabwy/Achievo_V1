import * as React from "react";
import "./Styles/Style.css";
interface InnovationContentProps {
  approved: string[];
  reviewing: string[];
}
const InnovationContent: React.FC<InnovationContentProps> = ({
  approved,
  reviewing,
}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 rounded-md relative content-section">
        {/* First Column */}
        <div className="md:w-1/2 p-4 relative">
          <p className="text-center relative reviewing-status">
            <p>Reviewing innovation management</p>
            <div className="border-reviewing"></div>
          </p>
          <ul className="list-item list-inside relative left-5  ml-4 mb-0">
            {reviewing.map((item) => {
              return (
                <li className="flex items-center li-items">
                  <svg
                    className="mr-2 reviewing-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_342)">
                      <path
                        d="M2.84448 5.12119L4.98032 7.25703L9.25199 2.98535"
                        stroke="white"
                        stroke-width="2.73387"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_342">
                        <rect
                          width="10.252"
                          height="10.252"
                          fill="white"
                          transform="translate(0.708618 -0.00488281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Second Column */}
        <div className="md:w-1/2 p-4 relative">
          <p className="text-center relative approved-status">
            <p>Approved innovation management</p>
            <div className="border-approved"></div>
          </p>
          <ul className="list-item list-inside relative left-5 ml-4 mb-0">
            {approved.map((item) => {
              return (
                <>
                  <li className="flex items-center li-items">
                    <svg
                      className="mr-2 approved-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_367)">
                        <path
                          d="M2.49536 5.12119L4.6312 7.25703L8.90287 2.98535"
                          stroke="white"
                          stroke-width="2.73387"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_367">
                          <rect
                            width="10.252"
                            height="10.252"
                            fill="white"
                            transform="translate(0.359192 -0.00488281)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    {item}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default InnovationContent;
