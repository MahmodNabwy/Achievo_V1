import { useState, useEffect } from "react";
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
import { GoBackHeader } from "../../Components/GoBackHeader/GoBackHeader";
type CoursesCardsProps = {};
export const CoursesCards = (props: CoursesCardsProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);
  const typeFromRedux = useSelector((state: any) => state.courses.type);
  const current_Li_From_Redux = useSelector(
    (state: any) => state.courses.activeLi
  );

  /*
   * In SM,MD Screens We Will Disappear the course cover
   */
  const handleResize = () => {
    const screenWidth = window.innerWidth;

    // Define your screen size breakpoints
    const smallScreenMaxWidth = 600;
    const mediumScreenMaxWidth = 1024;

    // Check if the screen is small
    if (screenWidth <= smallScreenMaxWidth) {
      setIsSmallScreen(true);
    }
    // Check if the screen is medium
    else if (
      screenWidth > smallScreenMaxWidth &&
      screenWidth <= mediumScreenMaxWidth
    ) {
      setIsMediumScreen(true);
    } else {
      setIsSmallScreen(false);
      setIsMediumScreen(false);
    }
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="courses-container animate__animated animate__fadeIn">
      <ModuleHeader navItems={header.data} icons={header.icons} />

      {typeFromRedux === 1 ? ( //Rectangle Figure
        <>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 courses-grid ">
            {current_Li_From_Redux === 1 ? ( //Library Type
              <>
                {/* Not Started Rectangle Card */}
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #178CE1",
                      borderRadius: "7px",
                      // height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4 data-container-nostarted-lg data-container-nostarted-sm">
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={100} />

                    <div
                      className="flex justify-between "
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className="flex justify-between pl-4 data-container-inprogress-lg data-container-inprogress-sm"
                      style={{ height: "98x" }}
                    >
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={25} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",

                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4 data-container-completed-lg data-container-completed-sm">
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={100} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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

                {/* Not Started Rectangle Card */}
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #178CE1",
                      borderRadius: "7px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4 data-container-nostarted-lg data-container-nostarted-sm">
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={100} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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
            ) : current_Li_From_Redux === 2 ? ( //In Progress Type
              <>
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className="flex justify-between pl-4 data-container-inprogress-lg data-container-inprogress-sm"
                      style={{ height: "98x" }}
                    >
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={25} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className="flex justify-between pl-4 data-container-inprogress-lg data-container-inprogress-sm"
                      style={{ height: "98x" }}
                    >
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={25} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className="flex justify-between pl-4 data-container-inprogress-lg data-container-inprogress-sm"
                      style={{ height: "98x" }}
                    >
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={25} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "7px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className="flex justify-between pl-4 data-container-inprogress-lg data-container-inprogress-sm"
                      style={{ height: "98x" }}
                    >
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={25} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",

                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4 data-container-completed-lg data-container-completed-sm">
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={100} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",

                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4 data-container-completed-lg data-container-completed-sm">
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={100} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "7px",

                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4 data-container-completed-lg data-container-completed-sm">
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={100} />

                    <div
                      className="flex justify-between"
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #178CE1",
                      borderRadius: "7px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4 data-container-nostarted-lg data-container-nostarted-sm">
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={100} />

                    <div
                      className="flex justify-between "
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #178CE1",
                      borderRadius: "7px",
                      // height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4 data-container-nostarted-lg data-container-nostarted-sm">
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={100} />

                    <div
                      className="flex justify-between "
                      style={{ alignItems: "center" }}
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
                <div className="card-rectangle animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #178CE1",
                      borderRadius: "7px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="flex justify-between pl-4 data-container-nostarted-lg data-container-nostarted-sm">
                      <div className="course-informations-lg course-informations-sm">
                        <span className="course-name course-name-sm name-sm course-name-lg">
                          Security Awareness Training
                        </span>
                        <div className="course-rating">
                          <span className="create-date">
                            Created Date: 05-08-2023
                          </span>
                          <div>
                            <StarsRating />
                          </div>
                        </div>
                      </div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={cover}
                          className="course-rectangle-cover overflow-auto"
                          alt="course-cover"
                        />
                      )}
                    </div>

                    <LineProgress value={100} />

                    <div
                      className="flex justify-between "
                      style={{ alignItems: "center" }}
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
        //Square Figure
        <>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 courses-grid animate__animated animate__fadeIn">
            {current_Li_From_Redux === 1 ? ( //Library
              <>
                {/* Completed */}
                <div className="card-square-sm card-square-lg animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #60B527",
                      borderRadius: "12px",
                      height: "100%",
                    }}
                  >
                    <div className="course-square-completed-inf">
                      <span className="course-name pl-4">
                        Security Awareness Training
                      </span>
                      <div className="course-inf-square">
                        <span className="create-date">
                          Created Date: 05-08-2023
                        </span>
                        <div>
                          <StarsRating />
                        </div>
                      </div>
                    </div>
                    <div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={courseCover}
                          className="w-full"
                          alt="course-cover"
                        />
                      )}
                    </div>
                    <div>
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
                {/* InProgress */}
                <div className="card-square-sm card-square-lg card-square-lg animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #E1CD17",
                      borderRadius: "12px",
                      height: "100%",
                    }}
                  >
                    <div className="course-square-inprogress-inf">
                      <span className="course-name pl-4">
                        Security Awareness Training
                      </span>
                      <div className="course-inf-square">
                        <span className="create-date">
                          Created Date: 05-08-2023
                        </span>
                        <div>
                          <StarsRating />
                        </div>
                      </div>
                    </div>
                    <div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={courseCover}
                          className="w-full"
                          alt="course-cover"
                        />
                      )}
                    </div>
                    <div>
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
                {/* Not Started */}
                <div className="card-square-sm card-square-lg animate__animated animate__fadeIn">
                  <div
                    style={{
                      borderLeft: "26px solid #178CE1",
                      borderRadius: "12px",
                      height: "100%",
                    }}
                  >
                    <div className="course-square-resume-inf">
                      <span className="course-name pl-4">
                        Security Awareness Training
                      </span>
                      <div className="course-inf-square">
                        <span className="create-date">
                          Created Date: 05-08-2023
                        </span>
                        <div>
                          <StarsRating />
                        </div>
                      </div>
                    </div>
                    <div>
                      {isSmallScreen === true ||
                      isMediumScreen === true ? null : (
                        <img
                          src={courseCover}
                          className="w-full"
                          alt="course-cover"
                        />
                      )}
                    </div>
                    <div>
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
              </>
            ) : current_Li_From_Redux === 2 ? ( // In Progress Cards
              <div className="card-square-sm card-square-lg animate__animated animate__fadeIn">
                <div
                  style={{
                    borderLeft: "26px solid #E1CD17",
                    borderRadius: "12px",
                    height: "100%",
                  }}
                >
                  <div className="course-square-inprogress-inf">
                    <span className="course-name pl-4">
                      Security Awareness Training
                    </span>
                    <div className="flex justify-between pl-4">
                      <span className="create-date">
                        Created Date: 05-08-2023
                      </span>
                      <div>
                        <StarsRating />
                      </div>
                    </div>
                  </div>
                  <div>
                    {isSmallScreen === true ||
                    isMediumScreen === true ? null : (
                      <img
                        src={courseCover}
                        className="w-full"
                        alt="course-cover"
                      />
                    )}
                  </div>
                  <div>
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
                        {/* Todo If value is not equal 100 so diappear the badge */}
                        <div className="badge"></div>
                        <span className="percentage">72%</span>
                      </div>
                      <div className="resume">Resume</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : current_Li_From_Redux === 3 ? ( //Completed Cards
              <div className="card-square-sm card-square-lg animate__animated animate__fadeIn">
                <div
                  style={{
                    borderLeft: "26px solid #60B527",
                    borderRadius: "12px",
                    height: "100%",
                  }}
                >
                  <div className="course-square-completed-inf">
                    <span className="course-name pl-4">
                      Security Awareness Training
                    </span>
                    <div className="course-inf-square">
                      <span className="create-date">
                        Created Date: 05-08-2023
                      </span>
                      <div>
                        <StarsRating />
                      </div>
                    </div>
                  </div>
                  <div>
                    {isSmallScreen === true ||
                    isMediumScreen === true ? null : (
                      <img
                        src={courseCover}
                        className="w-full"
                        alt="course-cover"
                      />
                    )}
                  </div>
                  <div>
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
            ) : (
              //Resume Cards
              <div className="card-square-sm card-square-lg animate__animated animate__fadeIn">
                <div
                  style={{
                    borderLeft: "26px solid #178CE1",
                    borderRadius: "12px",
                    height: "100%",
                  }}
                >
                  <div className="course-square-resume-inf">
                    <span className="course-name pl-4">
                      Security Awareness Training
                    </span>
                    <div className="course-inf-square">
                      <span className="create-date">
                        Created Date: 05-08-2023
                      </span>
                      <div>
                        <StarsRating />
                      </div>
                    </div>
                  </div>
                  <div>
                    {isSmallScreen === true ||
                    isMediumScreen === true ? null : (
                      <img
                        src={courseCover}
                        className="w-full"
                        alt="course-cover"
                      />
                    )}
                  </div>
                  <div>
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
            )}
          </div>
        </>
      )}
    </div>
  );
};
