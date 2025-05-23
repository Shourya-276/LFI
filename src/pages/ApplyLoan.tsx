
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useLoan } from "../contexts/LoanContext";
import { Button } from "@/components/ui/button";

const ApplyLoan = () => {
  const { application } = useLoan();
  const navigate = useNavigate();

  useEffect(() => {
    if (!application.isEligible) {
      navigate("/check-eligibility");
    }
  }, [application.isEligible, navigate]);

  const handleApplyForLoan = () => {
    navigate("/document");
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Overview</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Required Documents & Loan Charges</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Document Checklist */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-brand-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">Document Checklist</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Identity Proof</p>
                <p className="font-medium">Aadhaar Card / PAN Card / Passport</p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400">Address Proof</p>
                <p className="font-medium">Utility Bill / Rent Agreement / Passport</p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400">Income Proof</p>
                <p className="font-medium">Salary Slips / Bank Statements / ITR</p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400">Property Papers</p>
                <p className="font-medium">Sale Deed / Title Documents</p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400">Business Proof (For Self-Employed)</p>
                <p className="font-medium">GST Registration</p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400">Additional Documents (If Required)</p>
                <p className="font-medium">Co-applicant KYC</p>
              </div>
            </div>
          </div>
          
          {/* Charges & Fees */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-brand-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">Charges & Fees</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <p>Processing Fees</p>
                <p className="font-medium">₹1,200</p>
              </div>
              
              <div className="flex justify-between">
                <p>Legal Charges</p>
                <p className="font-medium">₹900</p>
              </div>
              
              <div className="flex justify-between">
                <p>Technical Charges</p>
                <p className="font-medium">₹200</p>
              </div>
              
              <div className="flex justify-between">
                <p>Stamp Duty</p>
                <p className="font-medium">₹1,200</p>
              </div>
              
              <div className="flex justify-between">
                <p>NOI (Noting of Interest)</p>
                <p className="font-medium">₹1,200</p>
              </div>
              
              <div className="flex justify-between">
                <p>CERSAI Tax</p>
                <p className="font-medium">₹1,900</p>
              </div>
              
              <div className="flex justify-between">
                <p>Stamp Paper</p>
                <p className="font-medium">₹200</p>
              </div>
              
              <div className="flex justify-between">
                <p>Other Charges</p>
                <p className="font-medium">₹800</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">₹7,200</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            onClick={handleApplyForLoan}
            className="bg-brand-purple hover:bg-brand-purple/90 text-lg py-6 px-8 rounded-lg"
          >
            Apply for Loan
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyLoan;
