import { useDispatch, useSelector } from "react-redux";
import "./PoliciesProceduresFrame.scss";
import {
  mouse_enter,
  mouse_leave,
} from "../../redux/Slices/PoliciesProceduresSlice";
import { DepartmentBadge } from "../DepartmentBadge/DepartmentBadge";
import { VersionButton } from "../VersionButton/VersionButton";
import image63 from "./Assets/Icons/image 6.png";
type PoliciesProceduresFrameProps = {
  id: number;
};
export const PoliciesProceduresFrame = (
  props: PoliciesProceduresFrameProps
) => {
  const stateFromPolicesSlice = useSelector(
    (state: any) => state.policiesProcedures
  );
  const dispatch = useDispatch();

  return (
    <div className="PoliciesProceduresFrame">
      <div
        className="component"
        onMouseLeave={() => {
          let currentCard = props.id;
          dispatch(mouse_leave({ currentCard }));
        }}
        onMouseEnter={() => {
          let currentCard = props.id;
          dispatch(mouse_enter({ currentCard }));
        }}
      >
        <div
          className={`overlap-group ${
            props.id === stateFromPolicesSlice.currentCard
              ? stateFromPolicesSlice.property1
              : ""
          }`}
        >
          <div className="group">
            <div className="div">
              <div className="group-wrapper">
                <div className="group-2">
                  <div className="div-wrapper">
                    <DepartmentBadge title="HR" />
                  </div>
                  <div className="frame-2">
                    <VersionButton value={1.1} />
                  </div>
                  <div className="text-wrapper-3">Attendance policy</div>
                  <div className="frame-3">
                    <div className="text-wrapper-4">Unread</div>
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-5">Medium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-3">
            <div className="group-4">
              <div className="frame-5">
                <div className="group-5">
                  <div className="frame-6">
                    <DepartmentBadge title="HR" />
                  </div>
                  <div className="frame-7">
                    <VersionButton value={1.1} />
                  </div>
                  <div className="text-wrapper-8">Attendance policy</div>
                  <div className="frame-8">
                    <div className="text-wrapper-9">Unread</div>
                  </div>
                  <div className="frame-9">
                    <div className="text-wrapper-10">High</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-6">
            <div className="group-7">
              <div className="frame-10">
                <div className="group-8">
                  <div className="frame-11">
                    <DepartmentBadge title="HR" />
                  </div>
                  <div className="frame-12">
                    <VersionButton value={1.1} />
                  </div>
                  <div className="text-wrapper-13">Attendance policy</div>
                  <div className="frame-13">
                    <div className="text-wrapper-14">Unread</div>
                  </div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">Medium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Parent Section */}
          <div className="group-9">
            <div className="group-10">
              <div className="frame-15"></div>
              <div className="frame-16">
                <div className="group-11">
                  <div className="frame-17">
                    <DepartmentBadge title="HR" />
                  </div>
                  <div className="frame-18">
                    <VersionButton value={1.1} />
                  </div>
                  <div className="text-wrapper-18">Attendance policy</div>
                  <div className="frame-19">
                    <div className="text-wrapper-19">Read</div>
                  </div>
                  <div className="frame-20">
                    <div className="text-wrapper-20">Medium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
