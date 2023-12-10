import "./MinTwoColumns.scss";
type MinTwoColumnsProps = {};
export const MinTwoColumns = (props: MinTwoColumnsProps) => {
  return (
    <div className="MinTwoColumns">
      {/* //Todo :When Elements is more than three so show read more button */}
      {/* Left Section Table */}
      <div className="left-section">
        <table className="table-auto">
          <thead className="table-head-acknowledge">
            <tr>
              <th className="title">Policies & Procedures Acknowledged</th>
            </tr>
          </thead>
          <tbody>
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
              <th style={{ display: "flex", fontSize: "6.532px" }}>
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
                  style={{ marginRight: "10px" }}
                />

                <span style={{ fontSize: "6.986px" }}>
                  Security Awareness Test
                </span>
              </td>
            </tr>
            <tr style={{ display: "flex" }}>
              <td style={{ display: "flex", marginTop: "5px" }}>
                <input
                  type="checkbox"
                  className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                  checked
                  style={{ marginRight: "10px" }}
                />
                <span style={{ fontSize: "6.986px" }}> Malicious emails</span>
              </td>
            </tr>
            <tr style={{ display: "flex" }}>
              <td style={{ display: "flex", marginTop: "5px" }}>
                <input
                  type="checkbox"
                  className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                  checked
                  style={{ marginRight: "10px" }}
                />
                <span style={{ fontSize: "6.986px" }}>Spam</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
