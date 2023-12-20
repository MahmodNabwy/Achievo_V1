import { GoBackHeader } from "../../Components/GoBackHeader/GoBackHeader";
import { StarsRating } from "../../Components/StarsRating/StarsRating";
import courseCover from "../Courses-Cards/Assets/images/Rectangle 531.png";
import ProgressLine from "../../Components/Statistics/Courses/ProgressLine";
import videoIcon from "./Assets/Icons/video.svg";
import "./CorusesDetails.scss";
import { LineProgress } from "../../Components/LineProgress/LineProgress";
export const CoursesDetails = () => {
  return (
    <div className="CoursesDetails">
      <GoBackHeader />
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-9 pr-10 pl-10">
        {/* Course-Information */}
        <div className="sm:col-start-1 lg:col-start-1">
          <div className="course-informations">
            <span className="course-name">Security Awareness Training</span>
            <span className="created-date">Created Date: 05-05-2023</span>
            <StarsRating />
            <div className="department">HR</div>
            <div className="flex gap-4 pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M24.7122 13.955C24.7122 16.0825 24.0813 18.1623 22.8993 19.9312C21.7173 21.7002 20.0373 23.079 18.0717 23.8931C16.1062 24.7073 13.9433 24.9203 11.8566 24.5053C9.76999 24.0902 7.85328 23.0657 6.34889 21.5613C4.8445 20.0569 3.82 18.1402 3.40494 16.0536C2.98988 13.9669 3.2029 11.804 4.01707 9.83846C4.83124 7.87288 6.20999 6.19287 7.97897 5.01088C9.74794 3.82888 11.8277 3.198 13.9552 3.198C16.8082 3.198 19.5442 4.33132 21.5616 6.34864C23.5789 8.36597 24.7122 11.102 24.7122 13.955Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.8286 14.847L13.5605 14.7609V9.12427"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="course-hours">1 Hour, 57 Minutes</div>
            </div>
            <div className="flex justify-between pt-4">
              <div className="flex gap-4">
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
                <span className="course-lang">English, Arabic</span>
              </div>
              {/* Course Badge */}
              <div className="flex gap-4 pr-16">
                <div className="badge"></div>
                <div className="percentage">100%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Cover */}
        <div className="sm:col-start-1 lg:col-start-2">
          <div className="course-cover">
            <img src={courseCover} className="cover" alt="cover" />
          </div>
        </div>
        {/* Line Progress */}
        <div className="col-span-full">
          <LineProgress value={100} />
        </div>
        {/* Expand All , Collapse All */}
        <div className="col-span-full">
          <div className="flex pl-6 gap-8 mt-4">
            {/* Expand All */}
            <div className="flex items-center gap-4">
              <div className="option">Expand All</div>
              <div>
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
              </div>
            </div>
            {/* Collapse All */}
            <div className="flex items-center gap-4">
              <div className="option">Collapse All</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
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
              </div>
            </div>
          </div>
        </div>
        {/* Course Sessions */}
        <div className="col-start-1 pl-4">
          <div className="accordion-group accordion-group-bordered mt-4">
            <div className="accordion">
              <input
                type="checkbox"
                id="toggle-7"
                className="accordion-toggle"
              />
              {/* Header */}
              <div className="flex items-center pl-4 gap-4 session-header">
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
                  This module will introduce you to security awareness basics.
                  We will discuss the importance of and review the components of
                  security. We will conclude the module by examining hackers and
                  what they target.
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
                          <span className="video-duration">Video - 13 Min</span>
                        </div>
                      </div>
                      <div className="letsStart">Let’s Start</div>
                    </div>

                    <div className="flex justify-between mt-4">
                      {/* Video */}
                      <div className="flex gap-4">
                        <div>
                          <img src={videoIcon} alt="video" />
                        </div>
                        <div className="grid video-info">
                          <span className="video-title">
                            Importance of Security
                          </span>
                          <span className="video-duration">Video - 13 Min</span>
                        </div>
                      </div>
                      <div className="letsStart">Let’s Start</div>
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
              <div className="flex items-center pl-4 gap-4 session-header">
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
                  Importance of Security
                </label>
              </div>
              <div className="accordion-content text-content2">
                <div className="min-h-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  necessitatibus iusto laborum autem placeat aspernatur
                  inventore eius deleniti reprehenderit? Numquam commodi totam
                  mollitia quod
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
              <div className="flex items-center pl-4 gap-4 session-header">
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
                  Importance of Security
                </label>
              </div>
              <div className="accordion-content text-content2">
                <div className="min-h-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  necessitatibus iusto laborum autem placeat aspernatur
                  inventore eius deleniti reprehenderit? Numquam commodi totam
                  mollitia quod
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About The Course */}
        <div className="col-start-2">
          <div className="about-course">
            <span className="about-title">About this Course</span>
            <div className="content">
              The security of an organization is of the utmost importance and
              every member of the organization's staff plays a vital role in
              defending against cyber threats. One of the best ways to protect
              the organization is to institute a company-wide security-awareness
              training initiative. This course is a complete foundational
              security awareness training program that covers a wide array of
              topics for nearly every type of end-user and learner level. The
              content is designed to allow organizations to be able to provide a
              comprehensive training program to help them protect their
              information assets against threats. This training lasts
              approximately 2 hours and was designed to be engaging and is based
              on real scenarios staff may face. The training is modular and does
              not have to be completed in one sitting. Topics included in this
              course are as follows: • Importance of Security • Data and Account
              Security • Passwords • Networking and Mobile Security • Malware •
              Social Engineering
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
