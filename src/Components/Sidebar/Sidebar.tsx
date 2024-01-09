import React, { useState } from "react";
import "./Styles/Styles.css";
import { Link, NavLink } from "react-router-dom";

import profilePhoto from "./Assets/Images/Diversity Avatar Girl 05@4x 2.png";
type SidebarProps = {};
export const Sidebar = (props: SidebarProps) => {
  const [selectedElement, setSelectedElement] = useState(0);
  const handleSelectedElement = (e: number) => {
    switch (e) {
      case 0: {
        setSelectedElement(e);
        break;
      }
      case 1: {
        setSelectedElement(e);
        break;
      }
      case 2: {
        setSelectedElement(e);
        break;
      }
      case 3: {
        setSelectedElement(e);
        break;
      }
      case 4: {
        setSelectedElement(e);
        break;
      }
      case 5: {
        setSelectedElement(e);
        break;
      }
      case 6: {
        setSelectedElement(e);
        break;
      }
      default: {
        setSelectedElement(0);
        break;
      }
    }
  };
  return (
    <div className="sm:w-full sm:max-w-[18rem]">
      <input
        type="checkbox"
        id="sidebar-mobile-fixed"
        className="sidebar-state"
      />
      <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
      <aside
        className="sidebar sidebar-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full"
        style={{ backgroundColor: "#f8fafd" }}
      >
        <section className="sidebar-title items-center p-4">
          {/* Achievo Logo */}
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="232"
              height="51"
              viewBox="0 0 232 51"
              fill="none"
            >
              <path
                d="M28.1996 18.8945L21.2756 25.8185L8.68648 38.4076C8.05702 39.0371 7.04989 39.0371 6.42043 38.4076L1.88835 33.8755C1.2589 33.1202 1.2589 32.1131 1.88835 31.4836L14.7293 18.6427L21.4015 12.0964C22.0309 11.4669 23.0381 11.4669 23.6675 12.0964L28.1996 16.6284C28.8291 17.2579 28.8291 18.265 28.1996 18.8945Z"
                fill="black"
              />
              <path
                d="M30.4657 18.8945L43.0548 31.4836C43.6843 32.1131 43.6843 33.1202 43.0548 33.7497L38.5228 38.2818C37.8933 38.9112 36.8862 38.9112 36.2567 38.2818L23.6676 25.6927L30.4657 18.8945Z"
                fill="#FF0059"
              />
              <path
                d="M78.9338 19.2721V36.6451H75.0312V34.0014C73.8982 36.0156 71.758 37.1487 69.1143 37.1487C64.2046 37.1487 60.5537 33.1201 60.5537 27.9586C60.5537 22.7971 64.0787 18.7686 69.1143 18.7686C71.758 18.7686 73.8982 19.9016 75.0312 21.9158V19.2721H78.9338ZM69.7438 22.2935C66.5965 22.2935 64.3304 24.8113 64.3304 27.9586C64.3304 31.2318 66.4706 33.7496 69.7438 33.7496C72.891 33.7496 75.0312 31.4836 75.0312 27.9586C75.0312 24.5595 72.891 22.2935 69.7438 22.2935Z"
                fill="black"
              />
              <path
                d="M92.0264 18.8943C95.2996 18.8943 98.0692 20.405 99.7058 22.7969L96.4326 24.6853C95.4255 23.1746 93.9148 22.2933 92.0264 22.2933C88.7532 22.2933 86.4872 24.8112 86.4872 27.9585C86.4872 31.2316 88.7532 33.6236 92.0264 33.6236C93.9148 33.6236 95.5514 32.7423 96.4326 31.2316L99.7058 33.12C98.0692 35.6378 95.2996 37.0226 92.0264 37.0226C86.739 37.0226 82.8364 33.12 82.8364 27.8326C82.7105 22.7969 86.739 18.8943 92.0264 18.8943Z"
                fill="black"
              />
              <path
                d="M120.226 36.6451H116.324V27.2033C116.324 23.9301 114.813 22.2935 112.043 22.2935C110.659 22.2935 109.525 22.7971 108.644 23.8042C107.763 24.8114 107.259 26.0703 107.259 27.581V36.771H103.357V12.3481H107.259V21.9159C108.267 20.0275 110.281 18.7686 112.925 18.7686C117.583 18.7686 120.352 21.6641 120.352 26.8256V36.6451H120.226Z"
                fill="black"
              />
              <path
                d="M126.646 11.8445C128.157 11.8445 129.164 12.8516 129.164 14.2364C129.164 15.6212 128.031 16.6283 126.646 16.6283C125.262 16.6283 124.129 15.4953 124.129 14.2364C124.129 12.8516 125.262 11.8445 126.646 11.8445ZM128.661 36.645H124.758V19.2721H128.661V36.645Z"
                fill="black"
              />
              <path
                d="M136.214 29.4693C136.718 32.2389 138.984 33.8755 141.879 33.8755C143.893 33.8755 145.782 32.9943 146.789 31.4836L149.81 33.3719C148.3 35.638 145.278 37.1487 141.879 37.1487C136.34 37.1487 132.437 33.246 132.437 27.9586C132.437 22.7971 136.214 18.7686 141.376 18.7686C146.537 18.7686 150.314 22.2935 150.314 27.455C150.314 28.2104 150.314 28.8398 150.188 29.3434H136.214V29.4693ZM146.537 26.5738C146.411 23.9301 144.271 22.1676 141.376 22.1676C138.732 22.1676 136.718 23.8042 136.214 26.5738H146.537Z"
                fill="black"
              />
              <path
                d="M160.763 31.9872L166.176 19.3981H170.331L162.651 36.7711H158.749L151.069 19.2722H155.35L160.763 31.9872Z"
                fill="black"
              />
              <path
                d="M180.276 18.8944C185.438 18.7685 189.592 22.9229 189.466 28.0844C189.592 33.246 185.438 37.4004 180.276 37.2745C174.989 37.2745 171.086 33.3719 171.086 28.0844C171.086 22.797 174.989 18.8944 180.276 18.8944ZM180.276 22.2935C177.003 22.2935 174.737 24.8113 174.737 27.9586C174.737 31.2317 177.003 33.6237 180.276 33.6237C183.55 33.6237 185.69 31.1058 185.69 27.9586C185.69 24.8113 183.55 22.2935 180.276 22.2935Z"
                fill="black"
              />
              <path
                d="M192.865 34.5049C193.369 34.5049 193.746 34.8826 193.746 35.3861C193.746 35.8897 193.369 36.2674 192.865 36.2674C192.362 36.2674 191.984 35.8897 191.984 35.3861C191.984 34.8826 192.362 34.5049 192.865 34.5049Z"
                fill="black"
              />
              <path
                d="M205.203 26.9514V36.2674H203.818V34.5049C203.188 35.7638 201.929 36.3932 200.293 36.3932C197.649 36.3932 195.761 34.2531 195.761 31.4835C195.761 28.7139 197.649 26.5737 200.293 26.5737C201.929 26.5737 203.188 27.2032 203.818 28.4621V26.6996H205.203V26.9514ZM200.419 27.9585C198.404 27.9585 197.02 29.5951 197.02 31.6094C197.02 33.6236 198.404 35.2602 200.419 35.2602C202.307 35.2602 203.818 33.8754 203.818 31.6094C203.818 29.3433 202.307 27.9585 200.419 27.9585Z"
                fill="black"
              />
              <path
                d="M213.134 36.3932C211.497 36.3932 210.238 35.7637 209.609 34.5048V40.044H208.224V26.9513H209.609V28.7138C210.238 27.4549 211.497 26.8254 213.134 26.8254C215.777 26.8254 217.666 28.9656 217.666 31.7352C217.666 34.5048 215.777 36.3932 213.134 36.3932ZM212.882 27.9585C210.993 27.9585 209.609 29.3433 209.609 31.6093C209.609 33.8753 210.993 35.2601 212.882 35.2601C214.896 35.2601 216.281 33.6236 216.281 31.6093C216.281 29.4692 214.896 27.9585 212.882 27.9585Z"
                fill="black"
              />
              <path
                d="M224.967 36.3932C223.331 36.3932 222.072 35.7637 221.442 34.5048V40.044H220.058V26.9513H221.442V28.7138C222.072 27.4549 223.331 26.8254 224.967 26.8254C227.611 26.8254 229.499 28.9656 229.499 31.7352C229.499 34.5048 227.611 36.3932 224.967 36.3932ZM224.716 27.9585C222.827 27.9585 221.442 29.3433 221.442 31.6093C221.442 33.8753 222.827 35.2601 224.716 35.2601C226.73 35.2601 228.115 33.6236 228.115 31.6093C228.115 29.4692 226.73 27.9585 224.716 27.9585Z"
                fill="black"
              />
            </svg>
          </div>
        </section>
        <section className="sidebar-content">
          <nav className="menu rounded-md">
            <section className="menu-section px-4">
              <ul className="menu-items">
                {/* Dashboard */}
                <Link to="/Home">
                  <li
                    className={
                      selectedElement === 0
                        ? "dashboard-item dashboard-active"
                        : "dashboard-item"
                    }
                    onClick={() => handleSelectedElement(0)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M10.5574 19.1548H17.3194"
                        stroke="black"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.79077 16.3383C2.79077 9.79025 3.50476 10.2473 7.348 6.68659C9.02948 5.32954 11.6459 2.71777 13.9053 2.71777C16.1648 2.71777 18.8323 5.31675 20.5336 6.68311C24.3768 10.2473 25.0897 9.79025 25.0897 16.3348C25.085 25.9749 22.807 25.9749 13.9379 25.9749C5.0688 25.9749 2.79077 25.9749 2.79077 16.3383Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="module-name">Dashboard</span>
                    {selectedElement === 0 ? (
                      <div className="dashboard-item-border"></div>
                    ) : null}
                  </li>
                </Link>

                {/* Courses */}
                <Link to="/Courses">
                  <li
                    className={
                      selectedElement === 1
                        ? "dashboard-item dashboard-active"
                        : "dashboard-item"
                    }
                    onClick={() => handleSelectedElement(1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M15.5347 4.57837V7.66575"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.5347 20.7932V23.3747"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.5347 17.3046V11.1543"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.0015 16.7303C24.3821 16.7109 23.7946 16.4513 23.3633 16.0063C22.9321 15.5614 22.6909 14.9661 22.6909 14.3464C22.6909 13.7268 22.9321 13.1314 23.3633 12.6865C23.7946 12.2415 24.3821 11.9819 25.0015 11.9626C25.0015 6.43901 25.0015 4.46216 13.9543 4.46216C2.90723 4.46216 2.90723 6.43901 2.90723 11.9614C3.52657 11.9808 4.11408 12.2404 4.54534 12.6853C4.97661 13.1303 5.21777 13.7256 5.21777 14.3453C5.21777 14.9649 4.97661 15.5602 4.54534 16.0052C4.11408 16.4501 3.52657 16.7098 2.90723 16.7291C2.90723 22.2538 2.90723 24.2307 13.9543 24.2307C25.0015 24.2307 25.0015 22.2538 25.0015 16.7303Z"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="module-name">Courses</span>
                    {selectedElement === 1 ? (
                      <div className="dashboard-item-border"></div>
                    ) : null}
                  </li>
                </Link>

                {/* Assessments */}
                <Link to="/Assessments">
                  <li
                    className={
                      selectedElement === 2
                        ? "dashboard-item dashboard-active"
                        : "dashboard-item"
                    }
                    onClick={() => handleSelectedElement(2)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M13.9542 3.74023C5.88744 3.74023 3.19775 6.42992 3.19775 14.4966C3.19775 22.5634 5.88744 25.253 13.9542 25.253C22.0209 25.253 24.7106 22.5634 24.7106 14.4966"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.7081 5.5427C22.4335 5.29976 22.1136 5.11333 21.7669 4.99405C21.4201 4.87478 21.0533 4.82501 20.6873 4.84758C20.3213 4.87015 19.9634 4.96462 19.6339 5.12559C19.3044 5.28657 19.0099 5.51089 18.7672 5.78574C18.7672 5.78574 13.6867 11.5244 11.9273 13.5164C10.1679 15.5084 11.4622 18.2573 11.4622 18.2573C11.4622 18.2573 14.3693 19.1795 16.1136 17.2108L22.9581 9.48129C23.4472 8.92582 23.6956 8.19883 23.6487 7.46022C23.6018 6.72161 23.2635 6.03187 22.7081 5.5427Z"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.4531 7.28809L21.6394 10.9895"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="module-name">Assessments</span>
                    {selectedElement === 2 ? (
                      <div className="dashboard-item-border"></div>
                    ) : null}
                  </li>
                </Link>

                {/* Policies & Procedures */}
                <Link to="/Policies&Procedures">
                  <li
                    className={
                      selectedElement === 3
                        ? "dashboard-item dashboard-active"
                        : "dashboard-item"
                    }
                    onClick={() => handleSelectedElement(3)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M12.4249 14.0718C12.4249 14.498 12.2985 14.9145 12.0616 15.2688C11.8248 15.623 11.4881 15.8991 11.0944 16.0619C10.7006 16.2248 10.2673 16.2672 9.84942 16.1837C9.43154 16.1002 9.04781 15.8947 8.74681 15.593C8.44581 15.2913 8.24106 14.9072 8.15849 14.4891C8.07592 14.071 8.11923 13.6379 8.28295 13.2444C8.44666 12.851 8.72342 12.515 9.07819 12.2789C9.43296 12.0428 9.84979 11.9173 10.2759 11.9182C10.8464 11.9191 11.3932 12.1465 11.7961 12.5503C12.199 12.9541 12.4252 13.5014 12.4249 14.0718Z"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.433 14.0718H19.7799V16.2254"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4915 16.2254V14.0718"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.19775 14.0718C3.19775 6.00511 5.88744 3.31543 13.9542 3.31543C22.0209 3.31543 24.7106 6.00511 24.7106 14.0718C24.7106 22.1385 22.0209 24.8282 13.9542 24.8282C5.88744 24.8282 3.19775 22.1385 3.19775 14.0718Z"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="module-name">Policies & Procedures</span>
                    {selectedElement === 3 ? (
                      <div className="dashboard-item-border"></div>
                    ) : null}
                  </li>
                </Link>

                {/* Innovation Management */}
                <Link to="/InnovationManagement">
                  <li
                    className={
                      selectedElement === 4
                        ? "dashboard-item dashboard-active"
                        : "dashboard-item"
                    }
                    onClick={() => handleSelectedElement(4)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <path
                        d="M8.70166 12.625V20.4091"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.9973 8.89917V20.4114"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.2045 16.738V20.4092"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.67456 14.6901C2.67456 6.19898 5.50611 3.36743 13.9973 3.36743C22.4884 3.36743 25.32 6.19898 25.32 14.6901C25.32 23.1813 22.4884 26.0129 13.9973 26.0129C5.50611 26.0129 2.67456 23.1813 2.67456 14.6901Z"
                        stroke="black"
                        stroke-width="1.19608"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="module-name">Innovation Management</span>
                    {selectedElement === 4 ? (
                      <div className="dashboard-item-border"></div>
                    ) : null}
                  </li>
                </Link>

                {/* Certificates */}
                <li
                  className={
                    selectedElement === 5
                      ? "dashboard-item dashboard-active"
                      : "dashboard-item"
                  }
                  onClick={() => handleSelectedElement(5)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                  >
                    <path
                      d="M9.93311 10.9873H17.9045"
                      stroke="black"
                      stroke-width="1.19608"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.9194 3.17529C6.49225 3.17529 5.23288 4.25907 5.23288 12.977C5.23288 22.7368 5.05496 25.2695 6.91087 25.2695C8.76679 25.2695 11.7949 20.9856 13.9194 20.9856C16.0439 20.9856 19.0708 25.2695 20.9314 25.2695C22.792 25.2695 22.6048 22.7368 22.6048 12.977C22.6013 4.25907 21.3465 3.17529 13.9194 3.17529Z"
                      stroke="black"
                      stroke-width="1.19608"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="module-name">Certificates</span>
                  {selectedElement === 5 ? (
                    <div className="dashboard-item-border"></div>
                  ) : null}
                </li>

                {/* Announcements */}
                <li
                  className={
                    selectedElement === 6
                      ? "dashboard-item dashboard-active"
                      : "dashboard-item"
                  }
                  onClick={() => handleSelectedElement(6)}
                >
                  <span className="notification-number">2</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    className="bell-icon"
                  >
                    <path
                      d="M13.9507 3.31543C8.79347 3.31543 6.55382 7.98429 6.55382 11.0717C6.55382 13.3788 6.88872 12.6997 5.6119 15.5138C4.05252 19.5245 10.3226 21.1629 13.9507 21.1629C17.5788 21.1629 23.8478 19.5233 22.2896 15.5138C21.0104 12.6997 21.3476 13.3788 21.3476 11.0717C21.3476 7.98429 19.1057 3.31543 13.9507 3.31543Z"
                      stroke="black"
                      stroke-width="1.19608"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.6358 24.2444C16.3094 24.6409 15.8993 24.9602 15.4348 25.1795C14.9704 25.3987 14.4632 25.5124 13.9496 25.5124C13.436 25.5124 12.9288 25.3987 12.4644 25.1795C12 24.9602 11.5898 24.6409 11.2634 24.2444"
                      stroke="black"
                      stroke-width="1.19608"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="module-name">Announcements</span>
                  {selectedElement === 6 ? (
                    <div className="dashboard-item-border"></div>
                  ) : null}
                </li>
              </ul>
            </section>
          </nav>
        </section>
        <section
          className="sidebar-footer justify-end bg-gray-2 pt-2"
          style={{ backgroundColor: "#f8fafd" }}
        >
          <div className="divider my-0"></div>
          <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
            <label
              className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
              tabIndex={0}
            >
              <div className="flex flex-row gap-4 p-4">
                <div className="avatar-square avatar avatar-md">
                  <img src={profilePhoto} alt="avatar" />
                </div>

                <div className="flex flex-col">
                  <span>Mohamed Mansour</span>
                  <span>Profile</span>
                </div>

                <div className="flex flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      d="M17.5001 13.8541C18.2212 13.8541 18.926 14.068 19.5256 14.4686C20.1252 14.8692 20.5924 15.4386 20.8684 16.1048C21.1443 16.7709 21.2165 17.504 21.0759 18.2112C20.9352 18.9184 20.588 19.5681 20.0781 20.078C19.5682 20.5878 18.9186 20.9351 18.2113 21.0757C17.5041 21.2164 16.7711 21.1442 16.1049 20.8683C15.4387 20.5923 14.8693 20.125 14.4687 19.5255C14.0681 18.9259 13.8542 18.221 13.8542 17.5C13.8542 16.533 14.2384 15.6057 14.9221 14.922C15.6058 14.2382 16.5331 13.8541 17.5001 13.8541Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.4117 10.5728C29.177 10.1604 28.8629 9.79854 28.4876 9.50815C28.1123 9.21775 27.6832 9.00458 27.225 8.88092C26.7669 8.75727 26.2888 8.72558 25.8183 8.7877C25.3479 8.84982 24.8944 9.00451 24.484 9.24284C24.1409 9.44076 23.7516 9.54462 23.3556 9.54391C22.9595 9.54319 22.5706 9.43794 22.2282 9.23878C21.8858 9.03963 21.602 8.75362 21.4056 8.40967C21.2092 8.06572 21.107 7.67601 21.1094 7.27992C21.1125 6.31942 20.734 5.39701 20.0572 4.71552C19.3803 4.03402 18.4605 3.64923 17.5 3.64575C16.5396 3.64923 15.6198 4.03402 14.9429 4.71552C14.2661 5.39701 13.8876 6.31942 13.8907 7.27992C13.8932 7.67592 13.7912 8.06557 13.5949 8.40952C13.3987 8.75347 13.1151 9.03954 12.7729 9.23883C12.4307 9.43811 12.042 9.54356 11.646 9.54452C11.25 9.54548 10.8607 9.44192 10.5175 9.24429C10.1071 9.00593 9.65348 8.85122 9.18291 8.78908C8.71233 8.72694 8.23412 8.75861 7.77585 8.88226C7.31758 9.00592 6.88834 9.2191 6.51289 9.50951C6.13745 9.79992 5.82323 10.1618 5.58838 10.5743C5.11075 11.4081 4.9816 12.3967 5.22902 13.3253C5.47644 14.2538 6.08042 15.0471 6.90963 15.5326C7.25207 15.7333 7.53607 16.02 7.73342 16.3643C7.93077 16.7087 8.0346 17.0987 8.0346 17.4955C8.0346 17.8924 7.93077 18.2824 7.73342 18.6268C7.53607 18.9711 7.25207 19.2578 6.90963 19.4585C6.08042 19.944 5.47644 20.7373 5.22902 21.6658C4.9816 22.5943 5.11075 23.583 5.58838 24.4168C5.82311 24.8292 6.13717 25.1911 6.51245 25.4815C6.88773 25.7719 7.31679 25.9852 7.7749 26.109C8.233 26.2327 8.71108 26.2646 9.18156 26.2027C9.65204 26.1408 10.1056 25.9863 10.5161 25.7483C10.859 25.5503 11.248 25.4463 11.644 25.447C12.0399 25.4476 12.4287 25.5527 12.7709 25.7517C13.1132 25.9508 13.3968 26.2366 13.5932 26.5804C13.7896 26.9242 13.8917 27.3138 13.8892 27.7097C13.8863 28.1863 13.9775 28.6587 14.1575 29.1C14.3376 29.5413 14.6029 29.9427 14.9383 30.2812C15.2738 30.6198 15.6727 30.8888 16.1123 31.0729C16.5519 31.257 17.0235 31.3526 17.5 31.3541C18.4603 31.3502 19.3797 30.9653 20.0562 30.2838C20.7328 29.6024 21.1111 28.6802 21.108 27.7199C21.1058 27.324 21.2082 26.9344 21.4047 26.5907C21.6012 26.2469 21.885 25.9611 22.2274 25.7622C22.5697 25.5632 22.9585 25.458 23.3545 25.4574C23.7504 25.4567 24.1396 25.5606 24.4825 25.7585C24.893 25.9965 25.3466 26.151 25.8171 26.2129C26.2876 26.2748 26.7656 26.2429 27.2237 26.1192C27.6818 25.9954 28.1109 25.7821 28.4862 25.4917C28.8615 25.2013 29.1755 24.8394 29.4103 24.427C29.888 23.5934 30.0174 22.6049 29.7702 21.6764C29.5231 20.7479 28.9194 19.9545 28.0905 19.4687C27.748 19.268 27.464 18.9813 27.2667 18.637C27.0693 18.2926 26.9655 17.9026 26.9655 17.5058C26.9655 17.1089 27.0693 16.7189 27.2667 16.3745C27.464 16.0302 27.748 15.7435 28.0905 15.5428C28.9228 15.0572 29.5291 14.2618 29.7766 13.3305C30.0242 12.3992 29.893 11.4077 29.4117 10.5728Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </label>
            <div className="dropdown-menu-right-top dropdown-menu ml-2">
              <a className="dropdown-item text-sm">Profile</a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Account settings
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Change email
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Subscriptions
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Change password
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Refer a friend
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Settings
              </a>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
};
