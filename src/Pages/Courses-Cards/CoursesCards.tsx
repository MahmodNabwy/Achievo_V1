import { StarsRating } from "../../Components/StarsRating/StarsRating";
import "./CoursesCards.scss";
type CoursesCardsProps = {};
export const CoursesCards = (props: CoursesCardsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="row-span-1 CoursesCards">
        <div className="row-span-1" style={{ display: "contents" }}>
          <div className="box">
            <div className="rectangle" />
          </div>
          <div className="data-container">
            <h3>Security Awareness Training</h3>
            <div className="course-details">
              <span className="create-date">Created Date: 05-08-2023</span>
              <StarsRating />
            </div>
          </div>
          <div className="frame"></div>
        </div>
      </div>
      <div className="row-span-1 CoursesCards">Card Here</div>
      <div className="row-span-1 CoursesCards">Card Here</div>
      <div className="row-span-1 CoursesCards">Card Here</div>
    </div>
  );
};
