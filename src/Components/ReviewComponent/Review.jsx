import React from "react";

function ReviewComponent() {
  const reviews = [
    {
      name: "Jatin Gautam",
      date: "Jan 5, 2025",
      rating: 5,
      review:
        "Amazing service! The cleaners were professional, friendly, and left my home spotless. Highly recommend their services to anyone who values cleanliness and attention to detail.",
      likes: 12,
    },
    {
      name: "Eimran Ahmad",
      date: "Dec 28, 2024",
      rating: 4,
      review:
        "Great service overall. The staff was punctual and efficient. There was a small area that was missed, but they came back and fixed it promptly.",
      likes: 8,
    },
    {
      name: "Sarita kapoor",
      date: "Nov 20, 2024",
      rating: 5,
      review:
        "Excellent service! The team exceeded my expectations. My carpets and furniture have never looked better. Will definitely book again.",
      likes: 20,
    },
    {
      name: "Prince Kumar",
      date: "Oct 15, 2024",
      rating: 3,
      review:
        "The service was decent, but it took longer than expected. The quality of cleaning was okay, but I feel it could have been better for the price.",
      likes: 4,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`${
          index < rating ? "text-yellow-500" : "text-gray-300"
        } text-xl`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="px-4 sm:px-6 py-8 sm:py-12 bg-gray-50">
      <div className="layout-content-container max-w-[90%] lg:max-w-[800px] mx-auto flex flex-col gap-6">
        {/* Overall Rating Section */}
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* Rating Summary */}
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <span className="text-4xl sm:text-5xl font-bold text-gray-800">4.5</span>
              <div className="text-yellow-500">{renderStars(5)}</div>
              <p className="text-sm text-gray-600">Based on 1,000+ reviews</p>
            </div>
            {/* Rating Breakdown */}
            <div className="flex-1 sm:ml-8">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-xs sm:text-sm text-gray-700">{stars}</span>
                  <div className="flex-1 h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${stars === 5 ? 80 : stars === 4 ? 20 : 10}%` }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {stars === 5 ? "80%" : stars === 4 ? "20%" : "10%"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-4">All Reviews</h3>
          <div className="flex flex-col gap-4 sm:gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 border-b last:border-0 flex flex-col gap-2 sm:gap-4"
              >
                {/* Reviewer Info */}
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                {/* Review Content */}
                <div className="flex flex-col gap-1 sm:gap-2">
                  <div>{renderStars(review.rating)}</div>
                  <p className="text-gray-700">{review.review}</p>
                </div>
                {/* Review Actions */}
                <div className="flex items-center gap-4 text-blue-500 text-sm cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span>👍</span>
                    <span>{review.likes}</span>
                  </div>
                  <span className="text-gray-500">Report</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewComponent;
