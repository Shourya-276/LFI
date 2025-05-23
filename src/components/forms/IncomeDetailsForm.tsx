import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoan } from "../../contexts/LoanContext";
import { employmentTypeOptions, employerTypeOptions, loanTypeOptions } from "../../utils/formOptions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

// Import types from LoanContext
import type { EmployedIncomeDetails, SelfEmployedIncomeDetails } from "../../contexts/LoanContext";

// Define the schema for employed income details
const employedIncomeSchema = z.object({
  employmentType: z.literal("salaried"),
  employerType: z.string().min(1, "Please select employer type"),
  grossSalary: z.string().min(1, "Gross salary is required"),
  netSalary: z.string().min(1, "Net salary is required"),
  rentIncome: z.string().optional(),
  annualBonus: z.string().optional(),
  pension: z.string().optional(),
  monthlyIncentive: z.string().optional(),
  existingLoans: z.array(
    z.object({
      type: z.string().optional(),
      emiRate: z.string().optional(),
      outstandingAmount: z.string().optional(),
      balanceTenure: z.string().optional(),
    })
  ).optional(),
});

// Define the schema for self-employed income details
const selfEmployedIncomeSchema = z.object({
  employmentType: z.literal("self-employed"),
  grossITRIncome: z.string().min(1, "Gross ITR income is required"),
  netITRIncome: z.string().min(1, "Net ITR income is required"),
  rentIncome: z.string().optional(),
  gstReturn: z.string().optional(),
  existingLoans: z.array(
    z.object({
      type: z.string().optional(),
      emiRate: z.string().optional(),
      outstandingAmount: z.string().optional(),
      balanceTenure: z.string().optional(),
    })
  ).optional(),
});

// Create a discriminated union type
const incomeDetailsSchema = z.discriminatedUnion("employmentType", [
  employedIncomeSchema,
  selfEmployedIncomeSchema,
]);

type IncomeDetailsFormValues = z.infer<typeof incomeDetailsSchema>;

