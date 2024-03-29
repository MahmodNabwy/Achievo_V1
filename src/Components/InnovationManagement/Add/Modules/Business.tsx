import { useDispatch, useSelector } from "react-redux";
import "../AddInnovation.scss";
import { setBusinessContent } from "../../../../redux/Slices/InnovationSlice";
export const Business = () => {
  const dispatch = useDispatch();
  let currentContentSlice = useSelector(
    (state: any) => state.innovation.businessContent
  );
  const handleChangeContent = (content: string) => {
    dispatch(setBusinessContent({ content }));
  };
  return (
    <div className="AddInnovation grid grid-cols-2 pl-10">
      <div className="col-start-1">
        <span className="title">1. Background/Business Case</span>
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
