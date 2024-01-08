import { useNavigate } from "react-router-dom";
import { GoBackHeader } from "../GoBackHeader/GoBackHeader";
import "./AssessmentCompleted.scss";
import { CircularProgressbar } from "react-circular-progressbar";
export const AssessmentCompleted = () => {
  const navigate = useNavigate();
  return (
    <div className="AssessmentCompleted">
      <GoBackHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-16 pr-16 pb-16">
        <div className="col-span-full">
          <h3 className="flex justify-start title">Personality Test</h3>
        </div>
        {/* Center Div */}
        <div className="col-span-full">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 content">
              <div className="col-span-full mt-4">
                <div className="flex justify-center">
                  <div className="grid">
                    <p className="thank-you">Thank You</p>

                    <h1 className="completed-txt">Assessment Completed</h1>
                  </div>
                </div>
              </div>

              <div className="col-span-full pl-4 pr-4">
                <div className="divider"></div>
              </div>
              <div className="col-span-full">
                <div className="grid grid-cols-2  ">
                  <div className="col-start-1">
                    <div className="grid pl-4">
                      <h1 className="info">Assessment Information</h1>
                      <div>
                        <span className="name">
                          Attempts :<span className="data">1 time</span>
                        </span>
                      </div>
                      <div>
                        <span className="name">
                          To Pass :<span className="data">No percentagee</span>
                        </span>
                      </div>
                      <div>
                        <span className="name">
                          No. Questions :<span className="data">3/6</span>
                        </span>
                      </div>
                      <div>
                        <span className="name">
                          Certificate :<span className="data"> No</span>
                        </span>
                      </div>
                      <div>
                        <span className="name">
                          Show Results :<span className="data"> No</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Cricural Progress */}
                  <div className="col-start-2 flex justify-end items-center pl-4 pr-4">
                    <div style={{ width: "100px", height: "95px" }}>
                      <CircularProgressbar
                        strokeWidth={14}
                        value={100}
                        text={`100%`}
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

                  <div className="col-span-full mt-4">
                    <div className="flex justify-end">
                      <div
                        className="backAssessments"
                        onClick={() => navigate(-3)}
                      >
                        Back To Assessments
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
