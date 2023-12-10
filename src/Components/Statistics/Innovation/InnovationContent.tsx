import * as React from "react";
import "../../MainCard/MainCard.css";
import innovationIcon from "../../MainCard/Assets/Icons/Innovation.svg";
import { MainCard } from "../../MainCard/MainCard";
type InnovationContentProps = {
  approved: string[];
  reviewing: string[];
  isMinmized?: boolean;
};
const InnovationContent = (props: InnovationContentProps) => {
  return props.isMinmized === true ? (
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full card-section">
        <MainCard
          icon={innovationIcon}
          title="Innovation Management"
          cardId={3}
          expanded={false}
        />
        {/* //Todo :When Elements is more than three so show read more button */}
        {/* Left Section Table */}
        <div className="col-start-1 left-section">
          <table className="table-auto">
            <thead className="table-head-acknowledge">
              <tr>
                <th style={{ display: "flex", fontSize: "6.532px" }}>
                  Reviewing innovation management
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ display: "flex" }}>
                <td style={{ display: "flex", marginTop: "5px" }}>
                  <input
                    type="checkbox"
                    className="checkbox-success checkbox checkbox-xs completed-box-xs"
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
                    className="checkbox-success checkbox checkbox-xs completed-box-xs"
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
                    className="checkbox-success checkbox checkbox-xs completed-box-xs"
                    checked
                    style={{ marginRight: "10px" }}
                  />
                  <span style={{ fontSize: "6.986px" }}>Spam</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Section Table */}
        <div className="col-start-1 lg:col-start-2 sm:col-start-1">
          <table className="table-auto">
            <thead className="table-head-acknowledge">
              <tr>
                <th style={{ display: "flex", fontSize: "6.532px" }}>
                  Approved innovation management
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
    </>
  ) : (
    <>
      <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  card-section">
        <MainCard
          icon={innovationIcon}
          title="Policies & Procedures"
          cardId={3}
          expanded={false}
        />

        {/* Policies & Procedures Acknowledged */}
        <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-1 policies-header-xs">
          <span className="policies-text policies-text-xs">
            Policies & Procedures Acknowledged
          </span>
          <div className="col-start-1 text-center border-acknowledged border-acknowledged-xs xs:col-start-1 sm:col-start-1 lg:col-start-1"></div>
          <ul>
            {props.reviewing.map((title) => {
              return (
                <li className="policies-item policies-item-xs">
                  <input
                    type="checkbox"
                    className="checkbox-success checkbox checkbox-xs acknowledge-box-xs"
                    checked
                  />

                  <span
                    className="acknowledge-element acknowledge-element-xs"
                    style={{ marginRight: "-6px" }}
                  >
                    {title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Unread policies & procedures */}
        <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2 policies-header-xs">
          <span className="policies-text policies-text-xs">
            Unread policies & procedures
          </span>
          <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2 border-unread border-unread-xs"></div>
          <ul>
            {props.approved.map((title) => {
              return (
                <>
                  <li className="policies-item-unread policies-item-unread-xs">
                    <input
                      type="checkbox"
                      className="checkbox-warning checkbox checkbox-xs unread-box-xs"
                      checked
                    />

                    <span className="acknowledge-element acknowledge-element-xs">
                      {title}
                    </span>
                  </li>
                </>
              );
            })}
            <li className="policies-item-unread policies-item-unread-xs ">
              <a href="#" className="read-more read-more-xs">
                Read More.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default InnovationContent;
