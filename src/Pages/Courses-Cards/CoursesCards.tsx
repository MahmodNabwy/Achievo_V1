import { LineProgress } from "../../Components/LineProgress/LineProgress";
import { StarsRating } from "../../Components/StarsRating/StarsRating";
import "./CoursesCards.scss";
import { ModuleHeader } from "../../Components/ModuleHeader/ModuleHeader";
import rectangleIcon from "./Assets/images/Paper.svg";
import rectangleIconDisables from "./Assets/images/Rectangle_disable.svg";
import fourCirclesActive from "./Assets/images/Four-Cricles-active.svg";
import fourCirclesIcon from "./Assets/images/four-circle.svg";
import cover from "./Assets/images/Rectangle 530.png";
import { useSelector, useDispatch } from "react-redux";
import courseCover from "./Assets/images/Rectangle 531.png";
type CoursesCardsProps = {};
export const CoursesCards = (props: CoursesCardsProps) => {
  const typeFromRedux = useSelector((state: any) => state.courses.type);
  const current_Li_From_Redux = useSelector(
    (state: any) => state.courses.activeLi
  );
  const header = {
    data: [
      {
        id: 1,
        title: "Library",
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
    icons: [
      {
        src: typeFromRedux === 1 ? rectangleIcon : rectangleIconDisables,
        type: 1,
      },
      {
        src: typeFromRedux === 2 ? fourCirclesActive : fourCirclesIcon,
        type: 2,
      },
    ],
  };

  return (
    <div className="courses-container">
      <ModuleHeader navItems={header.data} icons={header.icons} />
      {typeFromRedux === 1 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 courses-grid">
            {current_Li_From_Redux === 1 ? ( //Library Type
              <>
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
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                {/* InProgress Rectangle Card */}
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                      <LineProgress value={25} />
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
                          <span className="percentage">25%</span>
                        </div>
                        <div className="resume-rectangle">Resume</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Completed Rectangle Card */}
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                          <span className="percentage">100%</span>
                        </div>
                        <div className="retake-rectangle">Retake</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resume Rectangle Card */}
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                      <LineProgress value={25} />
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
                          <span className="percentage">25%</span>
                        </div>
                        <div className="resume-rectangle">Resume</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : current_Li_From_Redux === 2 ? ( //In Progress Type
              <>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                      <LineProgress value={25} />
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
                          <span className="percentage">25%</span>
                        </div>
                        <div className="resume-rectangle">Resume</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                      <LineProgress value={25} />
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
                          <span className="percentage">25%</span>
                        </div>
                        <div className="resume-rectangle">Resume</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                      <LineProgress value={25} />
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
                          <span className="percentage">25%</span>
                        </div>
                        <div className="resume-rectangle">Resume</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                      <LineProgress value={25} />
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
                          <span className="percentage">25%</span>
                        </div>
                        <div className="resume-rectangle">Resume</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                      <LineProgress value={25} />
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
                          <span className="percentage">25%</span>
                        </div>
                        <div className="resume-rectangle">Resume</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : current_Li_From_Redux === 3 ? ( //Completed Type
              <>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                          <span className="percentage">100%</span>
                        </div>
                        <div className="retake-rectangle">Retake</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                          <span className="percentage">100%</span>
                        </div>
                        <div className="retake-rectangle">Retake</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                          <span className="percentage">100%</span>
                        </div>
                        <div className="retake-rectangle">Retake</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                          <span className="percentage">100%</span>
                        </div>
                        <div className="retake-rectangle">Retake</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-rectangle">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4">
                      <div className="pt-4">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                          <span className="percentage">100%</span>
                        </div>
                        <div className="retake-rectangle">Retake</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              //Not Started Type
              <>
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
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div
                          className="flex justify-between"
                          style={{ alignItems: "center" }}
                        >
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
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
              </>
            )}
          </div>
        </>
      ) : (
        <>
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
                  <img
                    src={courseCover}
                    className="w-full"
                    alt="course-cover"
                  />
                </div>
                <div style={{ marginTop: "-13px" }}>
                  <LineProgress value={100} />
                </div>
                <div className="course-information-square">
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
                  <img
                    src={courseCover}
                    className="w-full"
                    alt="course-cover"
                  />
                </div>
                <div style={{ marginTop: "-13px" }}>
                  <LineProgress value={72} />
                </div>
                <div className="course-information-square">
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
                  <img
                    src={courseCover}
                    className="w-full"
                    alt="course-cover"
                  />
                </div>
                <div style={{ marginTop: "-13px" }}>
                  <LineProgress value={0} />
                </div>
                <div className="course-information-square">
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
        </>
      )}
    </div>
  );
};
