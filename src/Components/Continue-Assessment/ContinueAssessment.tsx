import { useNavigate } from "react-router-dom";
import { GoBackHeader } from "../GoBackHeader/GoBackHeader";
import "./ContinueAssessment.scss";
import { CircularProgressbar } from "react-circular-progressbar";
export const ContinueAssessment = () => {
  const navigate = useNavigate();
  return (
    <div className="ContinueAssessment">
      <GoBackHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-16 pr-16 pb-9">
        <div className="col-span-full">
          <h3 className="flex justify-start title">Personality Test</h3>
        </div>
        {/* Center Div */}
        <div className="col-span-full">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 content">
              {/* Close Icon */}
              <div className="col-span-full">
                <div className="flex justify-end items-center">
                  <svg
                    onClick={() => navigate(-1)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <path
                      d="M29.9872 19.9895L20.0039 29.9728"
                      stroke="#DA1515"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30 29.9854L20 19.9854"
                      stroke="#DA1515"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.72852 25C5.72852 39.452 10.5473 44.2708 24.9994 44.2708C39.4514 44.2708 44.2702 39.452 44.2702 25C44.2702 10.5479 39.4514 5.72913 24.9994 5.72913C10.5473 5.72913 5.72852 10.5479 5.72852 25Z"
                      stroke="#DA1515"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/* Question Title */}
              <div className="col-span-full pl-4 pr-4 mt-4">
                <div className="flex">
                  <p className="question-title">
                    5. You spend a lot of your free time exploring various
                    random topics that pique your interest.
                  </p>
                </div>
                <div className="divider"></div>
              </div>
              {/* Question Choices */}
              <div className="col-span-full mt-6">
                <div className="flex justify-center items-center">
                  <div className="flex gap-4">
                    <h2 className="agree">Agree</h2>
                    {/* Choices */}
                    <div className="circles flex gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="253"
                        height="34"
                        viewBox="0 0 253 34"
                        fill="none"
                      >
                        <circle
                          cx="126.5"
                          cy="17.5"
                          r="11"
                          stroke="black"
                          stroke-width="3"
                          fill="#60B527"
                        />
                        <circle
                          cx="160"
                          cy="17"
                          r="12.5"
                          stroke="black"
                          stroke-width="3"
                        />
                        <circle
                          cx="93"
                          cy="17"
                          r="12.5"
                          stroke="black"
                          stroke-width="3"
                        />
                        <circle
                          cx="196.5"
                          cy="17.5"
                          r="14"
                          stroke="black"
                          stroke-width="3"
                        />
                        <circle
                          cx="56.5"
                          cy="17.5"
                          r="14"
                          stroke="black"
                          stroke-width="3"
                        />
                        <circle
                          cx="17"
                          cy="17"
                          r="15.5"
                          stroke="black"
                          stroke-width="3"
                        />
                        <circle
                          cx="236"
                          cy="17"
                          r="15.5"
                          stroke="black"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <h2 className="agree">Disagree</h2>
                  </div>
                </div>
              </div>
              {/* Actions */}
              <div className="col-span-full mt-16">
                <div className="flex  justify-between items-center  gap-8 p-4">
                  {/* Back Button */}

                  <div className="actions flex gap-4 items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M25.834 31.6667C25.834 31.6667 14.1673 24.76 14.1673 20C14.1673 15.24 25.834 8.33337 25.834 8.33337"
                          stroke="white"
                          stroke-width="3"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="back">Back</span>
                  </div>
                  {/* Cricular Progress */}
                  <div>
                    <div style={{ width: "80px", height: "75px" }}>
                      <CircularProgressbar
                        strokeWidth={14}
                        value={50}
                        text={`50%`}
                        minValue={10}
                        styles={{
                          path: {
                            stroke: "#2dad1d",

                            height: "100%",
                          },
                          trail: {
                            stroke: "#EAEAEB",
                            fill: "red",
                          },
                          text: {
                            // Text color
                            fill: "#000",
                            // Text size
                            fontSize: "1.5rem",
                            fontWeight: "700",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            background: "red",
                          },
                        }}
                      />
                    </div>
                  </div>
                  {/* IF Users Answer All Question return submit button else return next button */}
                  {/* Next Button */}
                  {/* <div className="actions flex gap-4 justify-end items-center">
                    <span className="back">Next</span>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M14.166 8.33329C14.166 8.33329 25.8327 15.24 25.8327 20C25.8327 24.76 14.166 31.6666 14.166 31.6666"
                          stroke="white"
                          stroke-width="3"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div> */}
                  {/* Submit Button */}
                  <div
                    className="flex submit gap-4 items-center"
                    onClick={() => navigate("AssessmentFinished")}
                  >
                    Submit
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
