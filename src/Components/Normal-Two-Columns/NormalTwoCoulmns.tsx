import "./NormalTwoCoulmns.scss";
type NormalTwoColumnsProps = {
  firstColumn: {
    title: string;
    data: string[];
  };
  secondColumn: {
    title: string;
    data: string[];
  };
};
export const NormalTwoCoulmns = (props: NormalTwoColumnsProps) => {
  return (
    <div className="col-span-12 row-span-2 normal-two-container">
      <div className="grid grid-cols-2 p-4 gap-10">
        {/* First Column */}
        <div className="col-span-1 flex justify-center">
          <table className="table-auto text-center">
            <thead className="table-normal-completed">
              <tr style={{ display: "flow" }}>
                <th className="table-normal-title">
                  {props.firstColumn.title}
                </th>
                <div className="title-normal-border"></div>
              </tr>
            </thead>
            <tbody>
              <tr>
                {props.firstColumn.data.slice(0, 4).map((item) => {
                  return (
                    <td
                      className="flex td-sm"
                      style={{ alignItems: "baseline" }}
                    >
                      <input
                        type="checkbox"
                        className="checkbox-success checkbox checkbox-xs checkbox-green"
                        checked
                      />

                      <span className="td-content-title">{item}</span>
                    </td>
                  );
                })}
                {props.firstColumn.data.length > 4 ? (
                  <td className="flex" style={{ alignItems: "baseline" }}>
                    <a href="#" className="read-more">
                      Read More.
                    </a>
                  </td>
                ) : null}
              </tr>
            </tbody>
          </table>
        </div>
        {/* Second Column */}
        <div className="col-span-1">
          <table className="table-auto text-center">
            <thead className="table-normal-uncompleted">
              <tr style={{ display: "flow" }}>
                <th className="table-normal-title">
                  {props.secondColumn.title}
                </th>
                <div className="title-normal-border"></div>
              </tr>
            </thead>
            <tbody>
              <tr className="tr-content">
                {props.secondColumn.data.slice(0, 4).map((item) => {
                  return (
                    <td
                      className="flex td-sm"
                      style={{ alignItems: "baseline" }}
                    >
                      <input
                        type="checkbox"
                        className="checkbox-success checkbox checkbox-xs  checkbox-yellow "
                        checked
                      />
                      <span className="td-content-title">{item}</span>
                    </td>
                  );
                })}

                {props.secondColumn.data.length > 4 ? (
                  <td className="flex" style={{ alignItems: "baseline" }}>
                    <a href="#" className="read-more">
                      Read More.
                    </a>
                  </td>
                ) : null}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
