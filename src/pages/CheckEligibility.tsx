
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useLoan } from "../contexts/LoanContext";
import { Button } from "@/components/ui/button";

const CheckEligibility = () => {
  const { application } = useLoan();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!application.personalDetails) {
      navigate("/profile");
      return;
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowConfetti(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [application.personalDetails, navigate]);

  const handleExploreOffers = () => {
    navigate("/explore-loan-offers");
  };

  const handleDownloadLetter = () => {
    // Simulate download
    alert("Sanction letter download started");
  };

  // Generate confetti elements
  const generateConfetti = () => {
    const confettiElements = [];
    const colors = ["#FF9A3C", "#4F4799", "#2AAB5B", "#FF6B6B", "#46B3E6"];
    
    for (let i = 0; i < 50; i++) {
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 3;
      const animationDuration = Math.random() * 3 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;
      
      confettiElements.push(
        <div
          key={i}
          className={`absolute w-${Math.round(size)} h-${Math.round(size)} rounded-sm`}
          style={{
            left: `${left}%`,
            top: "-20px",
            backgroundColor: color,
            animation: `confetti ${animationDuration}s ease-in-out ${animationDelay}s infinite`,
            opacity: showConfetti ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      );
    }
    
    return confettiElements;
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        {isLoading ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12 text-center">
            <div className="flex flex-col items-center justify-center h-64">
              <div className="w-16 h-16 border-4 border-t-brand-purple border-gray-200 rounded-full animate-spin"></div>
              <p className="mt-6 text-lg">Checking your eligibility...</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Please wait while we process your application</p>
            </div>
          </div>
        ) : (
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12 text-center overflow-hidden">
            {/* Confetti effect */}
            {showConfetti && generateConfetti()}
            
            <h1 className="text-3xl font-bold text-brand-purple mb-4">Congratulations</h1>
            <p className="text-xl mb-8">You are eligible for a loan</p>
            
            <div className="mb-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">You can avail a loan between</p>
              <p className="text-3xl font-bold text-brand-purple">{application.maxLoanAmount}</p>
            </div>
            
            <p className="mb-8 text-gray-600 dark:text-gray-400">Based on your profile. Check your Offers now!</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button onClick={handleExploreOffers} className="bg-brand-purple hover:bg-brand-purple/90 text-lg py-6 px-8 rounded-lg">
                Explore Loan Offers
              </Button>
              <Button onClick={handleDownloadLetter} variant="outline" className="text-lg py-6 px-8 rounded-lg">
                Download Sanction Letter
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CheckEligibility;
