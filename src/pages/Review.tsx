
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Review = () => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleSubmitReview = () => {
    if (rating === 0) {
      toast.error("Please select a star rating");
      return;
    }
    
    if (review.trim() === "") {
      toast.error("Please enter your review");
      return;
    }
    
    // Here we would submit the review to backend
    toast.success("Thank you for your feedback!");
    setRating(0);
    setReview("");
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Rate Your Experience</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We value your feedback. Your review helps us improve our services.
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Leave a review for Loan for India</h2>
              
              {/* Star Rating */}
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Rate your overall experience</p>
                <div className="flex space-x-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-8 w-8 ${
                          star <= (hoverRating || rating)
                            ? "text-yellow-400 fill-yellow-400" 
                            : "text-gray-300 dark:text-gray-600"
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                        />
                      </svg>
                    </button>
                  ))}
                </div>
                <p className="text-sm font-medium">
                  {rating === 1 && "Poor"}
                  {rating === 2 && "Fair"}
                  {rating === 3 && "Good"}
                  {rating === 4 && "Very Good"}
                  {rating === 5 && "Excellent"}
                </p>
              </div>
            </div>
            
            {/* Review Text */}
            <div>
              <label htmlFor="review" className="block text-sm font-medium mb-2">
                Write your review
              </label>
              <Textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Tell us about your experience with Loan for India..."
                className="min-h-[120px]"
              />
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleSubmitReview}
                className="bg-brand-purple hover:bg-brand-purple/90"
              >
                Submit Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Review;
