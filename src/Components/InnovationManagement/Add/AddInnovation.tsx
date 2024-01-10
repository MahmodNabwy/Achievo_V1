import "./AddInnovation.scss";
export const AddInnovation = () => {
  return (
    <div className="AddInnovation col-span-full">
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
            <span className="step-no">4</span>
          </div>
          <div className="w-full h-2 mx-4 rounded-lg circle" />
        </div>

        {/* Step No 6 */}
        <div className="flex items-center w-full mt-4">
          <div className="w-7 h-7 shrink-0 mx-[-1px] circle p-1.5 flex items-center justify-center rounded-full">
            <span className="step-no">4</span>
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
    </div>
  );
};
