import { useDispatch, useSelector } from "react-redux";
import "../AddInnovation.scss";
import { setActionItemContent } from "../../../../redux/Slices/InnovationSlice";
export const ActionItem = () => {
  const dispatch = useDispatch();
  let currentContentSlice = useSelector(
    (state: any) => state.innovation.actionItemContent
  );
  const handleChangeContent = (content: string) => {
    dispatch(setActionItemContent({ content }));
  };
  return (
    <div className="AddInnovation grid grid-cols-2 pl-10">
      <div className="col-start-1">
        <span className="title">6. Action Item</span>
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
