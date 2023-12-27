import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Login.scss";
import { Loading } from "../../Components/Loading/Loading";
import { setIsLogged } from "../../redux/Slices/LoginSlice";
export const Login = () => {
  const [pwVisible, setPwVisible] = useState(false);
  const handleShowPw = () => {
    setPwVisible(!pwVisible);
  };
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    let isLogged = true;
    dispatch(setIsLogged({ isLogged }));
    navigate("/Home");
  };
  return (
    <div className="Login">
      <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {/* <Loading /> */}
        {/* Achievo Logo */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <svg
            className="mx-auto h-10 w-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="239"
            height="52"
            viewBox="0 0 239 52"
            fill="none"
          >
            <path
              d="M29.1199 18.85L21.9699 26L8.9699 39C8.3199 39.65 7.2799 39.65 6.6299 39L1.9499 34.32C1.2999 33.54 1.2999 32.5 1.9499 31.85L15.2099 18.59L22.0999 11.83C22.7499 11.18 23.7899 11.18 24.4399 11.83L29.1199 16.51C29.7699 17.16 29.7699 18.2 29.1199 18.85Z"
              fill="black"
            />
            <path
              d="M31.4599 18.8501L44.4599 31.8501C45.1099 32.5001 45.1099 33.5401 44.4599 34.1901L39.7799 38.8701C39.1299 39.5201 38.0899 39.5201 37.4399 38.8701L24.4399 25.8701L31.4599 18.8501Z"
              fill="#FF0059"
            />
            <path
              d="M81.5098 19.24V37.18H77.4798V34.45C76.3098 36.53 74.0998 37.7 71.3698 37.7C66.2998 37.7 62.5298 33.54 62.5298 28.21C62.5298 22.88 66.1698 18.72 71.3698 18.72C74.0998 18.72 76.3098 19.89 77.4798 21.97V19.24H81.5098ZM72.0198 22.36C68.7698 22.36 66.4298 24.96 66.4298 28.21C66.4298 31.59 68.6398 34.19 72.0198 34.19C75.2698 34.19 77.4798 31.85 77.4798 28.21C77.4798 24.7 75.2698 22.36 72.0198 22.36Z"
              fill="black"
            />
            <path
              d="M95.0298 18.8501C98.4098 18.8501 101.27 20.4101 102.96 22.8801L99.5798 24.8301C98.5398 23.2701 96.9798 22.3601 95.0298 22.3601C91.6498 22.3601 89.3098 24.9601 89.3098 28.2101C89.3098 31.5901 91.6498 34.0601 95.0298 34.0601C96.9798 34.0601 98.6698 33.1501 99.5798 31.5901L102.96 33.5401C101.27 36.1401 98.4098 37.5701 95.0298 37.5701C89.5698 37.5701 85.5398 33.5401 85.5398 28.0801C85.4098 22.8801 89.5698 18.8501 95.0298 18.8501Z"
              fill="black"
            />
            <path
              d="M124.15 37.1801H120.12V27.4301C120.12 24.0501 118.56 22.3601 115.7 22.3601C114.27 22.3601 113.1 22.8801 112.19 23.9201C111.28 24.9601 110.76 26.2601 110.76 27.8201V37.3101H106.73V12.0901H110.76V21.9701C111.8 20.0201 113.88 18.7201 116.61 18.7201C121.42 18.7201 124.28 21.7101 124.28 27.0401V37.1801H124.15Z"
              fill="black"
            />
            <path
              d="M130.78 11.5701C132.34 11.5701 133.38 12.6101 133.38 14.0401C133.38 15.4701 132.21 16.5101 130.78 16.5101C129.35 16.5101 128.18 15.3401 128.18 14.0401C128.18 12.6101 129.35 11.5701 130.78 11.5701ZM132.86 37.1801H128.83V19.2401H132.86V37.1801Z"
              fill="black"
            />
            <path
              d="M140.66 29.77C141.18 32.63 143.52 34.32 146.51 34.32C148.59 34.32 150.54 33.41 151.58 31.85L154.7 33.8C153.14 36.14 150.02 37.7 146.51 37.7C140.79 37.7 136.76 33.67 136.76 28.21C136.76 22.88 140.66 18.72 145.99 18.72C151.32 18.72 155.22 22.36 155.22 27.69C155.22 28.47 155.22 29.12 155.09 29.64H140.66V29.77ZM151.32 26.78C151.19 24.05 148.98 22.23 145.99 22.23C143.26 22.23 141.18 23.92 140.66 26.78H151.32Z"
              fill="black"
            />
            <path
              d="M166.01 32.37L171.6 19.37H175.89L167.96 37.31H163.93L156 19.24H160.42L166.01 32.37Z"
              fill="black"
            />
            <path
              d="M186.16 18.85C191.49 18.72 195.78 23.01 195.65 28.34C195.78 33.67 191.49 37.96 186.16 37.83C180.7 37.83 176.67 33.8 176.67 28.34C176.67 22.88 180.7 18.85 186.16 18.85ZM186.16 22.36C182.78 22.36 180.44 24.96 180.44 28.21C180.44 31.59 182.78 34.06 186.16 34.06C189.54 34.06 191.75 31.46 191.75 28.21C191.75 24.96 189.54 22.36 186.16 22.36Z"
              fill="black"
            />
            <path
              d="M199.16 34.97C199.68 34.97 200.07 35.36 200.07 35.88C200.07 36.4 199.68 36.79 199.16 36.79C198.64 36.79 198.25 36.4 198.25 35.88C198.25 35.36 198.64 34.97 199.16 34.97Z"
              fill="black"
            />
            <path
              d="M211.9 27.17V36.79H210.47V34.97C209.82 36.27 208.52 36.92 206.83 36.92C204.1 36.92 202.15 34.71 202.15 31.85C202.15 28.99 204.1 26.78 206.83 26.78C208.52 26.78 209.82 27.43 210.47 28.73V26.91H211.9V27.17ZM206.96 28.21C204.88 28.21 203.45 29.9 203.45 31.98C203.45 34.06 204.88 35.75 206.96 35.75C208.91 35.75 210.47 34.32 210.47 31.98C210.47 29.64 208.91 28.21 206.96 28.21Z"
              fill="black"
            />
            <path
              d="M220.09 36.92C218.4 36.92 217.1 36.27 216.45 34.97V40.69H215.02V27.17H216.45V28.99C217.1 27.69 218.4 27.04 220.09 27.04C222.82 27.04 224.77 29.25 224.77 32.11C224.77 34.97 222.82 36.92 220.09 36.92ZM219.83 28.21C217.88 28.21 216.45 29.64 216.45 31.98C216.45 34.32 217.88 35.75 219.83 35.75C221.91 35.75 223.34 34.06 223.34 31.98C223.34 29.77 221.91 28.21 219.83 28.21Z"
              fill="black"
            />
            <path
              d="M232.31 36.92C230.62 36.92 229.32 36.27 228.67 34.97V40.69H227.24V27.17H228.67V28.99C229.32 27.69 230.62 27.04 232.31 27.04C235.04 27.04 236.99 29.25 236.99 32.11C236.99 34.97 235.04 36.92 232.31 36.92ZM232.05 28.21C230.1 28.21 228.67 29.64 228.67 31.98C228.67 34.32 230.1 35.75 232.05 35.75C234.13 35.75 235.56 34.06 235.56 31.98C235.56 29.77 234.13 28.21 232.05 28.21Z"
              fill="black"
            />
          </svg>
        </div>
        {/* Form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              {/* Email Input */}
              <div className="mt-2">
                <div className="form-control relative w-full">
                  <input
                    type="email"
                    className="input input-lg max-w-full pl-12 email-input"
                    placeholder="Enter email"
                    onChange={(e) => setUser(e.target.value)}
                  />

                  <span className="absolute inset-y-0 left-3 inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <g opacity="0.3">
                        <path
                          d="M25.5866 13.1528C25.5866 13.1528 20.9053 18.7718 17.4812 18.7718C14.057 18.7718 9.32471 13.1528 9.32471 13.1528"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.57593 17.4548C3.57593 7.48272 7.04822 4.15918 17.4651 4.15918C27.882 4.15918 31.3543 7.48272 31.3543 17.4548C31.3543 27.4269 27.882 30.7504 17.4651 30.7504C7.04822 30.7504 3.57593 27.4254 3.57593 17.4548Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-2">
                <div className="form-control relative w-full">
                  <input
                    type={pwVisible === true ? "text" : "password"}
                    className="input input-lg max-w-full pl-12 password-input"
                    placeholder="Password"
                  />
                  {/* Eye SVG */}
                  <span className="absolute inset-y-0 inline-flex right-0 items-end">
                    <svg
                      onClick={() => handleShowPw()}
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <g opacity="0.3">
                        <path
                          d="M22.1143 17.5758C22.1143 18.4879 21.8439 19.3794 21.3372 20.1377C20.8305 20.896 20.1103 21.4871 19.2677 21.8361C18.4252 22.1851 17.498 22.2764 16.6035 22.0985C15.709 21.9206 14.8873 21.4814 14.2425 20.8365C13.5976 20.1916 13.1584 19.37 12.9805 18.4755C12.8025 17.581 12.8938 16.6538 13.2429 15.8112C13.5919 14.9686 14.1829 14.2484 14.9412 13.7417C15.6995 13.235 16.5911 12.9646 17.5031 12.9646C18.7261 12.9646 19.899 13.4504 20.7637 14.3152C21.6285 15.18 22.1143 16.3529 22.1143 17.5758Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.0105 17.5728C4.0105 22.3562 10.0509 28.2187 17.503 28.2187C24.9551 28.2187 30.9897 22.3635 30.9897 17.5728C30.9897 12.7822 24.9536 6.927 17.503 6.927C10.0524 6.927 4.0105 12.7924 4.0105 17.5728Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  {/* Lock SVG */}
                  <span className="absolute inset-y-0 left-3 inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <g opacity="0.3">
                        <path
                          d="M24.0202 13.7127V10.5729C23.9976 8.82591 23.2885 7.15796 22.0462 5.92948C20.8039 4.701 19.1281 4.01064 17.381 4.00758C15.6338 4.00451 13.9556 4.68899 12.709 5.9131C11.4624 7.13722 10.7475 8.80267 10.7188 10.5496L10.7188 13.7127"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.3689 20.644V23.883"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.3688 12.8684C8.99071 12.8684 6.198 15.1551 6.198 22.0136C6.198 28.8722 8.99071 31.1603 17.3688 31.1603C25.747 31.1603 28.5411 28.8736 28.5411 22.0136C28.5411 15.1536 25.7397 12.8684 17.3688 12.8684Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button>
                <div className="frame" onClick={() => handleLogin()}>
                  <div className="text-wrapper">Login</div>
                </div>
              </button>
            </div>
          </form>

          <a href="#" className="forget-pw">
            Forget Password?
          </a>
        </div>
      </div>
    </div>
  );
};
