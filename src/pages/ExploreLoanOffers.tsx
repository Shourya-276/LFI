
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useLoan } from "../contexts/LoanContext";
import { Button } from "@/components/ui/button";

const ExploreLoanOffers = () => {
  const { application, selectOffer } = useLoan();
  const navigate = useNavigate();

  const offers = [
    {
      bank: "HDFC bank",
      logo: "https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/b7c94f9f-4543-4c2a-9afd-7538a85c1861/Common/logo.svg",
      maxAmount: "₹53 lakhs",
      tenure: "12 - 60 months",
      interestRate: "6.7% p.a"
    },
    {
      bank: "SBI bank",
      logo: "https://sbi.co.in/documents/77530/1970311/16092020_SBI_Logo.svg/e5e148e4-30c9-9fbd-2c0d-5b77677ca29f?t=1600248814370",
      maxAmount: "₹76 lakhs",
      tenure: "12 - 60 months",
      interestRate: "8.1% p.a"
    },
    {
      bank: "ICICI bank",
      logo: "https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/header-footer/logo.png",
      maxAmount: "₹65 lakhs",
      tenure: "12 - 60 months",
      interestRate: "6.9% p.a"
    },
    {
      bank: "Kotak bank",
      logo: "https://www.kotak.com/content/dam/Kotak/kotak-bank-logo.jpg",
      maxAmount: "₹90 lakhs",
      tenure: "12 - 60 months",
      interestRate: "7.4% p.a"
    },
  ];

  useEffect(() => {
    if (!application.isEligible) {
      navigate("/check-eligibility");
      return;
    }
  }, [application.isEligible, navigate]);

  const handleApply = (offer: any) => {
    selectOffer(offer);
    navigate("/apply-loan");
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Choose the Best Loan Offer for You!</h1>
          <p className="text-gray-600 dark:text-gray-400">Compare interest rates and loan Amount to find your perfect match</p>
        </div>

        <div className="space-y-6">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-transform hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-2">
                    <img 
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${offer.bank}`}
                      alt={offer.bank} 
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{offer.bank}</h3>
                </div>
                
                <div className="flex flex-wrap md:flex-nowrap gap-6">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Max. Loan Amt.</p>
                    <p className="font-semibold">{offer.maxAmount}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tenure</p>
                    <p className="font-semibold">{offer.tenure}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Int. Rate Starts From</p>
                    <p className="font-semibold">{offer.interestRate}</p>
                  </div>
                </div>
                
                <Button 
                  className="bg-brand-purple hover:bg-brand-purple/90 w-full md:w-auto"
                  onClick={() => handleApply(offer)}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}

          <div className="flex justify-center">
            <Button variant="outline">Show more offers</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExploreLoanOffers;
