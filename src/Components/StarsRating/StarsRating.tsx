import React, { useState } from "react";
import "./StarsRating.scss";
type StarsRatingProps = {};
export const StarsRating = (props: StarsRatingProps) => {
  const [stars, setStars] = useState<number[]>([]);

  const handleActiveStar = (id: number) => {
    setStars(Array.from({ length: id }, (_, index) => index + 1));
  };
  return (
    <div className="flex gap-0.5">
      <svg
        onClick={() => handleActiveStar(1)}
        className="h-8 w-6 shrink-0 fill-amber-400"
        id="1"
        viewBox="0 0 256 256"
      >
        <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
      </svg>
      <svg
        onClick={() => handleActiveStar(2)}
        className={
          stars.includes(2)
            ? "h-8 w-6 shrink-0  fill-amber-400"
            : "h-8 w-6 shrink-0 fill-gray-300"
        }
        viewBox="0 0 256 256"
      >
        <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
      </svg>
      <svg
        onClick={() => handleActiveStar(3)}
        className={
          stars.includes(3)
            ? "h-8 w-6 shrink-0  fill-amber-400"
            : "h-8 w-6 shrink-0 fill-gray-300"
        }
        id="3"
        viewBox="0 0 256 256"
      >
        <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
      </svg>
      <svg
        onClick={() => handleActiveStar(4)}
        className={
          stars.includes(4)
            ? "h-8 w-6 shrink-0  fill-amber-400"
            : "h-8 w-6 shrink-0 fill-gray-300"
        }
        id="4"
        viewBox="0 0 256 256"
      >
        <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
      </svg>
      <svg
        onClick={() => handleActiveStar(5)}
        className={
          stars.includes(5)
            ? "h-8 w-6 shrink-0  fill-amber-400"
            : "h-8 w-6 shrink-0 fill-gray-300"
        }
        id="5"
        viewBox="0 0 256 256"
      >
        <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
      </svg>
    </div>
  );
};
