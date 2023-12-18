import { LineProgress } from "../../Components/LineProgress/LineProgress";
import { StarsRating } from "../../Components/StarsRating/StarsRating";
import "./CoursesCards.scss";
type CoursesCardsProps = {};
export const CoursesCards = (props: CoursesCardsProps) => {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <div className="flex">
          <div className="header-item">Library</div>
          <div className="header-item">In Progress</div>
          <div className="header-item">Completed</div>
          <div className="header-item">Not Started</div>
        </div>
        <div className="flex pt-1">
          <div className="mr-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M8.11621 5.35059V20.0243"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.37256 10.1173C3.37256 10.1173 5.89492 5.34937 8.11493 5.34937C10.3349 5.34937 12.8573 10.1173 12.8573 10.1173"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.6604 22.5931V7.91943"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.4039 17.8252C24.4039 17.8252 21.8804 22.5932 19.6616 22.5932C17.4427 22.5932 14.9192 17.8252 14.9192 17.8252"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="mr-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <rect
                x="3.07593"
                y="15.8679"
                width="21.7583"
                height="8.96625"
                rx="4.25"
                stroke="black"
                stroke-width="1.5"
              />
              <rect
                x="3.07593"
                y="3.07593"
                width="21.7583"
                height="8.96625"
                rx="4.25"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="mr-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M24.4224 7.76133C24.4222 8.60603 24.1715 9.4317 23.7021 10.1339C23.2326 10.8362 22.5655 11.3835 21.7851 11.7066C21.0046 12.0298 20.1459 12.1143 19.3174 11.9494C18.489 11.7846 17.728 11.3778 17.1307 10.7805C16.5334 10.1832 16.1266 9.42222 15.9618 8.59376C15.7969 7.76529 15.8814 6.90656 16.2046 6.12611C16.5277 5.34566 17.075 4.67855 17.7772 4.20911C18.4795 3.73968 19.3052 3.489 20.1499 3.48877C21.283 3.48877 22.3698 3.93891 23.171 4.74017C23.9723 5.54143 24.4224 6.62817 24.4224 7.76133Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0328 7.76133C12.0325 8.60603 11.7819 9.4317 11.3124 10.1339C10.843 10.8362 10.1759 11.3835 9.39544 11.7066C8.61499 12.0298 7.75625 12.1143 6.92779 11.9494C6.09933 11.7846 5.33835 11.3778 4.74105 10.7805C4.14376 10.1832 3.73697 9.42222 3.57212 8.59376C3.40727 7.76529 3.49176 6.90656 3.81491 6.12611C4.13806 5.34566 4.68535 4.67855 5.3876 4.20911C6.08985 3.73968 6.91552 3.489 7.76022 3.48877C8.89337 3.48877 9.98012 3.93891 10.7814 4.74017C11.5826 5.54143 12.0328 6.62817 12.0328 7.76133Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.4224 20.0743C24.4222 20.919 24.1715 21.7447 23.7021 22.4469C23.2326 23.1492 22.5655 23.6965 21.7851 24.0196C21.0046 24.3428 20.1459 24.4273 19.3174 24.2624C18.489 24.0976 17.728 23.6908 17.1307 23.0935C16.5334 22.4962 16.1266 21.7352 15.9618 20.9067C15.7969 20.0783 15.8814 19.2195 16.2046 18.4391C16.5277 17.6586 17.075 16.9915 17.7772 16.5221C18.4795 16.0527 19.3052 15.802 20.1499 15.8018C21.283 15.8018 22.3698 16.2519 23.171 17.0532C23.9723 17.8544 24.4224 18.9412 24.4224 20.0743Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0328 20.0743C12.0325 20.919 11.7819 21.7447 11.3124 22.4469C10.843 23.1492 10.1759 23.6965 9.39544 24.0196C8.61499 24.3428 7.75625 24.4273 6.92779 24.2624C6.09933 24.0976 5.33835 23.6908 4.74105 23.0935C4.14376 22.4962 3.73697 21.7352 3.57212 20.9067C3.40727 20.0783 3.49176 19.2195 3.81491 18.4391C4.13806 17.6586 4.68535 16.9915 5.3876 16.5221C6.08985 16.0527 6.91552 15.802 7.76022 15.8018C8.32135 15.8016 8.877 15.912 9.39544 16.1267C9.91388 16.3413 10.3849 16.656 10.7817 17.0528C11.1785 17.4496 11.4932 17.9207 11.7079 18.4391C11.9225 18.9575 12.0329 19.5132 12.0328 20.0743Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
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
