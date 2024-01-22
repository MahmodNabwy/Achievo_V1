import { GoBackHeader } from "../../Components/GoBackHeader/GoBackHeader";
import { Video } from "../../Components/Videos/Video";
import { useState, useEffect } from "react";

import "./CoursesWatch.scss";
import videoIcon from "../Courses-Details/Assets/Icons/video.svg";
import courseCover from "../Courses-Cards/Assets/images/Rectangle 531.png";
import { LineProgress } from "../../Components/LineProgress/LineProgress";
import { Quiz } from "../../Components/Quiz/Quiz";
import { QuizSummary } from "../../Components/Quiz/Quiz-summary/QuizSummary";
export const CorusesWatch = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);
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
  return (
    <div className="CorusesWatch">
      <GoBackHeader />

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${
          isSmallScreen === true || isMediumScreen === true ? "" : "pl-32"
        }  `}
      >
        <div className="lg:col-start-1 flex justify-center">
          {/* <Quiz /> */}
          {<QuizSummary />}
          {/* <Video /> */}
        </div>
        <div className="sm:col-start-1 lg:col-start-2 flex justify-end pr-5">
          <div className="grid course-information">
            <div className="grid course-data gap-0">
              <img src={courseCover} alt="cover" />
              <div>
                <h3 className="course-name pl-4">
                  Security Awareness Training
                </h3>
              </div>
              <div className="col-span-full pr-4 pl-4">
                <LineProgress value={15} />
              </div>
              <div className="col-span-full pr-4 pl-4 flex justify-end ">
                <strong className="percentage"> 20 % completed</strong>
              </div>
              {/* Video History Section */}
              <div className="w-full pr-4 pl-4">
                <div className="accordion-group accordion-group-bordered mt-4">
                  <div className="accordion">
                    <input
                      type="checkbox"
                      id="toggle-7"
                      className="accordion-toggle"
                    />
                    {/* Header */}
                    <div className="flex items-center  pl-4 gap-4 session-header">
                      <label htmlFor="toggle-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10.0312 7.05249V13.0092"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.0131 10.031H7.0498"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.91699 10.0309C1.91699 3.94592 3.94616 1.91675 10.0312 1.91675C16.1162 1.91675 18.1453 3.94592 18.1453 10.0309C18.1453 16.1159 16.1162 18.1451 10.0312 18.1451C3.94616 18.1451 1.91699 16.1159 1.91699 10.0309Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </label>
                      <label htmlFor="toggle-7" className="accordion-title">
                        Importance of Security
                      </label>
                    </div>
                    {/* Content */}
                    <div className="accordion-content text-content2">
                      <div className="min-h-0 session-content">
                        <div className="course-session-content">
                          <div className="flex justify-between">
                            {/* Video */}
                            <div className="flex gap-4">
                              <div>
                                <img src={videoIcon} alt="video" />
                              </div>
                              <div className="grid video-info">
                                <span className="video-title">
                                  Importance of Security
                                </span>
                                <span className="video-duration">
                                  Video - 13 Min
                                </span>
                              </div>
                            </div>
                            <div className="watch-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="28"
                                viewBox="0 0 29 28"
                                fill="none"
                              >
                                <g opacity="0.6">
                                  <path
                                    d="M28.1111 14.0082C28.1111 21.7357 21.8241 28.0001 14.0687 28.0001C6.31335 28.0001 0.0263672 21.7357 0.0263672 14.0082C0.0263672 6.28072 6.31335 0.0163574 14.0687 0.0163574C21.8241 0.0163574 28.1111 6.28072 28.1111 14.0082ZM7.04755 14.0082C7.04755 17.872 10.191 21.0041 14.0687 21.0041C17.9464 21.0041 21.0899 17.872 21.0899 14.0082C21.0899 10.1445 17.9464 7.01229 14.0687 7.01229C10.191 7.01229 7.04755 10.1445 7.04755 14.0082Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M14.0647 -0.000102525C14.0941 -0.000102525 14.1235 -1.09727e-05 14.1529 0.00017404L14.1032 6.99628C14.0885 6.99619 14.0738 6.99614 14.0591 6.99614L14.0647 -0.000102525Z"
                                    fill="#60B527"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          {/* Quiz Section */}
                          <div className="flex justify-between mt-4">
                            {/* Video */}
                            <div className="flex gap-4">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 28 28"
                                  fill="none"
                                >
                                  <path
                                    d="M13.9552 3.198C5.88807 3.198 3.19824 5.88782 3.19824 13.955C3.19824 22.0221 5.88807 24.712 13.9552 24.712C22.0224 24.712 24.7122 22.0221 24.7122 13.955"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M22.7092 5.0005C22.4346 4.75755 22.1147 4.5711 21.7679 4.45182C21.4212 4.33255 21.0543 4.28277 20.6883 4.30534C20.3223 4.32791 19.9643 4.42239 19.6348 4.58337C19.3054 4.74436 19.0108 4.96869 18.7681 5.24355C18.7681 5.24355 13.6873 10.9825 11.9278 12.9746C10.1683 14.9667 11.4627 17.7158 11.4627 17.7158C11.4627 17.7158 14.37 18.638 16.1143 16.6692L22.9593 8.9393C23.4484 8.3838 23.6968 7.65677 23.6499 6.91812C23.603 6.17948 23.2646 5.4897 22.7092 5.0005Z"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M17.4541 6.74609L21.6406 10.4477"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="grid video-info">
                                <span className="video-title">
                                  Importance of Security
                                </span>
                                <span className="video-duration">
                                  Quiz -3 questions
                                </span>
                              </div>
                            </div>
                            <div className="watch-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="28"
                                viewBox="0 0 29 28"
                                fill="none"
                              >
                                <g opacity="0.6">
                                  <path
                                    d="M28.1111 14.0082C28.1111 21.7357 21.8241 28.0001 14.0687 28.0001C6.31335 28.0001 0.0263672 21.7357 0.0263672 14.0082C0.0263672 6.28072 6.31335 0.0163574 14.0687 0.0163574C21.8241 0.0163574 28.1111 6.28072 28.1111 14.0082ZM7.04755 14.0082C7.04755 17.872 10.191 21.0041 14.0687 21.0041C17.9464 21.0041 21.0899 17.872 21.0899 14.0082C21.0899 10.1445 17.9464 7.01229 14.0687 7.01229C10.191 7.01229 7.04755 10.1445 7.04755 14.0082Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M14.0647 -0.000102525C14.0941 -0.000102525 14.1235 -1.09727e-05 14.1529 0.00017404L14.1032 6.99628C14.0885 6.99619 14.0738 6.99614 14.0591 6.99614L14.0647 -0.000102525Z"
                                    fill="#60B527"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-group accordion-group-bordered mt-4">
                  <div className="accordion">
                    <input
                      type="checkbox"
                      id="toggle-8"
                      className="accordion-toggle"
                    />
                    {/* Header */}
                    <div className="flex items-center  pl-4 gap-4 session-header">
                      <label htmlFor="toggle-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10.0312 7.05249V13.0092"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.0131 10.031H7.0498"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.91699 10.0309C1.91699 3.94592 3.94616 1.91675 10.0312 1.91675C16.1162 1.91675 18.1453 3.94592 18.1453 10.0309C18.1453 16.1159 16.1162 18.1451 10.0312 18.1451C3.94616 18.1451 1.91699 16.1159 1.91699 10.0309Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </label>
                      <label htmlFor="toggle-8" className="accordion-title">
                        Data and Account Security
                      </label>
                    </div>
                    {/* Content */}
                    <div className="accordion-content text-content2">
                      <div className="min-h-0 session-content">
                        <div className="course-session-content">
                          <div className="flex justify-between">
                            {/* Video */}
                            <div className="flex gap-4">
                              <div>
                                <img src={videoIcon} alt="video" />
                              </div>
                              <div className="grid video-info">
                                <span className="video-title">
                                  Data and Account Security
                                </span>
                                <span className="video-duration">
                                  Video - 13 Min
                                </span>
                              </div>
                            </div>
                            <div className="watch-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="28"
                                viewBox="0 0 29 28"
                                fill="none"
                              >
                                <g opacity="0.6">
                                  <path
                                    d="M28.1111 14.0082C28.1111 21.7357 21.8241 28.0001 14.0687 28.0001C6.31335 28.0001 0.0263672 21.7357 0.0263672 14.0082C0.0263672 6.28072 6.31335 0.0163574 14.0687 0.0163574C21.8241 0.0163574 28.1111 6.28072 28.1111 14.0082ZM7.04755 14.0082C7.04755 17.872 10.191 21.0041 14.0687 21.0041C17.9464 21.0041 21.0899 17.872 21.0899 14.0082C21.0899 10.1445 17.9464 7.01229 14.0687 7.01229C10.191 7.01229 7.04755 10.1445 7.04755 14.0082Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M14.0647 -0.000102525C14.0941 -0.000102525 14.1235 -1.09727e-05 14.1529 0.00017404L14.1032 6.99628C14.0885 6.99619 14.0738 6.99614 14.0591 6.99614L14.0647 -0.000102525Z"
                                    fill="#60B527"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          {/* Quiz Section */}
                          <div className="flex justify-between mt-4">
                            {/* Video */}
                            <div className="flex gap-4">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 28 28"
                                  fill="none"
                                >
                                  <path
                                    d="M13.9552 3.198C5.88807 3.198 3.19824 5.88782 3.19824 13.955C3.19824 22.0221 5.88807 24.712 13.9552 24.712C22.0224 24.712 24.7122 22.0221 24.7122 13.955"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M22.7092 5.0005C22.4346 4.75755 22.1147 4.5711 21.7679 4.45182C21.4212 4.33255 21.0543 4.28277 20.6883 4.30534C20.3223 4.32791 19.9643 4.42239 19.6348 4.58337C19.3054 4.74436 19.0108 4.96869 18.7681 5.24355C18.7681 5.24355 13.6873 10.9825 11.9278 12.9746C10.1683 14.9667 11.4627 17.7158 11.4627 17.7158C11.4627 17.7158 14.37 18.638 16.1143 16.6692L22.9593 8.9393C23.4484 8.3838 23.6968 7.65677 23.6499 6.91812C23.603 6.17948 23.2646 5.4897 22.7092 5.0005Z"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M17.4541 6.74609L21.6406 10.4477"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="grid video-info">
                                <span className="video-title">
                                  Data and Account Security
                                </span>
                                <span className="video-duration">
                                  Quiz -3 questions
                                </span>
                              </div>
                            </div>
                            <div className="watch-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="28"
                                viewBox="0 0 29 28"
                                fill="none"
                              >
                                <g opacity="0.6">
                                  <path
                                    d="M28.1111 14.0082C28.1111 21.7357 21.8241 28.0001 14.0687 28.0001C6.31335 28.0001 0.0263672 21.7357 0.0263672 14.0082C0.0263672 6.28072 6.31335 0.0163574 14.0687 0.0163574C21.8241 0.0163574 28.1111 6.28072 28.1111 14.0082ZM7.04755 14.0082C7.04755 17.872 10.191 21.0041 14.0687 21.0041C17.9464 21.0041 21.0899 17.872 21.0899 14.0082C21.0899 10.1445 17.9464 7.01229 14.0687 7.01229C10.191 7.01229 7.04755 10.1445 7.04755 14.0082Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M14.0647 -0.000102525C14.0941 -0.000102525 14.1235 -1.09727e-05 14.1529 0.00017404L14.1032 6.99628C14.0885 6.99619 14.0738 6.99614 14.0591 6.99614L14.0647 -0.000102525Z"
                                    fill="#60B527"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-group accordion-group-bordered mt-4">
                  <div className="accordion">
                    <input
                      type="checkbox"
                      id="toggle-9"
                      className="accordion-toggle"
                    />
                    {/* Header */}
                    <div className="flex items-center  pl-4 gap-4 session-header">
                      <label htmlFor="toggle-9">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10.0312 7.05249V13.0092"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.0131 10.031H7.0498"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.91699 10.0309C1.91699 3.94592 3.94616 1.91675 10.0312 1.91675C16.1162 1.91675 18.1453 3.94592 18.1453 10.0309C18.1453 16.1159 16.1162 18.1451 10.0312 18.1451C3.94616 18.1451 1.91699 16.1159 1.91699 10.0309Z"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </label>
                      <label htmlFor="toggle-9" className="accordion-title">
                        Passwords
                      </label>
                    </div>
                    {/* Content */}
                    <div className="accordion-content text-content2">
                      <div className="min-h-0 session-content">
                        <div className="course-session-content">
                          <div className="flex justify-between">
                            {/* Video */}
                            <div className="flex gap-4">
                              <div>
                                <img src={videoIcon} alt="video" />
                              </div>
                              <div className="grid video-info">
                                <span className="video-title">Passwords</span>
                                <span className="video-duration">
                                  Video - 13 Min
                                </span>
                              </div>
                            </div>
                            <div className="watch-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="28"
                                viewBox="0 0 29 28"
                                fill="none"
                              >
                                <g opacity="0.6">
                                  <path
                                    d="M28.1111 14.0082C28.1111 21.7357 21.8241 28.0001 14.0687 28.0001C6.31335 28.0001 0.0263672 21.7357 0.0263672 14.0082C0.0263672 6.28072 6.31335 0.0163574 14.0687 0.0163574C21.8241 0.0163574 28.1111 6.28072 28.1111 14.0082ZM7.04755 14.0082C7.04755 17.872 10.191 21.0041 14.0687 21.0041C17.9464 21.0041 21.0899 17.872 21.0899 14.0082C21.0899 10.1445 17.9464 7.01229 14.0687 7.01229C10.191 7.01229 7.04755 10.1445 7.04755 14.0082Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M14.0647 -0.000102525C14.0941 -0.000102525 14.1235 -1.09727e-05 14.1529 0.00017404L14.1032 6.99628C14.0885 6.99619 14.0738 6.99614 14.0591 6.99614L14.0647 -0.000102525Z"
                                    fill="#60B527"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          {/* Quiz Section */}
                          <div className="flex justify-between mt-4">
                            {/* Video */}
                            <div className="flex gap-4">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="28"
                                  height="28"
                                  viewBox="0 0 28 28"
                                  fill="none"
                                >
                                  <path
                                    d="M13.9552 3.198C5.88807 3.198 3.19824 5.88782 3.19824 13.955C3.19824 22.0221 5.88807 24.712 13.9552 24.712C22.0224 24.712 24.7122 22.0221 24.7122 13.955"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M22.7092 5.0005C22.4346 4.75755 22.1147 4.5711 21.7679 4.45182C21.4212 4.33255 21.0543 4.28277 20.6883 4.30534C20.3223 4.32791 19.9643 4.42239 19.6348 4.58337C19.3054 4.74436 19.0108 4.96869 18.7681 5.24355C18.7681 5.24355 13.6873 10.9825 11.9278 12.9746C10.1683 14.9667 11.4627 17.7158 11.4627 17.7158C11.4627 17.7158 14.37 18.638 16.1143 16.6692L22.9593 8.9393C23.4484 8.3838 23.6968 7.65677 23.6499 6.91812C23.603 6.17948 23.2646 5.4897 22.7092 5.0005Z"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M17.4541 6.74609L21.6406 10.4477"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="grid video-info">
                                <span className="video-title">Passwords</span>
                                <span className="video-duration">
                                  Quiz -3 questions
                                </span>
                              </div>
                            </div>
                            <div className="watch-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="28"
                                viewBox="0 0 29 28"
                                fill="none"
                              >
                                <g opacity="0.6">
                                  <path
                                    d="M28.1111 14.0082C28.1111 21.7357 21.8241 28.0001 14.0687 28.0001C6.31335 28.0001 0.0263672 21.7357 0.0263672 14.0082C0.0263672 6.28072 6.31335 0.0163574 14.0687 0.0163574C21.8241 0.0163574 28.1111 6.28072 28.1111 14.0082ZM7.04755 14.0082C7.04755 17.872 10.191 21.0041 14.0687 21.0041C17.9464 21.0041 21.0899 17.872 21.0899 14.0082C21.0899 10.1445 17.9464 7.01229 14.0687 7.01229C10.191 7.01229 7.04755 10.1445 7.04755 14.0082Z"
                                    fill="#D9D9D9"
                                  />
                                  <path
                                    d="M14.0647 -0.000102525C14.0941 -0.000102525 14.1235 -1.09727e-05 14.1529 0.00017404L14.1032 6.99628C14.0885 6.99619 14.0738 6.99614 14.0591 6.99614L14.0647 -0.000102525Z"
                                    fill="#60B527"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
