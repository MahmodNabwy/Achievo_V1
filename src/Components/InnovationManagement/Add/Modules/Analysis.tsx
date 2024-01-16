import { useDispatch, useSelector } from "react-redux";
import "../AddInnovation.scss";
import { setAnalysisContent } from "../../../../redux/Slices/InnovationSlice";
export const Analysis = () => {
  const dispatch = useDispatch();
  let currentContentSlice = useSelector(
    (state: any) => state.innovation.currentConditionContent
  );
  const handleChangeContent = (content: string) => {
    dispatch(setAnalysisContent({ content }));
  };
  return (
    <div className="AddInnovation grid grid-cols-2 pl-10">
      <div className="col-start-1">
        <span className="title">
          4. Analysis/Root Causes (Text, 5-Whys, Fishbone)
        </span>
      </div>
      <div className="col-span-full">
        <input
          type="text"
          className="details-input"
          value={currentContentSlice}
          onChange={(e) => handleChangeContent(e.target.value)}
        />
      </div>
    </div>
  );
};
