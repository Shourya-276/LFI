
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PersonalDetailsForm from "../components/forms/PersonalDetailsForm";
import IncomeDetailsForm from "../components/forms/IncomeDetailsForm";
import PropertyDetailsForm from "../components/forms/PropertyDetailsForm";

const SalesManagerCheckEligibility = () => {
  const [showForms, setShowForms] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const eligibilityHistory = [
    { customerName: "Rajesh Sharma", status: "Eligible", maxLoan: "₹5,00,000", action: "Apply loan" },
    { customerName: "Priya Mehta", status: "Pending", maxLoan: "-", action: "Continue" },
    { customerName: "Priya Mehta", status: "Pending", maxLoan: "-", action: "Continue" },
    { customerName: "Anil Gupta", status: "Eligible", maxLoan: "₹4,00,000", action: "Apply loan" },
    { customerName: "Priya Mehta", status: "Pending", maxLoan: "-", action: "Continue" },
    { customerName: "Anil Gupta", status: "Eligible", maxLoan: "₹4,00,000", action: "Apply loan" },
    { customerName: "Neha Verma", status: "Not Eligible", maxLoan: "-", action: "Re-check" }
  ];

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsForm />;
      case 2:
        return <IncomeDetailsForm />;
      case 3:
        return <PropertyDetailsForm />;
      default:
        return <PersonalDetailsForm />;
    }
  };

  if (showForms) {
    return (
      <Layout>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => setShowForms(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </Button>
            <h1 className="text-2xl font-bold">Check Customer Eligibility</h1>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center">
            <ol className="flex items-center w-full max-w-3xl">
              {[1, 2, 3].map((step) => {
                const isActive = currentStep === step;
                const isCompleted = currentStep > step;
                
                return (
                  <li 
                    key={step} 
                    className={`flex w-full items-center ${step !== 3 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 dark:after:border-gray-700" : ""}`}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        isCompleted ? "bg-brand-purple" : isActive ? "bg-brand-purple" : "bg-gray-200 dark:bg-gray-700"
                      } lg:h-12 lg:w-12`}>
                        <span className={`text-sm lg:text-base font-medium ${
                          isCompleted || isActive ? "text-white" : "text-gray-500 dark:text-gray-300"
                        }`}>
                          {step}
                        </span>
                      </div>
                      <span className="text-xs lg:text-sm font-medium mt-2">
                        {step === 1 ? "Personal Details" : step === 2 ? "Income Details" : "Property Details"}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Form Container */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            {renderForm()}
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              <Button 
                onClick={() => {
                  if (currentStep < 3) {
                    setCurrentStep(currentStep + 1);
                  } else {
                    // Handle form completion
                    setShowForms(false);
                  }
                }}
                className="bg-brand-purple hover:bg-brand-purple/90"
              >
                {currentStep === 3 ? "Check Eligibility" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Check Eligibility</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Want to Apply for a New Loan?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Check your eligibility instantly.</p>
          
          <Button 
            onClick={() => setShowForms(true)}
            className="bg-brand-purple hover:bg-brand-purple/90 text-lg py-6 px-8"
          >
            Check Eligibility Now
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Eligibility History</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Review past eligibility checks and update your details.</p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Customer Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Max. Loan ₹</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {eligibilityHistory.map((record, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{record.customerName}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        record.status === 'Eligible' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        record.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {record.status === 'Eligible' && '✅'} 
                        {record.status === 'Pending' && '⏳'} 
                        {record.status === 'Not Eligible' && '❌'} 
                        {record.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{record.maxLoan}</td>
                    <td className="px-6 py-4 text-sm">
                      <Button 
                        size="sm" 
                        className={record.status === 'Eligible' ? "bg-brand-purple hover:bg-brand-purple/90" : "bg-brand-purple hover:bg-brand-purple/90"}
                      >
                        {record.action}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SalesManagerCheckEligibility;
