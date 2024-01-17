import { useDispatch, useSelector } from "react-redux";
import "../AddInnovation.scss";
import { setMetricsFollowUpContent } from "../../../../redux/Slices/InnovationSlice";
export const MetricsFollowUp = () => {
  const dispatch = useDispatch();
  let currentContentSlice = useSelector(
    (state: any) => state.innovation.metricsFollowUpContent
  );
  const handleChangeContent = (content: string) => {
    dispatch(setMetricsFollowUpContent({ content }));
  };
  return (
    <div className="AddInnovation grid grid-cols-2 pl-10">
      <div className="col-start-1">
        <span className="title">7. Metrics/Follow-up</span>
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
