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
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 courses-grid">
        {/* Re Take Square Card */}
        <div className="card-square">
          <div
            style={{
              borderLeft: "26px solid #60B527",
              borderRadius: "12px",
              height: "100%",
            }}
          >
            <span className="course-name">Security Awareness Training</span>
            <div className="flex justify-between">
              <span className="create-date">Created Date: 05-08-2023</span>
              <div>
                <StarsRating />
              </div>
            </div>
            <div>
              <img src={courseCover} className="w-full" alt="course-cover" />
            </div>
            <div style={{ marginTop: "-13px" }}>
              <LineProgress value={100} />
            </div>
            <div className="course-information">
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
                  <span className="percentage">100%</span>
                </div>
                <div className="retake">Retake</div>
              </div>
            </div>
          </div>
        </div>
        {/* Resume Square Card */}
        <div className="card-square">
          <div
            style={{
              borderLeft: "26px solid #E1CD17",
              borderRadius: "12px",
              height: "100%",
            }}
          >
            <span className="course-name">Security Awareness Training</span>
            <div className="flex justify-between">
              <span className="create-date">Created Date: 05-08-2023</span>
              <div>
                <StarsRating />
              </div>
            </div>
            <div>
              <img src={courseCover} className="w-full" alt="course-cover" />
            </div>
            <div style={{ marginTop: "-13px" }}>
              <LineProgress value={72} />
            </div>
            <div className="course-information">
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
                  <span className="percentage">100%</span>
                </div>
                <div className="resume">Resume</div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Square Card */}
        <div className="card-square">
          <div
            style={{
              borderLeft: "26px solid #178CE1",
              borderRadius: "12px",
              height: "100%",
            }}
          >
            <span className="course-name">Security Awareness Training</span>
            <div className="flex justify-between">
              <span className="create-date">Created Date: 05-08-2023</span>
              <div>
                <StarsRating />
              </div>
            </div>
            <div>
              <img src={courseCover} className="w-full" alt="course-cover" />
            </div>
            <div style={{ marginTop: "-13px" }}>
              <LineProgress value={0} />
            </div>
            <div className="course-information">
              <div className="deparment">HR</div>
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
                <div className="Start">Start</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
