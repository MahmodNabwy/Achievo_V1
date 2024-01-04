import { CircularProgressbar } from "react-circular-progressbar";
import { GoBackHeader } from "../GoBackHeader/GoBackHeader";
import "./AssessmentDetails.scss";
export const AssessmentDetails = () => {
  return (
    <div className="AssessmentDetails">
      <GoBackHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-16 pr-16">
        <div className="col-span-full">
          <h3 className="flex justify-start title">Personality Test</h3>
        </div>
        {/* Center Div */}
        <div className="col-span-full">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 content">
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
              {/* Divider */}
              <div className="col-span-full pl-4 pr-4">
                <div className="divider"></div>
              </div>

              <div className="col-start-1 pl-4">
                <h1 className="info">Assessment Description</h1>
              </div>
              <div className="col-span-full pl-4">
                <span className="description">
                  A personality test is a tool used to assess and measure
                  various aspects of an individual's personality, including
                  traits, behaviors, attitudes, and values. These tests may be
                  used for various purposes, such as self-discovery, career
                  planning, or psychological diagnosis. Personality tests can be
                  administered in various forms, such as questionnaires,
                  interviews, or observation-based assessments, and they may be
                  based on different theoretical frameworks, such as the Big
                  Five personality traits, Myers-Briggs Type Indicator, or the
                  Enneagram. The results of a personality test can provide
                  insights into an individual's strengths, weaknesses, and
                  potential areas for growth or development.
                </span>
              </div>
              <div className="col-span-full">
                <div className="flex justify-end">
                  <div className="continue">Continue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
