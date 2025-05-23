
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoan } from "../../contexts/LoanContext";
import { finalLoanTypeOptions } from "../../utils/formOptions";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import CoApplicantForm from "./CoApplicantForm";

const FinalStepForm = () => {
  const navigate = useNavigate();
  const { application, saveLoanType, checkEligibility, clearCurrentStep } = useLoan();
  const [loanType, setLoanType] = useState<string>(application.loanType || "");
  const [showCoApplicant, setShowCoApplicant] = useState<boolean>(false);

  const handleLoanTypeChange = (value: string) => {
    setLoanType(value);
    saveLoanType(value);
  };

  const handleCheckEligibility = async () => {
    if (!loanType) {
      alert("Please select a loan type");
      return;
    }
    
    const isEligible = await checkEligibility();
    if (isEligible) {
      navigate("/check-eligibility");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Final Step</h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="loanType" className="block text-sm font-medium">
            Select Loan Type
          </label>
          <Select value={loanType} onValueChange={handleLoanTypeChange}>
            <SelectTrigger id="loanType">
              <SelectValue placeholder="Select Loan Type" />
            </SelectTrigger>
            <SelectContent>
              {finalLoanTypeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setShowCoApplicant(!showCoApplicant)}
            className="w-full flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            Add a co-applicant
          </Button>
          <p className="text-xs text-gray-500 dark:text-gray-400">Optional</p>
        </div>

        {showCoApplicant && (
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <CoApplicantForm onClose={() => setShowCoApplicant(false)} />
          </div>
        )}

        <div className="flex justify-end gap-4 mt-6">
          <Button type="button" variant="outline" onClick={clearCurrentStep}>
            Clear
          </Button>
          <Button type="button" onClick={handleCheckEligibility}>
            Check Eligibility
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalStepForm;
