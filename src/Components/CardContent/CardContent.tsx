import "./CardContent.css";
import { MainCard } from "../MainCard/MainCard";

type CardContentProps = {
  cardIcon: string;
  cardTitle: string;
  cardId: number;
  hasThirdColumn: boolean;
  middleColumnWithOption: boolean;
  firstSection: {
    title: string;
    data: string[];
  };
  middleSection: {
    title: string;
    data: string[];
  };
  lastSection?: {
    title: string;
    data: string[];
  };
};
export const CardContent = (props: CardContentProps) => {
  return (
    <div className="col-span-12 h-full">
      <div
        className={
          props.hasThirdColumn === true
            ? "grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-4 h-full card-section"
            : "grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  card-section"
        }
      >
        <MainCard
          icon={props.cardIcon}
          title={props.cardTitle}
          cardId={props.cardId}
          expanded={true}
        />

        {/* Completed Assessments Table */}
        <div className="col-start-1 left-section">
          <table className="table-auto">
            <thead className="table-head-completed">
              <tr>
                <th style={{ display: "flex" }}>Completed Assessments</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ display: "flex" }}>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox-success checkbox checkbox-xs completed-box-xs"
                    checked
                    style={{ marginTop: "7px", marginRight: "10px" }}
                  />

                  <span>Security Awareness Test</span>
                </td>
              </tr>
              <tr style={{ display: "flex" }}>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox-success checkbox checkbox-xs completed-box-xs"
                    checked
                    style={{ marginTop: "7px", marginRight: "10px" }}
                  />
                  <span> Malicious emails</span>
                </td>
              </tr>
              <tr style={{ display: "flex" }}>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox-success checkbox checkbox-xs completed-box-xs"
                    checked
                    style={{ marginTop: "7px", marginRight: "10px" }}
                  />
                  <span>Spam</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* UnCompleted Assessments  Table */}
        <div className="col-start-2">
          <div className="rightSection">
            <table className="table-auto w-full">
              <thead className="table-head">
                <tr className="right-tr">
                  <th style={{ display: "flex" }}>Uncompleted assessments</th>
                  <th style={{ textAlign: "left" }}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                      checked
                      style={{ marginTop: "7px", marginRight: "10px" }}
                    />

                    <span>Personality Test</span>
                  </td>
                  <td style={{ display: "inline-flex", marginTop: "10px" }}>
                    <span style={{ marginRight: "25px" }}>30/07/2023</span>
                    <button className="continue-btn">Continue</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                      checked
                      style={{ marginTop: "7px", marginRight: "10px" }}
                    />

                    <span>Personality Test</span>
                  </td>
                  <td style={{ display: "inline-flex", marginTop: "10px" }}>
                    <span style={{ marginRight: "25px" }}>30/07/2023</span>
                    <button className="continue-btn">Continue</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
