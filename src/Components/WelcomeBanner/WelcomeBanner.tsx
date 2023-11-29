import * as React from "react";
import "./WelcomeBanner.css";
type WelcomeBannerProps = {
  userName: string;
};

const WelcomeBanner = (props: WelcomeBannerProps) => {
  return (
    <div>
      <h1 className="headTitle">
        Welcome back, {props.userName} <br />
        <span> Your current status is here</span>
      </h1>
    </div>
  );
};
export default WelcomeBanner;
