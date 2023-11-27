import React from "react";

// Define the interface for the props
interface ProgressCircleProps {
  progress: number;
  score: string;
  TextOne: string;
  TextTwo: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress,

  score,
  TextOne,
  TextTwo,
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = ((100 - progress) * circumference) / 100;

  return (
    <div className="flex items-center">
      <div className="relative w-28 h-28 progress-container">
        {/* First Circle */}
        <svg
          className="absolute"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#EAEAEB"
            strokeWidth="14"
          />
        </svg>

        {/* Second Circle */}
        <svg
          className="absolute second-circle"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <defs>
            <radialGradient
              id="paint0_angular_1_492"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-0.000690033 47.6046) rotate(-89.3674) scale(47.6076 50.0098)"
            >
              <stop stop-color="#DA1515" />
              <stop offset="1" stop-color="#b3003e" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_1_492"
              x1="0.460327"
              y1="80.6365"
              x2="0.460327"
              y2="-9.32324e-05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0059" />
              <stop offset="1" stop-color="#FF0059" stop-opacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="url(#paint0_angular_1_492)"
            strokeWidth="14"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>

        {/* Number */}
        <div className="flex items-center w-full h-full circle-number">
          {progress}%
        </div>
      </div>

      {/* Text */}
      <div className="ml-7 card-content">
        <span>{score}</span>
        <br />
        <span>
          {TextOne} <br /> {TextTwo}
        </span>
      </div>
    </div>
  );
};

export default ProgressCircle;
