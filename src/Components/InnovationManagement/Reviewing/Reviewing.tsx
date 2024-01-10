import "../InnovationManagement.scss";
export const Reviewing = () => {
  return (
    <div className="InnovationManagement">
      <div className="grid grid-cols-2 cardContainer">
        <div className="col-span-full pl-4">
          <div>
            <h1 className="title">Challenging games</h1>
            <span className="createdAt">Created Date: 01-03-2023</span>
          </div>
        </div>
        <div className="col-span-full pl-4 mt-5">
          <div className="flex items-start max-w-screen-lg">
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-4 h-4 shrink-0 mx-[-1px] circle p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-base text-white font-bold"></span>
                </div>
                <div className="w-full h-1 mx-4 rounded-lg circle" />
              </div>
              <div className="mt-2 mr-4">
                <h6 className="stepTx">Published</h6>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-4 h-4 shrink-0 mx-[-1px] circle-yellow p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-xs text-white font-bold"></span>
                </div>
                <div className="w-full h-1 mx-4 rounded-lg circle-review" />
              </div>
              <div className="mt-2 mr-4">
                <h6 className="stepTx  w-1/2">Reviewing</h6>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-4 h-4 shrink-0 mx-[-1px] circle-review p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-base text-white font-bold"></span>
                </div>
              </div>
              <div className="mt-2 mr-2">
                <h6 className="stepTxt-review">Approved</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
