import { GoBackHeader } from "../../Components/GoBackHeader/GoBackHeader";
import { StarsRating } from "../../Components/StarsRating/StarsRating";
import courseCover from "../Courses-Cards/Assets/images/Rectangle 531.png";
import ProgressLine from "../../Components/Statistics/Courses/ProgressLine";

import "./CorusesDetails.scss";
import { LineProgress } from "../../Components/LineProgress/LineProgress";
export const CoursesDetails = () => {
  return (
    <div className="CoursesDetails">
      <GoBackHeader />
      <div className="grid grid-cols-2">
        {/* Course-Information */}
        <div className="col-start-1">
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
        <div className="col-start-2">
          <div className="course-cover">
            <img src={courseCover} className="cover" alt="cover" />
          </div>
        </div>
        <div className="col-span-full">
          <LineProgress value={100} />
        </div>

        <div className="col-start-1 pl-4">Course Sessions</div>
        <div className="col-start-2">About This Course</div>
      </div>
    </div>
  );
};
