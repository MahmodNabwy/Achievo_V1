import { useSelector } from "react-redux";
import { AssessmentsCards } from "../../Components/AssessmentsCards/AssessmentsCards";
import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import "./Assessments.scss";
import noResult from "../../Components/AssessmentsCards/Assets/Icons/NoAssessments.jpg";
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
  const current_Li_From_Redux = useSelector(
    (state: any) => state.courses.activeLi
  );
  return (
    <div>
      <ModuleHeader navItems={header.data} icons={header.icons} />

      <div className="AssessmentsPage">
        {current_Li_From_Redux === 4 ? (
          <>
            <div className="flex mt-4 mb-4 justify-center items-center">
              <img src={noResult} alt="no-data" className="no-data" />
            </div>
          </>
        ) : (
          <>
            <div className="grid sm:grid grid-cols-1  lg:grid-cols-3  gap-4">
              <div>
                <AssessmentsCards type={current_Li_From_Redux} />
              </div>
              <div>
                <AssessmentsCards type={current_Li_From_Redux} />
              </div>
              <div>
                <AssessmentsCards type={current_Li_From_Redux} />
              </div>
              <div>
                <AssessmentsCards type={current_Li_From_Redux} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
