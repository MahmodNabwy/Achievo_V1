import React from "react";
import CardWithProgress from "./Components/Cards/CardWithProgress";
import Statistics from "./Components/Statistics/Courses/CourseCard";
import AssessmentsCard from "./Components/Statistics/Assessments/AssessmentsCard";
import PoliciesCard from "./Components/Statistics/Policies/PoliciesCard";
import InnovationCard from "./Components/Statistics/Innovation/InnovationCard";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";
import { Sidebar } from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="grid grid-cols-6">
      {/* Left Sidebar */}
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5 ml-10 mr-10">
        <div className="grid grid-cols-1">
          <WelcomeBanner userName="Mohamed Mansour" />
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          <CardWithProgress
            progress={50}
            score="4 of 11"
            TextOne="Courses"
            TextTwo="Done"
          />
          <CardWithProgress
            progress={14}
            score="1 of 7"
            TextOne="Policies & Procedures"
            TextTwo="Acknowledged"
          />
          <CardWithProgress
            progress={75}
            score="3 of 4"
            TextOne="Innovation Management"
            TextTwo="Approved"
          />
          <CardWithProgress
            progress={40}
            score="4 of 11"
            TextOne="Courses"
            TextTwo="Done"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-20 ">
          <Statistics title="Courses" />
          <AssessmentsCard title="Assessments" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-20 ">
          <PoliciesCard title="Policies & Procedures" />
          <InnovationCard title="Innovation Management" />
        </div>
      </div>
      {/* <div className="col-span-1 text-center">test</div>
      <div className="col-span-5 text-center">test</div> */}
    </div>
  );
};

export default App;
