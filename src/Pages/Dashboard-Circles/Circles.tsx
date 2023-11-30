import React from "react";
import "./Circles.css";
import CardWithProgress from "../../Components/Cards/CardWithProgress";
type circlesProps = {};
export const Circles = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-4">
      <div className="col-span-1 rounded-md">
        <CardWithProgress
          progress={50}
          score="4 of 11"
          TextOne="Courses"
          TextTwo="Done"
        />
      </div>
      <div className="col-span-1 rounded-md">
        <CardWithProgress
          progress={40}
          score="3 of 5"
          TextOne="Assessments"
          TextTwo="Done"
        />
      </div>
      <div className="col-span-1 rounded-md">
        <CardWithProgress
          progress={14}
          score="1 of 7"
          TextOne="Policies & Procedures"
          TextTwo="Acknowledged"
        />
      </div>
      <div className="col-span-1 rounded-md">
        <CardWithProgress
          progress={75}
          score="3 of 4"
          TextOne="Innovation Management"
          TextTwo="Approved"
        />
      </div>
    </div>
  );
};
