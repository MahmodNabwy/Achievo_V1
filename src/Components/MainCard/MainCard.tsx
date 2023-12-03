import React from "react";
import { Card, CardHeader, CardTitle } from "../../@/components/ui/card";
import expandIcon from "./Assets/Icons/Bookmark.svg";
import "../MainCard/MainCard.css";
import ProgressLine from "../Statistics/Courses/ProgressLine";
type MainCardProps = {
  title: string;
  icon: string;
  content: React.ReactNode[];
};
export const MainCard = (props: MainCardProps) => {
  return (
    // <Card className="main-container">
    //   <CardHeader>
    //     <CardTitle>
    //       <div className="grid grid-cols-2 auto-rows-max gap-10">
    //         <div className="col-start-1 col-end-3">
    //           <div className="flex">
    //             <img src={props.icon} className="card-icon" alt="card-icon" />
    //             <span className="card-title">{props.title}</span>
    //           </div>
    //         </div>
    //         <div className="col-end-7 col-span-2">
    //           <div className="flex justify-end">
    //             <img className="expand-icon" src={expandIcon} alt="expand" />
    //           </div>
    //         </div>
    //       </div>
    //     </CardTitle>
    //   </CardHeader>
    //   {props.content}
    // </Card>

    // <div className="grid grid-cols-2 auto-rows-max gap-10">
    //   <div className="col-start-1 col-end-3">
    //     <div className="flex">
    //       <img src={props.icon} className="card-icon" alt="card-icon" />
    //       <span className="card-title">{props.title}</span>
    //     </div>
    //   </div>

    //   <div className="col-end-7 col-span-2">
    //     <div className="flex justify-end">
    //       <img className="expand-icon" src={expandIcon} alt="expand" />
    //     </div>
    //   </div>

    //   <div className="col-end-7 col-span-2">
    //     <div className="flex justify-end">
    //       <img className="expand-icon" src={expandIcon} alt="expand" />
    //     </div>
    //   </div>
    // </div>

    <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 card-section">
      <div className="col-start-1 col-end-1 sm:col-start-1">
        <div className="flex">
          <img src={props.icon} className="card-icon" alt="card-icon" />
          <span className="card-title sm:col-start-1">{props.title}</span>
        </div>
      </div>
      <div className="col-start-2 flex justify-end">
        <span>
          <img className="expand-icon" src={expandIcon} alt="expand" />
        </span>
      </div>
      <div className="col-start-1 col-end-1 xs:col-start-1 sm:col-start-1 lg:p-4">
        <div className="flex testt">Latest Course</div>
      </div>
      <div className="col-start-1 xs:col-start-1 sm:col-start-1  md:col-start-1 lg:flex lg:col-start-2 lg:p-4  justify-end ">
        <div className="percentege">20 % Compeleted</div>
      </div>
      <div className="col-span-full lg:p-4">
        <ProgressLine value={12} />
      </div>
      <div className="col-start-1 col-end-1 sm:col-start-1 lg:p-4">
        <span>Course Name: Password Cracking</span>
      </div>
      <div className="col-start-1 xs:col-start-1 sm:col-start-1 lg:col-start-2 flex lg:justify-end lg:p-4">
        <a href="#" className="resuming">
          Resume Course
        </a>
      </div>
    </div>
  );
};
