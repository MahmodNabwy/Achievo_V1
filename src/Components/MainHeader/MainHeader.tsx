import "./MainHeader.scss";
type MainHeaderProps = {};
export const MainHeader = (props: MainHeaderProps) => {
  return (
    <div className="MainHeader">
      <div className="flex justify-between">
        <h3 className="Module-title">Courses</h3>
        <div className="factor flex ">
          <div className="form-control relative w-full">
            <input
              type="email"
              className="input input-lg max-w-full search-input"
              placeholder="Search"
            />

            <span className="absolute inset-y-0 left-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-content3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>

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
  );
};
