import "./ThreeColumns.scss";
import { MainCard } from "../MainCard/MainCard";
import { BlueButton } from "../BlueButton/BlueButton";
import { VersionButton } from "../VersionButton/VersionButton";

type ThreeColumnsProps = {
  cardIcon: string;
  cardTitle: string;
  cardId: number;

  firstSection: {
    title: string;
    data: string[];
  };
  middleSection: {
    title: string;
    data: string[];
  };
  lastSection: {
    title: string;
    data: {
      text: string;
      value: number;
    }[];
  };
};
export const ThreeColumns = (props: ThreeColumnsProps) => {
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
                  {props.firstSection.title}
                </th>
              </tr>
            </thead>
            <tbody>
              {props.firstSection.data.slice(0, 4).map((item) => {
                return (
                  <tr style={{ display: "flex", marginTop: "10px" }}>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox-success checkbox checkbox-xs completed-box-xs"
                        checked
                        style={{ marginTop: "7px", marginRight: "10px" }}
                      />

                      <span>{item}</span>
                    </td>
                  </tr>
                );
              })}
              {props.firstSection.data.length > 4 ? (
                <tr style={{ display: "flex", marginTop: "10px" }}>
                  <td>
                    <a href="#" className="read-more">
                      Read More.
                    </a>
                  </td>
                </tr>
              ) : null}

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
                  <th className="s-th-title">{props.middleSection.title}</th>
                </tr>
              </thead>
              <tbody>
                {props.middleSection.data.slice(0, 4).map((item) => {
                  return (
                    <tr style={{ display: "flex", marginTop: "10px" }}>
                      <td className="second-td">
                        <div>
                          <input
                            type="checkbox"
                            className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                            checked
                            style={{ marginTop: "7px", marginRight: "10px" }}
                          />

                          <span>{item}</span>
                        </div>
                        <div>
                          <BlueButton title="Read" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {props.middleSection.data.length > 4 ? (
                  <td className="second-td">
                    <div>
                      <a href="#" className="read-more">
                        Read More.
                      </a>
                    </div>
                  </td>
                ) : null}
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
                  <th className="t-th-title">{props.lastSection.title}</th>
                </tr>
              </thead>
              <tbody>
                {props.lastSection.data.slice(0, 4).map((item) => {
                  return (
                    <tr style={{ display: "flex", marginTop: "10px" }}>
                      <td className="thrid-td">
                        <div>
                          <span
                            className="dot"
                            style={{
                              marginRight: "15px",
                              backgroundColor: "#000",
                            }}
                          ></span>

                          <span>{item.text}</span>
                        </div>
                        <div>
                          <VersionButton value={item.value} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {props.lastSection.data.length > 4 ? (
                  <tr style={{ display: "flex", marginTop: "10px" }}>
                    <td className="thrid-td">
                      <div>
                        <a href="#" className="read-more">
                          Read More.
                        </a>
                      </div>
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
