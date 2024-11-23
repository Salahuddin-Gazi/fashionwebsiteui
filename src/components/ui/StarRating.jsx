import React from "react";

const RatingStars = ({ totalStars = 5, rating = 0, onRate, size = '5' }) => {
  const handleRating = (index) => {
    const newRating = index + 1;
    if (onRate) onRate(newRating); // Trigger callback if provided
  };

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, index) => {
        const isPartial = rating > index && rating < index + 1;
        return (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => handleRating(index)}
          >
            {/* Empty Star */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#E5E7EB" // Gray for unfilled part
              // className={`w-${size} h-${size}`}
              style={{ width: `calc(${parseInt(size)}*.25rem)`, height: `calc(${parseInt(size)}*.25rem)` }}
            >
              <path d="M12 .587l3.668 7.57 8.332 1.21-6.084 5.93 1.436 8.315L12 18.895l-7.352 3.858 1.436-8.315L0 9.367l8.332-1.21L12 .587z" />
            </svg>

            {/* Filled Star */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{
                width: isPartial ? `${(rating - index) * 100}%` : "100%",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFD700" // Gold for filled part
                // className={`w-${size} h-${size}`}
                style={{ width: `calc(${parseInt(size)}*.25rem)`, height: `calc(${parseInt(size)}*.25rem)` }}
              >
                <path d="M12 .587l3.668 7.57 8.332 1.21-6.084 5.93 1.436 8.315L12 18.895l-7.352 3.858 1.436-8.315L0 9.367l8.332-1.21L12 .587z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingStars;
