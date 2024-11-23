import React from "react";

const RatingBreakdown = ({ data }) => {
  return (
    <div className="w-full max-w-md mr-auto">
      {data.map(({ stars, percentage }) => (
        <div key={stars} className="flex items-center my-3 gap-x-1">
          {/* Star Rating Label */}
          <span className="font-normal text-[19px]">{stars}</span>
          {/* Progress Bar */}
          <div className="flex-1 h-3 bg-gray-200 rounded-full mx-2 relative">
            <div
              className="absolute top-0 left-0 h-3 bg-[#FFD700] rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          {/* Percentage */}
          <span className="font-light text-[18px]">{percentage}</span>
        </div>
      ))}
    </div>
  );
};

export default RatingBreakdown;
