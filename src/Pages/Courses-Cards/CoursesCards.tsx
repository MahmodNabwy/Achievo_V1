import { LineProgress } from "../../Components/LineProgress/LineProgress";
import { StarsRating } from "../../Components/StarsRating/StarsRating";
import "./CoursesCards.scss";
import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import rectangleIcon from "./Assets/images/Paper.svg";
import arrowIcon from "./Assets/images/PaperPlus.svg";
import fourCirclesIcon from "./Assets/images/four-circle.svg";
import courseCover from "./Assets/images/Rectangle 531.png";
import cover from "./Assets/images/Rectangle 530.png";
type CoursesCardsProps = {};
export const CoursesCards = (props: CoursesCardsProps) => {
  const header = {
    data: ["Library", "In Progress", "Completed", "Not Started"],
    icons: [arrowIcon, rectangleIcon, fourCirclesIcon],
  };
  return (
    <div className="courses-container">
      <ModuleHeader navItems={header.data} icons={header.icons} />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 courses-grid">
        {/* Re Take Square Card */}
        <div className="card-rectangle">
          <div
            style={{
              borderLeft: "26px solid #178CE1",
              borderRadius: "7px",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <div className="flex justify-between pl-4">
              <div className="pt-4">
                <span className="course-name">Security Awareness Training</span>
                <div className="flex justify-between">
                  <span className="create-date">Created Date: 05-08-2023</span>
                  <div>
                    <StarsRating />
                  </div>
                </div>
              </div>
              <img
                src={cover}
                className="course-rectangle-cover"
                alt="course-cover"
              />
            </div>
            <div style={{ marginTop: "-17px" }}>
              <LineProgress value={100} />
            </div>
            <div
              className="flex justify-between"
              style={{ marginTop: "-7px", alignItems: "center" }}
            >
              <div className="deparment">IT</div>
              <div className="course-status">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "10px",
                  }}
                >
                  <div className="badge"></div>
                  <span className="percentage">0%</span>
                </div>
                <div className="start-rectangle">Start</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
