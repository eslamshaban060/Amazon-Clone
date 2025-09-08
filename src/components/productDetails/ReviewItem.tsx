import React from "react";
import StarRating from "./StarRating";

export interface Review {
  id: number;
  reviewer: string;
  rating: number;
  title: string;
  reviewDate: string;
  location: string;
  size?: string;
  color?: string;
  verified: boolean;
  content: string;
  avatar: string;
}

interface ReviewItemProps {
  review: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
      {/* Reviewer Info */}
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3 overflow-hidden">
          {/* <img
            src={review.avatar}
            alt={review.reviewer}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              if (target.nextSibling instanceof HTMLElement) {
                target.nextSibling.style.display = "flex";
              }
            }}
          /> */}
          <div
            className="w-full h-full bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-medium"
            style={{ display: "none" }}
          >
            {review.reviewer.charAt(0)}
          </div>
        </div>
        <span className="font-medium text-sm  text-gray-800">
          {review.reviewer}
        </span>
      </div>

      {/* Rating and Title */}
      <div className="mb-2">
        <div className="flex items-center mb-1">
          <StarRating rating={review.rating} size={14} />
          <span className="ml-2 font-medium text-sm text-gray-800">
            {review.title}
          </span>
        </div>
      </div>

      {/* Review Details */}
      <div className="mb-2">
        <p className="text-xs text-gray-600">
          Reviewed in the {review.location} on {review.reviewDate}
        </p>
        {review.size && review.color && (
          <p className="text-xs text-gray-600">
            Size: {review.size} &nbsp;&nbsp; Color: {review.color} &nbsp;&nbsp;
            <span className="text-orange-600">Verified Purchase</span>
          </p>
        )}
        {!review.size && review.verified && (
          <p className="text-xs text-orange-600">Verified Purchase</p>
        )}
      </div>

      {/* Review Content */}
      <div className="mb-3">
        <p className="text-sm max-w-[900px] text-gray-700 leading-relaxed">
          {review.content}
        </p>
      </div>

      {/* Report Link */}
      <div>
        <button className="text-xs text-blue-600 hover:underline">
          Report
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
