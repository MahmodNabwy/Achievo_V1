import "./QuizSummary.scss";
import badgeIcon from "../Assets/images/980659aa45c22d694c64401a140d43ad.png";
import { LineProgress } from "../../LineProgress/LineProgress";
import ProgressLine from "../../Statistics/Courses/ProgressLine";
import { StarsRating } from "../../StarsRating/StarsRating";
import pdfIcon from "../Assets/images/pdf 1.png";
import { useNavigate, redirect } from "react-router-dom";

export const QuizSummary = () => {
  const navigate = useNavigate();
  return (
    <div className="QuizSummary">
      <div className="grid grid-cols-1 pb-4">
        {/* Title */}
        <div className="quiz-title">Quiz Summary</div>
        <div className="flex justify-center">
          <div className="badge">
            <img src={badgeIcon} alt="badge" className="badge-img" />
          </div>
        </div>
        {/* Congrats */}
        <div className="flex justify-center congrats">Congratulations</div>
        {/* Attemps */}
        <div className="statistics pl-5">
          <span className="attemps">Attemps:1</span>
          <span className="attemps">To Pass : 80% or heigher</span>
        </div>
        {/* Progress Line */}
        <div className="col-span-full pr-4 pl-4">
          <ProgressLine value={100} />
        </div>
        <div className="col-span-full pr-4">
          <div className="flex justify-end ">
            <span className="percentage">100%</span>
          </div>
        </div>
        {/* Stars Rating */}
        <div className="col-span-full mt-4 flex justify-center">
          <StarsRating />
        </div>
        <div className="col-span-full flex justify-center">
          <span className="rate">Please Rate</span>
        </div>
        <div className="col-span-full pl-5 pr-5">
          <div className="divider"></div>
        </div>

        <div className="col-span-full pl-5 pr-5 flex justify-between items-center">
          <div className="certificate flex items-center gap-4">
            <div>
              <img src={pdfIcon} alt="pdf-icon" />
            </div>
            <a href="#" className="view">
              View Certificate
            </a>
          </div>
          <div className="goBack" onClick={() => navigate(-2)}>
            Back To Courses
          </div>
        </div>
      </div>
    </div>
  );
};
