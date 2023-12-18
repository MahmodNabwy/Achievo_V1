import { LineProgress } from "../../Components/LineProgress/LineProgress";
import { StarsRating } from "../../Components/StarsRating/StarsRating";
import "./CoursesCards.scss";
import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import arrowIcon from "./Assets/images/Paper.svg";
import rectangleIcon from "./Assets/images/PaperPlus.svg";
import fourCirclesIcon from "./Assets/images/four-circle.svg";
type CoursesCardsProps = {};
export const CoursesCards = (props: CoursesCardsProps) => {
  const header = {
    data: ["Library", "In Progress", "Completed", "Not Started"],
    icons: [arrowIcon, rectangleIcon, fourCirclesIcon],
  };
  return (
    <div className="courses-container">
      <ModuleHeader navItems={header.data} icons={header.icons} />
      <div className="grid grid-cols-1 gap-4 courses-grid">
        {/* Retake Course */}
        <div className="CoursesCards">
          <div>
            <div className="box">
              <div className="rectangle-retake" />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div>
              <div className="data-container">
                <div>
                  <span className="course-name">
                    Security Awareness Training
                  </span>
                  <div style={{ display: "flex" }}>
                    <span className="create-date">
                      Created Date: 05-08-2023
                    </span>
                    <StarsRating />
                  </div>
                </div>

                <div className="frame"></div>
              </div>
            </div>
            {/* Progress Div */}
            <div
              style={{
                marginTop: "-13px",
              }}
            >
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
        {/* Resume Course */}
        <div className="CoursesCards">
          <div>
            <div className="box">
              <div className="rectangle-resume" />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div>
              <div className="data-container">
                <div>
                  <span className="course-name">Communication Skills</span>
                  <div style={{ display: "flex" }}>
                    <span className="create-date">
                      Created Date: 03-06-2023
                    </span>
                    <StarsRating />
                  </div>
                </div>

                <div className="frame"></div>
              </div>
            </div>
            {/* Progress Div */}
            <div
              style={{
                marginTop: "-13px",
              }}
            >
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
                  <span className="percentage">72%</span>
                </div>
                <div className="resume">Resume</div>
              </div>
            </div>
          </div>
        </div>

        {/*  Start Course */}
        <div className="CoursesCards">
          <div>
            <div className="box">
              <div className="rectangle-start" />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div>
              <div className="data-container">
                <div>
                  <span className="course-name">Cloud Security</span>
                  <div style={{ display: "flex" }}>
                    <span className="create-date">
                      Created Date: 22-05-2023
                    </span>
                    <StarsRating />
                  </div>
                </div>

                <div className="frame"></div>
              </div>
            </div>
            {/* Progress Div */}
            <div
              style={{
                marginTop: "-13px",
              }}
            >
              <LineProgress value={0} />
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
