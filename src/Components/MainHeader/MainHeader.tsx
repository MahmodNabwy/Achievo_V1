import "./MainHeader.scss";
type MainHeaderProps = {
  title: string;
};
export const MainHeader = (props: MainHeaderProps) => {
  return (
    <div className="MainHeader">
      <div className="col-span-12 row-span-1 animate__animated animate__fadeIn">
        <div className="grid grid-cols-2 xs:grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          <div className="col-start-1 col-end-3 sm:col-start-1">
            <span className="Module-title">{props.title}</span>
          </div>
          <div
            className="sm:col-start-1 lg:col-start-3 flex justify-end gap-4"
            style={{ alignItems: "center" }}
          >
            <div className="form-control relative w-full">
              <input
                type="email"
                className="input input-lg max-w-full search-input"
                placeholder="Search"
              />

              <span className="absolute  inset-y-0 left-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M9.561 1C11.2542 1 12.9094 1.50209 14.3172 2.44279C15.7251 3.38348 16.8224 4.72053 17.4703 6.28485C18.1183 7.84917 18.2878 9.5705 17.9575 11.2312C17.6272 12.8918 16.8118 14.4173 15.6145 15.6145C14.4173 16.8118 12.8918 17.6272 11.2312 17.9575C9.5705 18.2878 7.84917 18.1183 6.28485 17.4703C4.72053 16.8224 3.38348 15.7251 2.44279 14.3172C1.50209 12.9094 1 11.2542 1 9.561C1 7.29048 1.90196 5.11296 3.50746 3.50746C5.11296 1.90196 7.29048 1 9.561 1Z"
                    stroke="black"
                    stroke-opacity="0.3"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.185 16.7739C18.4642 16.7739 18.737 16.8567 18.9691 17.0118C19.2011 17.1669 19.382 17.3873 19.4887 17.6452C19.5955 17.9031 19.6234 18.1868 19.5689 18.4606C19.5143 18.7343 19.3799 18.9857 19.1824 19.183C18.985 19.3803 18.7335 19.5146 18.4597 19.5689C18.1859 19.6233 17.9022 19.5952 17.6444 19.4882C17.3866 19.3813 17.1663 19.2003 17.0114 18.9681C16.8564 18.7359 16.7739 18.463 16.774 18.1839C16.7743 17.8099 16.9231 17.4512 17.1877 17.1868C17.4523 16.9224 17.811 16.7739 18.185 16.7739Z"
                    stroke="black"
                    stroke-opacity="0.3"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="line"></div>
            <div className="label">
              <div className="text-wrapper">EN</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
              >
                <path
                  d="M1.14955 1.39722C1.14955 1.39722 4.63788 6.48097 6.21288 6.48097C7.78788 6.48097 11.2733 1.39722 11.2733 1.39722"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
