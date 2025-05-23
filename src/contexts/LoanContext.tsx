
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

export interface PersonalDetails {
  name: string;
  middleName: string;
  lastName: string;
  email: string;
  mobile: string;
  aadhaarNumber: string;
  panCardNumber: string;
  gender: string;
  dateOfBirth: string;
  streetAddress: string;
  pinCode: string;
  country: string;
  state: string;
  district: string;
  city: string;
}

export interface EmployedIncomeDetails {
  employmentType: "salaried";
  employerType: string;
  grossSalary: string;
  netSalary: string;
  rentIncome: string;
  annualBonus: string;
  monthlyIncentive: string;
  pension: string;
  existingLoans: {
    type: string;
    emiRate: string;
    outstandingAmount: string;
    balanceTenure: string;
  }[];
}

export interface SelfEmployedIncomeDetails {
  employmentType: "self-employed";
  grossITRIncome: string;
  netITRIncome: string;
  rentIncome: string;
  gstReturn: string;
  existingLoans: {
    type: string;
    emiRate: string;
    outstandingAmount: string;
    balanceTenure: string;
  }[];
}

export type IncomeDetails = EmployedIncomeDetails | SelfEmployedIncomeDetails;

export interface PropertyDetails {
  isPropertySelected: boolean;
  propertyStatus?: string;
  propertyType?: string;
  country?: string;
  state?: string;
  district?: string;
  city?: string;
  streetAddress?: string;
  buildingName?: string;
  wing?: string;
  flatNumber?: string;
  floorNumber?: string;
  carpetArea?: string;
  agreementValue?: string;
  gstCharges?: string;
  otherCharges?: string;
  stampDuty?: string;
  registrationFees?: string;
}

export interface CoApplicantDetails {
  personalDetails: PersonalDetails;
  incomeDetails: IncomeDetails;
}

interface LoanApplication {
  personalDetails: PersonalDetails | null;
  incomeDetails: IncomeDetails | null;
  propertyDetails: PropertyDetails | null;
  coApplicant: CoApplicantDetails | null;
  loanType: string | null;
  formStep: number;
  isEligible: boolean;
  maxLoanAmount: string;
  selectedOffer: {
    bank: string;
    maxAmount: string;
    tenure: string;
    interestRate: string;
  } | null;
}

interface LoanContextType {
  application: LoanApplication;
  savePersonalDetails: (data: PersonalDetails) => void;
  saveIncomeDetails: (data: IncomeDetails) => void;
  savePropertyDetails: (data: PropertyDetails) => void;
  saveCoApplicantDetails: (data: CoApplicantDetails) => void;
  saveLoanType: (type: string) => void;
  checkEligibility: () => Promise<boolean>;
  resetApplication: () => void;
  clearCurrentStep: () => void;
  selectOffer: (offer: any) => void;
  goToPreviousStep: () => void;
}

const defaultLoanApplication: LoanApplication = {
  personalDetails: null,
  incomeDetails: null,
  propertyDetails: null,
  coApplicant: null,
  loanType: null,
  formStep: 1,
  isEligible: false,
  maxLoanAmount: "",
  selectedOffer: null,
};

const LoanContext = createContext<LoanContextType | undefined>(undefined);

export const useLoan = () => {
  const context = useContext(LoanContext);
  if (context === undefined) {
    throw new Error("useLoan must be used within a LoanProvider");
  }
  return context;
};

export const LoanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [application, setApplication] = useState<LoanApplication>(defaultLoanApplication);

  useEffect(() => {
    const storedApp = localStorage.getItem("loanApplication");
    if (storedApp) {
      setApplication(JSON.parse(storedApp));
    }
  }, []);

  const updateApplication = (newApplication: Partial<LoanApplication>) => {
    const updated = { ...application, ...newApplication };
    setApplication(updated);
    localStorage.setItem("loanApplication", JSON.stringify(updated));
  };

  const savePersonalDetails = (data: PersonalDetails) => {
    updateApplication({ personalDetails: data, formStep: 2 });
    toast.success("Personal details saved successfully!");
  };

  const saveIncomeDetails = (data: IncomeDetails) => {
    updateApplication({ incomeDetails: data, formStep: 3 });
    toast.success("Income details saved successfully!");
  };

  const savePropertyDetails = (data: PropertyDetails) => {
    updateApplication({ propertyDetails: data, formStep: 4 });
    toast.success("Property details saved successfully!");
  };

  const saveCoApplicantDetails = (data: CoApplicantDetails) => {
    updateApplication({ coApplicant: data });
    toast.success("Co-applicant details saved successfully!");
  };

  const saveLoanType = (type: string) => {
    updateApplication({ loanType: type });
  };

  const checkEligibility = async (): Promise<boolean> => {
    // Simulate API check
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo, always approve with a random loan amount
    const randomAmount = Math.floor(Math.random() * 40) + 50;
    updateApplication({ isEligible: true, maxLoanAmount: `₹${randomAmount} Lakh to ₹90 lakh` });
    return true;
  };

  const resetApplication = () => {
    setApplication(defaultLoanApplication);
    localStorage.removeItem("loanApplication");
  };

  const clearCurrentStep = () => {
    const currentStep = application.formStep;
    
    if (currentStep === 2) {
      updateApplication({ incomeDetails: null, formStep: 1 });
      toast.info("Income details cleared");
    } else if (currentStep === 3) {
      updateApplication({ propertyDetails: null, formStep: 2 });
      toast.info("Property details cleared");
    } else if (currentStep === 4) {
      updateApplication({ formStep: 3 });
      toast.info("Final step cleared");
    }
  };

  const goToPreviousStep = () => {
    const currentStep = application.formStep;
    if (currentStep > 1) {
      updateApplication({ formStep: currentStep - 1 });
    }
  };

  const selectOffer = (offer: any) => {
    updateApplication({ selectedOffer: offer });
    toast.success("Loan offer selected!");
  };

  const value: LoanContextType = {
    application,
    savePersonalDetails,
    saveIncomeDetails,
    savePropertyDetails,
    saveCoApplicantDetails,
    saveLoanType,
    checkEligibility,
    resetApplication,
    clearCurrentStep,
    selectOffer,
    goToPreviousStep
  };

  return <LoanContext.Provider value={value}>{children}</LoanContext.Provider>;
};