const IncomeDetailsForm = () => {
  const { application, saveIncomeDetails, clearCurrentStep, goToPreviousStep } = useLoan();
  const [selectedEmploymentType, setSelectedEmploymentType] = useState<string | null>(
    application.incomeDetails?.employmentType || null
  );

  const defaultValues: any = {
    employmentType: application.incomeDetails?.employmentType || "",
    employerType: application.incomeDetails?.employmentType === "salaried" 
      ? (application.incomeDetails as any).employerType || "" 
      : "",
    grossSalary: application.incomeDetails?.employmentType === "salaried" 
      ? (application.incomeDetails as any).grossSalary || "" 
      : "",
    netSalary: application.incomeDetails?.employmentType === "salaried" 
      ? (application.incomeDetails as any).netSalary || "" 
      : "",
    rentIncome: application.incomeDetails?.employmentType === "salaried" 
      ? (application.incomeDetails as any).rentIncome || "" 
      : (application.incomeDetails?.employmentType === "self-employed"
        ? (application.incomeDetails as any).rentIncome || ""
        : ""),
    annualBonus: application.incomeDetails?.employmentType === "salaried" 
      ? (application.incomeDetails as any).annualBonus || "" 
      : "",
    pension: application.incomeDetails?.employmentType === "salaried" 
      ? (application.incomeDetails as any).pension || "" 
      : "",
    monthlyIncentive: application.incomeDetails?.employmentType === "salaried" 
      ? (application.incomeDetails as any).monthlyIncentive || "" 
      : "",
    grossITRIncome: application.incomeDetails?.employmentType === "self-employed" 
      ? (application.incomeDetails as any).grossITRIncome || "" 
      : "",
    netITRIncome: application.incomeDetails?.employmentType === "self-employed" 
      ? (application.incomeDetails as any).netITRIncome || "" 
      : "",
    gstReturn: application.incomeDetails?.employmentType === "self-employed" 
      ? (application.incomeDetails as any).gstReturn || "" 
      : "",
    existingLoans: application.incomeDetails?.existingLoans || [
      { type: "", emiRate: "", outstandingAmount: "", balanceTenure: "" },
      { type: "", emiRate: "", outstandingAmount: "", balanceTenure: "" },
    ],
  };

  const form = useForm<IncomeDetailsFormValues>({
    resolver: zodResolver(incomeDetailsSchema),
    defaultValues,
  });

  useEffect(() => {
    if (selectedEmploymentType) {
      form.setValue("employmentType", selectedEmploymentType as any);
    }
  }, [selectedEmploymentType, form]);

  const onSubmit = (data: IncomeDetailsFormValues) => {
    // Ensure all required fields are properly typed when submitting
    if (data.employmentType === "salaried") {
      // Fix: Ensure existingLoans has all required fields set to non-optional values
      const processedExistingLoans = (data.existingLoans || []).map(loan => ({
        type: loan.type || "",
        emiRate: loan.emiRate || "",
        outstandingAmount: loan.outstandingAmount || "",
        balanceTenure: loan.balanceTenure || ""
      }));

      const salariedIncomeDetails: EmployedIncomeDetails = {
        employmentType: "salaried",
        employerType: data.employerType || "",
        grossSalary: data.grossSalary || "",
        netSalary: data.netSalary || "",
        rentIncome: data.rentIncome || "",
        annualBonus: data.annualBonus || "",
        pension: data.pension || "",
        monthlyIncentive: data.monthlyIncentive || "",
        existingLoans: processedExistingLoans,
      };
      saveIncomeDetails(salariedIncomeDetails);
    } else if (data.employmentType === "self-employed") {
      // Fix: Ensure existingLoans has all required fields set to non-optional values
      const processedExistingLoans = (data.existingLoans || []).map(loan => ({
        type: loan.type || "",
        emiRate: loan.emiRate || "",
        outstandingAmount: loan.outstandingAmount || "",
        balanceTenure: loan.balanceTenure || ""
      }));

      const selfEmployedIncomeDetails: SelfEmployedIncomeDetails = {
        employmentType: "self-employed",
        grossITRIncome: data.grossITRIncome || "",
        netITRIncome: data.netITRIncome || "",
        rentIncome: data.rentIncome || "",
        gstReturn: data.gstReturn || "",
        existingLoans: processedExistingLoans,
      };
      saveIncomeDetails(selfEmployedIncomeDetails);
    }
  };

  // Add the handleClear function that was missing
  const handleClear = () => {
    if (form.formState.isDirty) {
      form.reset();
    } else {
      goToPreviousStep();
    }
  };

  const handleEmploymentTypeChange = (value: string) => {
    setSelectedEmploymentType(value);
    form.reset({
      employmentType: value as any,
      // Reset other fields to empty
    });
  };

  // Render employment type selection if no type is selected
  if (!selectedEmploymentType) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-6">Income Details</h2>
        
        <div className="space-y-4">
          <FormLabel>Select Your Profile</FormLabel>
          <Select onValueChange={handleEmploymentTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Your Profile" />
            </SelectTrigger>
            <SelectContent>
              {employmentTypeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button 
            type="button" 
            variant="outline" 
            onClick={goToPreviousStep}
          >
            Clear
          </Button>
          <Button 
            type="button" 
            disabled={!selectedEmploymentType}
            onClick={() => {
              if (!selectedEmploymentType) {
                toast.error("Please select your profile type");
              }
            }}
          >
            Save & Next
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Income Details</h2>
      {selectedEmploymentType === "self-employed" && (
        <div className="mb-4 font-medium">Self-Employed</div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedEmploymentType === "salaried" && (
              <>
                {/* Type of Employer */}
                <FormField
                  control={form.control}
                  name="employerType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Employer</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Employer Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {employerTypeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Monthly Gross Salary */}
                <FormField
                  control={form.control}
                  name="grossSalary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ Monthly Gross Salary</FormLabel>
                      <FormControl>
                        <Input placeholder="Monthly Gross Salary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Monthly Net Salary */}
                <FormField
                  control={form.control}
                  name="netSalary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ Monthly Net Salary</FormLabel>
                      <FormControl>
                        <Input placeholder="Monthly Net Salary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Rent Income */}
                <FormField
                  control={form.control}
                  name="rentIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ Rent Income (If Applicable)</FormLabel>
                      <FormControl>
                        <Input placeholder="Rent Income" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Annual Bonus */}
                <FormField
                  control={form.control}
                  name="annualBonus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ Annual Bonus</FormLabel>
                      <FormControl>
                        <Input placeholder="Annual Bonus" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Pension */}
                <FormField
                  control={form.control}
                  name="pension"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ Pension (If Applicable)</FormLabel>
                      <FormControl>
                        <Input placeholder="Pension" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Monthly Incentive */}
                <FormField
                  control={form.control}
                  name="monthlyIncentive"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ Average Monthly Incentive</FormLabel>
                      <FormControl>
                        <Input placeholder="Average Monthly Incentive" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {selectedEmploymentType === "self-employed" && (
              <>
                {/* 3 Year Average Gross ITR Income */}
                <FormField
                  control={form.control}
                  name="grossITRIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ 3 Year Average Gross ITR Income</FormLabel>
                      <FormControl>
                        <Input placeholder="3 Year Average Gross ITR Income" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 3 Year Avg. Net ITR Income */}
                <FormField
                  control={form.control}
                  name="netITRIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ 3 Year Avg. Net ITR Income</FormLabel>
                      <FormControl>
                        <Input placeholder="3 Year Avg. Net ITR Income" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Rent Income */}
                <FormField
                  control={form.control}
                  name="rentIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ Rent Income (If Applicable)</FormLabel>
                      <FormControl>
                        <Input placeholder="Rent Income" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 3 Year Avg. GST Return */}
                <FormField
                  control={form.control}
                  name="gstReturn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>₹ 3 Year Avg. GST Return</FormLabel>
                      <FormControl>
                        <Input placeholder="3 Year Avg. GST Return" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Existing Loans Select */}
            <div className="col-span-full">
              <FormLabel>Any Existing Loan</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any Existing Loan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Existing Loans Table */}
            <div className="col-span-full">
              <div className="border rounded-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Type Of Existing Loan
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Monthly EMI Rate
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Out Standing amount
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        balance tenure
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {[0, 1].map((index) => (
                      <tr key={index}>
                        <td className="px-4 py-3">
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Loan" />
                            </SelectTrigger>
                            <SelectContent>
                              {loanTypeOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="px-4 py-3">
                          <Input placeholder="0" />
                        </td>
                        <td className="px-4 py-3">
                          <Input placeholder="0" />
                        </td>
                        <td className="px-4 py-3">
                          <Input placeholder="0" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button type="button" variant="outline" onClick={handleClear}>
              Clear
            </Button>
            <Button type="submit">Save & Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default IncomeDetailsForm;
