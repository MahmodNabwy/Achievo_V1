import "./MaxTwoColumns.scss";
type MaxTwoColumnsProps = {
  firstColumn: {
    title: string;
    data: string[];
  };
  secondColumn: {
    title: string;
    data: string[];
  };
};
export const MaxTwoColumns = (props: MaxTwoColumnsProps) => {
  return (
    <div className="MaxTwoColumns">
      {/* Left Section Table */}
      <div className="left-section">
        <table className="table-auto">
          <thead className="table-head-max">
            <tr>
              <th className="title">{props.firstColumn.title}</th>
            </tr>
          </thead>
          <tbody>
            {props.firstColumn.data.slice(0, 4).map((item) => {
              return (
                <tr className="tr-content">
                  <td>
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
            {props.firstColumn.data.length >= 4 ? (
              <>
                <tr className="tr-content">
                  <td>
                    <a href="#" className="readMore">
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
              <th style={{ display: "flex" }}>{props.secondColumn.title}</th>
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
                      style={{ marginTop: "7px", marginRight: "10px" }}
                    />

                    <span>{item}</span>
                  </td>
                </tr>
              );
            })}
            {props.secondColumn.data.length >= 4 ? (
              <>
                <tr style={{ display: "flex" }}>
                  <td style={{ display: "flex", marginTop: "5px" }}>
                    <a href="#" className="readMore">
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
