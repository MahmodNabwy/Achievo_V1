import { useDispatch, useSelector } from "react-redux";
import "../AddInnovation.scss";
import { setCounterMeasuresContent } from "../../../../redux/Slices/InnovationSlice";
export const Countermeasures = () => {
  const dispatch = useDispatch();
  let currentContentSlice = useSelector(
    (state: any) => state.innovation.counterMeasuresContent
  );
  const handleChangeContent = (content: string) => {
    dispatch(setCounterMeasuresContent({ content }));
  };
  return (
    <div className="AddInnovation grid grid-cols-2 pl-10">
      <div className="col-start-1">
        <span className="title">5. Countermeasures/Solutions</span>
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
