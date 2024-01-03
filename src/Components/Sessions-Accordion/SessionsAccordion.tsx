import "./SessionsAccordion.scss";
import videoIcon from "../../Pages/Courses-Details/Assets/Icons/video.svg";
import { useNavigate } from "react-router-dom";

type SessionsAccordionProps = {
  sessionId: number;
  title: string;
};
export const SessionsAccordion = (props: SessionsAccordionProps) => {
  const navigate = useNavigate();
  const routeToCourse = () => {
    navigate("watch");
  };
  return (
    <div className="SessionsAccordion">
      <div className="accordion-group accordion-group-bordered mt-4">
        <div className="accordion">
          <input
            type="checkbox"
            id={`toggle-${props.sessionId}`}
            className="accordion-toggle"
          />
          {/* Header */}
          <div className="flex items-center pl-4 gap-4 session-header">
            <label htmlFor={`toggle-${props.sessionId}`}>
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
            <label
              htmlFor={`toggle-${props.sessionId}`}
              className="accordion-title"
            >
              {props.title}
            </label>
          </div>
          {/* Content */}
          <div className="accordion-content text-content2">
            <div className="min-h-0 session-content">
              This module will introduce you to security awareness basics. We
              will discuss the importance of and review the components of
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
                  <div className="letsStart" onClick={() => routeToCourse()}>
                    Let’s Start
                  </div>
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
    </div>
  );
};
