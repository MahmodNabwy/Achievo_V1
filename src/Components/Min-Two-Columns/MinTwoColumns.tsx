import "./MinTwoColumns.scss";
type MinTwoColumnsProps = {
  firstColumn: {
    title: string;
    data: string[];
  };
  secondColumn: {
    title: string;
    data: string[];
  };
};
export const MinTwoColumns = (props: MinTwoColumnsProps) => {
  return (
    <div className="MinTwoColumns">
      {/* //Todo :When Elements is more than three so show read more button */}
      {/* Left Section Table */}
      <div className="left-section">
        <table className="table-auto">
          <thead className="table-head-acknowledge">
            <tr>
              <th className="title">{props.firstColumn.title}</th>
            </tr>
          </thead>
          <tbody>
            {props.firstColumn.data.slice(0, 4).map((item) => {
              return (
                <tr className="tr-content">
                  <td className="td-content">
                    <input
                      type="checkbox"
                      className="checkbox-success checkbox checkbox-xs completed-box-xs f-checkBox"
                      checked
                    />

                    <span className="td-content-title">{item}</span>
                  </td>
                </tr>
              );
            })}

            {props.firstColumn.data.length > 4 ? (
              <>
                <tr className="tr-content">
                  <td className="td-content">
                    <a href="#" className="td-content-title">
                      Read More.
                    </a>
                  </td>
                </tr>
              </>
            ) : null}
          </tbody>
        </table>
      </div>

      {/* Right Section Table */}
      <div className="">
        <table className="table-auto">
          <thead className="table-head-second">
            <tr>
              <th style={{ display: "flex", fontSize: "6.532px" }}>
                {props.secondColumn.title}
              </th>
            </tr>
          </thead>
          <tbody>
            {props.secondColumn.data.slice(0, 4).map((item) => {
              return (
                <tr style={{ display: "flex" }}>
                  <td style={{ display: "flex", marginTop: "5px" }}>
                    <input
                      type="checkbox"
                      className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                      checked
                      style={{ marginRight: "10px" }}
                    />

                    <span style={{ fontSize: "6.986px" }}>{item}</span>
                  </td>
                </tr>
              );
            })}
            {props.secondColumn.data.length >= 4 ? (
              <>
                <tr style={{ display: "flex" }}>
                  <td style={{ display: "flex", marginTop: "5px" }}>
                    <a
                      href="#"
                      className="readMore"
                      style={{ fontSize: "6.986px" }}
                    >
                      Read More.
                    </a>
                  </td>
                </tr>
              </>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
