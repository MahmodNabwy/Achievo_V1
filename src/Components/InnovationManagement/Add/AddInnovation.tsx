import { useState } from "react";
import "./AddInnovation.scss";
import { Business } from "./Modules/Business";
import { Stakeholders } from "./Modules/Stakeholders";
import { CurrentCondition } from "./Modules/CurrentCondition";
import { Analysis } from "./Modules/Analysis";
export const AddInnovation = () => {
  const [title, setTitle] = useState("");
  const [currentModule, setCurrentModule] = useState(1);
  const [titleSubmited, submitTitle] = useState(false);

  const submitInnovationTitle = () => {
    if (title !== "") {
      submitTitle(true);
    }
  };
  const handleChangeInnovationSubject = (value: string) => {
    setTitle(value);
  };

  return (
    <div className="AddInnovation col-span-full">
      {/* Steps Header */}
      <div className="header">
        {/* Step No 1 */}
        <div className="flex items-center w-full mt-4">
          <div
            className={`w-7 h-7 shrink-0 mx-[-1px] ${
              titleSubmited === true ? "circle-approved" : "circle"
            } p-1.5 flex items-center justify-center rounded-full`}
          >
            <span className="step-no-approved">1</span>
          </div>
          <div
            className={`w-full h-2 mx-4 rounded-lg ${
              currentModule > 1 ? "circle-approved" : "circle"
            }`}
          />
        </div>

        {/* Step No 2 */}
        <div className="flex items-center w-full mt-4">
          <div
            className={`w-7 h-7 shrink-0 mx-[-1px] ${
              currentModule >= 2 ? "circle-approved" : "circle"
            } p-1.5 flex items-center justify-center rounded-full`}
          >
            <span className="step-no-approved">2</span>
          </div>
          <div
            className={`w-full h-2 mx-4 rounded-lg ${
              currentModule > 2 ? "circle-approved" : "circle"
            }`}
          />
        </div>
        {/* Step No 3 */}
        <div className="flex items-center w-full mt-4">
          <div
            className={`w-7 h-7 shrink-0 mx-[-1px] ${
              currentModule >= 3 ? "circle-approved" : "circle"
            } p-1.5 flex items-center justify-center rounded-full`}
          >
            <span className="step-no-approved">3</span>
          </div>
          <div
            className={`w-full h-2 mx-4 rounded-lg ${
              currentModule > 3 ? "circle-approved" : "circle"
            }`}
          />
        </div>

        {/* Step No 4 */}
        <div className="flex items-center w-full mt-4">
          <div
            className={`w-7 h-7 shrink-0 mx-[-1px] ${
              currentModule >= 4 ? "circle-approved" : "circle"
            } p-1.5 flex items-center justify-center rounded-full`}
          >
            <span className="step-no-approved">4</span>
          </div>
          <div
            className={`w-full h-2 mx-4 rounded-lg ${
              currentModule > 4 ? "circle-approved" : "circle"
            }`}
          />
        </div>

        {/* Step No 5 */}
        <div className="flex items-center w-full mt-4">
          <div
            className={`w-7 h-7 shrink-0 mx-[-1px] ${
              currentModule >= 5 ? "circle-approved" : "circle"
            } p-1.5 flex items-center justify-center rounded-full`}
          >
            <span className="step-no-approved">5</span>
          </div>
          <div
            className={`w-full h-2 mx-4 rounded-lg ${
              currentModule > 5 ? "circle-approved" : "circle"
            }`}
          />
        </div>

        {/* Step No 6 */}
        <div className="flex items-center w-full mt-4">
          <div
            className={`w-7 h-7 shrink-0 mx-[-1px] ${
              currentModule >= 6 ? "circle-approved" : "circle"
            } p-1.5 flex items-center justify-center rounded-full`}
          >
            <span className="step-no-approved">6</span>
          </div>
          <div
            className={`w-full h-2 mx-4 rounded-lg ${
              currentModule > 6 ? "circle-approved" : "circle"
            }`}
          />
        </div>

        {/* Step No 7 */}
        <div className="flex items-center w-full mt-4">
          <div
            className={`w-7 h-7 shrink-0 mx-[-1px] ${
              currentModule >= 7 ? "circle-approved" : "circle"
            } p-1.5 flex items-center justify-center rounded-full`}
          >
            <span className="step-no-approved">7</span>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="Draft transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Draft
          </div>
          <div className="Publish transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Publish
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="content grid grid-cols-2 mt-4">
        {/* Innovation Subject */}
        <div className="col-start-1 pl-10 mt-4">
          {titleSubmited === true ? (
            <div className="flex items-center gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M10.6543 21.2538H24.6441"
                    stroke="black"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.64648 11.375C3.64648 7.81083 5.4694 4.75271 8.92857 4.04396C11.6802 3.27209 14.6185 3.5255 17.1973 4.75708C19.3848 5.93541 18.7563 7.67375 21.0007 8.94979C23.245 10.2258 26.8588 8.30812 29.2184 10.8544C31.6888 13.5202 31.6757 17.6108 31.6757 20.2198C31.6757 30.1365 26.1238 30.9167 17.6611 30.9167C9.19836 30.9167 3.64648 30.2298 3.64648 20.2183V11.375Z"
                    stroke="black"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 className="innovation-title">{title}</h1>
            </div>
          ) : (
            <div className="form-control relative w-1/2">
              <input
                type="email"
                className="input input-lg max-w-full search-input"
                placeholder="Type Innovation Subject"
                value={title}
                onChange={(e) => handleChangeInnovationSubject(e.target.value)}
              />

              <span className="absolute  inset-y-0 left-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M10.6543 21.2539H24.6441"
                    stroke="#ABABAB"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.64648 11.3751C3.64648 7.81095 5.4694 4.75283 8.92857 4.04408C11.6802 3.27221 14.6185 3.52562 17.1973 4.7572C19.3848 5.93554 18.7563 7.67387 21.0007 8.94991C23.245 10.226 26.8588 8.30824 29.2184 10.8545C31.6888 13.5203 31.6757 17.611 31.6757 20.2199C31.6757 30.1366 26.1238 30.9168 17.6611 30.9168C9.19836 30.9168 3.64648 30.2299 3.64648 20.2185V11.3751Z"
                    stroke="#ABABAB"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          )}
        </div>
        {titleSubmited === true ? null : (
          <div className="col-start-2 pr-10 mt-4 flex justify-end">
            <button
              type="submit"
              className="submit-title"
              onClick={() => submitInnovationTitle()}
            >
              Submit
            </button>
          </div>
        )}
        {/* Divider */}
        <div className="col-span-full pl-10 pr-10">
          <div className="divider"></div>
        </div>

        {/* Modules */}
        <div className="col-span-full">
          {currentModule === 1 ? (
            <Business />
          ) : currentModule === 2 ? (
            <Stakeholders />
          ) : currentModule === 3 ? (
            <CurrentCondition />
          ) : (
            <Analysis />
          )}
        </div>
      </div>
      {/* Actions */}
      {titleSubmited === true ? (
        <div className="mt-4 pl-10 grid grid-cols-2">
          <div>
            {/* Back Button */}
            {currentModule === 1 ? null : (
              <button
                type="submit"
                className="actions flex gap-4 items-center"
                onClick={() => setCurrentModule(currentModule - 1)}
              >
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
              </button>
            )}
          </div>

          <div className="flex justify-end pr-4">
            {/* Next Button */}
            <button
              type="button"
              className="actions flex gap-4 justify-end items-center"
              onClick={() => setCurrentModule(currentModule + 1)}
            >
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
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
