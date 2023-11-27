import React from "react";
import CardWithProgress from "./Components/Cards/CardWithProgress";
import Statistics from "./Components/Statistics/Courses/CourseCard";
import AssessmentsCard from "./Components/Statistics/Assessments/AssessmentsCard";
import PoliciesCard from "./Components/Statistics/Policies/PoliciesCard";
import InnovationCard from "./Components/Statistics/Innovation/InnovationCard";
import Search from "./Components/Search-Input/Search";
function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-10 grid-rows-7 gap-4">
        <div className="col-span-3 col-start-7 row-start-1">Input Search</div>
        <div className="col-span-2 row-span-7 col-start-1 row-start-1">
          Left Menu
        </div>
        <div className="col-span-2 col-start-3 row-start-3">
          <CardWithProgress
            progress={50}
            score="4 of 11"
            TextOne="Courses"
            TextTwo="Done"
          />
        </div>
        <div className="col-span-2 col-start-5 row-start-3">
          <CardWithProgress
            progress={40}
            score="3 of 5"
            TextOne="Assessments"
            TextTwo="Done"
          />
        </div>
        <div className="col-span-2 col-start-9 row-start-3">
          <CardWithProgress
            progress={75}
            score="3 of 4"
            TextOne="Innovation Management"
            TextTwo="Approved"
          />
        </div>
        <div className="col-span-2 col-start-3 row-start-1">Dashboard</div>
        <div className="col-start-10 row-start-1">Language Icon</div>
        <div className="col-span-2 col-start-7 row-start-3">
          <CardWithProgress
            progress={14}
            score="1 of 7"
            TextOne="Policies & Procedures"
            TextTwo="Acknowledged"
          />
        </div>
        <div className="col-span-3 col-start-3 row-start-2">Welcome Back</div>
        <div className="col-span-4 row-span-2 col-start-3 row-start-4">
          <Statistics title="Courses" />
        </div>
        <div className="col-span-4 row-span-2 col-start-7 row-start-4">
          <AssessmentsCard title="Assessments" />
        </div>
        <div className="col-span-4 row-span-2 col-start-3 row-start-6">
          <PoliciesCard title="Policies & Procedures" />
        </div>
        <div className="col-span-4 row-span-2 col-start-7 row-start-6">
          {" "}
          <InnovationCard title="Innovation Management" />
        </div>
      </div>
    </div>
  );
}

export default App;
