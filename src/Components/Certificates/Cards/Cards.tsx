import "./CertificateCards.scss";
import certificate from "./Assets/Icons/Frame (3) 1.png";
import achievement from "./Assets/Icons/quality 1.png";
export const Cards = () => {
  return (
    <div className="certificate-cards grid grid-cols-1">
      <div className="banner-frame">
        <img src={certificate} alt="certificate" className="certificate" />
      </div>
      <div className="content">
        <div className="flex justify-center items-center">
          <div className="grid">
            <h2 className="title">Security Awareness Training</h2>
            <span className="createdAt">Created Date: 05-05-2023</span>
          </div>
        </div>
        <div className="flex justify-between w-7/12 pl-4 pb-4 pt-4">
          <div>
            <img src={achievement} alt="achievement" />
          </div>
          <div className="view-btn ml-4">View</div>
        </div>
      </div>
    </div>
  );
};
