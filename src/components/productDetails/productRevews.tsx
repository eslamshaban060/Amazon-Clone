import React from "react";
import StarRating from "./StarRating";
import ProgressBar from "./ProgressBar";
import ReviewItem, { Review } from "./ReviewItem";

interface ReviewsData {
  overallRating: number;
  totalReviews: number;
  starDistribution: Record<number, number>;
  reviews: Review[];
}

interface CustomerReviewsProps {
  reviewsData?: ReviewsData;
}

const mockReviewsData: ReviewsData = {
  overallRating: 4.1,
  totalReviews: 5,
  starDistribution: { 5: 76, 4: 0, 3: 0, 2: 6, 1: 0 },
  reviews: [
    {
      id: 1,
      reviewer: "Brooke",
      rating: 4,
      title: "Favorite dress",
      reviewDate: "6 August 2024",
      location: "United States",
      size: "M",
      color: "Black",
      verified: true,
      content:
        "I initially purchased this dress on sale. It turned out to be my favorite dress of this summer. It is extremely comfortable, pretty, and holds up very well. I accidentally lost it, I was really upset. My husband told me to buy it again, which I typically wouldn't do. It won't be sale and I am so fragile! The dress washes very well and I always get compliments when I wear it.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c88c?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      reviewer: "Eva S. D.",
      rating: 5,
      title: "Lindo!!",
      reviewDate: "11 August 2023",
      location: "Mexico",
      verified: true,
      content:
        "Bien hecho, bonita tela y bonita caída, fresco y casual. La marca es ideal!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 3,
      reviewer: "Ana Patricia Rodriguez",
      rating: 3,
      title: "COMODIDAD",
      reviewDate: "29 June 2023",
      location: "United States",
      verified: true,
      content:
        "ES LINDO COMODO Y LIGERO PARA CLIMA CALIDO, ES LA TELA ADECUADA",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 4,
      reviewer: "Ivellisse",
      rating: 4,
      title: "Excellent dress",
      reviewDate: "3 April 2019",
      location: "United States",
      verified: true,
      content:
        "Lovely dress... I'm 5'1\" with pear form body (149 pounds mostly in hips and booty) and it fits perfect...",
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&h=40&fit=crop&crop=face",
    },
  ],
};

const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  reviewsData = mockReviewsData,
}) => {
  return (
    <div className="bg-white p-4">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[60px]">
        {/* Left - Overall Rating */}
        <div className=" col-span-1">
          {/* Header */}
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Customer Reviews
          </h2>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <StarRating rating={reviewsData.overallRating} size={16} />
              <span className="ml-2 text-sm text-gray-700">
                {reviewsData.overallRating} out of {reviewsData.totalReviews}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {reviewsData.totalReviews} global rating
            </p>
          </div>

          {/* Rating Distribution */}
          <div className="mb-6">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center mb-2">
                <span className="text-sm text-blue-600 hover:underline cursor-pointer w-12">
                  {stars} star
                </span>
                <ProgressBar
                  percentage={reviewsData.starDistribution[stars]}
                  color={stars >= 4 ? "bg-orange-400" : "bg-gray-300"}
                />
                <span className="text-sm text-gray-600 w-8 text-right">
                  {reviewsData.starDistribution[stars]}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Reviews List */}
        <div className=" col-span-3">
          {reviewsData.reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
