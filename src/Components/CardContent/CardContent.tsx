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
    <div
      className={
        props.hasThirdColumn === true
          ? "grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-4 card-section"
          : "grid grid-cols-1 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  card-section"
      }
    >
      <MainCard
        icon={props.cardIcon}
        title={props.cardTitle}
        cardId={props.cardId}
        expanded={true}
      />

      {/* First Section */}
      <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-1">
        <span className="assessment-text">{props.firstSection.title}</span>
        {/* <div className="col-start-1 text-center border-completed border-completed-xs xs:col-start-1 sm:col-start-1 lg:col-start-1"></div> */}
        <ul>
          {props.firstSection.data.slice(0, 4).map((item) => {
            return (
              <li className="menu-item menu-item-xs">
                <input
                  type="checkbox"
                  className="checkbox-success checkbox checkbox-xs completed-box-xs"
                  checked
                />

                <span
                  className="assessments-element"
                  style={{ marginRight: "-6px" }}
                >
                  {item}
                </span>
              </li>
            );
          })}
          {props.firstSection.data.length > 4 ? (
            <>
              <li className="policies-item-unread policies-item-unread-xs ">
                <a href="#" className="read-more read-more-xs">
                  Read More.
                </a>
              </li>
            </>
          ) : null}

          {/* <li className="menu-item menu-item-xs">
            <input
              type="checkbox"
              className="checkbox-success checkbox checkbox-xs completed-box-xs"
              checked
            />

            <span className="assessments-element">Malicious emails</span>
          </li>
          <li className="menu-item menu-item-xs">
            <input
              type="checkbox"
              className="checkbox-success checkbox checkbox-xs completed-box-xs"
              checked
            />

            <span className="assessments-element">Spam</span>
          </li> */}
        </ul>
      </div>

      {/* Middle Section */}
      <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2">
        <span className="assessment-text">{props.middleSection.title}</span>
        {/* <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2 border-uncompleted border-uncompleted-xs"></div> */}
        <ul>
          {props.middleSection.data.slice(0, 4).map((item) => {
            return (
              <li className="menu-item menu-item-xs">
                <input
                  type="checkbox"
                  className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                  checked
                />

                <span className="assessments-element">{item}</span>
              </li>
            );
          })}
          {props.middleSection.data.length > 4 ? (
            <>
              <li className="policies-item-unread policies-item-unread-xs ">
                <a href="#" className="read-more read-more-xs">
                  Read More.
                </a>
              </li>
            </>
          ) : null}
        </ul>
      </div>

      {/* Last Section If Exist */}
      {props.hasThirdColumn === true && props.lastSection != null ? (
        <>
          {/* Last Section */}
          <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-3">
            <span className="assessment-text">{props.lastSection.title}</span>
            {/* <div className="col-start-1 text-center xs:col-start-1 sm:col-start-1 lg:col-start-2 border-uncompleted border-uncompleted-xs"></div> */}
            <ul>
              {props.lastSection.data.slice(0, 4).map((item) => {
                return (
                  //Todo : Work On This Section To Have Button At The End Of Li
                  <li className="menu-item menu-item-xs">
                    <input
                      type="checkbox"
                      className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                      checked
                    />

                    <span className="assessments-element">{item}</span>
                  </li>
                );
              })}

              <li className="menu-item menu-item-xs">
                <input
                  type="checkbox"
                  className="checkbox-warning checkbox checkbox-xs completed-box-xs"
                  checked
                />
                <span className="assessments-element">Working from Home</span>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};
