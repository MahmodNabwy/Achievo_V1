import * as React from "react";
import "../../MainCard/MainCard.css";
import policiesIcon from "../../../Components/MainCard/Assets/Icons/Policies-icon.svg";
import { MainCard } from "../../MainCard/MainCard";
type PoliciesContentProps = {
  acknowledged: string[];
  unread: string[];
};
const PoliciesContent = (props: PoliciesContentProps) => {
  return (
    <div className="grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  card-section">
      <MainCard icon={policiesIcon} title="Policies & Procedures" />

      {/* Policies & Procedures Acknowledged */}
      <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-1 policies-header-xs">
        <span className="policies-text policies-text-xs">
          Policies & Procedures Acknowledged
        </span>
        <div className="col-start-1 text-center border-acknowledged border-acknowledged-xs xs:col-start-1 sm:col-start-1 lg:col-start-1"></div>
        <ul>
          {props.acknowledged.map((title) => {
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
          {props.unread.map((title) => {
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
  );
};
export default PoliciesContent;
