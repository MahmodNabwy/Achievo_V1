import "./ThreeColumns.scss";
import { MainCard } from "../MainCard/MainCard";
import { BlueButton } from "../BlueButton/BlueButton";
import { VersionButton } from "../VersionButton/VersionButton";

type ThreeColumnsProps = {
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
export const ThreeColumns = (props: ThreeColumnsProps) => {
  {
    /* //Todo : Condition if <td> count is more than three so show read more button  */
  }
  return (
    <div className="col-span-12 h-full">
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  h-full card-section">
        <MainCard
          icon={props.cardIcon}
          title={props.cardTitle}
          cardId={props.cardId}
          expanded={true}
        />

        {/* First Column */}
        <div className="col-start-1 first-column">
          <table className="table-auto">
            <thead className="table-head-completed-max">
              <tr>
                <th className="f-th-title" style={{ display: "flex" }}>
                  Policies & Procedures Acknowledged
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ display: "flex", marginTop: "10px" }}>
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
              <tr style={{ display: "flex", marginTop: "10px" }}>
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
              <tr style={{ display: "flex", marginTop: "10px" }}>
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

        {/* Second Column */}
        <div className="col-start-1 lg:col-start-2 sm:col-start-1">
          <div className="secondColumn">
            <table className="table-auto w-full">
              <thead className="table-head-second">
                <tr className="right-tr">
                  <th className="s-th-title">Unread policies & procedures</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ display: "flex", marginTop: "10px" }}>
                  <td className="second-td">
                    <div>
                      <input
                        type="checkbox"
                        className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                        checked
                        style={{ marginTop: "7px", marginRight: "10px" }}
                      />

                      <span>Personality Test</span>
                    </div>
                    <div>
                      <BlueButton title="Read" />
                    </div>
                  </td>
                </tr>
                <tr style={{ display: "flex", marginTop: "10px" }}>
                  <td className="second-td">
                    <div>
                      <input
                        type="checkbox"
                        className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                        checked
                        style={{ marginTop: "7px", marginRight: "10px" }}
                      />

                      <span>Personality Test</span>
                    </div>
                    <div>
                      <BlueButton title="Read" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-start-1 lg:col-start-3 sm:col-start-1">
          <div className="thirdColumn">
            <table className="table-auto w-full">
              <thead className="table-head-third">
                <tr className="right-tr">
                  <th className="t-th-title">Updated versions</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ display: "flex", marginTop: "10px" }}>
                  <td className="thrid-td">
                    <div>
                      <span
                        className="dot"
                        style={{ marginRight: "15px", backgroundColor: "#000" }}
                      ></span>

                      <span>Personality Test</span>
                    </div>
                    <div>
                      <VersionButton value={1} />
                    </div>
                  </td>
                </tr>
                <tr style={{ display: "flex", marginTop: "10px" }}>
                  <td className="thrid-td">
                    <div>
                      <span
                        className="dot"
                        style={{ marginRight: "15px", backgroundColor: "#000" }}
                      ></span>

                      <span>Personality Test</span>
                    </div>
                    <div>
                      <VersionButton value={1} />
                    </div>
                  </td>
                </tr>
                <tr style={{ display: "flex", marginTop: "10px" }}>
                  <td className="thrid-td">
                    <div>
                      <span
                        className="dot"
                        style={{ marginRight: "15px", backgroundColor: "#000" }}
                      ></span>

                      <span>Personality Test</span>
                    </div>
                    <div>
                      <VersionButton value={1} />
                    </div>
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
