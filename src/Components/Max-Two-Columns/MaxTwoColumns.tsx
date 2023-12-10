import "./MaxTwoColumns.scss";
type MaxTwoColumnsProps = {};
export const MaxTwoColumns = (props: MaxTwoColumnsProps) => {
  return (
    <div className="MaxTwoColumns">
      {/* Left Section Table */}
      <div className="left-section">
        <table className="table-auto">
          <thead className="table-head-max">
            <tr>
              <th className="title">Policies & Procedures Acknowledged</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr-content">
              <td>
                <input
                  type="checkbox"
                  className="checkbox-success checkbox checkbox-xs completed-box-xs f-checkBox"
                  checked
                />

                <span className="td-content-title">
                  Security Awareness Test
                </span>
              </td>
            </tr>

            <tr className="tr-content">
              <td className="td-content">
                <input
                  type="checkbox"
                  className="checkbox-success checkbox checkbox-xs completed-box-xs f-checkBox"
                  checked
                />

                <span className="td-content-title">
                  Security Awareness Test
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Section Table */}
      <div className="">
        <table className="table-auto">
          <thead className="table-head-second">
            <tr>
              <th style={{ display: "flex" }}>
                Policies & Procedures Acknowledged
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ display: "flex" }}>
              <td style={{ display: "flex", marginTop: "5px" }}>
                <input
                  type="checkbox"
                  className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                  checked
                  style={{ marginTop: "7px", marginRight: "10px" }}
                />

                <span>Security Awareness Test</span>
              </td>
            </tr>
            <tr style={{ display: "flex" }}>
              <td style={{ display: "flex", marginTop: "5px" }}>
                <input
                  type="checkbox"
                  className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                  checked
                  style={{ marginTop: "7px", marginRight: "10px" }}
                />

                <span>Security Awareness Test</span>
              </td>
            </tr>
            <tr style={{ display: "flex" }}>
              <td style={{ display: "flex", marginTop: "5px" }}>
                <input
                  type="checkbox"
                  className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                  checked
                  style={{ marginTop: "7px", marginRight: "10px" }}
                />

                <span>Security Awareness Test</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
