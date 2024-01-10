import "./AddInnovation.scss";
import { Business } from "./Modules/Business";
export const AddInnovation = () => {
  return (
    <div className="AddInnovation col-span-full">
      {/* Steps Header */}
      <div className="header">
        {/* Step No 1 */}
        <div className="flex items-center w-full mt-4">
          <div className="w-7 h-7 shrink-0 mx-[-1px] circle p-1.5 flex items-center justify-center rounded-full">
            <span className="step-no">1</span>
          </div>
          <div className="w-full h-2 mx-4 rounded-lg circle" />
        </div>

        {/* Step No 2 */}
        <div className="flex items-center w-full mt-4">
          <div className="w-7 h-7 shrink-0 mx-[-1px] circle p-1.5 flex items-center justify-center rounded-full">
            <span className="step-no">2</span>
          </div>
          <div className="w-full h-2 mx-4 rounded-lg circle" />
        </div>
        {/* Step No 3 */}
        <div className="flex items-center w-full mt-4">
          <div className="w-7 h-7 shrink-0 mx-[-1px] circle p-1.5 flex items-center justify-center rounded-full">
            <span className="step-no">3</span>
          </div>
          <div className="w-full h-2 mx-4 rounded-lg circle" />
        </div>

        {/* Step No 4 */}
        <div className="flex items-center w-full mt-4">
          <div className="w-7 h-7 shrink-0 mx-[-1px] circle p-1.5 flex items-center justify-center rounded-full">
            <span className="step-no">4</span>
          </div>
          <div className="w-full h-2 mx-4 rounded-lg circle" />
        </div>

        {/* Step No 5 */}
        <div className="flex items-center w-full mt-4">
          <div className="w-7 h-7 shrink-0 mx-[-1px] circle p-1.5 flex items-center justify-center rounded-full">
            <span className="step-no">5</span>
          </div>
          <div className="w-full h-2 mx-4 rounded-lg circle" />
        </div>

        {/* Step No 6 */}
        <div className="flex items-center w-full mt-4">
          <div className="w-7 h-7 shrink-0 mx-[-1px] circle p-1.5 flex items-center justify-center rounded-full">
            <span className="step-no">6</span>
          </div>
          <div className="w-full h-2 mx-4 rounded-lg circle" />
        </div>

        {/* Step No 7 */}
        <div className="flex items-center w-full mt-4">
          <div className="w-7 h-7 shrink-0 mx-[-1px] circle p-1.5 flex items-center justify-center rounded-full">
            <span className="step-no">7</span>
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
          <div className="form-control relative w-1/2">
            <input
              type="email"
              className="input input-lg max-w-full search-input"
              placeholder="Type Innovation Subject"
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
        </div>
        {/* Divider */}
        <div className="col-span-full pl-10 pr-10">
          <div className="divider"></div>
        </div>

        {/* Modules */}
        <div className="col-span-full">
          <Business />
        </div>
      </div>
    </div>
  );
};
