import React from "react";
import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = 16 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          key={`full-${index}`}
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
      {hasHalfStar && (
        <StarHalf size={size} className="fill-yellow-400 text-yellow-400" />
      )}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={`empty-${index}`} size={size} className="text-gray-300" />
      ))}
    </div>
  );
};

export default StarRating;
