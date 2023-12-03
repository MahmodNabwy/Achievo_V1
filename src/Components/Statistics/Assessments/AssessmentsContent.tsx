import * as React from "react";
import "../../MainCard/MainCard.css";

type AssessmentsContentProps = {
  completed: string[];
  unCompleted: string[];
};
const AssessmentsContent = (props: AssessmentsContentProps) => {
  return (
    // <div className="flex flex-col md:flex-row p-4 rounded-md relative status-section">
    //   {/* First Column */}
    //   <div className="md:w-1/2 p-4 relative">
    //     <p className="text-center relative assessment-status">
    //       <p>Completed assessments</p>
    //       <div className="border-completed"></div>
    //     </p>
    //     <ul className="list-item list-inside relative left-5 ml-4 mb-0">
    //       {props.completed.map((item) => {
    //         return (
    //           <li className="flex items-center li-items">
    //             <svg
    //               className="mr-2 completed-check"
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="11"
    //               height="11"
    //               viewBox="0 0 11 11"
    //               fill="none"
    //             >
    //               <g clip-path="url(#clip0_1_342)">
    //                 <path
    //                   d="M2.84448 5.12119L4.98032 7.25703L9.25199 2.98535"
    //                   stroke="white"
    //                   stroke-width="2.73387"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 />
    //               </g>
    //               <defs>
    //                 <clipPath id="clip0_1_342">
    //                   <rect
    //                     width="10.252"
    //                     height="10.252"
    //                     fill="white"
    //                     transform="translate(0.708618 -0.00488281)"
    //                   />
    //                 </clipPath>
    //               </defs>
    //             </svg>
    //             {item}
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>

    //   {/* Second Column */}
    //   <div className="md:w-1/2 p-4 relative">
    //     <p className="text-center relative assessment-status">
    //       <p>Uncompleted assessments</p>
    //       <div className="border-uncompleted"></div>
    //     </p>
    //     <ul className="list-item list-inside relative left-5 ml-4 mb-0">
    //       {props.unCompleted.map((item) => {
    //         return (
    //           <>
    //             <li className="flex items-center li-items">
    //               <svg
    //                 className="mr-2 unCompleted-check"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="11"
    //                 height="11"
    //                 viewBox="0 0 11 11"
    //                 fill="none"
    //               >
    //                 <g clip-path="url(#clip0_1_367)">
    //                   <path
    //                     d="M2.49536 5.12119L4.6312 7.25703L8.90287 2.98535"
    //                     stroke="white"
    //                     stroke-width="2.73387"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   />
    //                 </g>
    //                 <defs>
    //                   <clipPath id="clip0_1_367">
    //                     <rect
    //                       width="10.252"
    //                       height="10.252"
    //                       fill="white"
    //                       transform="translate(0.359192 -0.00488281)"
    //                     />
    //                   </clipPath>
    //                 </defs>
    //               </svg>
    //               {item}
    //             </li>
    //           </>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 card-section">
      <div className="col-start-1"></div>
    </div>
  );
};
export default AssessmentsContent;
