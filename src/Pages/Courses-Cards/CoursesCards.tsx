import { LineProgress } from "../../Components/LineProgress/LineProgress";
import { StarsRating } from "../../Components/StarsRating/StarsRating";
import "./CoursesCards.scss";
import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import rectangleIcon from "./Assets/images/Paper.svg";
import arrowIcon from "./Assets/images/PaperPlus.svg";
import fourCirclesIcon from "./Assets/images/four-circle.svg";
import courseCover from "./Assets/images/Rectangle 531.png";
type CoursesCardsProps = {};
export const CoursesCards = (props: CoursesCardsProps) => {
  const header = {
    data: ["Library", "In Progress", "Completed", "Not Started"],
    icons: [arrowIcon, rectangleIcon, fourCirclesIcon],
  };
  return (
    <div className="courses-container">
      <ModuleHeader navItems={header.data} icons={header.icons} />
      {/* Rectangle Figure */}

      {/* Square Figure */}

      <div className="grid grid-col-3 gap-6 pb-4 courses-grid">
        <div className="col-start-1">
          <div className="card-square flex justify-between">
            <div>
              <div className="square-box">
                <div className="square-retake" />
              </div>
            </div>
            <div className="pl-4">
              <span className="course-name">Security Awareness Training</span>
              <div style={{ display: "flex" }}>
                <span className="create-date">Created Date: 05-08-2023</span>
                <StarsRating />
              </div>
              <div className="w-full">
                <img src={courseCover} alt="course-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2">
          <div className="card-square flex justify-between">
            <div>
              <div className="square-box">
                <div className="square-retake" />
              </div>
            </div>
            <div className="pl-4">
              <span className="course-name">Security Awareness Training</span>
              <div style={{ display: "flex" }}>
                <span className="create-date">Created Date: 05-08-2023</span>
                <StarsRating />
              </div>
              <div className="w-full">
                <img src={courseCover} alt="course-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-3">
          {" "}
          <div className="card-square flex justify-between">
            <div>
              <div className="square-box">
                <div className="square-retake" />
              </div>
            </div>
            <div className="pl-4">
              <span className="course-name">Security Awareness Training</span>
              <div style={{ display: "flex" }}>
                <span className="create-date">Created Date: 05-08-2023</span>
                <StarsRating />
              </div>
              <div className="w-full">
                <img src={courseCover} alt="course-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col-3 gap-6">
        <div className="col-start-1">111</div>
        <div className="col-start-2">111</div>
        <div className="col-start-3">111</div>
      </div>
    </div>
  );
};
