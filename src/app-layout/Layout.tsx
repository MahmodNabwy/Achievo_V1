import React from "react";

import { Sidebar } from "../Components/Sidebar/Sidebar";
import WelcomeBanner from "../Components/WelcomeBanner/WelcomeBanner";
import { Circles } from "../Pages/Dashboard-Circles/Circles";
import { Cards } from "../Pages/Dashboard-Cards/Cards";
export const Layout = () => {
  return (
    // <div className="grid grid-cols-6">
    //   {/* Left Sidebar */}
    //   <div className="col-span-1">
    //     <Sidebar />
    //   </div>
    //   <div className="col-span-5 ml-10 mr-10">
    //     <div className="grid grid-cols-1">
    //       <WelcomeBanner userName="Mohamed Mansour" />
    //     </div>
    //     <Circles />

    //     <Cards />
    //   </div>
    // </div>
    <div className="flex flex-row sm:gap-10">
      {/* Sidebar */}
      <div className="sm:w-full sm:max-w-[18rem]">
        <input
          type="checkbox"
          id="sidebar-mobile-fixed"
          className="sidebar-state"
        />
        <label
          htmlFor="sidebar-mobile-fixed"
          className="sidebar-overlay"
        ></label>
        <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
          <section className="sidebar-title items-center p-4">
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
                <span className="menu-title">Main menu</span>
                <ul className="menu-items">
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>General</span>
                  </li>

                  <li className="menu-item menu-active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Teams</span>
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span>Billing</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="menu-1"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-1"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Account</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <label className="menu-item menu-item-disabled ml-6">
                          Change Email
                        </label>
                        <label className="menu-item ml-6">Profile</label>
                        <label className="menu-item ml-6">
                          Change Password
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
              <div className="divider my-0"></div>
              <section className="menu-section px-4">
                <span className="menu-title">Settings</span>
                <ul className="menu-items">
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-75"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 21l18 0"></path>
                      <path d="M3 10l18 0"></path>
                      <path d="M5 6l7 -3l7 3"></path>
                      <path d="M4 10l0 11"></path>
                      <path d="M20 10l0 11"></path>
                      <path d="M8 14l0 3"></path>
                      <path d="M12 14l0 3"></path>
                      <path d="M16 14l0 3"></path>
                    </svg>
                    Payments
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-75"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
                      <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"></path>
                    </svg>
                    Balances
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-75"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                    </svg>
                    Customers
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-75"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 10l5 -6l5 6"></path>
                      <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
                      <path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    </svg>
                    Products
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="menu-2"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-2"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-75"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                          <path d="M9 7l4 0"></path>
                          <path d="M9 11l4 0"></path>
                        </svg>
                        <span>Contracts</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <label className="menu-item menu-item-disabled ml-6">
                          Create contract
                        </label>
                        <label className="menu-item ml-6">All contracts</label>
                        <label className="menu-item ml-6">
                          Pending contracts
                        </label>
                        <label className="menu-item ml-6">Security</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
          <section className="sidebar-footer justify-end bg-gray-2 pt-2">
            <div className="divider my-0"></div>
            <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
              <label
                className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
                tabIndex={0}
              >
                <div className="flex flex-row gap-4 p-4">
                  <div className="avatar-square avatar avatar-md">
                    <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                  </div>

                  <div className="flex flex-col">
                    <span>Sandra Marx</span>
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
      {/* Dashboard Content */}
      <div className="flex w-full flex-col p-4">
        {/* Expand Button */}
        <div className="w-fit">
          <label
            htmlFor="sidebar-mobile-fixed"
            className="btn-primary btn sm:hidden"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </label>
        </div>

        <Circles />

        <div className="my-4 grid grid-cols-2 gap-4">
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>

          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
        </div>
      </div>
    </div>
  );
};
