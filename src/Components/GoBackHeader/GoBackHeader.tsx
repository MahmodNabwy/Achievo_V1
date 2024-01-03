import "./GoBackHeader.scss";
import { useNavigate, redirect } from "react-router-dom";

export const GoBackHeader = () => {
  const navigate = useNavigate();
  const routeToCourses = () => {
    navigate(-1);
  };
  return (
    <div className="GoBackHeader">
      <div onClick={() => routeToCourses()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
        >
          <path
            d="M9.02539 17.0955C9.02539 17.0955 0.884973 12.2764 0.884973 8.95511C0.884973 5.63382 9.02539 0.814697 9.02539 0.814697"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
