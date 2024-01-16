import { useDispatch, useSelector } from "react-redux";
import "../AddInnovation.scss";
import { setCurrentConditionContent } from "../../../../redux/Slices/InnovationSlice";
export const CurrentCondition = () => {
  const dispatch = useDispatch();
  let currentContentSlice = useSelector(
    (state: any) => state.innovation.currentConditionContent
  );
  const handleChangeContent = (content: string) => {
    dispatch(setCurrentConditionContent({ content }));
  };
  return (
    <div className="AddInnovation grid grid-cols-2 pl-10">
      <div className="col-start-1">
        <span className="title">3. Current Condition</span>
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
