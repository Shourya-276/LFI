
import React from "react";
import Layout from "../components/Layout";
import { useLoan } from "../contexts/LoanContext";
import PersonalDetailsForm from "../components/forms/PersonalDetailsForm";
import IncomeDetailsForm from "../components/forms/IncomeDetailsForm";
import PropertyDetailsForm from "../components/forms/PropertyDetailsForm";
import FinalStepForm from "../components/forms/FinalStepForm";

const Profile = () => {
  const { application } = useLoan();
  const { formStep } = application;

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return <PersonalDetailsForm />;
      case 2:
        return <IncomeDetailsForm />;
      case 3:
        return <PropertyDetailsForm />;
      case 4:
        return <FinalStepForm />;
      default:
        return <PersonalDetailsForm />;
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return "Personal details";
      case 2:
        return "Income Details";
      case 3:
        return "Property details";
      case 4:
        return "Final Step";
      default:
        return "Personal details";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">Complete your profile to apply for loans</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center">
          <ol className="flex items-center w-full max-w-3xl">
            {[1, 2, 3].map((step) => {
              const isActive = formStep === step;
              const isCompleted = formStep > step;
              
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
                    <span className="text-xs lg:text-sm font-medium mt-2">{getStepTitle(step)}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          {renderFormStep()}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
