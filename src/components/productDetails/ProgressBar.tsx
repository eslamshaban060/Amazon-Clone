import React from "react";

interface ProgressBarProps {
  percentage: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color = "bg-orange-400",
}) => {
  return (
    <div className="flex-1 bg-gray-200 rounded-[4px] h-3 sm:h-4 mx-2">
      <div
        className={`h-3 sm:h-4 rounded-[4px] ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
