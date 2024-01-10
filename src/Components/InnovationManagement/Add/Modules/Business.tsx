import "../AddInnovation.scss";
export const Business = () => {
  return (
    <div className="AddInnovation grid grid-cols-2 pl-10">
      <div className="col-start-1">
        <span className="title">1. Background/Business Case</span>
      </div>
      <div className="col-span-full">
        <input type="text" className="details-input" />
      </div>
    </div>
  );
};
