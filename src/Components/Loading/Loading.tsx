import "./Loading.scss";
export const Loading = () => {
  return (
    <div
      className="Loading w-full h-full fixed top-0 left-0 opacity-75 z-50 Loading"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.95)",
      }}
    >
      <div className="flex justify-center items-center mt-[50vh]">
        <svg
          className="loader"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="12"
            stroke="#FF0059"
            stroke-width="10"
            stroke-linecap="round"
            stroke-dasharray="1 20"
          />
        </svg>
      </div>
    </div>
  );
};
