import * as React from "react";
import "./Styles/Style.css";
interface WelcomeBannerProps {
  userName: string;
}
const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ userName }) => {
  return (
    <div>
      <h1 className="headTitle">
        Welcome back, {userName} <br />
        <span> Your current status is here</span>
      </h1>
    </div>
  );
};
export default WelcomeBanner;
