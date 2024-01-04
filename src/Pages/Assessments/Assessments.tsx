import { AssessmentsCards } from "../../Components/AssessmentsCards/AssessmentsCards";
import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import "./Assessments.scss";
export const Assessments = () => {
  const header = {
    data: [
      {
        id: 1,
        title: "All",
      },
      {
        id: 2,
        title: "In Progress",
      },
      {
        id: 3,
        title: "Completed",
      },
      {
        id: 4,
        title: "Not Started",
      },
    ],
    icons: [],
  };

  return (
    <div>
      <ModuleHeader navItems={header.data} icons={header.icons} />

      <div className="AssessmentsPage">
        <div className="grid grid-cols-3">
          <div>
            <AssessmentsCards />
          </div>
        </div>
      </div>
    </div>
  );
};
