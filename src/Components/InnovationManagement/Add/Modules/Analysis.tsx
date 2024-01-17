import { useDispatch, useSelector } from "react-redux";
import "../AddInnovation.scss";
import { setAnalysisContent } from "../../../../redux/Slices/InnovationSlice";
import { useState } from "react";
export const Analysis = () => {
  const [activeLi, setActiveLi] = useState(1);
  const dispatch = useDispatch();
  let currentContentSlice = useSelector(
    (state: any) => state.innovation.AnalysisContent
  );
  const handleChangeContent = (content: string) => {
    dispatch(setAnalysisContent({ content }));
  };

  return (
    <div className="AddInnovation grid grid-cols-2 pl-10">
      <div className="col-span-full flex justify-between">
        <span className="title">
          4. Analysis/Root Causes (Text, 5-Whys, Fishbone)
        </span>
        <div className="flex gap-4">
          {/* Text */}
          <div
            className={
              activeLi === 1
                ? "header-item-active transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                : "header-item transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={() => setActiveLi(1)}
          >
            Text
          </div>
          {/*  5-Whys */}
          <div
            className={
              activeLi === 2
                ? "header-item-active transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                : "header-item transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={() => setActiveLi(2)}
          >
            5-Whys
          </div>
          {/* Fishbone */}
          <div
            className={
              activeLi === 3
                ? "header-item-active transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                : "header-item transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={() => setActiveLi(3)}
          >
            Fishbone
          </div>
        </div>
      </div>
      <div
        className={`col-span-full ${
          activeLi === 2 ? "flex justify-center" : ""
        }`}
      >
        {activeLi === 1 ? (
          <input
            type="text"
            className="details-input"
            value={currentContentSlice}
            onChange={(e) => handleChangeContent(e.target.value)}
          />
        ) : activeLi === 2 ? (
          <div className="analysis-input flex justify-center">
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-full flex gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="111"
                    height="40"
                    viewBox="0 0 111 40"
                    fill="none"
                  >
                    <path
                      d="M84.7679 39.962H0L10.3605 19.981L0 0H84.7679L110.198 19.981L84.7679 39.962Z"
                      fill="#FAA00F"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="531"
                    height="40"
                    viewBox="0 0 531 40"
                    fill="none"
                  >
                    <g>
                      <path
                        d="M501.064 39.962H0.933594L25.7585 19.981L0.933594 0H501.064L530.128 19.981L501.064 39.962Z"
                        fill="#5D96EC"
                      />
                      <foreignObject x="40" y="8" width="100" height="40">
                        <input
                          type="text"
                          className="arrow-input"
                          placeholder="Type a reason."
                        />
                      </foreignObject>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="col-span-full flex gap-2 pl-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="111"
                    height="40"
                    viewBox="0 0 111 40"
                    fill="none"
                  >
                    <path
                      d="M84.7679 39.962H0L10.3605 19.981L0 0H84.7679L110.198 19.981L84.7679 39.962Z"
                      fill="#FAA00F"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="531"
                    height="40"
                    viewBox="0 0 531 40"
                    fill="none"
                  >
                    <path
                      d="M501.064 39.962H0.933594L25.7585 19.981L0.933594 0H501.064L530.128 19.981L501.064 39.962Z"
                      fill="#5D96EC"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-span-full flex gap-2 pl-10">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="111"
                    height="40"
                    viewBox="0 0 111 40"
                    fill="none"
                  >
                    <path
                      d="M84.7679 39.962H0L10.3605 19.981L0 0H84.7679L110.198 19.981L84.7679 39.962Z"
                      fill="#FAA00F"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="531"
                    height="40"
                    viewBox="0 0 531 40"
                    fill="none"
                  >
                    <path
                      d="M501.064 39.962H0.933594L25.7585 19.981L0.933594 0H501.064L530.128 19.981L501.064 39.962Z"
                      fill="#5D96EC"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-span-full flex gap-2 pl-14">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="111"
                    height="40"
                    viewBox="0 0 111 40"
                    fill="none"
                  >
                    <path
                      d="M84.7679 39.962H0L10.3605 19.981L0 0H84.7679L110.198 19.981L84.7679 39.962Z"
                      fill="#FAA00F"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="531"
                    height="40"
                    viewBox="0 0 531 40"
                    fill="none"
                  >
                    <path
                      d="M501.064 39.962H0.933594L25.7585 19.981L0.933594 0H501.064L530.128 19.981L501.064 39.962Z"
                      fill="#5D96EC"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-span-full flex gap-2 pl-20">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="111"
                    height="40"
                    viewBox="0 0 111 40"
                    fill="none"
                  >
                    <path
                      d="M84.7679 39.962H0L10.3605 19.981L0 0H84.7679L110.198 19.981L84.7679 39.962Z"
                      fill="#FAA00F"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="531"
                    height="40"
                    viewBox="0 0 531 40"
                    fill="none"
                  >
                    <path
                      d="M501.064 39.962H0.933594L25.7585 19.981L0.933594 0H501.064L530.128 19.981L501.064 39.962Z"
                      fill="#5D96EC"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-span-full flex justify-start gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="203"
                    height="56"
                    viewBox="0 0 203 56"
                    fill="none"
                  >
                    <path
                      d="M0 16.7484C0 11.2256 4.47715 6.74841 10 6.74841H84.6178C86.0411 6.74841 87.448 6.44459 88.7444 5.85724L97.5936 1.84824C100.189 0.672356 103.163 0.659606 105.769 1.81319L114.982 5.8923C116.257 6.4568 117.636 6.74841 119.03 6.74841H193C198.523 6.74841 203 11.2256 203 16.7484V46C203 51.5228 198.523 56 193 56H10C4.47715 56 0 51.5229 0 46V16.7484Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="details-input"> </div>
        )}
      </div>
    </div>
  );
};
